import { motion } from "framer-motion";
import { ArrowRight, Trash2, AlertTriangle, Globe, Wifi, WifiOff, GraduationCap, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatCard } from "@/components/ui/StatCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ewasteStats = [
  { value: 240, suffix: "M", label: "Windows 10 PCs becoming obsolete", icon: <Trash2 size={24} /> },
  { value: 53, suffix: "Mt", label: "E-waste generated globally per year", icon: <Globe size={24} /> },
  { value: 17, suffix: "%", label: "Of e-waste is properly recycled", icon: <AlertTriangle size={24} /> },
];

const digitalDivideStats = [
  { value: 53, suffix: "%", label: "Global digital literacy rate", icon: <GraduationCap size={24} /> },
  { value: 87, suffix: "%", label: "Jobs require digital skills", icon: <Briefcase size={24} /> },
  { value: 59, suffix: "%", label: "Teachers feel unprepared to teach digital", icon: <Users size={24} /> },
];

const Problem = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6 border border-destructive/20">
              The Challenge We Face
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A Crisis of{" "}
              <span className="text-destructive">Waste</span>
              {" "}and{" "}
              <span className="text-primary">Inequality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              While millions of computers are headed for landfills, millions of students 
              are denied access to digital education. These two crises are connected—and so is the solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* E-Waste Crisis Section */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-destructive text-sm font-medium uppercase tracking-wider">Part 1</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                The E-Waste{" "}
                <span className="text-destructive">Explosion</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                With Microsoft ending Windows 10 support, over 240 million PCs worldwide 
                will become "obsolete"—not because they've stopped working, but because 
                they can't run newer software.
              </p>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-semibold">The Irony:</span> These 
                    computers work perfectly fine—they just can't run Windows 11.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-destructive/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-destructive font-semibold">The Result:</span> Massive 
                    amounts of toxic e-waste ending up in landfills, polluting soil and water.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {ewasteStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Environmental Impact */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Environmental Consequences</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              E-waste isn't just clutter—it's a ticking environmental time bomb.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Lead & Mercury", desc: "Toxic heavy metals leach into soil and groundwater", color: "destructive" },
              { title: "CO2 Emissions", desc: "Manufacturing new devices releases massive carbon", color: "destructive" },
              { title: "Resource Waste", desc: "Precious metals and rare materials lost forever", color: "destructive" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="text-destructive" size={24} />
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Digital Divide Section */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Part 2</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              The Digital{" "}
              <span className="text-gradient">Divide</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              While some students have access to the latest technology, millions in rural 
              areas are being left behind in an increasingly digital world.
            </p>
          </div>

          {/* Urban vs Rural Comparison */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urban */}
              <div className="p-8 rounded-2xl bg-card border border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wifi className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Urban Schools</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Internet Access</span>
                    <span className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={62} suffix="%" />
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "62%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Computer Labs</span>
                    <span className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={55} suffix="%" />
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Household Internet</span>
                    <span className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={72} suffix="%" />
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "72%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Rural */}
              <div className="p-8 rounded-2xl bg-card border border-destructive/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <WifiOff className="text-destructive" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Rural Schools</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Internet Access</span>
                    <span className="text-2xl font-bold text-destructive">
                      <AnimatedCounter end={18} suffix="%" />
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "18%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-destructive rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Computer Labs</span>
                    <span className="text-2xl font-bold text-destructive">
                      <AnimatedCounter end={22} suffix="%" />
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "22%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="h-full bg-destructive rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Household Internet</span>
                    <span className="text-2xl font-bold text-destructive">
                      <AnimatedCounter end={38} suffix="%" />
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "38%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="h-full bg-destructive rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalDivideStats.map((stat, index) => (
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

      {/* Why This Matters */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Matters</h2>
              <p className="text-muted-foreground">
                The digital divide isn't just about technology—it's about opportunity.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Future Employment</h3>
                    <p className="text-muted-foreground">
                      With 87% of jobs requiring digital skills, students without access to 
                      technology face severe limitations in the job market. The skills gap 
                      translates directly into an income gap.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Educational Quality</h3>
                    <p className="text-muted-foreground">
                      Schools with integrated digital literacy programs see 20% better 
                      student engagement. Yet 59% of teachers feel unprepared to teach 
                      these essential skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Economic Impact</h3>
                    <p className="text-muted-foreground">
                      The global digital skills gap represents trillions in unrealized 
                      economic growth. Communities with higher digital literacy have 
                      stronger economies and lower unemployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-secondary via-primary/5 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            But There's a{" "}
            <span className="text-gradient">Solution</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            What if we could solve both problems at once? Turn e-waste into educational 
            opportunity and bridge the digital divide.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
            <Link to="/solution">
              See Our Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Problem;
