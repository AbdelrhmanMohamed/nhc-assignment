import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api/products";
import ProductDetails from "@/components/products/product-details";

type Params = Promise<{ id: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  if (!params.id) return {};
  const product = await getProduct(params.id);
  if (!product) return {};
  return {
    title: `${product.title} | MyStore`,
    description: product.description,
    keywords: [
      product.category,
      product.brand,
      product.tags.join(", "),
      "ecommerce",
      "shopping",
    ],
  };
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
