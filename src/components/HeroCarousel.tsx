import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Award, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Robotic Joint Replacement Specialist",
    title: "Advanced Hip & Knee",
    highlight: "Replacement",
    subtitle: "Surgery",
    description: "Dr. Yogish Vijaya Kumar brings over 15 years of expertise in robotic-assisted joint replacement, helping patients regain mobility and live pain-free lives.",
    icon: Activity,
    cta: { text: "Schedule Consultation", link: "/contact" },
  },
  {
    id: 2,
    badge: "State-of-the-Art Facility",
    title: "World-Class",
    highlight: "Orthopedic",
    subtitle: "Care",
    description: "Our hospital is equipped with cutting-edge technology including robotic surgical systems, advanced imaging, and modern rehabilitation facilities for optimal patient outcomes.",
    icon: Award,
    cta: { text: "Explore Services", link: "/services" },
  },
  {
    id: 3,
    badge: "Patient-Centered Approach",
    title: "Compassionate",
    highlight: "Healthcare",
    subtitle: "Excellence",
    description: "We believe in personalized care tailored to each patient's needs. From consultation to recovery, our dedicated team ensures you receive the best possible treatment.",
    icon: Heart,
    cta: { text: "Meet Dr. Yogish", link: "/about" },
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transition-all duration-1000" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transition-all duration-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            key={currentSlide}
            className="space-y-8 animate-fade-in"
          >
            <div className="badge-secondary">
              <SlideIcon className="w-4 h-4" />
              {slide.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {slide.title}{" "}
              <span className="gradient-text">{slide.highlight}</span>{" "}
              {slide.subtitle}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to={slide.cta.link}>
                  {slide.cta.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentSlide(i);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentSlide 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Main Circle */}
              <div 
                key={`visual-${currentSlide}`}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-card via-muted to-card border border-border/50 flex items-center justify-center animate-float"
              >
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center glow-secondary">
                    <SlideIcon className="w-12 h-12 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{slide.highlight}</p>
                    <p className="text-muted-foreground">{slide.subtitle}</p>
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

export default HeroCarousel;
