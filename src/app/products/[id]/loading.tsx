import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Title Skeleton */}
      <Skeleton className="h-8 w-48 mx-auto mb-8" />

      {/* Product Image Skeleton */}
      <div className="max-w-xl mx-auto mb-10">
        <Skeleton className="w-full h-[300px] rounded" />
      </div>

      {/* Product Details Skeleton */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <div className="mb-4 flex items-center">
            <Skeleton className="h-5 w-16 mr-2" />
            <Skeleton className="h-5 w-20" />
          </div>
          <div className="mb-4 flex items-center">
            <Skeleton className="h-5 w-16 mr-2" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-5 w-5 rounded-full mr-1" />
              ))}
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <Skeleton className="h-5 w-16 mr-2" />
            <Skeleton className="h-5 w-24" />
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center">
            <Skeleton className="h-5 w-40 mr-2" />
            <Skeleton className="h-5 w-12" />
          </div>
          <div className="mb-4 flex items-center">
            <Skeleton className="h-5 w-16 mr-2" />
            <Skeleton className="h-5 w-12" />
          </div>
          <div className="mb-4 flex items-center">
            <Skeleton className="h-5 w-24 mr-2" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>
      </div>

      {/* Product Description Skeleton */}
      <div className="max-w-4xl mx-auto mb-10">
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

      {/* Product Images Skeleton */}
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-6 w-36 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="w-full aspect-square rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
