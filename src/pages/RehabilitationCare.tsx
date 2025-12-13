import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  HeartPulse, 
  CheckCircle, 
  Target, 
  Shield, 
  Clock,
  Users,
  Dumbbell,
  Activity
} from "lucide-react";

const preOpServices = [
  "Physical assessment and baseline measurements",
  "Strengthening exercises to prepare for surgery",
  "Education about the surgical procedure",
  "Home preparation guidance",
  "Setting realistic recovery expectations",
  "Nutrition and lifestyle optimization",
];

const postOpServices = [
  "Immediate post-surgical pain management",
  "Early mobilization protocols",
  "Range of motion exercises",
  "Strength and balance training",
  "Gait training and walking practice",
  "Return to daily activities guidance",
];

const phases = [
  {
    icon: Shield,
    title: "Pre-Operative Phase",
    desc: "Preparation begins weeks before surgery with exercises to strengthen muscles and optimize your body for the procedure.",
  },
  {
    icon: HeartPulse,
    title: "Acute Recovery",
    desc: "The first 2-6 weeks focus on pain management, wound healing, and regaining basic mobility and independence.",
  },
  {
    icon: Dumbbell,
    title: "Strengthening Phase",
    desc: "Weeks 6-12 involve progressive strengthening, balance training, and returning to normal daily activities.",
  },
];

const benefits = [
  { title: "Better Outcomes", desc: "Prepared patients have smoother surgeries and faster recovery" },
  { title: "Reduced Complications", desc: "Proper rehab reduces risk of blood clots and stiffness" },
  { title: "Faster Return", desc: "Get back to work and activities sooner with guided recovery" },
  { title: "Personalized Care", desc: "Programs tailored to your specific needs and goals" },
  { title: "Pain Management", desc: "Effective strategies to minimize discomfort during recovery" },
  { title: "Long-term Success", desc: "Proper rehabilitation maximizes implant longevity" },
];

const timeline = [
  { period: "Pre-Op", desc: "2-4 weeks of preparation exercises and education" },
  { period: "Week 1", desc: "Hospital-based therapy, learning to walk with aids" },
  { period: "Weeks 2-4", desc: "Home exercises, outpatient physiotherapy sessions" },
  { period: "Weeks 4-8", desc: "Progressive strengthening, improving range of motion" },
  { period: "Weeks 8-12", desc: "Advanced exercises, balance training, activity progression" },
  { period: "Months 3-6", desc: "Sport-specific training if applicable, full function restoration" },
];

const RehabilitationCare = () => {
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
            <span className="text-foreground">Rehabilitation Care</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-primary inline-flex mb-4">
                <HeartPulse className="w-4 h-4" />
                Complete Care
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pre & Post-Operative{" "}
                <span className="gradient-text">Rehabilitation</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Comprehensive rehabilitation care that prepares you for surgery and 
                guides you through recovery. Our integrated approach ensures the best 
                possible outcomes for your joint replacement journey.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-consultation">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-2xl card-glass flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4 glow-primary">
                      <HeartPulse className="w-12 h-12 text-primary" />
                    </div>
                    <p className="font-semibold text-lg">Rehabilitation</p>
                    <p className="text-muted-foreground">Care Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Op and Post-Op Services */}
        <section className="py-20 bg-section-2 section-glow">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                <Users className="w-4 h-4" />
                Our Services
              </div>
              <h2 className="text-3xl font-bold mb-4">Comprehensive Rehabilitation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From preparation to full recovery, we support you at every step.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <AnimatedCard delay={0}>
                <div className="card-glass p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Pre-Operative Care</h3>
                  </div>
                  <ul className="space-y-3">
                    {preOpServices.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={100}>
                <div className="card-glass p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Post-Operative Care</h3>
                  </div>
                  <ul className="space-y-3">
                    {postOpServices.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="py-20 bg-section-3 section-glow section-glow-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-primary inline-flex mb-4">
                Journey
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Phases of Rehabilitation
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to optimize your recovery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {phases.map((item, i) => (
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
                Benefits of Comprehensive Rehabilitation
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why integrated rehabilitation care makes a difference.
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
                Timeline
              </div>
              <h2 className="text-3xl font-bold mb-4">Rehabilitation Schedule</h2>
              <p className="text-muted-foreground">
                What to expect throughout your rehabilitation journey.
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
              Start Your <span className="gradient-text">Recovery Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a consultation to learn how our rehabilitation program 
              can optimize your surgical outcomes.
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

export default RehabilitationCare;
