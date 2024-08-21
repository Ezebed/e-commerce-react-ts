import { ProductsContext } from "./ProductsContext";
import { PropsWithChildren } from "react";
import { useProducts } from "@/Hooks/useProducts";

export default function ProductsProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const { products, categories, category, searchProduct, changeCategory } =
    useProducts();

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        categories: categories,
        category: category,
        searchProduct: searchProduct,
        changeCategory: changeCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
