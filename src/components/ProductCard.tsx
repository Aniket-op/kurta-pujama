import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <Link
                to={`/product/${product.id}`}
                className="group block"
            >
                <div className="relative aspect-[3/4] overflow-hidden bg-nike-light-gray mb-3">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${product.secondImage ? "group-hover:opacity-0" : ""}`}
                        loading="lazy"
                    />
                    {product.secondImage && (
                        <img
                            src={product.secondImage}
                            alt={`${product.name} alternative view`}
                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            loading="lazy"
                        />
                    )}

                    {product.tags && product.tags.length > 0 && (
                        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`inline-block px-2 py-1 text-[10px] font-medium tracking-wide ${tag.includes("Off") || tag.includes("Sale")
                                        ? "bg-nike-red text-nike-white"
                                        : "bg-nike-white text-nike-black"
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-1">
                    <h3 className="font-medium text-[16px] text-nike-black group-hover:text-nike-secondary-text transition-colors duration-200 line-clamp-1">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-[16px] text-nike-black">
                            ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.originalPrice && (
                            <span className="font-medium text-[14px] text-nike-secondary-text line-through">
                                ₹{product.originalPrice.toLocaleString("en-IN")}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
