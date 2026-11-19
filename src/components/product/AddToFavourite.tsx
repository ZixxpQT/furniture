import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { icons } from "@/components/Icons";

interface FavouriteProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  productId: string;
  rating: number;
}
export default function AddToFavourite({
  productId,
  rating,
  className,
  ...props
}: FavouriteProp) {
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn("size-8 shrink-0", className)}
      {...props}
    >
      <icons.heart className="size-4" />
    </Button>
  );
}
