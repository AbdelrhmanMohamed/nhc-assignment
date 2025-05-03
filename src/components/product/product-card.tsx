import React from "react";
import Image from "next/image";
import { IProduct } from "@/types/product";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type ProductCardProps = {
  product: IProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.thumbnail || product.images[0];

  return (
    <Card className="h-80 cursor-default gap-2 py-2 px-3 shadow-xl hover:shadow-2xl transition-all duration-200 ease-in-out">
      <div className="relative w-full h-44">
        <Image
          src={imageUrl}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>
      <h2 className="text-lg font-semibold line-clamp-1 text-primary">
        {product.title}
      </h2>
      <p className="text-gray-600 text-sm line-clamp-2">
        {product.description}
      </p>
      <div className="flex justify-between items-center mt-4 mb-2">
        <p className="">
          Price :{" "}
          <span className="text-primary font-semibold">{product.price}$</span>
        </p>
        <Link href={`/products/${product.id}`}>
          <Button variant="default" className="px-8 text-lg">
            More
          </Button>
        </Link>
      </div>
    </Card>
  );
}
