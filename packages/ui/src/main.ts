import "./style.css";
import { DekuRules } from "sifaru_yusin";

const MAX_DEKUGA_LENGTH = 20;

const state = {
  dEku_rules: new DekuRules(),
};

const getElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Missing element: ${id}`);
  }
  return element as T;
};

const withCapturedConsoleError = (fn: () => void): void => {
  const original = console.error;
  const reportedErrors: unknown[] = [];
  console.error = (error?: unknown) => {
    reportedErrors.push(error);
  };
  try {
    fn();
  } finally {
    console.error = original;
  }
  if (reportedErrors.length > 0) {
    throw new Error(reportedErrors.map((error) => String(error)).join("\n"));
  }
};

const clear_error = (): void => {
  window.requestAnimationFrame(() => {
    getElement<HTMLDivElement>("dEku_rules__error").textContent = "";
  });
};

const draw_error = (error: unknown): void => {
  window.requestAnimationFrame(() => {
    getElement<HTMLDivElement>("dEku_rules__error").textContent = String(error);
  });
};

const append_new_deku = (
  listElement: HTMLUListElement,
  newItemElement: HTMLLIElement,
): void => {
  while (listElement.childElementCount >= MAX_DEKUGA_LENGTH) {
    listElement.removeChild(listElement.lastElementChild as Node);
  }
  if (listElement.hasChildNodes()) {
    listElement.insertBefore(newItemElement, listElement.firstChild);
  } else {
    listElement.appendChild(newItemElement);
  }
};

const update_rules_from_textarea = (): void => {
  const textarea = getElement<HTMLTextAreaElement>("dEku_rules__textarea");
  const dekuRules = state.dEku_rules;
  if (dekuRules.rules !== textarea.value) {
    try {
      withCapturedConsoleError(() => {
        dekuRules.set_rules(textarea.value);
      });
      clear_error();
    } catch (error) {
      draw_error(error);
    }
  }
};

const on_change_deku_rules_textarea = (): void => {
  update_rules_from_textarea();
};

const on_click_kekure_deku = (): void => {
  update_rules_from_textarea();
  const newItemElement = document.createElement("li");
  newItemElement.textContent = state.dEku_rules.kekure();
  const listElement = getElement<HTMLUListElement>("dEkuga");
  window.requestAnimationFrame(() => {
    append_new_deku(listElement, newItemElement);
  });
};

const on_dom_content_loaded = (): void => {
  const rulesForm = getElement<HTMLFormElement>("dEku_rules");
  rulesForm.addEventListener("reset", on_change_deku_rules_textarea);

  const dekuRulesTextarea = getElement<HTMLTextAreaElement>(
    "dEku_rules__textarea",
  );
  dekuRulesTextarea.defaultValue = state.dEku_rules.rules;
  dekuRulesTextarea.addEventListener("keyup", on_change_deku_rules_textarea);

  getElement<HTMLButtonElement>("kekurE_dEku").addEventListener(
    "click",
    on_click_kekure_deku,
  );

  window.setTimeout(() => {
    for (let i = 0; i < MAX_DEKUGA_LENGTH; i += 1) {
      on_click_kekure_deku();
    }
  }, 0);
};

window.addEventListener("DOMContentLoaded", on_dom_content_loaded);
