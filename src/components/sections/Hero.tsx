import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const MagneticButton = ({ children, ...props }: React.ComponentProps<typeof Button>) => {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagneticEffect(0.25);
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
};

const nameWords = ["Mohammad", "Aatif", "Khan"];

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-[1]" />
      <div className="absolute inset-0 grid-pattern z-[1]" />

      {/* Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
            animate={{
              y: [0, -(20 + Math.random() * 40), 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 container mx-auto px-6 text-center">
        {/* Greeting Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-mono text-primary">Available for opportunities</span>
        </motion.div>

        {/* Name - Word by Word Reveal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          {nameWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${i === 1 ? "text-primary neon-text" : "text-foreground"}`}
            >
              {word}
              {i < nameWords.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground mb-8 font-mono max-w-2xl mx-auto"
        >
          <span className="text-primary">MERN Stack Developer</span> | AI-Powered Full-Stack Builder | Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Building intelligent, scalable web applications with modern technologies.
          Transforming complex problems into elegant digital solutions.
        </motion.p>

        {/* CTA Buttons with Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton variant="neon" size="xl" onClick={scrollToProjects} className="group">
            <FolderOpen className="w-5 h-5" />
            View Projects
          </MagneticButton>
          <MagneticButton variant="neon-outline" size="xl" asChild>
            <a href="https://drive.google.com/file/d/1l5JjP7LL9wC_tIH1x5q3JZ0QeJoxW0xV/view?usp=sharing">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground/50"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
