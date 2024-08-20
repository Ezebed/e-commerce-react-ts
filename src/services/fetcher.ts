export async function Fetcher(apiUrl: string) {
  try {
    // const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const response = await fetch(apiUrl);

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
