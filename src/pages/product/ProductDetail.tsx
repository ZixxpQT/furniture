import { icons } from "@/components/Icons";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link, useParams } from "react-router";
import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Rating from "@/components/product/Rating";
import AddToFavourite from "@/components/product/AddToFavourite";
import { AddToCardForm } from "@/components/product/AddToCardForm";
// const PorductCard = products.slice(0, 4);
function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  function formatPrice(amount?: number | null): import("react").ReactNode {
    const value = Number(amount ?? 0);
    if (isNaN(value)) return "";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  return (
    <div className="container mx-auto">
      <Button asChild variant="outline" className="my-8 ml-4">
        <Link to="/products" className="">
          <icons.arrowFeft /> All Porduct
        </Link>
      </Button>
      <section className="mx-4 lg:ml-0">
        <section className="flex flex-col gap-16 md:flex-row">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full md:w-1/2"
          >
            <CarouselContent>
              {products.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="p-1">
                    <img
                      src={image.images[0]}
                      alt={image.name}
                      className="size-full rounded-md object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Separator className="mt-4 md:hidden" />
          <div className="w-full space-y-2.5 lg:w-1/2">
            <h2 className="text-2xl font-bold">{product?.name}</h2>
            <p className="text-muted-foreground">
              {formatPrice(Number(product?.price))}
            </p>
            <Separator className="mt-4" />
            <p className="text-muted-foreground">{product?.inventory}</p>
            <div className="flex items-center justify-between">
              <Rating rating={Number(product?.rating)} />
              <AddToFavourite
                productId={String(productId)}
                rating={Number(product?.rating)}
                className=""
              />
            </div>

            <AddToCardForm ToBuy={product?.status === "active"} />
            <Separator className="my-4" />

            <Accordion
              type="multiple"
              className="max-w-lg"
              defaultValue={["notifications"]}
            >
              {
                <AccordionItem key={product?.id} value="Billing">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>{product?.description}</AccordionContent>
                </AccordionItem>
              }
            </Accordion>
          </div>
        </section>

        <section className="my-8 overflow-hidden">
          <h2>More Porduct From Furniture Shop </h2>
          <ScrollArea className="">
            <div className="">
              <ProductCard products={products.slice(0, 4)} />
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </section>
    </div>
  );
}

export default ProductDetail;
