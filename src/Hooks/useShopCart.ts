import { useState } from "react";
import { Products } from "@/utils/types/ProductTypes";

export type ShopCartResponse = {
  shopCart: Products;
};

export default function useShopCart(): ShopCartResponse {
  const [shopCart, setShopCart] = useState<Products>([]);

  const getCartItemsFromStorage = () => {
    let shopCartItems = window.localStorage.getItem("shopCart") ?? "[]";

    return JSON.parse(shopCartItems);
  };

  const setCartItemToStorage = (shopCartItems: Products) => {
    window.localStorage.setItem("shopCart", JSON.stringify(shopCartItems));
  };

  return {
    shopCart,
  };
}
