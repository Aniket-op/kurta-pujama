import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { title: "Kurta Pajama", slug: "kurta-pajama", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop" },
  { title: "Ladies Suits", slug: "ladies-suits", image: "https://images.unsplash.com/photo-1610118331165-373307b227eb?q=80&w=800&auto=format&fit=crop" },
  { title: "Turban", slug: "turban", image: "https://images.unsplash.com/photo-1613038634127-d4a9ec0ed154?q=80&w=800&auto=format&fit=crop" },
  { title: "Pant Shirts", slug: "pant-shirts", image: "https://images.unsplash.com/photo-1594938298596-39e51dd617be?q=80&w=800&auto=format&fit=crop" },
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
