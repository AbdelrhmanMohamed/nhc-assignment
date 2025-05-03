import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { IProduct } from "@/types/product";

type ProductCardPreviewProps = {
  product: IProduct;
};

export default function ProductCardPreview({
  product,
}: ProductCardPreviewProps) {
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
          <Detail label="Price" value={`$${product.price}`} />
          <div className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <Detail label="Brand" value={product.brand} />
        </div>
        <div className="space-y-4">
          <Detail
            label="Discount Percentage"
            value={`${product.discountPercentage}%`}
          />
          <Detail label="Stock" value={`${product.stock}`} />
          <Detail label="Category" value={product.category} />
        </div>
      </div>
    </div>
  );
}

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="font-semibold">
    <span className="">{label}:</span>{" "}
    <span className={"text-primary"}>{value}</span>
  </div>
);
