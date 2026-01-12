#!/bin/sh -eux
# shellcheck shell=dash
if [ ! -d node_modules ] ; then
  rsync -au /tmp/node_modules .
fi
set +u
if [ -z "$1" ] ; then
  set -u
  python -m http.server --directory docs 5000
else
  set -u
  # shellcheck disable=SC2068
  exec "$@"
fi
