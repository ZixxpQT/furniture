import type { Product } from "@/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface productProps extends React.HTMLAttributes<HTMLElement> {
  products: Product[];
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductCard({ products, className }: productProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Card size="sm" className="overflow-hidden">
          <Link to={`/products/${product.id}`} key={product.id}>
            <CardHeader className="">
              <AspectRatio ratio={1 / 1} className="">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="size-full rounded-2xl"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="pt-2">
              <CardTitle className="line-clamp-1 font-medium">
                {product.name}
              </CardTitle>
              <CardDescription className="line-clamp-1">
                $ {product.price}
              </CardDescription>
            </CardContent>
          </Link>
          <CardFooter className="flex flex-col items-start">
            {product.status === "sold" ? (
              <Button size="sm" className="h-8 w-full" disabled={true}>
                Sold Out
              </Button>
            ) : (
              <Button size="sm" className="h-8 w-full">
                <icons.plus />
                Add to Card
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ProductCard;
