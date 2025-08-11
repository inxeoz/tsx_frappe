import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

let root: ReactDOM.Root | null = null;

export function mountReact(target: HTMLElement) {
  if (!root) {
    root = createRoot(target);
  }
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
