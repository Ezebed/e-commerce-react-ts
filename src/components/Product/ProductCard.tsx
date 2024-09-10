import { Product } from "@/utils/types/ProductTypes.d";
import ImgCarousel from "@/components/Product/ImgCarousel";
import { Center, Flex, Icon, Tag, Text, VStack } from "@chakra-ui/react";
import ShopCartButtons from "../ShopCart/ShopCartButtons";
import { F7MoneyDollar } from "@/Icons/F7MoneyDollar";

type ProductCardProps = Omit<Product, "creationAt" | "updatedAt">;

export default function ProductCard({
  id,
  title,
  price,
  description,
  images,
  category,
}: ProductCardProps): JSX.Element {
  return (
    <Flex
      direction={{ sm: "column" }}
      bg="dark.200"
      width={{ base: "100%", sm: "14rem" }}
      borderRadius="5px"
      overflow="hidden"
      position="relative"
    >
      <Tag
        size="sm"
        variant="solid"
        colorScheme="green"
        position="absolute"
        top="5px"
        right={{ base: "unset", sm: "5px" }}
        left={{ base: "5px", sm: "unset" }}
        zIndex={10}
      >
        {category.name}
      </Tag>
      <ImgCarousel imgUrl={images} />
      <VStack
        width="100%"
        alignItems="left"
        gap="4px"
        paddingX="10px"
        paddingBottom="10px"
      >
        <Text noOfLines={1} fontSize="lg">
          {title}
        </Text>
        <Text noOfLines={2} fontSize="sm" height="2lh" textOverflow="ellipsis">
          {description}
        </Text>
        <Center>
          <Text fontSize="3xl" as="b">
            {price}
          </Text>
          <Icon boxSize={8} as={F7MoneyDollar} />
        </Center>
        <ShopCartButtons id={id} name={title} price={price} />
      </VStack>
    </Flex>
  );
}
