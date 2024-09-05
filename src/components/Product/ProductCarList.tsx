import { Products } from "@/utils/types/ProductTypes.d";
import ProductCard from "./ProductCard";
import { Wrap, WrapItem } from "@chakra-ui/react";

type ProductCardListProps = {
  products: Products;
};

export default function ProductaCardList({
  products,
}: ProductCardListProps): JSX.Element {
  return (
    <Wrap justify={{ base: "center", md: "left" }}>
      {products?.map((product) => (
        <WrapItem key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
            images={product.images}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}
