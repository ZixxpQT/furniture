import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import sofer from "@/data/image/sofer.png";
import CarouselCard from "@/components/product/CarouselCard";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import BlogCard from "@/components/blog/BlogCard";
import ProductCard from "@/components/product/ProductCard";

const samplePost = posts.slice(0, 3);
const sampleProduct = products.slice(0, 4);
function Home() {
  const Title = ({
    title,
    href,
    sidetext,
  }: {
    title: string;
    href: string;
    sidetext: string;
  }) => (
    <div className="mt-28 mb-10 flex flex-col px-4 md:flex-row md:justify-between md:px-0">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link
        to={href}
        className="text-muted-foreground font-semibold underline hover:text-blue-400"
      >
        {sidetext}
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto lg:mt-0">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <section className="text-center">
          <h1 className="p-2 text-4xl font-extrabold text-[#3d5b50]">
            Modern Interior Design Studio
          </h1>
          <p className="mb-3 px-4 font-medium">
            Furniture is an essential component of any livig space,providing
            functionality,comfort, and aesthetic appeal.
          </p>
          <div className="space-x-2">
            <Button className="px-4 py-2 text-base font-bold">
              <Link to="#">Shop now</Link>
            </Button>
            <Button variant="outline" className="px-4 py-2 text-base font-bold">
              <Link to="#">Exploer</Link>
            </Button>
          </div>
        </section>
        <div className="mb-4 w-full lg:mb-24">
          <img
            src={sofer}
            alt="furniture"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
      <CarouselCard products={products} />

      <Title
        title="Feature Product "
        href="/products"
        sidetext="View All Products"
      />
      <ProductCard products={sampleProduct} />
      <Title title="Blog Post" href="/blogs" sidetext="View All Post" />
      <BlogCard posts={samplePost} />
    </div>
  );
}

export default Home;
