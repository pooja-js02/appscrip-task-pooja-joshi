import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsPage from "./products/page";
import Footer from "./components/Footer";

export default function Home() {
  

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductsPage />
      <Footer />
    </div>
  );
}
