import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-nike-black text-nike-white pt-16 pb-8 border-t border-nike-border-secondary">
    <div className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Logo */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-nike-white">
            <svg className="w-16 h-auto" viewBox="0 0 69 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M68.56 4L18.4 25.36Q12.16 28.02 6.32 28.02 2.04 28.02 2.04 24.82 2.04 22.48 7.04 19.06L36.1 0.44Q31.12 1.44 26.64 1.44 15.86 1.44 8.66 8.52 3.12 13.88 1.12 21.02 -1.12 29.1 2.34 32.76 5.82 36.42 14.12 33.16L68.56 10.04z" fill="currentColor"/>
            </svg>
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
