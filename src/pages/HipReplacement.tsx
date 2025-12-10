import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Activity, 
  CheckCircle, 
  Target, 
  Shield, 
  Clock,
  Bone
} from "lucide-react";

const indications = [
  "Severe hip osteoarthritis",
  "Rheumatoid arthritis affecting the hip",
  "Avascular necrosis (bone death)",
  "Hip fractures in older patients",
  "Failed conservative treatments",
  "Pain affecting walking, sitting, and quality of life",
];

const howItWorks = [
  {
    icon: Target,
    title: "3D Planning",
    desc: "A CT scan creates a precise 3D model of your hip. Dr Yogish plans the exact implant size, position, and orientation before surgery.",
  },
  {
    icon: Shield,
    title: "Robotic Precision",
    desc: "During surgery, the robotic arm guides bone preparation with sub-millimetre accuracy for perfect cup and stem placement.",
  },
  {
    icon: Activity,
    title: "Optimal Positioning",
    desc: "The system ensures ideal implant angles for maximum stability, natural movement, and reduced risk of dislocation.",
  },
];

const benefits = [
  { title: "Personalised Fit", desc: "CT-based planning ensures the implant matches your unique anatomy" },
  { title: "Reduced Dislocation Risk", desc: "Precise implant positioning significantly lowers dislocation rates" },
  { title: "Natural Movement", desc: "Optimal alignment restores natural hip motion" },
  { title: "Less Pain", desc: "Minimally invasive approach reduces tissue trauma" },
  { title: "Faster Recovery", desc: "Many patients walk without aids within 2-4 weeks" },
  { title: "Longevity", desc: "Accurate placement can extend implant life to 20-25+ years" },
];

const timeline = [
  { period: "Day 1", desc: "Standing and walking with a walker, physiotherapy begins" },
  { period: "Days 2-3", desc: "Discharge from hospital, continued home exercises" },
  { period: "Weeks 1-2", desc: "Walking indoors with walking aid, managing swelling" },
  { period: "Weeks 2-4", desc: "Transitioning to cane, increasing walking distance" },
  { period: "Weeks 4-6", desc: "Walking without aids indoors, driving (automatic)" },
  { period: "Months 2-3", desc: "Most daily activities, returning to work" },
  { period: "Months 3-6", desc: "Full recovery, low-impact sports and activities" },
];

const HipReplacement = () => {
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
            <span className="text-foreground">Robotic Hip Replacement</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-primary inline-flex mb-4">
                <Activity className="w-4 h-4" />
                Hip Surgery
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Robotic Hip Replacement — A{" "}
                <span className="gradient-text">Precision Approach</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                State-of-the-art robotic hip arthroplasty combines CT imaging with real-time 
                surgical guidance for precise implant positioning. The result: improved stability, 
                faster recovery, and a hip that moves naturally.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule Hip Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-2xl card-glass flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4 glow-primary">
                      <Activity className="w-12 h-12 text-primary" />
                    </div>
                    <p className="font-semibold text-lg">Robotic-Assisted</p>
                    <p className="text-muted-foreground">Hip Arthroplasty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge-primary inline-flex mb-4">
                  Eligibility
                </div>
                <h2 className="text-3xl font-bold mb-6">Who is a Candidate?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Robotic hip replacement is ideal for patients with significant hip 
                  arthritis or other conditions causing chronic pain and mobility limitations.
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                Technology
              </div>
              <h2 className="text-3xl font-bold mb-4">
                How Robotic Hip Replacement Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the precision technology behind your surgery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {howItWorks.map((item, i) => (
                <div key={i} className="card-glass p-8 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                Advantages
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Benefits of Robotic Hip Replacement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why patients experience better outcomes with robotic-assisted surgery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((item, i) => (
                <div key={i} className="card-glass p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                <Clock className="w-4 h-4" />
                What to Expect
              </div>
              <h2 className="text-3xl font-bold mb-4">Recovery Timeline</h2>
              <p className="text-muted-foreground">
                Typical milestones in your hip replacement recovery journey.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="card-glass p-5 flex items-center gap-4">
                  <div className="badge-primary text-xs flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    {item.period}
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="card-glass p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for a <span className="gradient-text">Pain-Free Hip</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a consultation with Dr. Yogish to discuss whether robotic 
              hip replacement is right for you.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
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

export default HipReplacement;
