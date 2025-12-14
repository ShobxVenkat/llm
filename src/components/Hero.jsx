import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-28 relative"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Now Hiring Web Developers
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Building digital products that drive innovation
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            A multinational IT company building scalable web applications using
            React, Node.js, and modern tech.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg flex items-center gap-2">
              View Opportunities <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
