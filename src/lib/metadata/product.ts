// lib/metadata/product.ts
import { getProduct } from "@/lib/api/products";

/**
 * Fetches metadata for a product based on its ID.
 * @param productId - The ID of the product.
 * @returns An object containing the product's metadata, including title, description, and keywords.
 * */

export async function getProductMetadata(productId: string) {
  const product = await getProduct(productId);
  if (!product) return {};

  return {
    title: `${product.title}`,
    description: product.description,
    keywords: [
      product.category,
      product.brand,
      ...product.tags,
      "ecommerce",
      "shopping",
    ],
  };
}
