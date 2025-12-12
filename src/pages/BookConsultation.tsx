import { useState } from "react";
import Header from "@/components/Header";
import { AnimatedCard } from "@/components/AnimatedCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, MapPin, CheckCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const clinicLocations = [
  {
    name: "Manipal Hospital, Kanakapura Road",
    schedule: "Wednesday & Saturday: 11:00 AM – 5:00 PM",
  },
  {
    name: "Malathi Manipal Hospital, Jayanagar",
    schedule: "Monday & Friday: 10:30 AM – 4:00 PM",
  },
  {
    name: "Re-Flex Super Specialty Clinic, Jayanagar",
    schedule: "Daily: 5:00 PM – 8:00 PM",
  },
];

const BookConsultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToContact, setAgreedToContact] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToContact) {
      toast({
        title: "Agreement Required",
        description: "Please agree to be contacted for appointment confirmation.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Submitted",
        description: "We will contact you within 48 hours to confirm your appointment.",
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
              Book a <span className="gradient-text">Consultation</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule an appointment with Dr. Yogish Vijaya Kumar for expert orthopaedic consultation and treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <AnimatedCard>
                <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6">
                  <h2 className="text-2xl font-semibold mb-2">Appointment Details</h2>
                  <p className="text-muted-foreground text-sm mb-6">Fill in your details and we'll confirm your appointment within 48 hours.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-primary">*</span>
                      </Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-primary">*</span>
                      </Label>
                      <Input id="phone" type="tel" placeholder="9480385533" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">
                        Age <span className="text-primary">*</span>
                      </Label>
                      <Input id="age" type="number" placeholder="Enter your age" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">
                        Preferred Date <span className="text-primary">*</span>
                      </Label>
                      <Input id="date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinic">
                        Preferred Clinic <span className="text-primary">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select clinic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manipal-kanakapura">Manipal Hospital, Kanakapura Road</SelectItem>
                          <SelectItem value="malathi-jayanagar">Malathi Manipal Hospital, Jayanagar</SelectItem>
                          <SelectItem value="reflex-jayanagar">Re-Flex Clinic, Jayanagar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">
                      Reason for Consultation <span className="text-primary">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hip-pain">Hip Pain / Hip Replacement</SelectItem>
                        <SelectItem value="knee-pain">Knee Pain / Knee Replacement</SelectItem>
                        <SelectItem value="second-opinion">Second Opinion</SelectItem>
                        <SelectItem value="post-surgery">Post-Surgery Follow-up</SelectItem>
                        <SelectItem value="other">Other Orthopaedic Concern</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your symptoms, medical history, or any questions..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="agree" 
                      checked={agreedToContact}
                      onCheckedChange={(checked) => setAgreedToContact(checked as boolean)}
                    />
                    <Label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to be contacted by Dr Yogish Vijaya Kumar's clinic for appointment confirmation.{" "}
                      <span className="text-primary">*</span>
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Consultation
                      </>
                    )}
                  </Button>
                </form>
              </AnimatedCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedCard delay={100}>
                <div className="card-glass p-6 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Available Locations
                  </h3>
                  
                  {clinicLocations.map((clinic, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/50 space-y-2">
                      <p className="font-medium text-sm">{clinic.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {clinic.schedule}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedCard>

              <AnimatedCard delay={200}>
                <div className="card-glass p-6 space-y-4">
                  <h3 className="text-lg font-semibold">What to Expect</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">Confirmation call within 48 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">Thorough evaluation and diagnosis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">Personalized treatment plan</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">Bring any previous reports or scans</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={300}>
                <div className="card-glass p-6 text-center">
                  <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Emergency?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent cases, please call directly
                  </p>
                  <a 
                    href="tel:+919480385533" 
                    className="text-primary font-semibold hover:underline"
                  >
                    +91 94803 85533
                  </a>
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

export default BookConsultation;