import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/api/products";
import ProductDetails from "@/components/products/product-details";
import { getProductMetadata } from "@/lib/metadata/product";

type Params = Promise<{ id: string }>;

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  return getProductMetadata(params.id); // Fetch metadata for the product
}

export async function generateStaticParams() {
  const products = await getProducts(); // Fetch all products to generate static params
  return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductDetailsPage(props: { params: Params }) {
  const params = await props.params;
  const product = await getProduct(params.id);
  if (!product) {
    console.error("Product not found:", params.id);
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-primary font-bold text-xl  mb-8">
        {product.title}
      </h2>
      <ProductDetails product={product} />
    </div>
  );
}
