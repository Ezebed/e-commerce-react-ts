import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Prueba from "./Pages/prueba.tsx";
import theme from "@/utils/chakraTheme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hola" element={<Prueba />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
