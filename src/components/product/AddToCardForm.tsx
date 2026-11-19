import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  quantity: z.number().min(0),
});
interface ToBuyProps {
  ToBuy: boolean;
}
export function AddToCardForm({ ToBuy }: ToBuyProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data);
    toast.success("product is add to card is successful.");
  }

  return (
    <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="mb-6 flex">
        <Button variant="outline" className="rounded-r-none">
          +
        </Button>
        <Input
          id="quantity"
          type="number"
          inputMode="numeric"
          min={0}
          {...form.register("quantity", { valueAsNumber: true })}
          className="max-w-[60px] rounded-none"
        />
        <Button variant="outline" className="rounded-l-none">
          -
        </Button>
      </div>
      <div className="flex items-center space-x-8">
        <Button
          type="button"
          size="sm"
          className={cn("bg-green-900 font-bold", !ToBuy && "bg-slate-400")}
        >
          Buy Now
        </Button>
        <Button
          type="submit"
          size="sm"
          className="font-semibold"
          variant={ToBuy ? "outline" : "default"}
        >
          Add to cart
        </Button>
      </div>
    </form>
  );
}
