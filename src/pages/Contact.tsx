import { useState } from "react";
import Header from "@/components/Header";
import { AnimatedCard } from "@/components/AnimatedCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Calendar, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const clinicSchedule = [
  {
    name: "Manipal Hospital, Kanakapura Road",
    schedule: "Wednesday & Saturday: 11:00 AM – 5:00 PM",
    phone: "+91 73530 26633",
  },
  {
    name: "Malathi Manipal Hospital, Jayanagar",
    schedule: "Monday & Friday: 10:30 AM – 4:00 PM",
    phone: "080 4009 1000",
  },
  {
    name: "Re-Flex Super Specialty Clinic, Jayanagar",
    schedule: "Daily: 5:00 PM – 8:00 PM",
    phone: "+91 94803 75533",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Submitted",
        description: "Thank you for your enquiry. We will get back to you soon.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services or want to know more? Send us an enquiry and we'll respond promptly.
            </p>
          </div>

          {/* Contact Info Cards - Full Width */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnimatedCard>
              <div className="card-glass p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+919480385533" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 94803 85533
                </a>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={100}>
              <div className="card-glass p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:yogishv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  yogishv@gmail.com
                </a>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="card-glass p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Jayanagar, Bengaluru
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="card-glass p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Daily: 5:00 PM – 8:00 PM
                </p>
              </div>
            </AnimatedCard>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Enquiry Form */}
            <AnimatedCard delay={400}>
              <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6 h-full">
                <h2 className="text-2xl font-semibold mb-4">Send an Enquiry</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-primary">*</span>
                    </Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-primary">*</span>
                    </Label>
                    <Input id="phone" type="tel" placeholder="9480385533" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">
                    Subject <span className="text-primary">*</span>
                  </Label>
                  <Input id="subject" placeholder="What is your enquiry about?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </>
                  )}
                </Button>
              </form>
            </AnimatedCard>

            {/* Clinic Schedule & Book Consultation */}
            <div className="space-y-6">
              <AnimatedCard delay={500}>
                <div className="card-glass p-6 space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Clinic Schedule
                  </h3>
                  
                  {clinicSchedule.map((clinic, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/50 space-y-1">
                      <p className="font-medium text-sm">{clinic.name}</p>
                      <p className="text-xs text-muted-foreground">{clinic.schedule}</p>
                      <p className="text-xs text-muted-foreground">Contact: {clinic.phone}</p>
                    </div>
                  ))}
                </div>
              </AnimatedCard>

              <AnimatedCard delay={600}>
                <div className="card-glass p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Ready to Book?</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation with Dr. Yogish Vijaya Kumar for expert orthopaedic care.
                  </p>
                  <Button variant="hero" size="lg" asChild className="w-full">
                    <Link to="/book-consultation">
                      <Calendar className="w-5 h-5" />
                      Book Consultation
                    </Link>
                  </Button>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;