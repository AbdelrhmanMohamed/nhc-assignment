import React from "react";
import Image from "next/image";

export default function ProductEmptyState() {
  return (
    <div className="flex flex-col mt-16 items-center justify-center text-center mb-24 text-lg text-gray-600">
      <Image
        src="/assets/empty-state.svg"
        alt="empty state"
        width={160}
        height={160}
        className="mx-auto mb-4"
      />
      <h3>No results for your search!</h3>
      <h3>Try another keyword</h3>
    </div>
  );
}
