import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Award, Users, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="badge-secondary">
              <Activity className="w-4 h-4" />
              Robotic Joint Replacement Specialist
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Advanced Hip & Knee{" "}
              <span className="gradient-text">Replacement</span>{" "}
              Surgery
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Dr. Yogish Vijaya Kumar brings over 15 years of expertise in robotic-assisted joint replacement, 
              helping patients regain mobility and live pain-free lives.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  View Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Award, value: "15+", label: "Years Experience" },
                { icon: Users, value: "5000+", label: "Surgeries Performed" },
                { icon: CheckCircle, value: "98%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-card via-muted to-card border border-border/50 flex items-center justify-center animate-float">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center glow-secondary">
                    <Activity className="w-12 h-12 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">Robotic-Assisted</p>
                    <p className="text-muted-foreground">Joint Replacement</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl card-glass p-4 flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-center">
                  <p className="text-lg font-bold text-primary">Hip</p>
                  <p className="text-xs text-muted-foreground">Surgery</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl card-glass p-4 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center">
                  <p className="text-lg font-bold text-secondary">Knee</p>
                  <p className="text-xs text-muted-foreground">Surgery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
