import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-nike-black text-nike-white pt-16 pb-8 border-t border-nike-border-secondary">
    <div className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Logo */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="font-heading text-[24px] uppercase tracking-widest text-nike-white">
            YOUR LOGO
          </Link>
        </div>
        
        {/* Column 2: Categories */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[18px] uppercase tracking-wider mb-2 text-nike-white">Categories</h4>
          <Link to="/category/kurta-pajama" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Kurta Pajama</Link>
          <Link to="/category/ladies-suits" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Ladies Suits</Link>
          <Link to="/category/turban" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Turban</Link>
          <Link to="/category/pant-shirts" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Pant Shirts</Link>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[18px] uppercase tracking-wider mb-2 text-nike-white">Company</h4>
          <Link to="/privacy-policy" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-condition" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Terms & Condition</Link>
          <Link to="/faq" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">FAQ</Link>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center pt-8 border-t border-nike-secondary-text/20">
        <span className="font-medium text-[12px] text-nike-secondary-text">
          © {new Date().getFullYear()} Elite Attire. All Rights Reserved
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
