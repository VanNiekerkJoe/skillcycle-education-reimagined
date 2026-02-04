import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/skillcycle-logo.png";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "The Problem", path: "/problem" },
  { name: "Our Solution", path: "/solution" },
  { name: "Impact", path: "/impact" },
  { name: "About", path: "/about" },
];

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:contact@skillcycle.org" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="SkillCycle" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-md mb-4">
              Turning E-Waste Into Education. We're on a mission to bridge the digital divide 
              by giving old laptops new purpose in underprivileged schools across South Africa.
            </p>
            <p className="text-sm text-primary font-medium">
              🏆 2026 Hult Prize Competition Entry
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/about#contact"
                className="text-primary hover:text-cyan-glow font-medium transition-colors duration-200"
              >
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 SkillCycle. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with 💙 for the Hult Prize Competition
          </p>
        </div>
      </div>
    </footer>
  );
};
