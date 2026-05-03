import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, getWhatsAppLink, products } from "@/data/products";
import EnquiryForm from "@/components/EnquiryForm";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = id ? getProductById(id) : undefined;
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const relatedProducts = product
        ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
        : [];

    if (!product) {
        return (
            <div className="min-h-screen bg-nike-white">
                <AnnouncementBar />
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="display-text text-nike-black mb-4">
                        Product Not Found
                    </h1>
                    <p className="font-medium text-[16px] text-nike-secondary-text mb-8">
                        The product you're looking for doesn't exist.
                    </p>
                    <Link to="/" className="btn-primary">
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const whatsappLink = getWhatsAppLink(product);

    return (
        <div className="min-h-screen bg-nike-white flex flex-col">
            <AnnouncementBar />
            <Navbar />

            <main className="flex-grow">
                {/* Breadcrumb */}
                <div className="mx-auto w-full max-w-[1440px] px-4 md:px-12 py-6">
                    <nav className="flex items-center gap-2 font-medium text-[14px] text-nike-secondary-text uppercase">
                        <Link to="/" className="hover:text-nike-black transition-colors">Home</Link>
                        <span>/</span>
                        <Link to={`/category/${product.category}`} className="hover:text-nike-black transition-colors">
                            {product.category.replace("-", " ")}
                        </Link>
                        <span>/</span>
                        <span className="text-nike-black">{product.name}</span>
                    </nav>
                </div>

                <section className="mx-auto w-full max-w-[1440px] px-4 md:px-12 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Images */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="aspect-[3/4] bg-nike-light-gray overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {product.secondImage && (
                                <div className="aspect-[3/4] bg-nike-light-gray overflow-hidden">
                                    <img
                                        src={product.secondImage}
                                        alt={`${product.name} detail`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col pt-4 md:pt-12"
                        >
                            <h1 className="font-heading text-[32px] md:text-[40px] font-medium text-nike-black mb-2">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="font-medium text-[24px] text-nike-black">
                                    ₹{product.price.toLocaleString("en-IN")}
                                </span>
                                {product.originalPrice && (
                                    <span className="font-medium text-[18px] text-nike-secondary-text line-through">
                                        ₹{product.originalPrice.toLocaleString("en-IN")}
                                    </span>
                                )}
                            </div>

                            <p className="font-medium text-[16px] text-nike-black leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="space-y-6 mb-10">
                                <div>
                                    <h3 className="font-heading text-[18px] text-nike-black mb-3">Select Size</h3>
                                    <div className="grid grid-cols-3 gap-2">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`py-3 border font-medium text-[16px] transition-colors rounded-full ${
                                                    selectedSize === size
                                                        ? "border-nike-black bg-nike-black text-nike-white"
                                                        : "border-nike-border-secondary text-nike-black hover:border-nike-black"
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={20} />
                                    Enquire on WhatsApp
                                </a>
                                <button
                                    onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="btn-secondary"
                                >
                                    Send an Enquiry
                                </button>
                            </div>

                            {/* Details List */}
                            <div className="mt-12 pt-8 border-t border-nike-border-secondary">
                                <h3 className="font-heading text-[18px] text-nike-black mb-4">Product Details</h3>
                                <ul className="space-y-2 font-medium text-[16px] text-nike-secondary-text">
                                    {product.fabric && <li><span className="text-nike-black">Fabric:</span> {product.fabric}</li>}
                                    {product.color && <li><span className="text-nike-black">Color:</span> {product.color}</li>}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="mx-auto w-full max-w-[1440px] px-4 md:px-12 py-16 border-t border-nike-border-secondary">
                        <div className="mb-8">
                            <h2 className="section-title">You Might Also Like</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedProducts.map((p, i) => (
                                <ProductCard key={p.id} product={p} index={i} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Product Enquiry Section */}
                <section id="enquiry-section" className="mx-auto w-full max-w-[1440px] px-4 md:px-12 py-16 border-t border-nike-border-secondary">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="section-title text-center mb-8">Have a Question?</h2>
                        <EnquiryForm prefilledProduct={product} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetail;
