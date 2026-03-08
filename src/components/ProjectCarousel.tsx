import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import imgLogicGame from "@/assets/project-logic-game.png";
import imgNamecard from "@/assets/project-namecard.png";
import imgPaths from "@/assets/project-paths.png";
import imgKatz from "@/assets/project-katz.png";
import imgThesis from "@/assets/project-thesis.png";
import imgCsv from "@/assets/project-csv.png";
import imgPixiboo from "@/assets/project-pixiboo.png";

interface Project {
  title: string;
  year: string;
  description: string;
  tech: string[];
  url?: string;
  comingSoon?: boolean;
  accent: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Pixiboo",
    year: "2025 – now",
    description:
      "An upcoming product, called Pixiboo, to teach kids programming in an accessible and creative way. Stay tuned!",
    tech: ["Hardware", "Coding for Kids"],
    url: "https://pixi.boo/",
    comingSoon: true,
    accent: "bg-coral/10 text-coral",
    image: imgPixiboo,
  },
  {
    title: "Logic Game",
    year: "2019 – 2023",
    description:
      "An interactive game to practice and learn logical operators (AND, OR, NOT) through progressively challenging levels.",
    tech: ["Angular", "TypeScript", "CSS"],
    url: "https://logicgame.tickx.me",
    accent: "bg-primary/10 text-primary",
    image: imgLogicGame,
  },
  {
    title: "CodeFever Name Card Maker",
    year: "2023",
    description:
      "A creative web tool that lets CodeFever teacher download printable name cards to use in their CodeFever classes. Used by a lot of teachers!",
    tech: ["Python", "Flask", "HTML/CSS"],
    url: "https://tickxit.pythonanywhere.com",
    accent: "bg-teal/10 text-teal",
    image: imgNamecard,
  },
  {
    title: "KATZ-schaal Berekening",
    year: "2026",
    description:
      "A web tool to calculate Katz-scores based on the RIZIV guidelines, used for Belgian healthcare. Built to replace a tool that was taken offline.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://katz-schaal.web.app",
    accent: "bg-teal/15 text-teal",
    image: imgKatz,
  },
  {
    title: "Relative Paths Game",
    year: "2024",
    description:
      "An educational game to help students understand and practice relative file paths in a visual file-tree interface. Built to utilize in CodeFever classes.",
    tech: ["React", "TypeScript"],
    url: "https://paths.tickx.me",
    accent: "bg-amber/10 text-amber",
    image: imgPaths,
  },
  {
    title: "Lesson Plan: CSV Processing",
    year: "2025",
    description:
      "A comprehensive lesson plan (in Dutch) teaching students how to read, process and analyze CSV files with Python. Built for a university project.",
    tech: ["Python", "Education", "Dutch"],
    url: "https://klasmanagement.tickx.me",
    accent: "bg-secondary/15 text-secondary-foreground",
    image: imgCsv,
  },
  {
    title: "Motif Discovery (Thesis)",
    year: "2022",
    description:
      "Master's thesis research on discovering informative motifs in time series data using CatBoost and feature engineering.",
    tech: ["Python", "Pandas", "CatBoost", "Scikit-learn"],
    accent: "bg-primary/10 text-primary",
    image: imgThesis,
  },
];

const ProjectCarousel = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
      >
        Projects & Creations
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="h-full"
          >
            <div className="group relative h-full rounded-xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {project.comingSoon && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="gap-1 text-xs shadow-md">
                      <Sparkles size={12} /> Coming Soon
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-muted-foreground font-medium mb-1">{project.year}</p>
                <h3 className="font-display font-semibold text-base mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${project.accent}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit gap-2 mt-auto"
                    asChild
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
