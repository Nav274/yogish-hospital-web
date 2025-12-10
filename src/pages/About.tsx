import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Award, 
  Building2, 
  Heart, 
  Target, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const qualifications = [
  "MBBS from Bangalore Medical College",
  "MS (Orthopaedics) from St. John's Medical College",
  "Fellowship in Joint Replacement Surgery",
  "Certified in Robotic-Assisted Surgery",
  "Advanced Training in Minimally Invasive Techniques",
];

const affiliations = [
  {
    name: "Manipal Hospital, Kanakapura Road",
    role: "Senior Consultant Orthopaedic Surgeon",
  },
  {
    name: "Malathi Manipal Hospital, Jayanagar",
    role: "Senior Consultant Orthopaedic Surgeon",
  },
  {
    name: "Re-Flex Super Specialty Clinic",
    role: "Director & Chief Surgeon",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-secondary inline-flex mb-4">
                About the Surgeon
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dr. Yogish <span className="gradient-text">Vijaya Kumar</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Senior Consultant Orthopaedic Surgeon
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience in orthopaedic surgery, Dr. Yogish Vijaya Kumar 
                is one of Bangalore's most trusted specialists in robotic-assisted hip and knee 
                replacement surgery. His patient-first philosophy, combined with cutting-edge 
                surgical techniques, has helped thousands of patients regain mobility and 
                return to active lives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dr. Yogish believes that every patient deserves personalized care. He takes the 
                time to understand each patient's unique situation, explaining treatment options 
                clearly and involving them in decisions about their care.
              </p>
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-muted border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                      <span className="text-5xl font-bold gradient-text">Dr.</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Yogish Vijaya Kumar</h3>
                      <p className="text-muted-foreground">MS, FRCS (Ortho)</p>
                    </div>
                    <div className="flex justify-center gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">15+</p>
                        <p className="text-xs text-muted-foreground">Years</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">5000+</p>
                        <p className="text-xs text-muted-foreground">Surgeries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-secondary inline-flex mb-4">
                <GraduationCap className="w-4 h-4" />
                Qualifications
              </div>
              <h2 className="text-3xl font-bold">Education & Training</h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="card-glass p-8">
                <ul className="space-y-4">
                  {qualifications.map((qual, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Affiliations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-secondary inline-flex mb-4">
                <Building2 className="w-4 h-4" />
                Affiliations
              </div>
              <h2 className="text-3xl font-bold">Hospital Affiliations</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {affiliations.map((aff, i) => (
                <div key={i} className="card-glass p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{aff.name}</h3>
                  <p className="text-sm text-muted-foreground">{aff.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="badge-secondary inline-flex mb-4">
                <Heart className="w-4 h-4" />
                Philosophy
              </div>
              <h2 className="text-3xl font-bold mb-8">Care That Moves You</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Precision",
                    desc: "Utilizing the latest robotic technology for accurate, personalized surgery.",
                  },
                  {
                    icon: Heart,
                    title: "Compassion",
                    desc: "Understanding that behind every joint is a person with dreams and goals.",
                  },
                  {
                    icon: Users,
                    title: "Partnership",
                    desc: "Working together with patients to achieve the best possible outcomes.",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
