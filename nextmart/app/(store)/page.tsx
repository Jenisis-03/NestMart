import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  //console.log(crypto.randomUUID().slice(0,5)//+'>>> Rendered the Home Page Cache With $//{products.length} Products and ${categories.length} Categories' );
  return (
    <div>
      Hello World
      {/* RENDER ALL THE PRODUCTS */}
      <div>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
