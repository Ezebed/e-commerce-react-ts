import { useCategories } from "@/Hooks/useCategories";
import { Box, Heading } from "@chakra-ui/react";
import CategoryCardList from "./Product/Categories/categoryCardList";
import CategoryCardSkeleton from "./Product/Categories/CategoryCardSkeleton";

export default function Aside(): JSX.Element {
  const { categories, categoriesLoading, categoriesError } = useCategories();

  return (
    <aside>
      <Heading as="h2" fontSize="2xl">
        Categories
      </Heading>

      <Box display="flex" flexDir="column" gap="8px" mt="16px">
        {categories && categories.length > 0 && (
          <CategoryCardList categories={categories!} />
        )}
        {categories && categories.length === 0 && (
          <Heading as="h2" fontSize="xl" margin="0 auto">
            No Categories To Show
          </Heading>
        )}
        {categoriesError && (
          <Heading as="h2" fontSize="xl" margin="0 auto">
            An Error Occurred
          </Heading>
        )}
        {categoriesLoading && (
          <>
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
          </>
        )}
      </Box>
    </aside>
  );
}
