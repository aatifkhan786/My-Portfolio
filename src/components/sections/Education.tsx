import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    location: "Jalandhar, Punjab",
    period: "Aug 2023 - Present",
    current: true,
  },
  {
    institution: "Z.A Islamia College",
    degree: "Intermediate",
    field: "Science Stream",
    grade: "Percentage: 70%",
    location: "Siwan, Bihar",
    period: "May 2022 - Mar 2023",
    current: false,
  },
  {
    institution: "Ravi Shankar Public School",
    degree: "Matriculation",
    field: "Secondary Education",
    grade: "Percentage: 69%",
    location: "Rosera, Bihar",
    period: "Aug 2020 - May 2021",
    current: false,
  },
];

const certifications = [
  {
    title: "Logic Building, Programming and Data Structures",
    issuer: "LPU",
    date: "Jun 2025",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Apr 2025",
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    issuer: "Coursera",
    date: "Feb 2024",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
  },
];

const TimelineLine = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute left-4 top-0 bottom-0 w-px">
      <div className="absolute inset-0 bg-border/30" />
      <motion.div
        style={{ height }}
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/50 to-primary/20"
      />
    </div>
  );
};

const TimelineNode = ({ current, index }: { current: boolean; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute left-0 top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
        current
          ? "border-primary bg-primary/20 animate-pulse-glow"
          : "border-border bg-card"
      }`}
    >
      <div className={`w-2 h-2 rounded-full ${current ? "bg-primary" : "bg-muted-foreground"}`} />
    </motion.div>
  );
};

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-card/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              Academic Journey
            </span>
            <h2 className="section-title mb-6">
              Education & Certifications
            </h2>
            <div className="neon-divider max-w-xs mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <AnimatedSection direction="left" delay={0.2}>
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>

            <div className="relative">
              <TimelineLine />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <AnimatedSection key={index} direction="left" delay={0.1 + index * 0.15}>
                    <div className="relative pl-12">
                      <TimelineNode current={edu.current} index={index} />

                      <motion.div
                        className="cyber-card p-6"
                        whileHover={{
                          y: -4,
                          boxShadow: "0 0 20px hsla(75, 100%, 50%, 0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                          {edu.current && (
                            <span className="text-xs font-mono px-2 py-0.5 bg-primary/20 text-primary rounded">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium text-sm mb-1">{edu.degree}</p>
                        <p className="text-muted-foreground text-sm mb-3">{edu.field}</p>

                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {edu.location}
                          </span>
                        </div>

                        <div className="mt-3 pt-3 border-t border-border/50">
                          <span className="text-sm font-semibold text-primary">{edu.grade}</span>
                        </div>
                      </motion.div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection direction="right" delay={0.3}>
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h3>

            <StaggerContainer className="space-y-4" staggerDelay={0.12}>
              {certifications.map((cert, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="cyber-card p-5 flex items-center justify-between gap-4"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 0 15px hsla(75, 100%, 50%, 0.1)",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm line-clamp-1">
                        {cert.title}
                      </h4>
                      <p className="text-primary text-xs mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1.5 rounded">
                      {cert.date}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Training Card */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Training
              </h3>

              <AnimatedSection direction="right" delay={0.4}>
                <motion.div
                  className="cyber-card p-6 gradient-border"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Summer Training Program
                      </h4>
                      <p className="text-primary text-sm mb-2">Lovely Professional University • Jul 2025</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Certified skill development program focused on logic building,
                        problem-solving, data structures, and algorithmic thinking.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
