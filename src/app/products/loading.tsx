import React from "react";

export default function loading() {
  return (
    <div className="px-56 py-8">
      <div className="w-8/12 mx-auto">
        <div className="animate-pulse flex space-x-4 mb-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-24 mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-200 h-[300px] rounded"
          ></div>
        ))}
      </div>
    </div>
  );
}
