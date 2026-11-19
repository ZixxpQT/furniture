import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="m-4 text-3xl font-bold">404 Not Found</h2>
        <p className="p-4 font-medium">This page is not avaliable</p>
        <Button>
          <Link to={"/"}>Go to Home</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
