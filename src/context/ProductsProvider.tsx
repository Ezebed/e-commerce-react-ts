import { Products } from "@/utils/types/ProductTypes";
import { ProductsContext } from "./ProductsContext";
import { useEffect, useState, PropsWithChildren } from "react";
import { Fetcher } from "@/services/fetcher";
import { apiBaseUrl } from "@/utils/constants.d";

export default function ProductsProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [products, setProducts] = useState<Products>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiUrl = `${apiBaseUrl}products`;
        const data = await Fetcher(apiUrl);
        setProducts(data);
      } catch (error) {
        console.error("error getting data", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
