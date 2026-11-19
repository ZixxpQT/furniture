import { icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
interface RatingProps {
  rating: number;
}
export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <icons.star
          key={i}
          className={cn(
            "size-4",
            rating >= i + 1 ? "text-yellow-400" : "text-muted-foreground",
          )}
        />
      ))}
    </div>
  );
}
