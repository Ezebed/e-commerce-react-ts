import { Product } from "@/utils/types/ProductTypes.d";
import ImgCarousel from "@/components/Product/ImgCarousel";
import { Badge, Box, Text } from "@chakra-ui/react";

export default function ProductCard({
  id,
  title,
  price,
  description,
  images,
  category,
  creationAt,
  updatedAt,
}: Product): JSX.Element {
  return (
    <Box className="productCard">
      <Text className="productTitle">{title}</Text>
      <ImgCarousel imgUrl={images} />
      <Box className="productContent" position="relative">
        <Text className="productPrice">{price} $</Text>
        <Badge variant="subtle" position="absolute" right="8px" top="8px">
          {category.name}
        </Badge>
        <p className="productDescription">{description}</p>
      </Box>
    </Box>
  );
}
