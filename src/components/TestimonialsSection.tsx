import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    age: 62,
    surgery: "Total Knee Replacement",
    rating: 5,
    review: "After years of debilitating knee pain, Dr. Yogish gave me my life back. The robotic surgery was precise, and I was walking within days. Now I can play with my grandchildren again!",
    timeline: "6 months post-surgery",
  },
  {
    name: "Lakshmi Devi",
    age: 58,
    surgery: "Bilateral Hip Replacement",
    rating: 5,
    review: "I was terrified of surgery, but Dr. Yogish's calm demeanor and thorough explanations put me at ease. Both hips replaced, and I'm now back to my morning walks and yoga.",
    timeline: "1 year post-surgery",
  },
  {
    name: "Mohammed Irfan",
    age: 55,
    surgery: "Revision Knee Surgery",
    rating: 5,
    review: "My first knee replacement elsewhere failed. Dr. Yogish performed a complex revision surgery with incredible skill. His attention to detail and post-operative care were exceptional.",
    timeline: "8 months post-surgery",
  },
  {
    name: "Priya Sharma",
    age: 48,
    surgery: "Partial Knee Replacement",
    rating: 5,
    review: "As an active person, I was worried about getting back to my activities. Dr. Yogish recommended a partial replacement, and I'm now back to hiking and cycling!",
    timeline: "4 months post-surgery",
  },
  {
    name: "Suresh Reddy",
    age: 65,
    surgery: "Total Hip Replacement",
    rating: 5,
    review: "Dr. Yogish's expertise in robotic surgery made all the difference. The precision of the procedure meant faster recovery and better outcomes. Highly recommended!",
    timeline: "5 months post-surgery",
  },
  {
    name: "Anita Rao",
    age: 52,
    surgery: "Knee Arthroscopy",
    rating: 5,
    review: "Minimally invasive procedure with amazing results. I was back to work within a week. Dr. Yogish and his team provided excellent care throughout.",
    timeline: "3 months post-surgery",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[400px] card-glass p-6 relative overflow-hidden group hover:border-secondary/50 transition-colors mx-3">
    {/* Quote Icon */}
    <Quote className="absolute top-4 right-4 w-10 h-10 text-secondary/20 group-hover:text-secondary/40 transition-colors" />
    
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>

    {/* Review */}
    <p className="text-foreground mb-6 leading-relaxed line-clamp-4">
      "{testimonial.review}"
    </p>

    {/* Patient Info */}
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">
          Age {testimonial.age} • {testimonial.surgery}
        </p>
      </div>
      <div className="text-right">
        <span className="badge-primary text-xs">
          {testimonial.timeline}
        </span>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through half the content (the duplicated set)
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-section-4 section-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge-secondary inline-flex mb-4">
            <Star className="w-4 h-4" />
            Patient Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from patients who have regained their mobility and quality of life 
            through Dr. Yogish's expert care and advanced surgical techniques.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Testimonials */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden py-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Duplicate testimonials for seamless infinite scroll */}
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Success Stats */}
        <div className="mt-16 card-glass p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5000+", label: "Successful Surgeries" },
              { value: "98%", label: "Patient Satisfaction" },
              { value: "15+", label: "Years Experience" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
