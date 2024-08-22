import { ProductsContext } from "./ProductsContext";
import { ShopCartContext } from "./ShopCartContext";
import { PropsWithChildren } from "react";
import { useProducts } from "@/Hooks/useProducts";
import useShopCart from "@/Hooks/useShopCart";

export default function ProductsProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const { products, categories, category, searchProduct, changeCategory } =
    useProducts();

  const { shopCart } = useShopCart();

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        category,
        searchProduct,
        changeCategory,
      }}
    >
      <ShopCartContext.Provider value={{ shopCart }}>
        {children}
      </ShopCartContext.Provider>
    </ProductsContext.Provider>
  );
}
