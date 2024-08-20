import { Fetcher } from "@/services/fetcher";
import { apiBaseUrl } from "@/utils/constants.d";
import { Categories, Products } from "@/utils/types/ProductTypes.d";
import { useEffect, useState } from "react";

export interface useProductsResponse {
  products: Products | undefined;
  categories: Categories | undefined;
  searchProduct: (productTitle: string) => void;
}

export function useProducts(): useProductsResponse {
  const [apiUrl, setApiUrl] = useState<string>(`${apiBaseUrl}products`);
  const [products, setProducts] = useState<Products | undefined>(undefined);
  const [categories, setCategories] = useState<Categories | undefined>(
    undefined
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await Fetcher(apiUrl);
        setProducts(data);
      } catch (error) {
        console.error("error getting data", error);
      }
    };
    getProducts();
  }, [apiUrl]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await Fetcher(`${apiBaseUrl}categories`);
        setCategories(categoriesData);
      } catch (error) {
        console.error("errorgetting categories " + error);
      }
    };
    getCategories();
  }, []);

  const searchProduct = (productTitle: string) => {
    setApiUrl(`${apiBaseUrl}products/?title=${productTitle}`);
  };

  return {
    products,
    categories,
    searchProduct,
  };
}
