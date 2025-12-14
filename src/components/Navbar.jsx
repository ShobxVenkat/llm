import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl text-foreground">
          Sammunat LLC
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-foreground/80">
            Services
          </a>
          <a href="#about" className="hover:text-foreground/80">
            About
          </a>
          <a href="#careers" className="hover:text-foreground/80">
            Careers
          </a>

          
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden px-6 pb-4 space-y-3"
        >
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="block text-sm"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block text-sm"
          >
            About
          </a>
          <a
            href="#careers"
            onClick={() => setOpen(false)}
            className="block text-sm"
          >
            Careers
          </a>

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
            className="flex items-center gap-2 text-sm mt-2"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            Toggle Theme
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
