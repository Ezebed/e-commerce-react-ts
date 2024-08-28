import { Categories } from "@/utils/types/ProductTypes";
import CategoryCard from "./CategoryCard";

interface categoryCardListProps {
  categories: Categories;
}

export default function CategoryCardList({
  categories,
}: categoryCardListProps): JSX.Element {
  return (
    <>
      {categories?.map((categoryItem) => (
        <CategoryCard
          key={categoryItem.id}
          id={categoryItem.id}
          name={categoryItem.name}
          image={categoryItem.image}
        />
      ))}
    </>
  );
}
