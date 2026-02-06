import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Express.js", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Supabase", level: 88 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", level: 95 },
      { name: "Learning Agility", level: 90 },
      { name: "Decision-Making", level: 88 },
      { name: "Time Management", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <motion.span
          className="font-mono text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
          className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full relative"
        >
          <motion.div
            className="absolute inset-0 bg-primary/30"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              Technical Arsenal
            </span>
            <h2 className="section-title mb-6">
              Skills & Technologies
            </h2>
            <div className="neon-divider max-w-xs mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit refined through real-world projects
              and continuous learning in modern web development.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="cyber-card p-6 h-full"
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 30px hsla(75, 100%, 50%, 0.15)",
                  borderColor: "hsla(75, 100%, 50%, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-6 pb-3 border-b border-border/50">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      delay={0.2 + index * 0.1 + skillIndex * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
