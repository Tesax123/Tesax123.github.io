import Navbar from "@/components/Navbar";
import profilePortrait from "@/assets/profile-portrait.jpg";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  Gamepad2,
  Code2,
  Cloud,
  Brain,
  Wrench,
  Sparkles,
  Layers,
  ExternalLink,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const skillCategories = [
  {
    icon: <Code2 size={20} />,
    title: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
    color: "border-primary/30 bg-primary/5",
  },
  {
    icon: <Layers size={20} />,
    title: "Frameworks",
    items: ["Angular", "React", "Flask"],
    color: "border-teal/30 bg-teal/5",
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud & DevOps",
    items: ["Azure", "Azure DevOps", "Azure AI Foundry", "Docker", "CI/CD", "Git"],
    color: "border-secondary/30 bg-secondary/5",
  },
  {
    icon: <Brain size={20} />,
    title: "AI & Data Science",
    items: ["Machine Learning", "LLMs", "Vector Stores", "RAG", "MCP", "Scikit-learn", "CatBoost"],
    color: "border-coral/30 bg-coral/5",
  },
  {
    icon: <Wrench size={20} />,
    title: "Other Tools",
    items: ["Jira", "Confluence", "LaTeX", "Firebase", "REST APIs", "Agile/Scrum"],
    color: "border-amber/30 bg-amber/5",
  },
  {
    icon: <Sparkles size={20} />,
    title: "AI Tools",
    items: ["GitHub Copilot", "Cursor", "Claude.ai", "Antigravity"],
    color: "border-primary/30 bg-primary/5",
  },
];

const experience = [
  {
    role: "Data Scientist / AI Engineer",
    company: "Cegeka",
    period: "Sep 2022 – Present",
    description:
      "Building AI solutions for clients — from custom chatbots, to document processing tools, to some data engineering on Azure and Databricks. Leading development in agile teams delivering production-grade AI systems.",
  },
  {
    role: "Coding Teacher",
    company: "CodeFever",
    period: "Sep 2022 – Present",
    description:
      "Teaching kids and teens (ages 8-18) to code in a fun way, on Saturdays. I teach multiple classes of Python, AI, web design (html, css, javascript), micro:bit and Scratch. I also volunteer to help improve the Python material.",
  },
];

const education = [
  {
    degree: "MSc Information Engineering Technology",
    school: "Ghent University",
    period: "2018 – 2022",
    note: "Magna Cum Laude",
  },
  {
    degree: "Honours Programme — Quetelet Lectures",
    school: "Ghent University",
    period: "2019 – 2021",
    note: "Interdisciplinary lecture series on data & statistics",
  },
];

const achievements = [
  {
    year: "2026",
    text: "Top 5 Rising Tech Star — She Goes ICT",
    url: "https://shegoesict.be/",
  },
  {
    year: "2026",
    text: "Finalist 'Prille Klimmer', de Ondernemers\u00ADaward by Broeikas (Aalst)",
    url: "https://www.broeikas.be/ondernemersaward",
  },
  {
    year: "2025",
    text: "Finalist of Data & AI Challenge by De Lijn",
  },
  {
    year: "2025",
    text: "Winner Next-Gen Barcode Challenge by Colruyt Group IT",
    url: "https://www.linkedin.com/posts/colruyt-group-it_colruytgroup-colruytgroupit-event-activity-7331585990051909634-s7UA/",
  },
  {
    year: "2024",
    text: "TNW - T500 member",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7155985489332682752/",
  },
  {
    year: "2023",
    text: "Summer school for Female Leadership participant",
    url: "https://www.ugent.be/nl/univgent/waarvoor-staat-ugent/diversiteit/gender/summerschool",
  },
  {
    year: "2023",
    text: "Winner 'Best Developer Challenge' by De Lijn",
    url: "https://delijn.prezly.com/winnaars-best-student-developer-challenge-2023-van-de-lijn-bekendgemaakt",
  },
  {
    year: "2022",
    text: "First Ascent International participant in Milan",
    url: "https://firstascent.io/",
  },
  {
    year: "2022",
    text: "Finalist Big Data Challenge by De Lijn",
  },
  {
    year: "2022",
    text: "Finalist 'Best Python developer challenge' by Cluepoints",
  },
  {
    year: "2022",
    text: "Finalist 'IT young potential' by Cisco",
  },
  {
    year: "2019",
    text: "Second place 'IT young potential challenge' by BNP Paribas Fortis",
    url: "https://www.linkedin.com/pulse/young-potential-challenge-belgium-2019-bnp-paribas-fortis-max-jadot/",
  },
  {
    year: "2018",
    text: "Finalist 'Python challenge' by Cisco",
  },
  {
    year: "2017 & 2018",
    text: "Finalist Belgian Informatics Olympiad (BeOI)",
  },
];

const hobbies = [
  "🤹‍♀️ Circus performer",
  "🎮 VR Gaming & PC gaming",
  "🛹 Skateboarding",
  "👩‍💻 Electronics",
  "🦢 Origami",
  "😉 Creating websites like this one",
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero subtitle="AI Engineer · Coding Teacher · Creative Problem Solver" />

    {/* Bio */}
    <section className="container mx-auto px-6 py-16 max-w-4xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <img
            src={profilePortrait}
            alt="Tessa Ickx"
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg border-2 border-primary/20"
          />
        </motion.div>
        <motion.p {...fadeIn} className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
          Hi! I'm <span className="font-semibold text-foreground">Tessa</span>. I am an AI engineer at{" "}
          <span className="text-primary font-medium">Cegeka</span> and a coding teacher at{" "}
          <span className="text-primary font-medium">CodeFever</span>. I love building smart solutions and
          inspiring the next generation of coders. In the few moments I am not (teaching about) coding, you can find me
          performing circus tricks, gaming in VR, or working on creative side projects. Although most of them involve a lot of coding as well 😉
        </motion.p>
      </div>
    </section>

    {/* Skills */}
    <section className="container mx-auto px-6 py-12">
      <motion.h2 {...fadeIn} className="text-3xl font-display font-bold text-center mb-10">
        Skills & Expertise
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`rounded-xl border p-5 ${cat.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center gap-2 mb-3 font-display font-semibold">
              {cat.icon}
              {cat.title}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <Badge key={item} variant="secondary" className="text-xs font-normal">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Experience */}
    <section className="container mx-auto px-6 py-12 max-w-3xl">
      <motion.h2 {...fadeIn} className="text-3xl font-display font-bold text-center mb-10">
        <Briefcase className="inline mr-2 mb-1" size={28} /> Experience
      </motion.h2>
      <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{exp.period}</p>
            <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
            <p className="text-primary font-medium text-sm">{exp.company}</p>
            <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Education */}
    <section className="container mx-auto px-6 py-12 max-w-3xl">
      <motion.h2 {...fadeIn} className="text-3xl font-display font-bold text-center mb-10">
        <GraduationCap className="inline mr-2 mb-1" size={28} /> Education
      </motion.h2>
      <div className="relative border-l-2 border-secondary/40 pl-8 space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-background" />
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{edu.period}</p>
            <h3 className="font-display font-semibold text-lg">{edu.degree}</h3>
            <p className="text-primary font-medium text-sm">{edu.school}</p>
            {edu.note && (
              <Badge variant="outline" className="mt-1 text-xs">
                {edu.note}
              </Badge>
            )}
          </motion.div>
        ))}
      </div>
    </section>

    {/* Achievements */}
    <section className="container mx-auto px-6 py-12 max-w-3xl">
      <motion.h2 {...fadeIn} className="text-3xl font-display font-bold text-center mb-8">
        <Trophy className="inline mr-2 mb-1" size={28} /> Selected Achievements
      </motion.h2>
      <ul className="space-y-3">
        {achievements.map((a, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3 flex items-center justify-between gap-3"
          >
            <span>
              <span className="font-semibold text-foreground mr-2">{a.year}</span>
              {a.text}
            </span>
            {a.url && (
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-xs font-medium"
              >
                More info <ExternalLink size={12} />
              </a>
            )}
          </motion.li>
        ))}
      </ul>
    </section>

    {/* Hobbies */}
    <section className="container mx-auto px-6 py-12 max-w-3xl">
      <motion.h2 {...fadeIn} className="text-3xl font-display font-bold text-center mb-8">
        <Gamepad2 className="inline mr-2 mb-1" size={28} /> Hobbies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {hobbies.map((h) => (
          <Badge
            key={h}
            className="text-sm px-4 py-2 rounded-full bg-primary/10 text-foreground border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
          >
            {h}
          </Badge>
        ))}
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default About;
