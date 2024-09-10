import { Skeleton } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function ProductCardSkeleton(): JSX.Element {
  return (
    <>
      <Skeleton startColor="green.500" endColor="green.200">
        <ProductCard
          category={{
            id: 0,
            image: "",
            name: "",
            creationAt: "",
            updatedAt: "",
          }}
          description=""
          images={[]}
          price={0}
          title=""
          id={0}
        />
      </Skeleton>
    </>
  );
}
