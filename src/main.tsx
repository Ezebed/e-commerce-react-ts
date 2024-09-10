import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import Prueba from "./Pages/prueba.tsx";
import theme from "@/utils/chakraTheme.ts";
import "@/assets/css/main.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const LazyProducts = lazy(() => import("@/Pages/Products.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<LazyProducts />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
