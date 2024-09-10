import { Skeleton } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";

export default function categoryCardSkeleton(): JSX.Element {
  return (
    <Skeleton startColor="green.500" endColor="green.200">
      <CategoryCard id={0} image="" name="" />
    </Skeleton>
  );
}
