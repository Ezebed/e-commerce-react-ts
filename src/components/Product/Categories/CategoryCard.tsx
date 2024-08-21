import { Box, Image, Text } from "@chakra-ui/react";
import placeholderImg from "@/assets/img/img_placeholder.webp";
import { useState } from "react";

export type CategoryCardProps = {
  id: number;
  name: string;
  image: string;
  active: boolean;
  changeCategory: (categoryId: number) => void;
};

export default function CategoryCard({
  id,
  name,
  image,
  active,
  changeCategory,
}: CategoryCardProps): JSX.Element {
  return (
    <Box
      display="flex"
      gap="8px"
      alignItems="center"
      bg={active ? "green.600" : "dark.200"}
      height="4rem"
      width="100%"
      borderRadius="5px"
      overflow="hidden"
      transition="background .1s ease"
      onClick={() => {
        changeCategory(id);
      }}
    >
      <Image
        src={image}
        fallbackSrc={placeholderImg}
        objectFit="cover"
        height="4rem"
        width="4rem"
      />{" "}
      <Text fontSize="xl">
        {name} {id}
      </Text>
    </Box>
  );
}
