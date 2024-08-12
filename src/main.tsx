import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hola" element={<p>hola mundo</p>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
