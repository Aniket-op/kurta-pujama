import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const collections = [
  { 
    title: "WEDDING COLLECTION", 
    slug: "kurta-pajama", 
    image: "/images/wedding_collection.png",
    subtitle: "Regal Sherwanis & Kurtas"
  },
  { 
    title: "FESTIVE DROP", 
    slug: "ladies-suits", 
    image: "/images/festive_drop.png",
    subtitle: "Vibrant New Arrivals"
  },
  { 
    title: "OFFICE ESSENTIALS", 
    slug: "pant-shirts", 
    image: "/images/office_essentials.png",
    subtitle: "Sharp Tailored Fits"
  },
];

const FeaturedCollections = () => (
  <section className="w-full">
    {collections.map((col, i) => (
      <motion.div
        key={col.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="group relative block w-full h-[50vh] md:h-[70vh] overflow-hidden"
      >
        <Link to={`/category/${col.slug}`} className="block w-full h-full">
          <img
            src={col.image}
            alt={col.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="display-text text-nike-white mb-4">
              {col.title}
            </h3>
            <p className="font-medium text-[16px] md:text-[20px] text-nike-snow mb-8">
              {col.subtitle}
            </p>
            <span className="btn-primary-dark">
              Shop Now
            </span>
          </div>
        </Link>
      </motion.div>
    ))}
  </section>
);

export default FeaturedCollections;
