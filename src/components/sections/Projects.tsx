import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ExternalLink, Github, Sparkles, Heart, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Welth",
    subtitle: "AI Budget & Expense Platform",
    icon: Sparkles,
    description: "AI-powered full-stack platform for system-driven budgeting and expense tracking, processing 1,000+ transactions with real-time financial insights.",
    features: [
      "AI receipt scanning & smart categorization",
      "Real-time budget alerts & notifications",
      "Interactive analytics dashboards",
      "Seamless transaction management",
    ],
    tech: ["React.js", "Node.js", "Tailwind CSS", "Supabase", "JavaScript"],
    date: "Aug 2025",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "HealthifymeAI",
    subtitle: "AI Wellness Platform",
    icon: Heart,
    description: "AI-powered full-stack wellness platform supporting 10+ core features, enabling real-time diet tracking, nutrition analytics, and personalized fitness dashboards.",
    features: [
      "AI image-based food recognition",
      "Chat-driven health assistance",
      "Personalized nutrient targets",
      "Smart water & exercise tracking",
    ],
    tech: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "Apr 2025",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Contact Tracing App",
    subtitle: "Graph-Based Epidemic Monitoring",
    icon: Network,
    description: "Intelligent contact-tracing system using graph-based algorithms to visualize up to 2-hop exposure networks across 100+ simulated users in real time.",
    features: [
      "Real-time exposure network visualization",
      "Dynamic risk propagation alerts",
      "Authentication & contact management",
      "Infection status tracking dashboard",
    ],
    tech: ["Python", "Flask", "JavaScript", "C++", "HTML/CSS"],
    date: "Mar 2024",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="section-title mb-6">
              Projects & Builds
            </h2>
            <div className="neon-divider max-w-xs mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production-ready applications built with modern technologies,
              showcasing AI integration, scalable architecture, and user-centric design.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-8" staggerDelay={0.2}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="cyber-card overflow-hidden group relative"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 0 40px hsla(75, 100%, 50%, 0.12)",
                  borderColor: "hsla(75, 100%, 50%, 0.5)",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Hover overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} pointer-events-none`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column */}
                    <div className="lg:w-2/3 space-y-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <project.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </h3>
                            <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-secondary rounded">
                              {project.date}
                            </span>
                          </div>
                          <p className="text-primary/80 font-medium">{project.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + featureIndex * 0.08 }}
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech Stack with individual hover */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="tech-badge"
                            whileHover={{
                              scale: 1.08,
                              boxShadow: "0 0 12px hsla(75, 100%, 50%, 0.25)",
                              borderColor: "hsla(75, 100%, 50%, 0.6)",
                              color: "hsl(75, 100%, 50%)",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/3 flex flex-col justify-center items-start lg:items-end gap-4">
                      <Button variant="neon-outline" size="lg" className="group/btn">
                        <Github className="w-4 h-4" />
                        View Code
                        <ExternalLink className="w-4 h-4 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                      </Button>
                      <Button variant="neon-ghost" size="lg" className="group/btn">
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
