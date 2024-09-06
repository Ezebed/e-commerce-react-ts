import { useProductsParams } from "@/Store/ProductsParamsStore/useProductsParams";
import { fetchProducts } from "@/services/fetchProducts";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useProducts() {
  const productTitle = useProductsParams((state) => state.productTitle);
  const categoryID = useProductsParams((state) => state.categoryID);

  const productsQuery = useInfiniteQuery({
    queryKey: ["products", productTitle, categoryID],
    queryFn: async ({ pageParam }) =>
      await fetchProducts(productTitle, categoryID, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 16;
    },
    refetchOnWindowFocus: false,
  });

  return {
    products: productsQuery.data?.pages.flat(),
    productsLoading: productsQuery.isLoading,
    productsError: productsQuery.isError,
    getMore: productsQuery.fetchNextPage,
    hasMore: productsQuery.hasNextPage,
    moreProductsLoading: productsQuery.isFetchingNextPage,
    moreProductsError: productsQuery.isFetchNextPageError,
  };
}
