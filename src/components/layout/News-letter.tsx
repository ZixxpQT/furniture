import { icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
});

export default function NewsletterForm() {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(data: z.infer<typeof emailSchema>) {
    console.log("newsletter submit:", data);
    form.reset();
  }

  const emailError = form.formState.errors.email
    ? [{ message: String(form.formState.errors.email.message) }]
    : undefined;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid w-full pr-12 lg:pr-0"
    >
      <Field orientation="horizontal">
        <Input
          type="email"
          placeholder="email..."
          {...form.register("email")}
        />
        <Button type="submit" aria-label="Subscribe">
          <icons.paperplane />
        </Button>
      </Field>
      <FieldError errors={emailError} />
    </form>
  );
}
