import RegisterForm from "@/components/auth/RegisterForm";
import { icons } from "@/components/Icons";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Link
        to="/"
        className="fixed top-8 left-8 flex flex-row items-center text-xl font-bold"
      >
        <icons.logo className="mr-4 size-6" /> <span>Furniture Shop</span>
      </Link>
      <RegisterForm />
    </div>
  );
}
