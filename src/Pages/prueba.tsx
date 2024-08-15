import MainLayout from "@/components/layouts/MainLayout";
import { ProductsContext } from "@/context/ProductsContext";
import { useContext } from "react";

import ProductCard from "@/components/Product/ProductCard";

export default function prueba(): JSX.Element {
  const products = useContext(ProductsContext);

  return (
    <MainLayout>
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
    </MainLayout>
  );
}
