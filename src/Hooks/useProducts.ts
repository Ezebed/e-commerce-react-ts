import { Fetcher } from "@/services/fetcher";
import { apiBaseUrl } from "@/utils/constants.d";
import { Categories, Products } from "@/utils/types/ProductTypes.d";
import { useEffect, useState } from "react";

export interface useProductsResponse {
  products: Products | undefined;
  categories: Categories | undefined;
  category: number;
  searchProduct: (productTitle: string) => void;
  changeCategory: (categoryId: number) => void;
}

export function useProducts(): useProductsResponse {
  const [apiUrl, setApiUrl] = useState<string>(`${apiBaseUrl}products`);
  const [products, setProducts] = useState<Products | undefined>(undefined);
  const [categories, setCategories] = useState<Categories | undefined>(
    undefined
  );
  const [category, setCategory] = useState<number>(0);

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
    if (category !== 0) {
      setApiUrl(
        `${apiBaseUrl}products/?title=${productTitle}&categoryId=${category}`
      );
    } else {
      setApiUrl(`${apiBaseUrl}products/?title=${productTitle}`);
    }
  };

  const changeCategory = (categoryId: number) => {
    let newCategory = categoryId === category ? 0 : categoryId;
    setCategory(newCategory);

    if (newCategory === 0) {
      setApiUrl(`${apiBaseUrl}products`);
    } else {
      setApiUrl(`${apiBaseUrl}categories/${newCategory}/products`);
    }
  };

  return {
    products,
    categories,
    category,
    searchProduct,
    changeCategory,
  };
}
