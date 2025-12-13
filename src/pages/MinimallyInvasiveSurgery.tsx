import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Minimize2, 
  CheckCircle, 
  Target, 
  Shield, 
  Clock,
  Bone,
  Zap
} from "lucide-react";

const indications = [
  "Hip and knee arthritis requiring replacement",
  "Patients seeking faster recovery",
  "Active individuals wanting quick return to activities",
  "Those concerned about scarring",
  "Patients wanting reduced hospital stay",
  "Suitable anatomy for minimally invasive approach",
];

const howItWorks = [
  {
    icon: Minimize2,
    title: "Smaller Incisions",
    desc: "Specialized techniques allow surgery through incisions of 3-4 inches compared to traditional 8-10 inch cuts.",
  },
  {
    icon: Shield,
    title: "Muscle Preservation",
    desc: "Working between muscles rather than cutting through them preserves strength and speeds recovery.",
  },
  {
    icon: Target,
    title: "Precision Instruments",
    desc: "Specialized tools designed for minimally invasive access ensure accurate implant placement.",
  },
];

const benefits = [
  { title: "Less Blood Loss", desc: "Smaller incisions mean significantly reduced bleeding" },
  { title: "Reduced Pain", desc: "Less tissue disruption leads to less post-operative pain" },
  { title: "Faster Recovery", desc: "Many patients go home within 1-2 days" },
  { title: "Smaller Scars", desc: "Cosmetically appealing with minimal visible scarring" },
  { title: "Lower Infection Risk", desc: "Smaller wounds reduce exposure to infection" },
  { title: "Quick Mobility", desc: "Walking often begins the same day as surgery" },
];

const timeline = [
  { period: "Day 0", desc: "Surgery completed, standing and walking with assistance same day" },
  { period: "Day 1-2", desc: "Discharge from hospital, walking with walker" },
  { period: "Week 1", desc: "Managing at home, gentle exercises, reduced swelling" },
  { period: "Weeks 2-3", desc: "Transitioning to cane, increasing activity" },
  { period: "Weeks 4-6", desc: "Walking without aids, driving (automatic vehicles)" },
  { period: "Weeks 6-12", desc: "Return to most normal activities and work" },
];

const MinimallyInvasiveSurgery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Minimally Invasive Surgery</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-primary inline-flex mb-4">
                <Minimize2 className="w-4 h-4" />
                Advanced Techniques
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Minimally Invasive Joint Surgery —{" "}
                <span className="gradient-text">Maximum Results</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the benefits of modern surgical techniques that minimize 
                tissue disruption while maximizing outcomes. Smaller incisions, 
                faster recovery, and less pain.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-consultation">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-2xl card-glass flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4 glow-primary">
                      <Minimize2 className="w-12 h-12 text-primary" />
                    </div>
                    <p className="font-semibold text-lg">Minimally Invasive</p>
                    <p className="text-muted-foreground">Joint Surgery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 bg-section-2 section-glow">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge-primary inline-flex mb-4">
                  <Zap className="w-4 h-4" />
                  Ideal Candidates
                </div>
                <h2 className="text-3xl font-bold mb-6">Who Benefits Most?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Minimally invasive techniques are ideal for many patients seeking 
                  joint replacement with faster recovery and less disruption to daily life.
                </p>
              </div>
              
              <div className="card-glass p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Bone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Best Candidates</h3>
                </div>
                <ul className="space-y-3">
                  {indications.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-section-3 section-glow section-glow-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                Technique
              </div>
              <h2 className="text-3xl font-bold mb-4">
                How Minimally Invasive Surgery Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced techniques that protect your body while achieving excellent results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {howItWorks.map((item, i) => (
                <AnimatedCard key={i} delay={i * 100}>
                  <div className="card-glass p-8 text-center h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-section-4 section-glow">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                Advantages
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Benefits of Minimally Invasive Approach
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why smaller incisions lead to better patient experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((item, i) => (
                <AnimatedCard key={i} delay={i * 100}>
                  <div className="card-glass p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-20 bg-section-2 section-glow section-glow-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                <Clock className="w-4 h-4" />
                What to Expect
              </div>
              <h2 className="text-3xl font-bold mb-4">Recovery Timeline</h2>
              <p className="text-muted-foreground">
                Faster milestones with minimally invasive techniques.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              {timeline.map((item, i) => (
                <AnimatedCard key={i} delay={i * 80}>
                  <div className="card-glass p-5 flex items-center gap-4">
                    <div className="badge-primary text-xs flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      {item.period}
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="card-glass p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for a <span className="gradient-text">Faster Recovery</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a consultation with Dr. Yogish to learn if minimally 
              invasive surgery is right for you.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-consultation">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MinimallyInvasiveSurgery;
