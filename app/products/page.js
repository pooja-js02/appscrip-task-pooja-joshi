import ProductsPageClient from "./ProductsPageClient";
export const dynamic = "force-dynamic";
export default async function ProductsPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", 
  });
  const products = await res.json();

  return <ProductsPageClient products={products} />;
}
