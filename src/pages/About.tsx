import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  User,
  Building,
  MessageSquare,
  Send,
  Linkedin,
  Twitter,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useToast } from "@/hooks/use-toast";

/* ✅ IMPORT IMAGES */
import leo from "@/assets/leo.jpg";
import dylan from "@/assets/dylan.jpg";

/* ------------------ FORM SCHEMA ------------------ */

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  type: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/* ------------------ DATA ------------------ */

const teamMembers = [
  {
    name: "Leo Van Niekerk",
    role: "Founder & CEO",
    bio: "Dedicated to bridging the digital divide in South African education. Managing partnerships and school deployment strategies.",
    image: leo,
  },
  {
    name: "Dylan van Niekerk",
    role: "Co-Founder & CTO",
    bio: "Passionate about leveraging technology to solve real-world problems. Leading the development of SkillOS and our offline server infrastructure.",
    image: dylan,
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
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      type: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <Layout>
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
              technology should be accessible to everyone.
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
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                {/* ✅ IMAGE */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-primary/20"
                />

                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3">
                  <a className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10">
                    <Linkedin size={18} />
                  </a>
                  <a className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10">
                    <Twitter size={18} />
                  </a>
                  <a className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10">
                    <Mail size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ---------------- TIMELINE ---------------- */}
      <SectionWrapper>
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
    </Layout>
  );
};

export default About;
