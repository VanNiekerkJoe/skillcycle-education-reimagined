import { motion } from "framer-motion";
import { ArrowRight, Monitor, BookOpen, Gamepad2, Video, FileText, WifiOff, Server, Users, BarChart3, MessageSquare, Upload, Check, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const skillOSFeatures = [
  { icon: <Monitor size={24} />, title: "Lightweight OS", desc: "Runs on any old Windows PC that can't run Windows 11" },
  { icon: <BookOpen size={24} />, title: "CAPS-Aligned", desc: "South African curriculum-aligned study materials" },
  { icon: <Gamepad2 size={24} />, title: "Educational Games", desc: "Interactive learning through engaging gameplay" },
  { icon: <Video size={24} />, title: "Video Lessons", desc: "High-quality instructional videos from expert educators" },
  { icon: <FileText size={24} />, title: "Digital Textbooks", desc: "Complete textbook library powered by Siyavula" },
  { icon: <WifiOff size={24} />, title: "100% Offline", desc: "Works without any internet connection" },
];

const studentHubFeatures = [
  { icon: <BarChart3 size={24} />, title: "Progress Analytics", desc: "Detailed insights into performance and improvement areas" },
  { icon: <MessageSquare size={24} />, title: "Peer Messaging", desc: "Collaborate with classmates and ask questions" },
  { icon: <Upload size={24} />, title: "Assignment Submission", desc: "Submit work and receive feedback digitally" },
  { icon: <Users size={24} />, title: "Teacher Connection", desc: "Direct communication with educators" },
];

const Solution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Our Innovation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet{" "}
              <span className="text-gradient">SkillOS</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A lightweight operating system that transforms obsolete Windows PCs into 
              powerful, offline-capable learning stations packed with quality educational content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SkillOS Overview */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* OS Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border glow-cyan">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-muted-foreground">SkillOS Desktop</span>
                </div>
                
                {/* Desktop Icons Grid */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: <BookOpen size={20} />, label: "Textbooks" },
                    { icon: <Video size={20} />, label: "Videos" },
                    { icon: <Gamepad2 size={20} />, label: "Games" },
                    { icon: <FileText size={20} />, label: "Quizzes" },
                    { icon: <BrainCircuit size={20} />, label: "SkillAI" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-2">
                        {item.icon}
                      </div>
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Taskbar */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                      <Monitor size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium">SkillOS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WifiOff size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Offline Mode</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Designed for{" "}
                <span className="text-gradient">Any Hardware</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                SkillOS is built from the ground up to run smoothly on older hardware that 
                Windows 11 has left behind. We've optimized every component to ensure a 
                fast, responsive experience on even the most modest specifications.
              </p>
              <div className="space-y-3">
                {[
                  "Minimum 2GB RAM (Windows 11 needs 4GB+)",
                  "Works on 10+ year old processors",
                  "Requires only 8GB storage (Windows needs 64GB+)",
                  "No internet required for full functionality"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Features Grid */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything Students Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SkillOS comes packed with educational tools and content designed 
              specifically for South African students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillOSFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Offline Server Technology */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Offline Server{" "}
              <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our innovative architecture allows seamless learning without internet connectivity.
            </p>
          </div>

          {/* Connection Diagram */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Student PC */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Monitor className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Student PCs</h3>
                <p className="text-sm text-muted-foreground">
                  Running SkillOS with full educational content
                </p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="hidden md:flex items-center"
              >
                <div className="w-12 h-0.5 bg-border" />
                <ArrowRight className="text-primary" size={20} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:hidden"
              >
                <ArrowRight className="text-primary rotate-90" size={24} />
              </motion.div>

              {/* Teacher PC */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 p-6 rounded-2xl bg-card border border-primary/30 text-center glow-cyan"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Teacher PC</h3>
                <p className="text-sm text-muted-foreground">
                  Manages content, tracks progress, uploads assignments
                </p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="hidden md:flex items-center"
              >
                <div className="w-12 h-0.5 bg-border" />
                <ArrowRight className="text-primary" size={20} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:hidden"
              >
                <ArrowRight className="text-primary rotate-90" size={24} />
              </motion.div>

              {/* Local Server */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Server className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Local Server</h3>
                <p className="text-sm text-muted-foreground">
                  Stores all content locally, syncs when internet available
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-xl bg-muted text-center"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">No internet? No problem.</span>{" "}
                Everything works through local network connections.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* StudentHub Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">StudentHub</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Your Learning{" "}
                <span className="text-gradient">Dashboard</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                StudentHub is the central hub where students can track their progress, 
                communicate with peers and teachers, and manage their educational journey.
              </p>

              <div className="space-y-4">
                {studentHubFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 rounded-2xl bg-card border border-border">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <div>
                    <h4 className="font-semibold">Welcome back, Student</h4>
                    <p className="text-sm text-muted-foreground">Grade 10 • Johannesburg High</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users size={20} className="text-primary" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-muted text-center">
                    <div className="text-2xl font-bold text-primary">78%</div>
                    <p className="text-xs text-muted-foreground">Average</p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted text-center">
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <p className="text-xs text-muted-foreground">Courses</p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted text-center">
                    <div className="text-2xl font-bold text-foreground">5</div>
                    <p className="text-xs text-muted-foreground">Badges</p>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mathematics</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Physical Science</span>
                      <span className="text-primary">72%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>English</span>
                      <span className="text-primary">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Educational Content */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality Educational Content
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partnered with South Africa's leading educational content providers to deliver 
              curriculum-aligned materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">Siyavula</div>
              <p className="text-muted-foreground mb-4">
                Premium mathematics and science textbooks, fully CAPS-aligned
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                Content Partner
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <div className="text-3xl font-bold text-foreground mb-2">CAPS Aligned</div>
              <p className="text-muted-foreground mb-4">
                All content follows South African curriculum standards and requirements
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                Curriculum Standard
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
              <p className="text-muted-foreground mb-4">
                Hours of video lessons, interactive quizzes, and educational games
              </p>
              <div className="inline-block px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                Learning Hours
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-secondary via-primary/5 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the{" "}
            <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            SkillOS isn't just technology—it's a catalyst for change. Discover how we're 
            transforming education and the environment.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
            <Link to="/impact">
              View Our Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Solution;
