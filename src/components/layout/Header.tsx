import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "@/components/mode-toggle";
import AuthDropDown from "./AuthDropDown";
import { User } from "@/data/users";
import CartSheet from "./CartSheet";

function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <nav className="container mx-auto flex h-14 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="mr-8 flex flex-1 items-center justify-end space-x-4 lg:mr-0">
          <CartSheet />
          <ModeToggle />
          <AuthDropDown user={User} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
