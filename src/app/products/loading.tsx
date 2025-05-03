import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 py-8">
      <div className="w-full md:w-8/12 mx-auto">
        <div className="flex flex-col space-y-3 mb-4">
          <Skeleton className="h-4 w-3/4 rounded" />
          <Skeleton className="h-4 w-1/2 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-[300px] rounded" />
        ))}
      </div>
    </div>
  );
}
