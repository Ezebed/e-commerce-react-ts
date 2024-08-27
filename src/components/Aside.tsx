import CategoryCard from "./Product/Categories/CategoryCard";
import { Box, Heading } from "@chakra-ui/react";

export default function Aside(): JSX.Element {
  return (
    <aside>
      <Heading as="h2" fontSize="2xl">
        Categories
      </Heading>

      <Box display="flex" flexDir="column" gap="8px">
        {/* {categories?.map((categoryItem) => (
          <CategoryCard
            key={categoryItem.id}
            id={categoryItem.id}
            name={categoryItem.name}
            image={categoryItem.image}
            active={category === categoryItem.id}
            changeCategory={changeCategory}
          />
        ))} */}
      </Box>
    </aside>
  );
}
