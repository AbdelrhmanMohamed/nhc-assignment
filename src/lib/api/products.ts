import { ProductRoutes } from "@/constants/routes";
import { IProduct } from "@/types/product";

const API_BASE_URL = process.env.API_BASE_URL || "https://dummyjson.com";

export async function getAllProducts(searchValue: string): Promise<IProduct[]> {
  const data = await fetch(
    `${API_BASE_URL}${ProductRoutes.SEARCH}${searchValue}&delay=1000`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch products");
  }
  const { products } = await data.json();
  return products;
}
