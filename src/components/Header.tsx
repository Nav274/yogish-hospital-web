import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown, ChevronRight, MapPin } from "lucide-react";
import drYogish from "@/assets/dr-yogish.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // desktop hover control
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // mobile accordion control
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const [mobileOpenSubMenu, setMobileOpenSubMenu] = useState<string | null>(null);

  const location = useLocation();
  const isActive = (path?: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      childrenofservices: [
        { name: "Robotic Hip Replacement", path: "/services/hip-replacement" },
        { name: "Robotic Knee Replacement", path: "/services/knee-replacement" },
        { name: "Revision Joint Surgery", path: "/services/revision-joint-surgery" },
        { name: "Minimally Invasive", path: "/services/minimally-invasive" },
        { name: "Pre-Post Rehab", path: "/services/pre-post-rehab" }
      ]
    },
    {
      name: "Orthopadic Treatment",
      children: [
        { name: "Fracture Treatment", path: "" },
        { name: "Sports Injury", path: "" },
        {
          name: "Back and Neck Pain",
          path: "",
          childrenoforthopadictreatement: [
            { name: "Disc prolapse", path: "" },
            { name: "Spondylosis", path: "" }
          ]
        },
        {
          name: "Geriatric Orthopadics",
          path: "",
          children: [
            { name: "Arthritis", path: "" },
            { name: "Gait Related Issues", path: "" },
            { name: "Limb Length Issues", path: "" },
            { name: "Osteoporosis", path: "" }
          ]
        },
        { name: "PRP Therapy for Tennis/Golfers Elbow/Planter Fasciities", path: "" },
        {
          name: "Regenerative Orthopadics",
          path: "",
          children: [
            { name: "OSSGROW for AVN femoral head", path: "" },
            { name: "CARTIGROW for cattilage defects", path: "" },
            { name: "STEMONE Injection for arthritis", path: "" }
          ]
        },
        { name: "Joint Pain", path: "" },
        { name: "Deformity", path: "" },
        { name: "PRP Therapy for Early Arthrities & Ligament Injuries", path: "" },
        { name: "Bone Marrow Concentrate Injection for Osteonecrosis/AVN", path: "" },
        { name: "Bone Marrow Concentrate Injection for Cartilage Defects", path: "" },
        { name: "Viscosupplementation for Early Osteoarthritis", path: "" }
      ]
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Patient Info", path: "/patient-info" },
    { name: "Contact", path: "/contact" }
  ];

  const toggleMobileMenu = (name: string) => {
    setMobileOpenMenu(mobileOpenMenu === name ? null : name);
    setMobileOpenSubMenu(null);
  };

  const toggleMobileSubMenu = (name: string) => {
    setMobileOpenSubMenu(mobileOpenSubMenu === name ? null : name);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileOpenMenu(null);
    setMobileOpenSubMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Doctor Info */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={drYogish} 
                alt="Dr. Yogish Vijaya Kumar" 
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <h1 className="text-lg font-bold text-primary">Dr. Yogish Vijaya Kumar</h1>
                <p className="text-sm text-muted-foreground">Robotic Orthopaedic Surgeon</p>
              </div>
            </Link>

            {/* Location & Phone - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Jayanagar, Bangalore</p>
                  <p className="text-xs text-muted-foreground">560011</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <a href="tel:+919480375533" className="text-sm font-medium text-foreground hover:text-primary">
                    +91 94803 75533
                  </a>
                  <p className="text-xs text-muted-foreground">24/7 Customer Support</p>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-header shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.name)}
                  onMouseLeave={() => {
                    setOpenMenu(null);
                    setOpenSubMenu(null);
                  }}
                >
                  {item.childrenofservices || item.children ? (
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-header-foreground/80 hover:text-white hover:bg-white/10">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.path!}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? "bg-white/15 text-white"
                          : "text-header-foreground/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Services dropdown */}
                  {item.childrenofservices && openMenu === item.name && (
                    <div className="absolute top-full left-0 w-56 py-2 rounded-xl bg-header border border-white/20 shadow-xl">
                      {item.childrenofservices.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Orthopadic Treatment dropdown */}
                  {item.children && openMenu === item.name && (
                    <div className="absolute top-full left-0 w-72 py-2 rounded-xl bg-header border border-white/20 shadow-xl">
                      {item.children.map((child) => (
                        <div
                          key={child.name}
                          className="relative"
                          onMouseEnter={() => setOpenSubMenu(child.name)}
                          onMouseLeave={() => setOpenSubMenu(null)}
                        >
                          <div className="flex items-center justify-between px-4 py-2 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10 cursor-pointer">
                            {child.name}
                            {(child.children || child.childrenoforthopadictreatement) && (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>

                          {(child.children || child.childrenoforthopadictreatement) &&
                            openSubMenu === child.name && (
                              <div className="absolute top-0 left-full w-64 py-2 rounded-xl bg-header border border-white/20 shadow-xl">
                                {(child.children || child.childrenoforthopadictreatement)?.map((sub: any) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path || "#"}
                                    className="block px-4 py-2.5 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA - Desktop */}
            <div className="hidden lg:flex items-center">
              <Button variant="hero" asChild>
                <Link to="/book-consultation">Appointment</Link>
              </Button>
            </div>

            {/* Mobile - just show nav bar branding on mobile */}
            <span className="lg:hidden text-sm font-medium text-header-foreground">Menu</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-32 left-0 right-0 bg-white border-t border-border shadow-xl max-h-[calc(100vh-8rem)] overflow-y-auto">
          <nav className="py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.childrenofservices || item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileMenu(item.name)}
                      className="w-full flex items-center justify-between px-6 py-3 text-foreground hover:bg-muted"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileOpenMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Mobile Dropdown */}
                    {item.childrenofservices && mobileOpenMenu === item.name && (
                      <div className="bg-muted/50 py-2">
                        {item.childrenofservices.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={closeMenu}
                            className="block px-10 py-2.5 text-sm text-foreground/80 hover:text-primary"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Orthopadic Treatment Mobile Dropdown */}
                    {item.children && mobileOpenMenu === item.name && (
                      <div className="bg-muted/50 py-2">
                        {item.children.map((child) => (
                          <div key={child.name}>
                            {child.children || child.childrenoforthopadictreatement ? (
                              <>
                                <button
                                  onClick={() => toggleMobileSubMenu(child.name)}
                                  className="w-full flex items-center justify-between px-10 py-2.5 text-sm text-foreground/80 hover:text-primary"
                                >
                                  <span>{child.name}</span>
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${
                                      mobileOpenSubMenu === child.name ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {mobileOpenSubMenu === child.name && (
                                  <div className="bg-muted py-1">
                                    {(child.children || child.childrenoforthopadictreatement)?.map((sub: any) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.path || "#"}
                                        onClick={closeMenu}
                                        className="block px-14 py-2 text-sm text-foreground/70 hover:text-primary"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={child.path || "#"}
                                onClick={closeMenu}
                                className="block px-10 py-2.5 text-sm text-foreground/80 hover:text-primary"
                              >
                                {child.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path!}
                    onClick={closeMenu}
                    className={`block px-6 py-3 font-medium ${
                      isActive(item.path)
                        ? "text-primary bg-muted"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="px-6 pt-4 mt-4 border-t border-border space-y-3">
              <a
                href="tel:+919480385533"
                className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                +91 94803 85533
              </a>
              <Button variant="default" className="w-full" asChild>
                <Link to="/book-consultation" onClick={closeMenu}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
