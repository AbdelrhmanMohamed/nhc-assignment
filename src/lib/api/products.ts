import { LIMIT } from "@/constants/common";
import { ProductRoutes } from "@/constants/routes";
import { IProduct, IProductResponse } from "@/types/product";

const API_BASE_URL = process.env.API_BASE_URL || "https://dummyjson.com";

/**
 * Fetches all products from the API based on the search value.
 * @param searchValue - The search term to filter products.
 * @returns A promise that resolves to an object containing the products, total count, and limit.
 */

export async function searchProducts(
  searchValue: string,
  limit: number = LIMIT,
  skip: number = 0
): Promise<IProductResponse> {
  try {
    if (!searchValue) {
      return { products: [], total: 0, limit: 0, skip: 0 };
    }
    const response = await fetch(
      `${API_BASE_URL}${ProductRoutes.SEARCH}${searchValue}&limit=${limit}&skip=${skip}`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      const errMsg = await response.text();
      console.error("Error fetching products:", errMsg);
      return { products: [], total: 0, limit: 0, skip: 0 };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0, limit: 0, skip: 0 };
  }
}

/**
 * Fetches a single product by its ID from the API.
 * @param id - The ID of the product to fetch.
 * @returns A promise that resolves to the product object or null if not found.
 */

export async function getProduct(id: string): Promise<IProduct | null> {
  try {
    const data = await fetch(
      `${API_BASE_URL}${ProductRoutes.BASE}/${id}?delay=1000`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!data.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await data.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

/**
 * Fetches all products from the API.
 * @returns A promise that resolves to an array of products.
 */
export async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${ProductRoutes.BASE}`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
