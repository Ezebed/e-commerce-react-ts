import { useProductsParams } from "@/Store/ProductsParamsStore/useProductsParams";
import { fetchProducts } from "@/services/fetchProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useProducts() {
  const productTitle = useProductsParams((state) => state.productTitle);
  const categoryID = useProductsParams((state) => state.categoryID);
  const [offset, setOffset] = useState<number>(0);

  const productsQuery = useQuery({
    queryKey: ["products", productTitle, categoryID, offset],
    queryFn: async () => await fetchProducts(productTitle, categoryID, offset),
    refetchOnWindowFocus: false,
  });

  const getMore = () => {
    setOffset(offset + 16);
  };

  return {
    products: productsQuery.data,
    productsLoading: productsQuery.isLoading,
    productsError: productsQuery.isError,
    getMore: getMore,
  };
}
