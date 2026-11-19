import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Link } from "react-router";
import type { MainNavItem } from "@/types";
import { icons } from "@/components/Icons";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
// import { FlaskRound } from "lucide-react";

interface MainNavigationProps {
  items: MainNavItem[];
}

export default function MobileNavigation({ items }: MainNavigationProps) {
  const [isDesktop, setIsDeaktop] = useState(false);
  const query = "(min-width:1024px)";

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setIsDeaktop(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  if (isDesktop) {
    return null;
  }
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <icons.menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetClose asChild>
            <Link
              to="/"
              className="flex items-center space-x-2 pt-8 pl-3 no-underline"
            >
              <icons.logo className="ml-4 size-4" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>

          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
            <Accordion
              type="multiple"
              //collapsible
              defaultValue={["shipping"]}
              className="max-w-lg border-b px-4"
            >
              {items?.[0]?.card && (
                <AccordionItem value="shipping">
                  <AccordionTrigger>
                    {siteConfig.mainNav[0].title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3">
                      {items[0].card.map((item) => (
                        <SheetClose key={item.title} asChild>
                          <Link
                            to={String(item.href)}
                            className="text-foreground/70 no-underline!"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
            <div className="mt-4 ml-3 flex flex-col gap-4 font-medium">
              {items?.[0]?.menu?.map((item) => (
                <SheetClose
                  asChild
                  key={item.title}
                  className="hover:font-bold"
                >
                  <Link to={String(item.href)}>{item.title}</Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
