import { ProductsContext } from "./ProductsContext";
import { PropsWithChildren } from "react";
import { useProducts } from "@/Hooks/useProducts";

export default function ProductsProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const { products, categories, searchProduct } = useProducts();

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        categories: categories,
        searchProduct: searchProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
