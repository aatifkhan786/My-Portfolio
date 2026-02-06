import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "atifmahpur@gmail.com",
    href: "mailto:atifmahpur@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91-8797781250",
    href: "tel:+918797781250",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aatif25",
    href: "https://www.linkedin.com/in/aatif25/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aatifkhan786",
    href: "https://github.com/aatifkhan786",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection direction="none">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="section-title mb-6">
              Let's Build Something
            </h2>
            <div className="neon-divider max-w-xs mx-auto mb-8" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Open to exciting opportunities, collaborations, and interesting projects.
              Let's connect and create something impactful together.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-12" staggerDelay={0.1}>
            {contactInfo.map((item, index) => (
              <StaggerItem key={index}>
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="cyber-card p-6 flex items-center gap-4 group block"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 0 20px hsla(75, 100%, 50%, 0.12)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    className="p-3 rounded-xl bg-primary/10 border border-primary/20 transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/40"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium truncate group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-primary" />
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Section */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="text-center">
              <div className="cyber-card p-8 md:p-12 inline-block gradient-border">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Whether you have a specific idea or just want to explore possibilities,
                  I'm always excited to hear from you.
                </p>
                <Button variant="neon" size="xl" asChild>
                  <a href="mailto:atifmahpur@gmail.com">
                    <Send className="w-5 h-5" />
                    Send a Message
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
