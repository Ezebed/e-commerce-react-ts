import { useProductsParams } from "@/Store/ProductsParamsStore/useProductsParams";
import { fetchProducts } from "@/services/fetchProducts";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const productTitle = useProductsParams((state) => state.productTitle);
  const categoryID = useProductsParams((state) => state.categoryID);

  const productsQuery = useQuery({
    queryKey: ["products", productTitle, categoryID],
    queryFn: async () => await fetchProducts(productTitle, categoryID),
    refetchOnWindowFocus: false,
  });

  return {
    products: productsQuery.data,
    productsLoading: productsQuery.isLoading,
    productsError: productsQuery.isError,
  };
}
