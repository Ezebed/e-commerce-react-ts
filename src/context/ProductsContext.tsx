import { createContext } from "react";
import { Categories, type Products } from "@/utils/types/ProductTypes.d";

export type productsContextResponse = {
  products: Products | undefined;
  categories: Categories | undefined;
  category: number;
  searchProduct: (productTitle: string) => void;
  changeCategory: (categoryId: number) => void;
};

export const ProductsContext = createContext<
  productsContextResponse | undefined
>(undefined);
