import { Linkedin, Instagram, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © 2025 Sammunat LLC
        </p>

        <div className="flex gap-4">
          <a href="#"><Linkedin /></a>
          <a href="#"><Instagram /></a>
          <a href="#"><MessageSquare /></a>
        </div>
      </div>
    </footer>
  );
}
