"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";

import { LIMIT } from "@/constants/common";
import { searchProducts } from "@/lib/api/products";
import { IProduct } from "@/types/product";

import ProductCard from "./product-card";
import Spinner from "../ui/sppiner";

export default function LoadMoreProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [totalResults, setTotalResults] = useState<number>(0);
  const skip = useRef<number>(LIMIT);

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { ref, inView } = useInView();

  const fetchMoreProducts = useCallback(async () => {
    try {
      const { products: newProducts, total } = await searchProducts(
        query,
        LIMIT,
        skip.current
      );
      setTotalResults(total);
      if (total === 0) {
        setHasMore(false);
      }
      if (newProducts.length > 0) {
        skip.current += LIMIT;
        setProducts((prev) => [...prev, ...newProducts]);
      }
      if (newProducts.length < LIMIT) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setHasMore(false);
    }
  }, [query]);

  useEffect(() => {
    if (inView && hasMore) {
      fetchMoreProducts();
    }
  }, [inView, hasMore, fetchMoreProducts]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-8">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>

      {hasMore && (
        <div ref={ref} className="text-center p-4 text-gray-500">
          <Spinner />
        </div>
      )}

      {!hasMore && totalResults > 0 && (
        <div className="text-center text-lg text-gray-500">
          No more products!
        </div>
      )}
    </div>
  );
}
