import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api/products";
import ProductDetails from "@/components/product/product-details";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) return {};
  return {
    title: `${product.title} | MyStore`,
    description: product.description,
  };
}

export default async function ProductDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
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
