
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

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
        { name: "Fracture Treatment", path: "/services/fracture-treatment" },
        { name: "Sports Injury", path: "/services/sports-injury" },
        {
          name: "Back and Neck Pain",
          childrenoforthopadictreatement: [
            { name: "Disc prolapse", path: "/services/disc-prolapse" },
            { name: "Spondylosis", path: "/services/spondylosis" }
          ]
        },
        {
          name: "Geriatric Orthopadics",
          path: "",
          children: [
            { name: "Arthritis", path: "/services/arthrities" },
            { name: "Gait Related Issues", path: "/services/gait-issues" },
            { name: "Limb Length Issues", path: "/services/limb-length-issues" },
            { name: "Osteoporosis", path: "/services/osteoporosis" }
          ]
        },
        { name: "PRP Therapy for Tennis/Golfers Elbow/Planter Fasciities", path: "/services/prp-therapy" },
        {
          name: "Regenerative Orthopadics",
          path: "",
          children: [
            { name: "OSSGROW for AVN femoral head", path: "" },
            { name: "CARTIGROW for cattilage defects", path: "" },
            { name: "STEMONE Injection for arthritis", path: "" }
          ]
        },
        { name: "Joint Pain", path: "/services/jointpain" },
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
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-header shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
          <div className="w-44 h-24 flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full object-contain sm:h-10"
              />
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
                    to={item.path}
                    className={`px-4 py-2 w-full rounded-lg text-sm font-medium transition-colors ${
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
                  <div className="absolute top-full left-0 w-72 py-2 rounded-xl bg-header border-white/20 shadow-xl">
                    {item.childrenofservices.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2.5 w-full text-sm text-header-foreground/80 hover:text-white hover:bg-white/10"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Orthopadic Treatment dropdown */}
                {item.children && openMenu === item.name && (
                  <div className="absolute top-full left-0 w-72 py-2 rounded-xl bg-header border-white/20 shadow-xl">
                    {item.children.map((child) => (
                      <div
                        key={child.name}
                        className="relative"
                        onMouseEnter={() => setOpenSubMenu(child.name)}
                        onMouseLeave={() => setOpenSubMenu(null)}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10 cursor-pointer">
                          <Link to={child.path} className="w-full">
                            {child.name}
                          </Link>
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
                                  className="block px-4 py-2.5 w-full text-sm text-header-foreground/80 hover:text-white hover:bg-white/10"
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-header-foreground hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-header border-t border-border shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.childrenofservices || item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileMenu(item.name)}
                      className="w-full flex items-center justify-between px-6 py-3 text-header-foreground/80 hover:text-white hover:bg-white/10" >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileOpenMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Mobile Dropdown */}
                    {item.childrenofservices && mobileOpenMenu === item.name && (
                      <div className="text-header-foreground/80 hover:text-white hover:bg-white/10">
                        {item.childrenofservices.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={closeMenu}
                            className="w-full flex items-center justify-between px-10 py-2.5 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10 hover:text-primary bg-header"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Orthopadic Treatment Mobile Dropdown */}
                    {item.children && mobileOpenMenu === item.name && (
                      <div className="text-header-foreground/80 hover:text-white hover:bg-white/10">
                        {item.children.map((child) => (
                          <div key={child.name}>
                            {child.children || child.childrenoforthopadictreatement ? (
                              <>
                                <button
                                  onClick={() => toggleMobileSubMenu(child.name)}
                                  className="w-full flex items-center justify-between px-10 py-2.5 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10 hover:text-primary bg-header"
                                >
                                  <span>{child.name}</span>
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${
                                      mobileOpenSubMenu === child.name ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {mobileOpenSubMenu === child.name && (
                                  <div className="text-header-foreground/80 hover:text-white hover:bg-white/10">
                                    {(child.children || child.childrenoforthopadictreatement)?.map((sub: any) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.path || "#"}
                                        onClick={closeMenu}
                                        className="w-full flex items-center justify-between px-16 py-2.5 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10 hover:text-primary bg-header"
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
                                className="w-full flex items-center justify-between px-10 py-2.5 text-sm text-header-foreground/80 hover:text-white hover:bg-white/10 hover:text-primary bg-header"
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
                    className={`block px-6 py-3 w-full font-medium ${
                      isActive(item.path)
                        ? "bg-white/15 text-white"
                        : "text-header-foreground/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="px-6 pt-4 mt-4 border-t border-border space-y-3">
              {/* <a
                href="tel:+919480385533"
                className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                +91 94803 85533
              </a> */}
              <Button variant="default" className="w-full" asChild>
                <Link to="/bookconsultation" onClick={closeMenu}>
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
