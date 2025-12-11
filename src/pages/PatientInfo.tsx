import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, FileText, Clock, HelpCircle, CheckCircle, Activity } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Pre-operative Checklist",
    description: "Everything you need to do before your joint replacement surgery",
    link: "#checklist",
  },
  {
    icon: Clock,
    title: "Recovery Timeline",
    description: "Week-by-week guide to what you can expect after surgery",
    link: "#timeline",
  },
];

const faqs = [
  {
    question: "How long does a robotic joint replacement last?",
    answer: "With proper care and depending on individual factors, robotic joint replacements can last 20-25 years or more. The precision of robotic surgery often leads to better implant positioning, which can contribute to longer implant life.",
  },
  {
    question: "What is the difference between robotic and traditional joint replacement?",
    answer: "Robotic surgery uses CT imaging to create a 3D model of your joint, allowing for precise pre-operative planning. During surgery, the robotic arm provides real-time feedback to ensure accurate bone preparation and implant placement within sub-millimeter accuracy.",
  },
  {
    question: "How long will I be in hospital?",
    answer: "Most patients undergoing robotic joint replacement stay in hospital for 2-3 days. Some patients may be eligible for same-day discharge depending on their overall health and home support system.",
  },
  {
    question: "When can I drive after joint replacement?",
    answer: "For right knee or hip replacement, most patients can resume driving after 4-6 weeks. For left-sided surgery, you may be able to drive an automatic vehicle within 2-3 weeks, provided you're off pain medications and can comfortably control the vehicle.",
  },
  {
    question: "Will I need physiotherapy after surgery?",
    answer: "Yes, physiotherapy is essential for optimal recovery. You'll begin gentle exercises on the day of surgery itself. A structured physiotherapy program helps restore strength, flexibility, and confidence in your new joint.",
  },
  {
    question: "Can I kneel after knee replacement?",
    answer: "While it's technically possible to kneel after knee replacement, many patients find it uncomfortable due to sensitivity around the incision area. With time and physiotherapy, some patients become comfortable with modified kneeling positions.",
  },
  {
    question: "What activities can I do after joint replacement?",
    answer: "After full recovery (3-6 months), most patients can return to low-impact activities like walking, swimming, cycling, golf, and light hiking. High-impact activities like running or contact sports are generally not recommended to protect your new joint.",
  },
  {
    question: "What is the success rate of joint replacement surgery?",
    answer: "Joint replacement surgery has a success rate of over 95%. Most patients experience significant pain relief and improved mobility. The use of robotic technology further enhances precision and outcomes.",
  },
];

const timeline = [
  {
    period: "Day 1",
    title: "Surgery Day & First Steps",
    items: [
      "Surgery completed under anaesthesia (1-2 hours)",
      "Wake up in recovery room with pain well controlled",
      "Physiotherapist helps you sit up and stand",
      "Most patients take first steps within hours of surgery",
      "Begin gentle ankle and leg exercises",
    ],
    tip: "Focus on pain control and following physiotherapist instructions.",
  },
  {
    period: "Days 2-3",
    title: "Hospital Recovery",
    items: [
      "Walking further with walker or crutches",
      "Climbing stairs practice (if needed for home)",
      "Learning home exercises",
      "Wound check and dressing",
      "Discharge planning and home instructions",
    ],
    tip: "Ask all your questions before going home.",
  },
  {
    period: "Weeks 1-2",
    title: "Early Home Recovery",
    items: [
      "Walking indoors with walking aid",
      "Performing prescribed exercises 2-3 times daily",
      "Managing swelling with ice and elevation",
      "Wound healing — keep dry and clean",
      "First follow-up appointment (wound check)",
    ],
    tip: "Don't overdo it. Rest is important, but so is gentle movement throughout the day.",
  },
  {
    period: "Weeks 2-4",
    title: "Building Confidence",
    items: [
      "Transitioning from walker to single crutch or cane",
      "Increasing walking distance",
      "Hip: bending to put on shoes becoming easier",
      "Knee: aiming for 90+ degrees of bend",
      "Sleeping more comfortably",
    ],
    tip: "Progress can feel slow — this is normal. Consistency with exercises matters more than intensity.",
  },
  {
    period: "Weeks 4-6",
    title: "Returning to Normal Activities",
    items: [
      "Walking without aids indoors",
      "Driving (automatic car, if off pain medication)",
      "Light household tasks",
      "Return to desk work possible",
      "Staples or stitches removed if not dissolving",
    ],
    tip: "Listen to your body. Some days will be better than others.",
  },
  {
    period: "Months 2-3",
    title: "Regaining Strength",
    items: [
      "Walking longer distances",
      "Light recreational activities",
      "Most daily activities comfortable",
      "Continuing exercises for strength",
    ],
    tip: "Keep up with your exercises even when you feel better.",
  },
  {
    period: "Months 3-6",
    title: "Full Recovery",
    items: [
      "Full recovery for most patients",
      "Low-impact sports like swimming, cycling",
      "Golf, hiking, and travel",
      "Final follow-up appointments",
    ],
    tip: "Enjoy your new, pain-free mobility!",
  },
];

const PatientInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-secondary inline-flex mb-4">
              <FileText className="w-4 h-4" />
              Patient Education
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding Your <span className="gradient-text">Treatment Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe informed patients make better decisions and experience better outcomes. 
              Explore our resources to learn about joint replacement procedures, preparation, and recovery.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <div className="badge-secondary inline-flex mb-4">
              Resources
            </div>
            <h2 className="text-3xl font-bold mb-4">Patient Resources</h2>
            <p className="text-muted-foreground">
              Helpful guides to prepare you for surgery and support your recovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {resources.map((resource, i) => (
              <AnimatedCard key={i} delay={i * 100}>
                <a
                  href={resource.link}
                  className="group card-glass p-6 hover:border-secondary/50 transition-colors block h-full"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-secondary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                      <p className="text-sm text-primary mt-2 flex items-center gap-1">
                        View resource <ArrowRight className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-secondary inline-flex mb-4">
                <HelpCircle className="w-4 h-4" />
                FAQs
              </div>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Answers to common questions about joint replacement surgery.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="card-glass px-6 border-border/50 data-[state=open]:border-secondary/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section id="timeline" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="badge-secondary inline-flex mb-4">
                <Clock className="w-4 h-4" />
                What to Expect
              </div>
              <h2 className="text-3xl font-bold mb-4">Recovery Timeline</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding what to expect at each stage of recovery helps you stay 
                motivated and track your progress.
              </p>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-border" />
              
              {timeline.map((stage, i) => (
                <AnimatedCard key={i} delay={i * 100}>
                  <div className="relative pl-16 pb-12 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center border-4 border-background">
                      <Activity className="w-5 h-5 text-secondary" />
                    </div>
                    
                    <div className="card-glass p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="badge-secondary text-xs">{stage.period}</span>
                        <h3 className="text-lg font-semibold">{stage.title}</h3>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {stage.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="p-3 rounded-lg bg-secondary/10 border-l-2 border-secondary">
                        <p className="text-sm">
                          <span className="text-secondary font-medium">Tip:</span>{" "}
                          <span className="text-muted-foreground">{stage.tip}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="card-glass p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have More Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a consultation with Dr. Yogish to discuss your specific situation 
              and get personalized answers to all your questions.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PatientInfo;
