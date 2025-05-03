import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
  max?: number;
  className?: string;
};

export default function Rating({ rating, max = 5, className }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            `w-5 h-5 ${
              i < Math.round(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`,
            className
          )}
        />
      ))}
    </div>
  );
}
