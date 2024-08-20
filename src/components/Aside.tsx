import { ProductsContext } from "@/context/ProductsContext";
import { useContext } from "react";

export default function Aside(): JSX.Element {
  const productContext = useContext(ProductsContext);

  if (!productContext) {
    return <p>Loading...</p>;
  }

  const { categories } = productContext;

  return (
    <>
      <h2>Categories</h2>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
}
