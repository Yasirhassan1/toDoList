import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom"; // Import HashRouter and Routes

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/toDoList/">
    <Routes>
    <App />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
