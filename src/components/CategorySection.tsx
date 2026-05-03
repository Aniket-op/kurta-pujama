import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { title: "Kurta Pajama", slug: "kurta-pajama", image: "/images/kp1_primary.png" },
  { title: "Ladies Suits", slug: "ladies-suits", image: "/images/ls1_primary.png" },
  { title: "Turban", slug: "turban", image: "/images/t1_primary.png" },
  { title: "Pant Shirts", slug: "pant-shirts", image: "/images/ps1_primary.png" },
];

const CategorySection = () => (
  <section className="mx-auto w-full px-4 md:px-12 py-12">
    <div className="mb-8">
      <h2 className="section-title">Shop by Category</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative block aspect-[3/4] overflow-hidden bg-nike-light-gray"
        >
          <Link to={`/category/${cat.slug}`} className="block w-full h-full">
            <img
              src={cat.image}
              alt={cat.title}
              className="h-full w-full object-cover hover-scale"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
              <h3 className="font-heading text-[24px] font-medium text-nike-white">
                {cat.title}
              </h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CategorySection;
