import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Product } from "@/types";

import { Link } from "react-router";
interface productProp {
  products: Product[];
}
export default function CarouselCard({ products }: productProp) {
  return (
    <Carousel className="w-full md:px-4" plugins={[Autoplay({ delay: 2000 })]}>
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-1 lg:basis-1/3">
            <div className="flex gap-3 p-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="size-32 rounded-md"
              />
              <div className="py-2">
                <h2 className="line-clamp-1 text-sm font-bold">
                  {product.name}
                </h2>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {product.description}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-sm font-semibold hover:text-blue-400 hover:underline"
                >
                  read more...
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
