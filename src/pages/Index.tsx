import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedCollections from "@/components/FeaturedCollections";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

const Index = () => {
  const newArrivals = getProductsByCategory("new-arrivals").slice(0, 4);

  return (
    <div className="min-h-screen bg-nike-white">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <CategorySection />
      
      <section className="mx-auto w-full px-4 md:px-12 py-12">
        <div className="mb-8 flex justify-between items-end">
          <h2 className="section-title">New Arrivals</h2>
          <a href="/category/new-arrivals" className="font-medium text-[16px] text-nike-black hover:text-nike-secondary-text">Shop All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newArrivals.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </section>

      <FeaturedCollections />
      <Footer />
    </div>
  );
};

export default Index;
