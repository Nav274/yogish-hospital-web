import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Camera, Building2, Stethoscope, Activity } from "lucide-react";

const galleryCategories = [
  {
    title: "Clinic Facilities",
    icon: Building2,
    images: [
      { title: "Reception & Waiting Area", desc: "Modern, comfortable waiting space for patients and families" },
      { title: "Consultation Room", desc: "Private consultation rooms with advanced diagnostic displays" },
      { title: "Patient Rooms", desc: "Well-equipped rooms designed for comfort and recovery" },
      { title: "Rehabilitation Center", desc: "State-of-the-art physiotherapy and rehab facilities" },
    ],
  },
  {
    title: "Surgical Equipment",
    icon: Stethoscope,
    images: [
      { title: "Robotic Surgery System", desc: "MAKO robotic-arm assisted surgery platform for precision procedures" },
      { title: "Navigation Technology", desc: "Computer-assisted navigation for accurate implant positioning" },
      { title: "Advanced Imaging", desc: "Intraoperative imaging for real-time surgical guidance" },
      { title: "Minimally Invasive Tools", desc: "Specialized instruments for smaller incisions and faster recovery" },
    ],
  },
  {
    title: "Operating Theater",
    icon: Activity,
    images: [
      { title: "Modular OT Complex", desc: "ISO-certified modular operating theaters with laminar airflow" },
      { title: "Sterile Environment", desc: "HEPA-filtered air and strict sterilization protocols" },
      { title: "Monitoring Systems", desc: "Advanced patient monitoring for safety during procedures" },
      { title: "Support Equipment", desc: "Modern anesthesia workstations and life support systems" },
    ],
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-secondary inline-flex mb-4">
              <Camera className="w-4 h-4" />
              Facilities Tour
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">World-Class</span> Facilities
            </h1>
            <p className="text-muted-foreground text-lg">
              Take a virtual tour of our state-of-the-art clinic and surgical facilities. 
              We invest in the latest technology to ensure the best outcomes for our patients.
            </p>
          </div>
        </section>

        {/* Gallery Categories */}
        {galleryCategories.map((category, catIndex) => (
          <section key={catIndex} className={`py-16 ${catIndex % 2 === 1 ? 'bg-card/50' : ''}`}>
            <div className="container mx-auto px-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {/* Image Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, imgIndex) => (
                  <AnimatedCard key={imgIndex} delay={imgIndex * 100}>
                    <div 
                      className="group card-glass overflow-hidden hover:border-secondary/50 transition-all duration-300 h-full"
                    >
                      {/* Placeholder Image */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-muted to-card flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
                        <div className="relative z-10 text-center p-4">
                          <category.icon className="w-12 h-12 text-secondary/40 mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">Image Coming Soon</p>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-1">{image.title}</h3>
                        <p className="text-sm text-muted-foreground">{image.desc}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Technology Highlight */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="card-glass p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="gradient-text">MAKO Robotic</span> Technology
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We utilize the MAKO SmartRobotics™ system - the most advanced robotic-arm 
                    assisted surgical technology available. This allows Dr. Yogish to perform 
                    joint replacement with unprecedented accuracy, resulting in:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Precise implant positioning within 1mm accuracy",
                      "Minimal tissue disruption for faster healing",
                      "Customized surgery based on your unique anatomy",
                      "Reduced pain and shorter hospital stays",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Activity className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-muted to-card border border-border flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-16 h-16 text-secondary/30 mx-auto mb-3" />
                    <p className="text-muted-foreground">MAKO System Demo</p>
                    <p className="text-xs text-muted-foreground/70">Video Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
