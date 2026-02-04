import { motion } from "framer-motion";
import { ArrowRight, Laptop, GraduationCap, Leaf, School, Users, Quote, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatCard } from "@/components/ui/StatCard";

const impactStats = [
  { value: 10000, suffix: "+", label: "Students we aim to reach", icon: <GraduationCap size={24} /> },
  { value: 5000, suffix: "+", label: "Laptops saved from landfills", icon: <Laptop size={24} /> },
  { value: 50, suffix: "+", label: "Schools targeted for deployment", icon: <School size={24} /> },
  { value: 25, suffix: "t", label: "CO2 emissions prevented monthly", icon: <Leaf size={24} /> },
];

const sdgGoals = [
  {
    number: 4,
    title: "Quality Education",
    desc: "Ensuring inclusive and equitable quality education for all students, regardless of location",
    color: "bg-red-500",
  },
  {
    number: 12,
    title: "Responsible Consumption",
    desc: "Giving technology a second life instead of sending it to landfills",
    color: "bg-amber-600",
  },
  {
    number: 13,
    title: "Climate Action",
    desc: "Reducing e-waste and the carbon footprint of manufacturing new devices",
    color: "bg-green-600",
  },
];

const testimonials = [
  {
    quote: "SkillCycle has the potential to transform how rural schools access digital education. This is exactly what our communities need.",
    author: "School Partner",
    role: "Principal, Rural School",
  },
  {
    quote: "The combination of environmental responsibility and educational impact makes this a truly innovative solution.",
    author: "Sustainability Expert",
    role: "Environmental Consultant",
  },
  {
    quote: "Finally, a solution that addresses both the e-waste crisis and the digital divide. This is the future of sustainable education.",
    author: "Tech Industry Leader",
    role: "E-Waste Recycling Partner",
  },
];

const Impact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Measurable{" "}
              <span className="text-gradient">Change</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Every laptop we save from the landfill becomes a gateway to education. 
              Track our journey towards a more sustainable and equitable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Goals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the targets we're working towards as we scale SkillCycle across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
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

      {/* Dual Impact Visual */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Environmental Impact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-green-500/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                <Leaf className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
              <p className="text-muted-foreground mb-6">
                By repurposing old laptops instead of manufacturing new devices, we're 
                making a significant contribution to environmental sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="text-sm">E-waste diverted</span>
                  <span className="font-bold text-green-500">110+ tonnes</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="text-sm">CO2 emissions saved</span>
                  <span className="font-bold text-green-500">3200+ metric tonnes</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="text-sm">Toxic materials prevented</span>
                  <span className="font-bold text-green-500">10 metric tonnes</span>
                </div>
              </div>
            </motion.div>

            {/* Educational Impact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-primary/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Educational Impact</h3>
              <p className="text-muted-foreground mb-6">
                Our mission is to ensure every student has access to quality digital 
                education, regardless of their school's internet connectivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="text-sm">Students empowered</span>
                  <span className="font-bold text-primary">10,000+</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="text-sm">Rural schools reached</span>
                  <span className="font-bold text-primary">50+</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="text-sm">Learning hours enabled</span>
                  <span className="font-bold text-primary">10,800,000+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Success Stories / Testimonials */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Voices of{" "}
              <span className="text-gradient">Support</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry experts and potential partners recognize the potential of SkillCycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <Quote className="text-primary/30 mb-4" size={32} />
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SDG Alignment */}
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Global Goals</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Aligned with the{" "}
              <span className="text-gradient">UN SDGs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SkillCycle directly contributes to three United Nations Sustainable Development Goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-20 h-20 ${goal.color} opacity-10 rounded-bl-full`} />
                <div className={`w-12 h-12 ${goal.color} rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4`}>
                  {goal.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                <p className="text-muted-foreground text-sm">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision Section */}
      <SectionWrapper className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for 2030</h2>
              <p className="text-lg text-muted-foreground mb-8">
                By 2030, we envision SkillCycle reaching 1 million students across 2000 schools, 
                diverting over a million laptops from landfills, and becoming the standard for sustainable 
                digital education in underserved communities across Africa and then the rest of the world.
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">1M</div>
                  <p className="text-xs text-muted-foreground">Students</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">2000</div>
                  <p className="text-xs text-muted-foreground">Schools</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">1M+</div>
                  <p className="text-xs text-muted-foreground">Laptops Saved</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-secondary via-primary/5 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of the{" "}
            <span className="text-gradient">Story</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join us in writing the next chapter. Whether you're a school, a company 
            with spare hardware, or someone who believes in our mission—we want to hear from you.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
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

export default Impact;
