import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  RefreshCw, 
  CheckCircle, 
  Target, 
  Shield, 
  Clock,
  Bone,
  AlertTriangle
} from "lucide-react";

const indications = [
  "Implant loosening or instability",
  "Infection around the joint replacement",
  "Implant wear and bone loss",
  "Repeated joint dislocations",
  "Fracture around the implant",
  "Chronic pain after previous surgery",
];

const howItWorks = [
  {
    icon: Target,
    title: "Comprehensive Assessment",
    desc: "Detailed imaging and analysis to understand why the original implant failed and plan the optimal revision strategy.",
  },
  {
    icon: Shield,
    title: "Custom Solutions",
    desc: "Specialized implants and techniques designed specifically for revision cases, including bone grafting when needed.",
  },
  {
    icon: RefreshCw,
    title: "Precision Reconstruction",
    desc: "Careful removal of the old implant and restoration of bone stock before placing the new prosthesis.",
  },
];

const benefits = [
  { title: "Expert Care", desc: "Specialized training in complex revision procedures" },
  { title: "Advanced Implants", desc: "Access to specialized revision implant systems" },
  { title: "Bone Preservation", desc: "Techniques to maximize remaining bone stock" },
  { title: "Infection Management", desc: "Protocols for treating and preventing infection" },
  { title: "Restored Function", desc: "Return to pain-free mobility after failed surgery" },
  { title: "Long-term Success", desc: "Durable outcomes with modern revision techniques" },
];

const timeline = [
  { period: "Days 1-3", desc: "Hospital stay with close monitoring and pain management" },
  { period: "Weeks 1-2", desc: "Protected weight bearing with walking aids" },
  { period: "Weeks 2-6", desc: "Gradual increase in mobility, physiotherapy continues" },
  { period: "Weeks 6-12", desc: "Transitioning to full weight bearing" },
  { period: "Months 3-6", desc: "Strengthening exercises, returning to daily activities" },
  { period: "Months 6-12", desc: "Full recovery and return to normal function" },
];

const RevisionJointSurgery = () => {
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
            <span className="text-foreground">Revision Joint Surgery</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-primary inline-flex mb-4">
                <RefreshCw className="w-4 h-4" />
                Revision Surgery
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revision Joint Surgery —{" "}
                <span className="gradient-text">Expert Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When a previous joint replacement needs attention, revision surgery offers 
                a second chance at pain-free mobility. Dr. Yogish specializes in complex 
                revision procedures using advanced techniques and specialized implants.
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
                      <RefreshCw className="w-12 h-12 text-primary" />
                    </div>
                    <p className="font-semibold text-lg">Revision</p>
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
                  <AlertTriangle className="w-4 h-4" />
                  When Is It Needed
                </div>
                <h2 className="text-3xl font-bold mb-6">Reasons for Revision Surgery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Revision surgery may be necessary when a previous joint replacement 
                  develops complications or reaches the end of its lifespan.
                </p>
              </div>
              
              <div className="card-glass p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Bone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Common Indications</h3>
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
                Process
              </div>
              <h2 className="text-3xl font-bold mb-4">
                How Revision Surgery Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A careful, methodical approach to restoring joint function.
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
                Benefits of Expert Revision Care
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why specialized revision surgery expertise matters.
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
                Typical milestones in your revision surgery recovery journey.
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
              Need a <span className="gradient-text">Second Opinion</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a consultation with Dr. Yogish to discuss your revision 
              surgery options and get expert guidance.
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

export default RevisionJointSurgery;
