import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Building2, Award } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["MBBS, MS (Orthopaedics)", "Fellowship in Joint Replacement", "Robotic Surgery Certification"],
  },
  {
    icon: Building2,
    title: "Affiliations",
    items: ["Manipal Hospital, Kanakapura Road", "Malathi Manipal Hospital", "Re-Flex Super Specialty Clinic"],
  },
  {
    icon: Award,
    title: "Specializations",
    items: ["Primary Hip Replacement", "Revision Hip Surgery", "Complex Knee Reconstruction"],
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-muted to-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">Dr.</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Yogish Vijaya Kumar</h3>
                    <p className="text-muted-foreground">Orthopaedic Surgeon</p>
                  </div>
                  <div className="badge-primary">
                    15+ Years of Excellence
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-20 rounded-xl bg-secondary/10 backdrop-blur-sm" />
              <div className="absolute bottom-4 right-4 w-20 h-20 rounded-xl bg-primary/10 backdrop-blur-sm" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="badge-secondary inline-flex mb-4">
                About the Surgeon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet <span className="gradient-text">Dr. Yogish V.K.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 15 years of dedicated experience in orthopaedic surgery, Dr. Yogish Vijaya Kumar 
                has established himself as a leading expert in robotic-assisted hip and knee replacement surgery in Bangalore.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His patient-centric approach combines advanced surgical techniques with compassionate care, 
                ensuring optimal outcomes and a smooth recovery journey for every patient.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid gap-4">
              {credentials.map((cred, i) => (
                <div key={i} className="card-glass p-4 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{cred.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cred.items.map((item, j) => (
                        <span key={j} className="text-sm text-muted-foreground">
                          {item}{j < cred.items.length - 1 && " • "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" asChild>
              <Link to="/about">
                Learn More About Dr. Yogish
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
