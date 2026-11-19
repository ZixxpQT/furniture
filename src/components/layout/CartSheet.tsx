import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { icons } from "@/components/Icons";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cartItems } from "@/data/cart";
import CartItem from "@/components/carts/CartItem";

export default function CartSheet() {
  const itemCount = 4;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <icons.cart />{" "}
          <Badge
            variant="ghost"
            className="absolute -top-2 -right-2 text-xl font-bold text-red-500"
          >
            {itemCount}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false} className="">
        <SheetHeader className="mt-2 flex min-h-4 items-center justify-center">
          <SheetTitle>Cart - ({itemCount})</SheetTitle>
        </SheetHeader>
        <Separator className="" />

        {itemCount > 0 ? (
          <>
            <ScrollArea className="h-[80vh] overflow-hidden pb-4">
              <div className="flex-1">
                {cartItems.map((cart) => (
                  <CartItem cart={cart} />
                ))}
              </div>
            </ScrollArea>
            <div className="p-4">
              <Separator />
              <div className="mt-3 flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxes</span>
                  <span>Calculated at Checkout</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <span> $ {cartItems[0].price}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="default" asChild>
                    <Link to="/checkout">Continue to CheckOut</Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="grid h-full place-items-center">
            <div className="flex-1 flex-col justify-items-center">
              <icons.cart className="text-muted-foreground size-8" />
              <p className="text-xl font-bold">There is no Cart. </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
