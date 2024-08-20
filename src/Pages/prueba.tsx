import MainLayout from "@/components/layouts/MainLayout";
import { ProductsContext } from "@/context/ProductsContext";
import { useContext } from "react";

import ProductaCardList from "@/components/Product/ProductCarList";

export default function prueba(): JSX.Element {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    return <p>Loading....</p>;
  }

  const { products } = productsContext;

  return (
    <MainLayout>
      <ProductaCardList products={products!} />
    </MainLayout>
  );
}
