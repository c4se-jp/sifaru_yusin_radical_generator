#!/usr/bin/env python3
"""Tasks."""
from contextlib import contextmanager
from shlex import quote
import os
import os.path
import platform
import re
import shutil
import subprocess
import sys
import time

tasks = {}


def cwd_for_docker_volume() -> str:
    """Get current directory for Docker volume. This works both on macOS & WSL."""
    cwd = os.getcwd()
    if cwd.startswith("/mnt/c"):
        cwd = cwd[4:]
    return cwd


@contextmanager
def docker():
    """Run command in Docker."""
    if within_docker():
        yield run
    else:
        yield run_in_docker


def docker_exe() -> str:
    """Get a Docker executable name."""
    if within_wsl():
        return "docker.exe"
    else:
        return "docker"


def kubectl_exe() -> str:
    """Get a kubectl executable name."""
    if within_wsl():
        return "kubectl.exe"
    else:
        return "kubectl"


def run(command: str, capture_output=False, text=None) -> subprocess.CompletedProcess:
    """Run command."""
    command = command.strip()
    print("+ ", command)
    env = os.environ.copy()
    env["COMPOSE_DOCKER_CLI_BUILD"] = "1"
    env["DOCKER_BUILDKIT"] = "1"
    return subprocess.run(
        command,
        env=env,
        capture_output=capture_output,
        check=True,
        shell=True,
        text=text,
    )


def run_in_docker(
    command: str, docker_options="", capture_output=False, text=None
) -> subprocess.CompletedProcess:
    """Run command in Docker."""
    command = command.strip()
    print("+ ", command)
    env = os.environ.copy()
    env["PWD"] = cwd_for_docker_volume()
    return subprocess.run(
        f"{docker_exe()} compose {docker_options} run --rm web {command}",
        env=env,
        capture_output=capture_output,
        check=True,
        shell=True,
        text=text,
    )


def task(function):
    """Define a task."""
    if function.__doc__:
        tasks[function.__name__] = function.__doc__

    def wrapper():
        function()

    return wrapper


def within_docker() -> bool:
    """Detect I'm in a Docker or not."""
    return os.path.exists("/.dockerenv") or os.getenv("CI") == "1"


def within_wsl() -> bool:
    """Detect I'm in a WSL or not."""
    uname = platform.uname()
    return uname[0] == "Linux" and ("Microsoft" in uname[2]) or ("microsoft" in uname[2])


@task
def build():
    """Build stuffs."""
    if not within_docker():
        run(f"{docker_exe()} compose pull web-src")
        run(
            rf"""
            {docker_exe()} compose build \
              --build-arg BUILDKIT_INLINE_CACHE=1 \
              --force-rm \
              --pull
            """
        )
        run(
            f"{docker_exe()} compose run --rm web-src /docker-entrypoint.d/precopy_appsync.sh"
        )
    with docker() as _run:
        _run("sh -ex -c {:s}".format(quote(r"cd sifaru_yusin && java -cp /root/antlr-4.jar:$CLASSPATH org.antlr.v4.Tool -Dlanguage=JavaScript DekuRule.g4")))
        _run("pipenv run npx webpack --config webpack.prod.js")


@task
def clean():
    """Clean built files."""
    if not within_docker():
        run(f"{docker_exe()} compose down -v")
        shutil.rmtree("node_modules", ignore_errors=True)
        run("find . -name '.unison.*' -exec rm -vrf {} +;")
    shutil.rmtree("__target__", ignore_errors=True)
    run("rm -fv docs/main.js* sifaru_yusin/DekuRule*.js sifaru_yusin/*.interp sifaru_yusin/*.tokens")


@task
def format():
    """Format code."""
    run(r"ag -l '\r' | xargs -t -I{} sed -i -e 's/\r//' {}")
    with docker() as _run:
        _run("pipenv run black main.py sifaru_yusin")
        _run("npx prettier --write *.js")
        _run("npx prettier --write *.json")
        _run("npx prettier --write *.md")
        _run("npx prettier --write docs/*.css")
        _run("npx prettier --write docs/*.html")
        _run(
            "sh -eux -c {:s}".format(
                quote(
                    r"ag --hidden -g \.ya?ml$ | xargs -t npx prettier --parser yaml --write"
                )
            )
        )


@task
def resync():
    """Re-sync the Docker volume."""
    if within_docker():
        return
    run(f"{docker_exe()} compose stop web-src")
    run("find . -name '.unison.*' -exec rm -vrf {} +;")
    run(
        f"{docker_exe()} compose run --rm web-src /docker-entrypoint.d/precopy_appsync.sh"
    )
    run(f"{docker_exe()} compose up -d web-src")


@task
def sh():
    """Run shell in a Docker container."""
    with docker() as _run:
        _run("bash")


@task
def start():
    """Start a development server."""
    run("python -m http.server --directory docs 5000")

@task
def test():
    """Test."""
    if not within_docker():
        run(
            fr"""
           {docker_exe()} run -i \
             -v {cwd_for_docker_volume()}:/mnt \
             --rm \
             hadolint/hadolint \
             hadolint \
               --config /mnt/.hadolint.yaml \
               /mnt/Dockerfile
           """
        )
    with docker() as _run:
        _run("pipenv check")
        _run("npm audit")
        # NOTE: Broken on GitHub Actions with unknown reasons.
        # _run(
        #     "sh -eux -c {:s}".format(
        #         quote(
        #             r"ag --hidden -g \.ya?ml$ | xargs -t pipenv run yamllint"
        #         )
        #     )
        # )
        _run("pipenv run black --check main.py sifaru_yusin")
        _run("pipenv run flake8 main.py sifaru_yusin")
        # _run("pipenv run mypy main.py")


@task
def upgrade():
    """Upgrade dependencies."""
    with docker() as _run:
        _run("npx npm-check-updates -u")
        _run("npm install")
        _run("npm audit fix")
        _run("npm fund")
        _run("pipenv update -d --pre")


if __name__ == "__main__":
    if len(sys.argv) == 1 or sys.argv[1] == "help":
        for task_name, describe in tasks.items():
            print(f"{task_name.ljust(16)}\t{describe}")
        exit(0)
    for task_name in sys.argv[1:]:
        locals()[task_name]()
