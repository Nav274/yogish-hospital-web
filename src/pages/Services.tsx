import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Bone, Shield, Clock, Target, Heart } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Robotic Hip Replacement",
    description: "State-of-the-art robotic-assisted hip arthroplasty combines CT imaging with real-time surgical guidance to create a personalized implant fit. The result: better function, faster recovery, and a hip that feels more natural.",
    features: [
      "CT-based 3D planning",
      "Sub-millimeter accuracy",
      "Personalized implant positioning",
      "Faster recovery time",
      "Reduced post-operative pain",
    ],
    link: "/services/hip-replacement",
  },
  {
    icon: Bone,
    title: "Robotic Knee Replacement",
    description: "Advanced robotic knee arthroplasty uses precise CT imaging and real-time surgical guidance to create a knee that feels natural. The robotic arm ensures optimal implant placement for better range of motion and longevity.",
    features: [
      "Personalized fit for your anatomy",
      "Natural-feeling movement",
      "Improved ligament balancing",
      "Longer implant life",
      "Quicker return to activities",
    ],
    link: "/services/knee-replacement",
  },
];

const whyRobotic = [
  {
    icon: Target,
    title: "Precision Surgery",
    desc: "Sub-millimeter accuracy ensures optimal implant placement and alignment.",
  },
  {
    icon: Clock,
    title: "Faster Recovery",
    desc: "Most patients return to daily activities within 4-6 weeks.",
  },
  {
    icon: Shield,
    title: "Less Pain",
    desc: "Minimally invasive approach means less tissue trauma and discomfort.",
  },
  {
    icon: Heart,
    title: "Better Outcomes",
    desc: "Precise placement can extend implant life to 20-25 years.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-secondary inline-flex mb-4">
              <Shield className="w-4 h-4" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="gradient-text">Joint Replacement</span> Surgery
            </h1>
            <p className="text-lg text-muted-foreground">
              Dr. Yogish offers state-of-the-art robotic-assisted hip and knee replacement 
              surgery, combining precision technology with personalized care for optimal outcomes.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="container mx-auto px-4 mb-20">
          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedCard key={i} delay={i * 150}>
                <div className="card-glass p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-secondary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button variant="hero" asChild>
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                    <div className="card-glass p-6">
                      <h4 className="font-semibold mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-secondary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Why Robotic */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose <span className="gradient-text">Robotic Surgery</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Robotic-assisted surgery represents the next generation of joint replacement, 
                offering significant advantages over traditional techniques.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyRobotic.map((item, i) => (
                <AnimatedCard key={i} delay={i * 100}>
                  <div className="card-glass p-6 text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="card-glass p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Discuss Your Options?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a consultation with Dr. Yogish to learn how robotic surgery 
              can help you return to an active, pain-free life.
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

export default Services;
