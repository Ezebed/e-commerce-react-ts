import { apiBaseUrl } from "@/utils/constants.d";
import { Categories } from "@/utils/types/ProductTypes.d";

export async function fetchCategories(): Promise<Categories> {
  try {
    const response = await fetch(`${apiBaseUrl}categories`);

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
