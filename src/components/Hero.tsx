import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero = ({
  title = "Tessa Ickx",
  subtitle = "AI Engineer · Coding Teacher · MSc Information Engineering Technology",
}: HeroProps) => (
  <section className="relative overflow-hidden pt-16">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={heroBanner}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/40" />
    </div>

    {/* Decorative blobs */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
    </div>

    <div className="relative container mx-auto px-6 py-20 md:py-28 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-4"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>

    {/* Wave divider */}
    <div className="relative h-16 md:h-24">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
        <path
          d="M0,60 C360,100 720,20 1440,60 L1440,100 L0,100 Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>
  </section>
);

export default Hero;
