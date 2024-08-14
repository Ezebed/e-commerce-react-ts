import { createContext } from "react";
import { type Products } from "@/utils/types/ProductTypes.d";

export const ProductsContext = createContext<Products | undefined>(undefined);
