import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <section id="careers" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div whileHover={{ scale: 1.02 }} className="border p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">
            Web Development Internship
          </h3>
          <p className="text-muted-foreground mb-4">
            Remote · 3–6 Months · ₹1,000/month
          </p>

          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg flex gap-2">
            Apply Now <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
