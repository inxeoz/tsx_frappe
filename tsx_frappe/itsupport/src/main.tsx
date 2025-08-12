import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryProvider } from "./providers/QueryProvider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <div className="dark">
        <App />
        <Toaster />
      </div>
    </QueryProvider>
  </React.StrictMode>
);
