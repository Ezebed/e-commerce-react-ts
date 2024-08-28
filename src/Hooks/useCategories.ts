import { fetchCategories } from "@/services/fetchCategories";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await fetchCategories(),
    refetchOnWindowFocus: false,
  });

  return {
    categories: categoriesQuery.data,
    categoriesLoading: categoriesQuery.isLoading,
    categoriesError: categoriesQuery.isError,
  };
}
