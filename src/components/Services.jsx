import { motion } from "framer-motion";
import { Code2, Zap, Globe2, Users, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Code2, title: "React & Next.js", desc: "Modern, SEO-ready web apps." },
  { icon: Zap, title: "Node.js Backend", desc: "Scalable APIs & services." },
  { icon: Globe2, title: "Full Stack", desc: "End-to-end product development." },
  { icon: Users, title: "UI/UX", desc: "Clean, usable interfaces." },
  { icon: CheckCircle2, title: "QA", desc: "Production-ready quality." },
];

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 border rounded-xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <s.icon className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
