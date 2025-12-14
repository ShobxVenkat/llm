import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Open Positions" },
  { value: "3", label: "Countries" },
  { value: "100%", label: "Remote" },
  { value: "1k+", label: "Applications" },
];

export default function Stats() {
  return (
    <section className="border-y bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
