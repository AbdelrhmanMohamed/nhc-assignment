import React from "react";

export default function loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Title Skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>

      {/* Product Image Skeleton */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="bg-gray-200 rounded-lg overflow-hidden animate-pulse">
          <div className="w-full h-[400px]"></div>
        </div>
      </div>

      {/* Product Details Skeleton */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="mb-4 flex items-center">
            <div className="h-5 w-16 bg-gray-200 rounded animate-pulse mr-2"></div>
            <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="h-5 w-16 bg-gray-200 rounded animate-pulse mr-2"></div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-1"
                ></div>
              ))}
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="h-5 w-16 bg-gray-200 rounded animate-pulse mr-2"></div>
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center">
            <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mr-2"></div>
            <div className="h-5 w-12 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="h-5 w-16 bg-gray-200 rounded animate-pulse mr-2"></div>
            <div className="h-5 w-12 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="mb-4 flex items-center">
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mr-2"></div>
            <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Product Description Skeleton */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Product Images Skeleton */}
      <div className="max-w-4xl mx-auto">
        <div className="h-6 w-36 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg overflow-hidden animate-pulse"
            >
              <div className="w-full aspect-square"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
