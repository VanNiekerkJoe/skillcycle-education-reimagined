import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import {
  Mail,
  User,
  Building,
  MessageSquare,
  Send,
  School,
  Handshake,
  Heart,
  Laptop,
  Globe,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
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
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  type: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const involvementOptions = [
  {
    icon: School,
    title: "Schools & Educators",
    description: "Bring SkillCycle to your school. We provide refurbished laptops, SkillOS, and training for teachers.",
    cta: "Partner Your School",
    color: "primary",
    benefits: [
      "Free refurbished laptops for students",
      "Pre-installed educational software",
      "Offline-capable learning materials",
      "Teacher training and support",
    ],
  },
  {
    icon: Building,
    title: "Corporate Partners",
    description: "Donate your company's retiring laptops and give them a second life while making an environmental impact.",
    cta: "Become a Partner",
    color: "primary",
    benefits: [
      "Sustainable e-waste disposal",
      "Tax-deductible contributions",
      "CSR impact reporting",
      "Brand visibility on our platform",
    ],
  },
  {
    icon: Heart,
    title: "Individual Donors",
    description: "Every laptop counts. Donate your old devices or contribute financially to our mission.",
    cta: "Donate Now",
    color: "primary",
    benefits: [
      "Direct impact on a child's education",
      "Certificate of appreciation",
      "Updates on your contribution's impact",
      "Join our donor community",
    ],
  },
  {
    icon: Users,
    title: "Volunteers & Mentors",
    description: "Share your skills. Help refurbish laptops, create content, or mentor students remotely.",
    cta: "Join Our Team",
    color: "primary",
    benefits: [
      "Flexible volunteer opportunities",
      "Technical and non-technical roles",
      "Make a direct difference",
      "Build your portfolio",
    ],
  },
];

const impactStats = [
  { value: "485M", label: "Children need digital access globally", icon: Globe },
  { value: "1.3B", label: "Tons of e-waste generated yearly", icon: Laptop },
  { value: "87%", label: "Jobs require digital literacy", icon: Target },
  { value: "∞", label: "Potential futures to unlock", icon: Sparkles },
];

const GetInvolved = () => {
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
      description: "Thank you for reaching out. We'll get back to you within 48 hours.",
    });
    form.reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <Zap size={16} className="animate-pulse" />
              Join the Movement
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Be Part of the{" "}
              <span className="text-gradient">Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Every contribution matters. Whether you're a school, a company, or an individual—
              you can help turn e-waste into education and transform lives.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="glow-cyan" asChild>
                <a href="#contact">
                  <Send className="mr-2" size={18} />
                  Get Started Today
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  Meet Our Team
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <SectionWrapper className="bg-secondary/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Ways to Get Involved */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              How You Can Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Choose Your <span className="text-gradient">Path to Impact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              There are many ways to contribute to our mission. Find the one that fits you best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <option.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {option.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full" asChild>
                      <a href="#contact">{option.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* The Ripple Effect */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Your Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                The <span className="text-gradient">Ripple Effect</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="font-bold mb-2">One Laptop Donated</h3>
                <p className="text-sm text-muted-foreground">
                  Your old device gets a second life instead of becoming toxic waste
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center"
              >
                <div className="text-4xl mb-4">👨‍🎓</div>
                <h3 className="font-bold mb-2">One Student Empowered</h3>
                <p className="text-sm text-muted-foreground">
                  A child gains digital literacy and the skills for the modern economy
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-bold mb-2">One Future Transformed</h3>
                <p className="text-sm text-muted-foreground">
                  That student breaks the cycle of poverty for their entire family
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-center"
            >
              <p className="text-lg font-medium">
                <span className="text-primary">Multiply by thousands</span> = 
                A transformed community. A transformed nation. A transformed continent.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper id="contact">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Reach Out
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Let's Build the <span className="text-gradient">Future Together</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to make an impact? Fill out the form and we'll get back to you within 48 hours 
                to discuss how we can work together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm">contact@skillcycle.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Partner With Us</h3>
                    <p className="text-muted-foreground text-sm">partnerships@skillcycle.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <School className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">For Schools</h3>
                    <p className="text-muted-foreground text-sm">schools@skillcycle.org</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardContent className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input placeholder="Your name" className="pl-10" {...field} />
                              </div>
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input type="email" placeholder="you@example.com" className="pl-10" {...field} />
                              </div>
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
                              <div className="relative">
                                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input placeholder="Your company or school" className="pl-10" {...field} />
                              </div>
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
                            <FormLabel>I want to...</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="school">Partner my school</SelectItem>
                                <SelectItem value="corporate">Donate company devices</SelectItem>
                                <SelectItem value="individual">Donate as an individual</SelectItem>
                                <SelectItem value="volunteer">Volunteer my time</SelectItem>
                                <SelectItem value="other">Something else</SelectItem>
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
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                <Textarea
                                  placeholder="Tell us how you'd like to get involved..."
                                  className="pl-10 min-h-[120px]"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full glow-cyan">
                        <Send className="mr-2" size={18} />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No Child Should Be Told They Don't{" "}
              <span className="text-gradient">Belong in the Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in building a world where the question isn't "Do you have access to technology?" 
              but "What will you create with it?"
            </p>
            <Button size="lg" className="glow-cyan" asChild>
              <a href="#contact">
                Start Your Impact Journey
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default GetInvolved;
