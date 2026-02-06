import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/aatifkhan786", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aatif25/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:atifmahpur@gmail.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-foreground">
              Aatif<span className="text-primary">.</span>
            </span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mohammad Aatif Khan. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_hsla(75,100%,50%,0.2)] transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Made with */}
          <p className="text-sm text-muted-foreground font-mono">
            Built with <span className="text-primary">♥</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
