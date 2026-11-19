import type { Cart } from "@/types";
import { Separator } from "@/components/ui/separator";
import { CartButton } from "./CartButton";

interface CartProps {
  cart: Cart;
}
export default function CartItem({ cart }: CartProps) {
  return (
    <div className="ml-4 flex flex-col gap-4">
      <div className="mt-3 flex gap-3">
        <img
          src={cart.image.url}
          alt={cart.image.name}
          key={cart.id}
          className="w-20 rounded-sm"
        />
        <div className="flex flex-col space-y-2">
          <span className="text-md font-bold">{cart.name}</span>
          <span className="text-muted-foreground text-sm">
            {`$ ${cart.price} x ${cart.quantity} = $ ${cart.price * cart.quantity}`}
          </span>
          <span className="text-muted-foreground text-sm">{`${cart.category} / ${cart.subcategory}`}</span>
        </div>
      </div>
      <div className="">
        <CartButton />
      </div>
      <Separator />
    </div>
  );
}
