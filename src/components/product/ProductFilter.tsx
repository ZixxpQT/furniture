import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Category } from "@/types";

interface FilterProps {
  filterList: { categories: Category[]; types: Category[] };
}

const formSchema = z.object({
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  types: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export default function ProductFilter({ filterList }: FilterProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      types: [],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Submit data ......", data);
  }

  const categories = form.watch("categories") || [];
  const types = form.watch("types") || [];

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <div className="mb-4">
          <div className="text-base">Furniture Made By</div>
        </div>
        {filterList.categories.map((item) => {
          const id = item.id.toString();
          const checked = categories.includes(id);
          return (
            <label
              key={id}
              className="flex flex-row items-start space-y-0 space-x-3"
            >
              <Checkbox
                checked={checked}
                onCheckedChange={(val) => {
                  if (val) {
                    form.setValue("categories", [...categories, id]);
                  } else {
                    form.setValue(
                      "categories",
                      categories.filter((v: string) => v !== id),
                    );
                  }
                }}
              />
              <span className="text-sm font-normal">{(item as any).name}</span>
            </label>
          );
        })}
        {form.formState.errors.categories && (
          <div className="text-sm text-red-600">
            {String(form.formState.errors.categories.message)}
          </div>
        )}
      </div>

      <div>
        <div className="mb-4">
          <div className="text-base">Furniture Types</div>
        </div>
        {filterList.types.map((item) => {
          const id = item.id.toString();
          const checked = types.includes(id);
          return (
            <label
              key={id}
              className="flex flex-row items-start space-y-0 space-x-3"
            >
              <Checkbox
                checked={checked}
                onCheckedChange={(val) => {
                  if (val) {
                    form.setValue("types", [...types, id]);
                  } else {
                    form.setValue(
                      "types",
                      types.filter((v: string) => v !== id),
                    );
                  }
                }}
              />
              <span className="text-sm font-normal">{(item as any).name}</span>
            </label>
          );
        })}
        {form.formState.errors.types && (
          <div className="text-sm text-red-600">
            {String(form.formState.errors.types.message)}
          </div>
        )}
      </div>

      <Button type="submit" variant="outline">
        Filter
      </Button>
    </form>
  );
}
