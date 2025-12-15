import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // desktop hover control
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

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
        { name: "Revision-Joint-Surgery", path: "/services/revision-joint-surgery" },
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
        { name: "PRP Therapy for Early Arthrities & Ligament Injuries" },
        { name: "Bone Marrow Concentrate Injection for Osteonecrosis/AVN", path: "" },
        { name: "Bone Marrow Concentrate Injection for Cartilage Defects", path: "" },
        { name: "Viscosupplementation for Early Osteoarthritis" }
      ]
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Patient Info", path: "/patient-info" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-header shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-40 h-40 flex items-center">
              <img src={logo} alt="logo" className="w-full object-cover" />
            </div>
          </Link>

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
                  <div className="absolute top-full left-0  w-56 py-2 rounded-xl bg-white border border-border shadow-xl">
                    {item.childrenofservices.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Orthopadic Treatment dropdown */}
                {item.children && openMenu === item.name && (
                  <div className="absolute top-full left-0 w-72 py-2 rounded-xl bg-white border hover:text-primary hover:bg-muted border-border shadow-xl">
                    {item.children.map((child) => (
                      <div
                        key={child.name}
                        className="relative"
                        onMouseEnter={() => setOpenSubMenu(child.name)}
                        onMouseLeave={() => setOpenSubMenu(null)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted">
                          {child.name}
                          {(child.children || child.childrenoforthopadictreatement) && (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>

                        {(child.children || child.childrenoforthopadictreatement) &&
                          openSubMenu === child.name && (
                            <div className="absolute top-0 left-full  w-64 py-2 rounded-xl bg-white border border-border shadow-xl">
                              {(child.children ||
                                child.childrenoforthopadictreatement).map((sub: any) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="block px-4 py-4 text-sm text-foreground/70 hover:text-primary hover:bg-muted"
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

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919480385533" className="flex items-center gap-2 text-sm text-header-foreground/80 hover:text-white">
              <Phone className="w-4 h-4" />
              +91 94803 85533
            </a>
            <Button variant="hero" asChild>
              <Link to="/bookconsultation">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (UNCHANGED) */}
          <button
            className="lg:hidden p-2 rounded-lg text-header-foreground hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
