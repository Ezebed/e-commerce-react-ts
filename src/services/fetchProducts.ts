import { apiBaseUrl } from "@/utils/constants.d";
import { Products } from "@/utils/types/ProductTypes.d";

export async function fetchProducts(
  productTitle: string,
  categoryID: number,
  offset: number
): Promise<Products> {
  try {
    const response = await fetch(
      `${apiBaseUrl}products/?title=${productTitle}&categoryId=${categoryID}&offset=${offset}&limit=16`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error Fetching Data", error);
    throw error;
  }
}
