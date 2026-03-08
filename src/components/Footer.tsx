import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 mt-20">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Tessa Ickx</p>
      <a
        href="https://www.linkedin.com/in/tessaickx/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Linkedin size={16} /> LinkedIn
      </a>
    </div>
  </footer>
);

export default Footer;
