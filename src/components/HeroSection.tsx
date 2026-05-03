import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=2000&auto=format&fit=crop",
    headline: "OWN YOUR TRADITION",
    subtext: "Premium Kurta Pajamas. Crafted for the Modern Man.",
    cta: "Shop Men",
    slug: "kurta-pajama",
  },
  {
    image: "https://images.unsplash.com/photo-1610118331165-373307b227eb?q=80&w=2000&auto=format&fit=crop",
    headline: "DESI. MODERN. POWERFUL.",
    subtext: "Elegant Salwar Kameez. Express Your Identity.",
    cta: "Shop Women",
    slug: "ladies-suits",
  },
  {
    image: "https://images.unsplash.com/photo-1613038634127-d4a9ec0ed154?q=80&w=2000&auto=format&fit=crop",
    headline: "CROWN OF PRIDE",
    subtext: "Vibrant Turbans in Premium Fabrics.",
    cta: "Shop Turban",
    slug: "turban",
  },
  {
    image: "https://images.unsplash.com/photo-1594938298596-39e51dd617be?q=80&w=2000&auto=format&fit=crop",
    headline: "SHARP. EVERYDAY.",
    subtext: "Tailored Pant Shirts for Formal & Casual Wear.",
    cta: "Shop Essentials",
    slug: "pant-shirts",
  },
];

const SLIDE_DURATION = 6000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  const slide = slides[current];

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-nike-black">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-12 text-center flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="pointer-events-auto"
            >
              <h1 className="display-text text-nike-white drop-shadow-sm">
                {slide.headline}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto font-medium text-[16px] md:text-[20px] text-nike-snow drop-shadow-sm">
                {slide.subtext}
              </p>
              <div className="mt-8 flex justify-center">
                <Link to={`/category/${slide.slug}`} className="btn-primary-dark">
                  {slide.cta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 btn-icon bg-nike-white/10 hover:bg-nike-white/20 text-nike-white backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 btn-icon bg-nike-white/10 hover:bg-nike-white/20 text-nike-white backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
