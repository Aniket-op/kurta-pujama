import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-nike-black text-nike-white pt-16 pb-8">
    <div className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[18px] uppercase tracking-wider mb-2">Find a Store</h4>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors uppercase">Become a Member</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors uppercase">Sign Up for Email</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors uppercase">Send Us Feedback</Link>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[18px] uppercase tracking-wider mb-2">Get Help</h4>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Order Status</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Delivery</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Returns</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Payment Options</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-[18px] uppercase tracking-wider mb-2">About Elite Attire</h4>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">News</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Careers</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Investors</Link>
          <Link to="#" className="font-medium text-[14px] text-nike-secondary-text hover:text-nike-white transition-colors">Sustainability</Link>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <a href="#" className="w-8 h-8 rounded-full bg-nike-secondary-text/30 flex items-center justify-center hover:bg-nike-white transition-colors group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-nike-white group-hover:text-nike-black transition-colors"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-nike-secondary-text/30 flex items-center justify-center hover:bg-nike-white transition-colors group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-nike-white group-hover:text-nike-black transition-colors"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-nike-secondary-text/30 flex items-center justify-center hover:bg-nike-white transition-colors group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nike-white group-hover:text-nike-black transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-nike-secondary-text/20">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="font-medium text-[12px] text-nike-secondary-text">
            © {new Date().getFullYear()} Elite Attire, Inc. All Rights Reserved
          </span>
        </div>
        <div className="flex gap-6">
          <Link to="#" className="font-medium text-[12px] text-nike-secondary-text hover:text-nike-white transition-colors">Guides</Link>
          <Link to="#" className="font-medium text-[12px] text-nike-secondary-text hover:text-nike-white transition-colors">Terms of Sale</Link>
          <Link to="#" className="font-medium text-[12px] text-nike-secondary-text hover:text-nike-white transition-colors">Terms of Use</Link>
          <Link to="#" className="font-medium text-[12px] text-nike-secondary-text hover:text-nike-white transition-colors">Nike Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
