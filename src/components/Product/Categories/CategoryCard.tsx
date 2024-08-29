import { Box, Image, Text } from "@chakra-ui/react";
import placeholderImg from "@/assets/img/img_placeholder.webp";
import { useProductsParams } from "@/Store/ProductsParamsStore/useProductsParams";

export type CategoryCardProps = {
  id: number;
  name: string;
  image: string;
};

export default function CategoryCard({
  id,
  name,
  image,
}: CategoryCardProps): JSX.Element {
  const categoryID = useProductsParams((state) => state.categoryID);
  const changeCategoryID = useProductsParams((state) => state.changeCategoryID);

  return (
    <Box
      display="flex"
      gap="8px"
      alignItems="center"
      bg={id === categoryID ? "green.600" : "dark.200"}
      height="4rem"
      width="100%"
      borderRadius="5px"
      overflow="hidden"
      transition="background .1s ease"
      onClick={() => {
        changeCategoryID(id);
      }}
    >
      <Image
        src={image}
        fallbackSrc={placeholderImg}
        objectFit="cover"
        height="4rem"
        width="4rem"
      />
      <Text fontSize="xl">{name}</Text>
    </Box>
  );
}
