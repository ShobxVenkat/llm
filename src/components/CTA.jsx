import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      className="bg-primary text-primary-foreground py-24 text-center"
      whileInView={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">
        Ready to build the future?
      </h2>
      <p className="mb-8 opacity-90">
        Join Sammunat and work on real-world projects.
      </p>
      <button className="bg-white text-black px-8 py-3 rounded-lg">
        View Opportunities
      </button>
    </motion.section>
  );
}
