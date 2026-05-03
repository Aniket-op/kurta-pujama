import { motion } from "framer-motion";

const AnnouncementBar = () => (
  <div className="bg-nike-light-gray py-2 border-b border-nike-border-secondary">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center font-medium text-[12px] text-nike-black tracking-wide"
    >
      Free Delivery on all orders above ₹2000
    </motion.p>
  </div>
);

export default AnnouncementBar;
