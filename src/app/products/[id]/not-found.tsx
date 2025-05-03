import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">
            404
          </h1>
          <p className="text-gray-500  text-lg font-medium">
            The product you are looking for does not exist or has been removed.
          </p>
        </div>
        <Link href="/products" prefetch={false}>
          <Button variant="default" className="w-full sm:w-auto ">
            Back to Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
