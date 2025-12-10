import { useState } from "react";
import Header from "@/components/Header";
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
import { Phone, Mail, MapPin, Clock, Calendar, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
        title: "Request Submitted",
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
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Request an <span className="gradient-text">Appointment</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Fill out the form below and we'll contact you within 48 hours to confirm your appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6">
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
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
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
                    placeholder="Tell us more about your condition or any questions you have..."
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
                      Request Appointment
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We will contact you within 48 hours to confirm your appointment.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="card-glass p-6 space-y-6">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Primary Phone</p>
                    <a href="tel:+919480385533" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 94803 85533
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:yogishv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      yogishv@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Re-Flex Super Specialty Clinic, #301/C, 35th Cross, 9th Main, 4th Block, Jayanagar, Bengaluru – 560011
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Daily: 5:00 PM – 8:00 PM at Re-Flex Clinic (see schedule below for hospital timings)
                    </p>
                  </div>
                </div>
              </div>

              {/* Clinic Schedule */}
              <div className="card-glass p-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
