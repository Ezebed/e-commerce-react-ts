import { Product } from "@/utils/types/ProductTypes.d";
import ImgCarousel from "@/components/Product/ImgCarousel";
import { Badge, Box, Text } from "@chakra-ui/react";
import ShopCartButtons from "../ShopCart/ShopCartButtons";

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
      <ShopCartButtons id={id} name={title} price={price} />
    </Box>
  );
}
