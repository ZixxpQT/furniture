import { PaginationDemo } from "@/components/product/Pagination";
import ProductCard from "@/components/product/ProductCard";
import ProductFilter from "@/components/product/ProductFilter";
import { filterList, products } from "@/data/products";

export default function Product() {
  return (
    <div className="container mx-auto">
      <section className="my-8 flex flex-col lg:flex-row lg:space-y-0">
        <section className="ml-4 w-full md:w-1/5 lg:ml-0">
          <ProductFilter filterList={filterList} />
        </section>
        <section className="ml-4 w-full">
          <div className="">
            <h1 className="mb-4 text-2xl font-semibold">Porduct List</h1>

            <ProductCard products={products} />
          </div>
        </section>
      </section>

      <div className="mb-8">
        <PaginationDemo />
      </div>
    </div>
  );
}
