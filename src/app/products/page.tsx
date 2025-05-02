import ProductCard from "@/components/product/product-card";
import ProductEmptyState from "@/components/product/product-empty-state";
import SearchBar from "@/components/search/search-bar";
import { getAllProducts } from "@/lib/api/products";
import { SearchParams } from "@/types/common";
import React from "react";

export const metadata = {
  title: "Explore Our Products",
  description:
    "Discover a wide variety of high-quality products tailored to your needs.",
  keywords: ["products", "shop", "ecommerce", "search", "catalog"],
};

export default async function Product(props: { searchParams: SearchParams }) {
  const { query } = await props.searchParams;
  const searchValue = query ? query : "";
  const { products, total } = await getAllProducts(searchValue as string);

  return (
    <div className="px-56 py-8">
      <div className="w-8/12 mx-auto">
        <SearchBar />
        {searchValue && (
          <p className="text-lg  mb-2 mt-4">
            Total results count:{" "}
            <span className="font-bold text-primary">{total}</span>
          </p>
        )}
      </div>
      <div className="grid grid-cols-3 gap-8 mb-16 mt-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products?.length === 0 && searchValue && <ProductEmptyState />}
    </div>
  );
}
