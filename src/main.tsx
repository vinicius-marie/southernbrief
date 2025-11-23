import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const redirectPath = sessionStorage.getItem("sb-redirect");
if (redirectPath) {
  sessionStorage.removeItem("sb-redirect");
  try {
    const targetUrl = new URL(redirectPath);
    const newPath =
      targetUrl.pathname + targetUrl.search + targetUrl.hash || "/";
    window.history.replaceState(null, "", newPath);
  } catch {
    // ignore malformed redirect values
  }
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>,
);
