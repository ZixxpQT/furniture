import { Link } from "react-router";
import { icons } from "@/components/Icons";
import LoginForm from "@/components/auth/LoginForm";
import Photo from "@/data/image/house.webp";
export default function Login() {
  return (
    <div className="relative">
      <Link
        to="/"
        className="fixed top-6 left-8 flex items-center text-xl font-bold"
      >
        <icons.logo className="mr-2.5 size-6" /> <span>Furinture Shop</span>
      </Link>
      <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex w-full items-center justify-center">
          <LoginForm />
        </div>
        <div className="hidden size-full lg:block">
          <img
            src={Photo}
            alt="Furniture Photo"
            className="inset-0 object-cover"
          />
        </div>
      </main>
    </div>
  );
}
