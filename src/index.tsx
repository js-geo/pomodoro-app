import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

function isHTMLElement(element: HTMLElement | null): element is HTMLElement {
  return element instanceof HTMLElement;
}

const rootElement = document.getElementById("root");

if (!isHTMLElement(rootElement)) {
  throw new Error(`´There is no root element! Value was ${rootElement}`);
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
