import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, User, Building, MessageSquare, Send, Linkedin, Twitter, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  type: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Co-Founder & Technical Lead",
    bio: "Passionate about leveraging technology to solve real-world problems. Leading the development of SkillOS and our offline server infrastructure.",
    image: null,
  },
  {
    name: "Dylan van Niekerk",
    role: "Co-Founder & Operations Lead",
    bio: "Dedicated to bridging the digital divide in South African education. Managing partnerships and school deployment strategies.",
    image: null,
  },
];

const timeline = [
  { year: "2024", title: "The Idea", desc: "Identified the connection between e-waste crisis and digital divide" },
  { year: "2025", title: "Development", desc: "Built SkillOS prototype and secured content partnerships" },
  { year: "2026", title: "Hult Prize", desc: "Competing to bring SkillCycle to the global stage" },
  { year: "Future", title: "Scale", desc: "Expanding across South Africa and beyond" },
];

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
      {/* Hero Section */}
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
              for educational opportunity—and we're taking it to the world stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're two university students united by a shared belief that technology 
              should be accessible to everyone.
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
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border-4 border-primary/20">
                  <User size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Our Journey / Timeline */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              The SkillCycle{" "}
              <span className="text-gradient">Story</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {/* Timeline Items */}
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
                    {/* Timeline Dot */}
                    <div className="absolute left-5 w-6 h-6 rounded-full bg-primary border-4 border-background" />
                    
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <span className="text-primary text-sm font-bold">{item.year}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Hult Prize Section */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-card border border-primary/30 text-center glow-cyan"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                2026 Hult Prize
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're competing in the world's largest student competition for social 
                entrepreneurship. The Hult Prize challenges young innovators to solve 
                the world's most pressing issues.
              </p>
              <div className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                $1 Million Prize Pool
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form Section */}
      <SectionWrapper id="contact">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Form Info */}
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Get Involved</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Join the{" "}
                <span className="text-gradient">Movement</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you're a school interested in receiving devices, a company with 
                hardware to donate, or someone who wants to support our mission—we'd 
                love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Schools</h4>
                    <p className="text-sm text-muted-foreground">Inquire about receiving SkillOS laptops</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Partners</h4>
                    <p className="text-sm text-muted-foreground">Donate hardware or support our mission</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">General Inquiries</h4>
                    <p className="text-sm text-muted-foreground">Any questions or feedback</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your school or company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inquiry Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="school">School Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="hardware">Hardware Donation</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how you'd like to get involved..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-gradient-to-r from-secondary via-primary/5 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Together, We Can{" "}
            <span className="text-gradient">Change the World</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Every laptop saved is a student empowered. Every school connected 
            is a community transformed. Join the SkillCycle movement today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
              <a href="#contact">Partner With Us</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:contact@skillcycle.org">
                <Mail className="mr-2 h-4 w-4" />
                Email Us Directly
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
