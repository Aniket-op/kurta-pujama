import { motion } from "framer-motion";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";

const CategoryPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [searchParams] = useSearchParams();
    const subcategory = searchParams.get("sub");
    
    const category = categories.find((c) => c.slug === slug);
    let categoryProducts = slug ? getProductsByCategory(slug) : [];

    if (subcategory) {
        categoryProducts = categoryProducts.filter((p) => {
            const searchTerms = [p.name.toLowerCase(), ...(p.tags?.map(t => t.toLowerCase()) || [])];
            return searchTerms.some(term => term.includes(subcategory.toLowerCase()));
        });
    }

    if (!category) {
        return (
            <div className="min-h-screen bg-nike-white">
                <AnnouncementBar />
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="display-text text-nike-black mb-4">
                        Category Not Found
                    </h1>
                    <p className="font-medium text-[16px] text-nike-secondary-text mb-8">
                        The category you're looking for doesn't exist.
                    </p>
                    <Link to="/" className="btn-primary">
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-nike-white flex flex-col">
            <AnnouncementBar />
            <Navbar />

            <main className="flex-grow">
                {/* Category Header */}
                <section className="pt-12 pb-8 px-4 md:px-12 max-w-[1440px] mx-auto w-full border-b border-nike-border-secondary">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <nav className="mb-4">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 font-medium text-[14px] text-nike-secondary-text hover:text-nike-black transition-colors uppercase"
                            >
                                <ArrowLeft size={16} />
                                Back
                            </Link>
                        </nav>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-nike-black capitalize">
                                    {subcategory ? `${subcategory} - ${category.name}` : category.name}
                                </h1>
                                <p className="mt-2 font-medium text-[16px] text-nike-secondary-text max-w-2xl">
                                    {category.description}
                                </p>
                            </div>
                            <p className="font-medium text-[14px] text-nike-secondary-text">
                                {categoryProducts.length} {categoryProducts.length === 1 ? "Product" : "Products"}
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Product Grid */}
                <section className="mx-auto w-full max-w-[1440px] px-4 md:px-12 py-12">
                    {categoryProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {categoryProducts.map((product, i) => (
                                <ProductCard key={product.id} product={product} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="font-medium text-[16px] text-nike-secondary-text">
                                No products found in this category.
                            </p>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CategoryPage;
