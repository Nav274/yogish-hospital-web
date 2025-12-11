import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { AnimatedCard } from "./AnimatedCard";

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
    question: "What activities can I do after joint replacement?",
    answer: "After full recovery (3-6 months), most patients can return to low-impact activities like walking, swimming, cycling, golf, and light hiking. High-impact activities like running or contact sports are generally not recommended to protect your new joint.",
  },
  {
    question: "Can I kneel after knee replacement?",
    answer: "While it's technically possible to kneel after knee replacement, many patients find it uncomfortable due to sensitivity around the incision area. With time and physiotherapy, some patients become comfortable with modified kneeling positions.",
  },
  {
    question: "What is the success rate of joint replacement surgery?",
    answer: "Joint replacement surgery has a success rate of over 95%. Most patients experience significant pain relief and improved mobility. The use of robotic technology further enhances precision and outcomes.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-secondary inline-flex mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Answers to common questions about joint replacement surgery.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedCard key={i} delay={i * 50}>
                <AccordionItem
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
              </AnimatedCard>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
