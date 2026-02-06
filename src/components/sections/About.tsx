import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Code2, Brain, Rocket, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Expert in MERN stack with production-ready applications handling 1000+ transactions.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Building intelligent features like image recognition, smart categorization, and AI assistants.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Strong algorithmic thinking with experience in data structures and competitive programming.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "Proficient in React, Node.js, TypeScript, and cloud platforms like Supabase.",
  },
];

const CountUp = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl font-bold text-primary neon-text"
    >
      {target}{suffix}
    </motion.span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-title mb-6">
              Engineering Digital Excellence
            </h2>
            <div className="neon-divider max-w-xs mx-auto mb-8" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - stagger paragraphs */}
          <div className="space-y-6">
            {[
              <p key="p1" className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-primary font-semibold">Computer Science Engineering</span> student
                at Lovely Professional University with a passion for building
                <span className="text-foreground font-medium"> AI-powered full-stack applications</span>.
              </p>,
              <p key="p2" className="text-muted-foreground leading-relaxed">
                My expertise lies in the <span className="text-primary">MERN stack</span>,
                where I create scalable, user-centric platforms that solve real-world problems.
                From intelligent budget tracking systems to AI wellness platforms,
                I transform complex ideas into elegant digital solutions.
              </p>,
              <p key="p3" className="text-muted-foreground leading-relaxed">
                With a strong foundation in <span className="text-foreground">algorithms and data structures</span>,
                I approach every project with a problem-solving mindset,
                ensuring clean architecture and maintainable code.
              </p>,
            ].map((paragraph, i) => (
              <AnimatedSection key={i} direction="left" delay={0.1 + i * 0.15}>
                {paragraph}
              </AnimatedSection>
            ))}

            {/* Stats */}
            <AnimatedSection direction="left" delay={0.55}>
              <div className="flex gap-8 pt-6">
                <div className="text-center">
                  <CountUp target="3" suffix="+" />
                  <p className="text-sm text-muted-foreground mt-1">Major Projects</p>
                </div>
                <div className="text-center">
                  <CountUp target="1000" suffix="+" />
                  <p className="text-sm text-muted-foreground mt-1">Transactions Processed</p>
                </div>
                <div className="text-center">
                  <CountUp target="7.13" />
                  <p className="text-sm text-muted-foreground mt-1">CGPA</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlight Cards - staggered grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.12}>
            {highlights.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="cyber-card p-6 group cursor-default"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 0 25px hsla(75, 100%, 50%, 0.15)",
                    borderColor: "hsla(75, 100%, 50%, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
