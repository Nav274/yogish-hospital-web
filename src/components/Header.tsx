import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown, Activity } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      children: [
        { name: "Hip Replacement", path: "/services/hip-replacement" },
        { name: "Knee Replacement", path: "/services/knee-replacement" },
      ]
    },
    { name: "Patient Info", path: "/patient-info" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <Activity className="w-6 h-6 text-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">DR. YOGISH V.K.</h1>
              <p className="text-xs text-muted-foreground tracking-wider">CARE THAT MOVES YOU</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? "bg-muted text-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? "bg-muted text-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown */}
                {item.children && (
                  <div 
                    className={`absolute top-full left-0 mt-1 w-56 py-2 rounded-xl bg-card border border-border shadow-xl transition-all duration-200 ${
                      isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919480385533" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +91 94803 85533
            </a>
            <Button variant="hero" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path) 
                        ? "bg-muted text-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Consultation</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
