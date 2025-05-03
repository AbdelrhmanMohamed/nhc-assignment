import React from "react";
import Image from "next/image";
import { IProduct } from "@/types/product";
import ProductInfoRow from "./product-Info-row";
import Rating from "../ui/rating";

type ProductDetailsCardProps = {
  product: IProduct;
};

export default function ProductDetailsCard({
  product,
}: ProductDetailsCardProps) {
  const imageUrl = product.thumbnail || product.images[0];

  return (
    <div className="space-y-12 text-lg">
      {/* Product Preview Image */}
      <div className="relative w-full h-64 mx-auto border bg-gray-100 rounded overflow-hidden ">
        <Image
          src={imageUrl}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Product Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16 mt-4">
        <div className="space-y-4">
          <ProductInfoRow label="Price" value={`$${product.price}`} />
          <ProductInfoRow
            label="Rating"
            value={<Rating rating={product.rating} />}
          />
          <ProductInfoRow label="Brand" value={product.brand} />
        </div>
        <div className="space-y-4">
          <ProductInfoRow
            label="Discount Percentage"
            value={`${product.discountPercentage}%`}
          />
          <ProductInfoRow label="Stock" value={`${product.stock}`} />
          <ProductInfoRow label="Category" value={product.category} />
        </div>
      </div>
    </div>
  );
}
