import { Link } from "react-router-dom";
import { Activity, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Activity className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">DR. YOGISH V.K.</h3>
                <p className="text-xs text-muted-foreground tracking-wider">CARE THAT MOVES YOU</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert in robotic hip and knee replacement surgery with over 15 years of experience in joint replacement procedures.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Dr. Yogish", path: "/about" },
                { name: "Hip Replacement", path: "/services/hip-replacement" },
                { name: "Knee Replacement", path: "/services/knee-replacement" },
                { name: "Patient Resources", path: "/patient-info" },
                { name: "Book Appointment", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">+91 94803 85533</p>
                  <p className="text-xs text-muted-foreground">Primary Contact</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">yogishv@gmail.com</p>
                  <p className="text-xs text-muted-foreground">Email Us</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Re-Flex Super Specialty Clinic, #301/C, 35th Cross, 9th Main, 4th Block, Jayanagar, Bengaluru – 560011</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Clinic Hours</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Manipal Hospital</p>
                  <p className="text-xs text-muted-foreground">Wed & Sat: 11:00 AM – 5:00 PM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Malathi Manipal Hospital</p>
                  <p className="text-xs text-muted-foreground">Mon & Fri: 10:30 AM – 4:00 PM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Re-Flex Clinic</p>
                  <p className="text-xs text-muted-foreground">Daily: 5:00 PM – 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dr. Yogish V.K. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
