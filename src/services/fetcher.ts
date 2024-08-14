import { Products } from "@/utils/types/ProductTypes";

export async function Fetcher(apiUrl: string) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    console.log(await response.json());
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Fetching Data", error);
    throw error;
  }
}
