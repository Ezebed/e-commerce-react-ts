import { Products } from "@/utils/types/ProductTypes";
import { createContext } from "react";

export type shopCartContextResponse = {
  shopCart: Products;
};

export const ShopCartContext = createContext<
  shopCartContextResponse | undefined
>(undefined);
