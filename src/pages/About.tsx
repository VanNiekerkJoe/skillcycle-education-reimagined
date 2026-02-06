import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Twitter,
  Award,
  X,
  GraduationCap,
  Code,
  Server,
  Database,
  Brain,
  Briefcase,
  MapPin,
  Calendar,
  Zap,
  Github,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ✅ IMPORT IMAGES */
import leo from "@/assets/leo.jpg";
import dylan from "@/assets/dylan.jpg";

/* ------------------ TEAM DATA ------------------ */

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  university: string;
  degree: string;
  location: string;
  skills: { name: string; icon: React.ElementType }[];
  expertise: string[];
  quote: string;
  funFact: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Leo Van Niekerk",
    role: "Founder & CEO",
    bio: "Dedicated to bridging the digital divide in South African education. Leo combines his technical expertise with business acumen to lead SkillCycle's mission of turning e-waste into educational opportunities.",
    image: leo,
    university: "Emeris University",
    degree: "Computer Engineering",
    location: "South Africa",
    skills: [
      { name: "Programming", icon: Code },
      { name: "Databases", icon: Database },
      { name: "Business Strategy", icon: Briefcase },
    ],
    expertise: [
      "Full-Stack Development",
      "Database Architecture",
      "Business Development",
      "Strategic Planning",
      "Partnership Management",
      "EdTech Innovation",
    ],
    quote: "I was blessed to be born into a world where technology was accessible. Now I have a responsibility I can't ignore.",
    funFact: "Can debug code faster than he can make coffee ☕",
    socials: {
      linkedin: "https://linkedin.com/in/leovanniekerk",
      github: "https://github.com/leovanniekerk",
      email: "leo@skillcycle.org",
    },
  },
  {
    name: "Dylan van Niekerk",
    role: "Co-Founder & CTO",
    bio: "Passionate about leveraging technology to solve real-world problems. Dylan leads the development of SkillOS and the offline server infrastructure that powers our educational platform.",
    image: dylan,
    university: "University of Pretoria",
    degree: "Electrical Engineering",
    location: "South Africa",
    skills: [
      { name: "Servers & Infrastructure", icon: Server },
      { name: "AI & Machine Learning", icon: Brain },
      { name: "System Architecture", icon: Zap },
    ],
    expertise: [
      "Server Infrastructure",
      "Artificial Intelligence",
      "Embedded Systems",
      "Network Architecture",
      "Hardware Integration",
      "Performance Optimization",
    ],
    quote: "Every laptop saved from the landfill is a future unlocked for a child who deserves the same chances we had.",
    funFact: "Built his first server rack at age 16 🖥️",
    socials: {
      linkedin: "https://linkedin.com/in/dylanvanniekerk",
      github: "https://github.com/dylanvanniekerk",
      email: "dylan@skillcycle.org",
    },
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Idea",
    desc: "Identified the connection between e-waste crisis and digital divide",
  },
  {
    year: "2025",
    title: "Development",
    desc: "Built SkillOS prototype and secured content partnerships",
  },
  {
    year: "2026",
    title: "Hult Prize",
    desc: "Competing to bring SkillCycle to the global stage",
  },
  {
    year: "Future",
    title: "Scale",
    desc: "Expanding across South Africa and beyond",
  },
];

/* ------------------ COMPONENT ------------------ */

const About = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <Layout>
      {/* Team Member Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="text-center md:text-left">
                    <DialogTitle className="text-2xl font-bold">
                      {selectedMember.name}
                    </DialogTitle>
                    <p className="text-primary font-medium">{selectedMember.role}</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{selectedMember.location}</span>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* University & Degree */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">{selectedMember.degree}</p>
                    <p className="text-sm text-muted-foreground">{selectedMember.university}</p>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-muted-foreground">{selectedMember.bio}</p>
                </div>

                {/* Core Skills */}
                <div>
                  <h4 className="font-semibold mb-3">Core Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedMember.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
                      >
                        <skill.icon size={16} className="text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="font-semibold mb-3">Areas of Expertise</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedMember.expertise.map((exp, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary">•</span>
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-xl bg-muted border-l-4 border-primary">
                  <p className="italic text-muted-foreground">"{selectedMember.quote}"</p>
                </div>

                {/* Fun Fact */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5">
                  <span className="text-xl">💡</span>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Fun fact:</span> {selectedMember.funFact}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-border">
                  {selectedMember.socials.linkedin && (
                    <a
                      href={selectedMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {selectedMember.socials.github && (
                    <a
                      href={selectedMember.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  <a
                    href={`mailto:${selectedMember.socials.email}`}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ---------------- HERO ---------------- */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Two Students,{" "}
              <span className="text-gradient">One Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to prove that e-waste can become the foundation
              for educational opportunity—and we're taking it to the world
              stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- TEAM ---------------- */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're two university students united by a shared belief that
              technology should be accessible to everyone. Click on our profiles to learn more!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMember(member)}
                className="p-8 rounded-2xl bg-card border border-border text-center cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                {/* IMAGE */}
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-primary">
                      View Profile
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-4">
                  {member.degree} • {member.university}
                </p>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {member.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs"
                    >
                      <skill.icon size={12} />
                      {skill.name}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Linkedin size={18} />
                  </span>
                  <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Github size={18} />
                  </span>
                  <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Mail size={18} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ---------------- TIMELINE ---------------- */}
     <SectionWrapper className="bg-secondary">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-primary text-sm font-medium uppercase tracking-wider">
        Our Journey
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
        The SkillCycle <span className="text-gradient">Story</span>
      </h2>
    </div>

    <div className="max-w-3xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-20"
          >
            {/* Circles remain unchanged with original bg-primary */}
            <div className="absolute left-5 w-6 h-6 rounded-full bg-primary border-4 border-background" />
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-primary text-sm font-bold">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</SectionWrapper>

      {/* ---------------- MOTIVATION ---------------- */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Our Motivation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                The Blessing of Digital Literacy:{" "}
                <span className="text-gradient">Passing the Torch</span>
              </h2>
            </div>

            {/* The Privilege Section */}
            <div className="space-y-8">
              <Card className="border-primary/20 bg-card/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">💻</span>
                    <h3 className="text-xl font-bold">The Privilege I Can Never Forget</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    I still remember the first time I opened a laptop. The hum of the processor, 
                    the glow of the screen, the magical connection between my thoughts and this machine. 
                    That moment was a privilege—one that millions of South African children never experience.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-primary mb-3">What I Was Given (Without Asking)</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">├──</span> Parents who understood technology
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">├──</span> Schools with computer labs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">├──</span> Internet access at home
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">├──</span> The unspoken confidence that "tech is for me"
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">└──</span> A resume that says "computer literate" without thinking
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                      <h4 className="font-semibold text-destructive mb-3">What Millions Face</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">├──</span> "Have you ever used a mouse before?"
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">├──</span> "Sorry, the computer lab is for Grade 12 only"
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">├──</span> "Internet? We have one phone we share"
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive">└──</span> The shame of not knowing what others take for granted
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-6 text-foreground font-medium italic border-l-4 border-primary pl-4">
                    I was blessed to be born into a world where technology was accessible. But here's the painful truth: 
                    privilege isn't truly appreciated until you see what life looks like without it.
                  </p>
                </CardContent>
              </Card>

              {/* The Door Section */}
              <Card className="border-border bg-card/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🚪</span>
                    <h3 className="text-xl font-bold">The Door That's Slamming Shut</h3>
                  </div>

                  <div className="p-4 rounded-xl bg-muted mb-6">
                    <p className="text-sm text-muted-foreground font-mono">
                      <span className="text-primary font-semibold">TODAY'S JOB REQUIREMENTS:</span><br/>
                      "Minimum Requirements:<br/>
                      &nbsp;&nbsp;- Computer literate<br/>
                      &nbsp;&nbsp;- MS Office proficiency<br/>
                      &nbsp;&nbsp;- Email communication<br/>
                      &nbsp;&nbsp;- Online application system"
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 mb-6">
                    <h4 className="font-semibold text-destructive mb-2">The Brutal Truth</h4>
                    <p className="text-sm text-muted-foreground">
                      You can't even <strong>APPLY</strong> for most jobs without opening a laptop.<br/>
                      You can't <strong>SHOW UP</strong> for work without basic digital skills.<br/>
                      You're essentially <strong>ILLITERATE</strong> in the modern economy.
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    I've watched brilliant, capable young people—with more raw intelligence and hustle than 
                    I'll ever have—get turned away from entry-level positions because they couldn't navigate 
                    a basic spreadsheet or send a professional email. Not because they weren't smart enough, 
                    but because they never had the chance to learn.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                      <h4 className="font-semibold text-destructive mb-2">The Cycle We Must Break</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        No computer access → No digital skills → No job → No income → 
                        No computer for children → Repeat forever
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2">SkillCycle's Mission</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Computer access → Digital mastery → Job opportunities → 
                        Breaking cycles → Creating new futures
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* E-Waste to E-Hope */}
              <Card className="border-border bg-card/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🌍</span>
                    <h3 className="text-xl font-bold">From E-Waste to E-Hope</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                      <h4 className="font-semibold text-destructive mb-3">What Happens Now</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Western companies upgrade → Old laptops discarded → 
                        Shipped to African landfills → Toxic waste → 
                        Environmental damage → Health problems
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-primary mb-3">What Could Happen</h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        Western companies upgrade → We refurbish laptops → 
                        Digital classrooms created → Children educated → 
                        Communities transformed → Futures built
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    That laptop someone threw away could be the very tool that saves a child from a life 
                    of poverty. It could be the difference between "I can't" and "I will." 
                    Between hopelessness and opportunity.
                  </p>

                  <div className="p-4 rounded-xl bg-muted text-center">
                    <h4 className="font-semibold mb-3">The Beautiful Mathematics</h4>
                    <div className="text-sm text-muted-foreground font-mono">
                      <p className="mb-2">
                        <span className="text-primary">ONE</span> discarded laptop + 
                        <span className="text-primary"> ONE</span> underprivileged child + 
                        <span className="text-primary"> ONE</span> curious mind + 
                        <span className="text-primary"> ONE</span> patient teacher
                      </p>
                      <p className="text-lg font-bold text-foreground">= ONE TRANSFORMED LIFE</p>
                      <p className="mt-3 text-xs">Multiply by thousands = A TRANSFORMED CONTINENT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Global Vision */}
              <Card className="border-border bg-card/50">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🌎</span>
                    <h3 className="text-xl font-bold">A Vision for the World</h3>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                    <h4 className="font-semibold text-primary mb-3">The Global Vision</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">├──</span> South Africa: Proof of concept
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">├──</span> Africa: Continental transformation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">├──</span> Global South: Solving the same problems
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">└──</span> Worldwide: A model for educational justice
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-muted mb-6">
                    <h4 className="font-semibold mb-2">The Urgency</h4>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary font-bold">485 million</span> children in developing countries without digital access.<br/>
                      <span className="text-primary font-bold">1.3 billion</span> tons of e-waste generated globally each year.<br/>
                      <span className="font-medium text-foreground">The solution to one problem solves the other.</span>
                    </p>
                  </div>

                  <p className="text-muted-foreground italic">
                    I dream of the day when a child in rural Malawi has the same digital opportunities 
                    as a child in Munich. When a girl in Mozambique can code as confidently as a girl 
                    in California. When geography no longer determines destiny.
                  </p>
                </CardContent>
              </Card>

              {/* Passing the Blessing */}
              <Card className="border-primary/30 bg-card/50 glow-cyan">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🕊️</span>
                    <h3 className="text-xl font-bold">Passing the Blessing Forward</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 rounded-xl bg-muted">
                      <h4 className="font-semibold mb-3">What I Was Given</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• The confidence to touch technology without fear</li>
                        <li>• The understanding that computers are tools for creation</li>
                        <li>• The belief that I belong in the digital world</li>
                        <li>• The unshakeable certainty that "I can figure this out"</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-primary mb-3">What I Want to Give</h4>
                      <p className="text-sm text-muted-foreground">
                        Exactly the same blessings to every child who wonders:
                        <span className="block mt-2 italic text-foreground">
                          "Does the digital world have a place for someone like me?"
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted mb-6">
                    <h4 className="font-semibold mb-3">The Ripple Effect</h4>
                    <p className="text-xs text-muted-foreground font-mono">
                      Thabo learns to code → Starts tech business → Employs 10 people → 
                      Those employees feed families → Send children to school → 
                      Those children become doctors, engineers, teachers → 
                      <span className="text-primary font-bold"> The cycle of poverty ends forever</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* The Mission */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">✨</span>
                    <h3 className="text-xl font-bold">The Mission That Chose Us</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    This isn't just a business. This is moral mathematics:
                  </p>

                  <div className="space-y-2 text-center text-sm font-medium mb-6">
                    <p>Every discarded laptop + every eager child = <span className="text-primary">infinite possibility</span></p>
                    <p>Every privileged person like me + every underprivileged child = <span className="text-primary">responsibility</span></p>
                    <p>Every problem + every solution = <span className="text-primary">hope</span></p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="font-semibold mb-3">We Are Not Just Building Classrooms. We Are Building:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">├──</span> Confidence where there was shame
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">├──</span> Opportunity where there were closed doors
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">├──</span> Dignity where there was helplessness
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">├──</span> Future where there were dead ends
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">└──</span> Hope where there was despair
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Legacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-card border border-primary/30 glow-cyan"
              >
                <span className="text-3xl mb-4 block">🌈</span>
                <h3 className="text-xl font-bold mb-4">The Legacy We Create</h3>
                <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                  <p>I was given a gift I didn't earn. Now I have a responsibility I can't ignore.</p>
                  <p className="font-medium text-foreground">
                    It's how we turn society's trash into children's treasure.
                  </p>
                  <p>It's how we prove that every child deserves the same blessings I received.</p>
                  <p>
                    And it's how we build a world where the question isn't "Do you have access to technology?" 
                    but <span className="text-primary font-semibold">"What will you create with it?"</span>
                  </p>
                  <div className="pt-4 border-t border-border mt-6">
                    <p className="text-sm italic">
                      Our schools had computer labs. Our homes had Wi-Fi. When we broke a laptop, our parents could replace it. 
                      That access wasn't just a convenience—it was rocket fuel. It allowed two curious kids to fall in love 
                      with how things work, to fail safely, and to build the technical confidence that became our careers.
                    </p>
                    <p className="mt-4 font-bold text-primary">
                      But we've never forgotten that this was a lottery win.
                    </p>
                    <p className="mt-2 text-lg font-bold text-foreground">
                      SkillCycle is our answer to that debt.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-lg font-bold text-destructive">
                  Because no child should be told they don't belong in the future.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
