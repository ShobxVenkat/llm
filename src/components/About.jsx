import { motion } from "framer-motion";
import { Globe2, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-muted/30 py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }}>
          <h2 className="text-4xl font-bold mb-6">
            Global presence, local expertise
          </h2>
          <p className="text-muted-foreground mb-6">
            Operating across USA, UAE, and India with a distributed team.
          </p>

          {[
            "Modern Tech Stack",
            "Remote-first culture",
            "Career growth",
          ].map((t) => (
            <div key={t} className="flex gap-2 mb-3">
              <CheckCircle2 className="text-primary" />
              <span>{t}</span>
            </div>
          ))}
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
          <Globe2 className="w-32 h-32 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
