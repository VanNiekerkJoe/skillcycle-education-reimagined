import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, GraduationCap, Recycle, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatCard } from "@/components/ui/StatCard";

const stats = [
  { value: 35, suffix: "%", label: "of people lack basic digital skills globally", icon: <Monitor size={24} /> },
  { value: 18, suffix: "%", label: "of rural schools have internet access", icon: <WifiOff size={24} /> },
  { value: 87, suffix: "%", label: "of jobs now require digital literacy", icon: <GraduationCap size={24} /> },
  { value: 240, suffix: "M", label: "Windows 10 PCs facing obsolescence", icon: <Recycle size={24} /> },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                🏆 2026 Hult Prize Competition
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Turning{" "}
              <span className="text-gradient">E-Waste</span>
              <br />
              Into{" "}
              <span className="text-gradient">Education</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              We transform discarded Windows laptops into powerful learning tools, 
              bringing quality digital education to underprivileged schools across South Africa.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan text-base px-8">
                <Link to="/solution">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted text-base px-8">
                <Link to="/about#contact">Partner With Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Digital Divide is Real</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Millions of students are being left behind in an increasingly digital world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Problem Preview */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                A Growing Crisis in{" "}
                <span className="text-gradient">Two Parts</span>
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <Recycle className="text-destructive" size={20} />
                    </div>
                    <h3 className="font-semibold text-lg">E-Waste Explosion</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Windows 10 end-of-life means 240 million PCs are headed for landfills, 
                    releasing toxic materials into our environment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <WifiOff className="text-primary" size={20} />
                    </div>
                    <h3 className="font-semibold text-lg">Digital Divide</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Only 18% of rural schools have internet access, leaving millions of 
                    students unprepared for a digital future.
                  </p>
                </div>
              </div>
              <Button asChild variant="link" className="mt-6 text-primary p-0">
                <Link to="/problem">
                  Learn More About The Problem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Visual Comparison */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Wifi className="mx-auto text-primary mb-3" size={32} />
                  <div className="text-4xl font-bold text-foreground mb-2">62%</div>
                  <p className="text-sm text-muted-foreground">Urban Schools with Internet</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-destructive/30 text-center">
                  <WifiOff className="mx-auto text-destructive mb-3" size={32} />
                  <div className="text-4xl font-bold text-foreground mb-2">18%</div>
                  <p className="text-sm text-muted-foreground">Rural Schools with Internet</p>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-muted text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">3.4x</span> gap in digital access
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Solution Preview */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* SkillOS Visual */}
            <div className="relative order-2 md:order-1">
              <div className="relative p-8 rounded-2xl bg-card border border-border glow-cyan">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-primary" />
                    </div>
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Monitor className="text-primary" />
                    </div>
                    <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wifi className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                  SkillOS
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Solution</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Meet{" "}
                <span className="text-gradient">SkillOS</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our lightweight operating system breathes new life into old hardware, 
                turning obsolete Windows PCs into powerful offline learning stations 
                packed with CAPS-aligned educational content.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Runs on any old Windows PC",
                  "Works 100% offline",
                  "CAPS-aligned study materials",
                  "Interactive quizzes & games",
                  "Student progress tracking"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/solution">
                  Explore SkillOS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Partners Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Partnerships</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Working Together</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We've partnered with leading organizations to bring quality education to those who need it most.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="px-8 py-4 rounded-xl bg-card border border-border">
              <span className="text-xl font-bold text-foreground">Siyavula</span>
              <p className="text-sm text-muted-foreground">Educational Content</p>
            </div>
            <div className="px-8 py-4 rounded-xl bg-card border border-border">
              <span className="text-xl font-bold text-foreground">E-Waste Partners</span>
              <p className="text-sm text-muted-foreground">Hardware Supply</p>
            </div>
            <div className="px-8 py-4 rounded-xl bg-card border border-border">
              <span className="text-xl font-bold text-foreground">Local Schools</span>
              <p className="text-sm text-muted-foreground">Implementation</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-secondary via-primary/5 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a{" "}
            <span className="text-gradient">Difference?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join us in bridging the digital divide and giving every student the tools they need to succeed.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan text-base px-8">
            <Link to="/about#contact">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
