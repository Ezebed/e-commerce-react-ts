import { createContext } from "react";
import { Categories, type Products } from "@/utils/types/ProductTypes.d";

export type productsContextResponse = {
  products: Products | undefined;
  categories: Categories | undefined;
  searchProduct: (productTitle: string) => void;
};

export const ProductsContext = createContext<
  productsContextResponse | undefined
>(undefined);
