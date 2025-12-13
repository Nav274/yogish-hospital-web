import { Link } from "react-router-dom";
import { ArrowRight, Bone, Activity, Shield, Clock, Target, Heart, RefreshCw, Minimize2, HeartPulse } from "lucide-react";
import { AnimatedCard } from "./AnimatedCard";

const services = [
  {
    icon: Activity,
    title: "Robotic Hip Replacement",
    description: "State-of-the-art robotic-assisted hip arthroplasty for precise implant placement and faster recovery.",
    link: "/services/hip-replacement",
  },
  {
    icon: Bone,
    title: "Robotic Knee Replacement",
    description: "Advanced robotic technology for natural-feeling knee replacement with optimal alignment.",
    link: "/services/knee-replacement",
  },
  {
    icon: RefreshCw,
    title: "Revision Joint Surgery",
    description: "Expert revision procedures for failed or worn joint replacements using specialized techniques.",
    link: "/services/revision-surgery",
  },
  {
    icon: Minimize2,
    title: "Minimally Invasive Surgery",
    description: "Smaller incisions, less pain, and faster recovery with advanced minimally invasive techniques.",
    link: "/services/minimally-invasive",
  },
  {
    icon: HeartPulse,
    title: "Rehabilitation Care",
    description: "Comprehensive pre and post-operative rehabilitation for optimal surgical outcomes.",
    link: "/services/rehabilitation",
  },
];

const benefits = [
  { icon: Target, title: "Precision Surgery", desc: "Sub-millimeter accuracy" },
  { icon: Clock, title: "Faster Recovery", desc: "Return to activities sooner" },
  { icon: Shield, title: "Less Pain", desc: "Minimally invasive approach" },
  { icon: Heart, title: "Better Outcomes", desc: "20-25 year implant life" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative bg-section-2 section-glow">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-secondary inline-flex mb-4">
            <Shield className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="gradient-text">Joint Replacement</span> Procedures
          </h2>
          <p className="text-muted-foreground">
            Utilizing cutting-edge robotic technology to deliver precise, personalized joint replacement surgery.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => (
            <AnimatedCard key={i} delay={i * 100}>
              <Link
                to={service.link}
                className="block group card-glass p-8 hover:border-primary/50 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <AnimatedCard key={i} delay={i * 100}>
              <div className="card-glass p-6 text-center group hover:border-secondary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-1">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
