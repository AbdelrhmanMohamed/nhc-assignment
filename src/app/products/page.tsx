import React from "react";
import LoadMoreProducts from "@/components/product/load-more";
import ProductCard from "@/components/product/product-card";
import ProductEmptyState from "@/components/product/product-empty-state";
import SearchBar from "@/components/search/search-bar";
import { searchProducts } from "@/lib/api/products";
import { SearchParams } from "@/types/common";

export const metadata = {
  title: "Explore Our Products",
  description:
    "Discover a wide variety of high-quality products tailored to your needs.",
  keywords: ["products", "shop", "ecommerce", "search", "catalog"],
};

export default async function Products(props: { searchParams: SearchParams }) {
  const { query } = await props.searchParams;
  const searchValue = query ? query : "";
  const { products, total } = await searchProducts(searchValue as string);
  const hasInitialResults = products.length > 0;

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 py-8">
      <div className="w-full md:w-8/12 mx-auto">
        <SearchBar />
        {searchValue && (
          <p className="text-lg  mb-2 mt-4">
            Total results count:{" "}
            <span className="font-bold text-primary">{total}</span>
          </p>
        )}
      </div>
      {hasInitialResults ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-8">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <LoadMoreProducts />
        </>
      ) : (
        searchValue && <ProductEmptyState />
      )}
    </div>
  );
}
