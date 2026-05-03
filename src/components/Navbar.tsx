import { Search, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Men", slug: "men" },
  { label: "Women", slug: "women" },
  { label: "Turban", slug: "turban" },
  { label: "Sale", slug: "sale" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-nike-white/95 backdrop-blur-md border-b border-nike-border-secondary shadow-sm"
        : "bg-nike-white border-b border-nike-border-secondary"
        }`}
    >
      <div className="mx-auto flex h-[60px] max-w-[1440px] items-center justify-between px-4 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-display text-2xl md:text-3xl font-medium tracking-tight text-nike-black leading-none">
            ELITE ATTIRE
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.slug}>
              <Link
                to={`/category/${link.slug}`}
                className="font-medium text-[16px] text-nike-black hover:text-nike-secondary-text transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons / Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-nike-light-gray rounded-[24px] px-4 py-2 hover:bg-nike-hover-gray transition-colors">
            <Search size={20} className="text-nike-black mr-2" strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none text-[16px] font-medium text-nike-black w-32 placeholder:text-nike-secondary-text"
            />
          </div>
          
          <button className="btn-icon hidden md:flex">
            <Phone size={20} className="text-nike-black" strokeWidth={1.5} />
          </button>
          
          <button
            className="lg:hidden text-nike-black btn-icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full h-screen bg-nike-white px-6 py-6 animate-in slide-in-from-right z-40">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.slug}>
                <Link
                  to={`/category/${link.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-2xl text-nike-black hover:text-nike-secondary-text transition-colors block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6 border-t border-nike-border-secondary">
               <div className="flex items-center bg-nike-light-gray rounded-[24px] px-4 py-3 mb-4">
                  <Search size={20} className="text-nike-black mr-2" />
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-transparent border-none outline-none text-[16px] font-medium text-nike-black w-full placeholder:text-nike-secondary-text"
                  />
               </div>
            </li>
            <li>
              <a href="tel:+918307473499" className="flex items-center gap-3 font-medium text-lg text-nike-black">
                <Phone size={20} /> Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
