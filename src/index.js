import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import bootstrap from "bootstrap";
import Weather from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1 className="">Weather app</h1>
    <Weather />
  </StrictMode>
);
