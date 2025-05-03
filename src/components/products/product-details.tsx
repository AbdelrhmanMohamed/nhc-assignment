import React from "react";
import Image from "next/image";
import { IProduct } from "@/types/product";
import ProductDetailsCard from "./product-details-card";

type ProductDetailsProps = {
  product: IProduct;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-12 text-lg">
      <div className="max-w-lg mx-auto">
        <ProductDetailsCard product={product} />
      </div>

      {/* Product Description */}
      <div className="max-w-4xl mx-auto space-y-2">
        <h3 className="text-xl font-semibold">Product Description</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Product Images */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-xl font-semibold">Product Images</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="rounded-xl relative w-full h-32 overflow-hidden border bg-gray-100"
            >
              <Image
                src={image}
                alt={`${product.title} ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
