import { fetchProducts } from "@/services/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useProducts() {
  const [productTitle, setproductTitle] = useState<string>("");
  const [categoryID, setCategoryID] = useState<number>(0);

  const productsQuery = useQuery({
    queryKey: ["products", productTitle, categoryID],
    queryFn: async () => await fetchProducts(productTitle, categoryID),
    refetchOnWindowFocus: false,
  });

  const changeProductTitle = (newProductTitle: string) => {
    setproductTitle(newProductTitle);
  };

  return {
    products: productsQuery.data,
    productsLoading: productsQuery.isLoading,
    productsError: productsQuery.isError,
    changeProductTitle,
  };
}
