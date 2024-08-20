import { Products } from "@/utils/types/ProductTypes.d";
import ProductCard from "./ProductCard";

type ProductCardListProps = {
  products: Products;
};

export default function ProductaCardList({
  products,
}: ProductCardListProps): JSX.Element {
  return (
    <>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          category={product.category}
          price={product.price}
          images={product.images}
          creationAt={product.creationAt}
          updatedAt={product.updatedAt}
        />
      ))}
    </>
  );
}
