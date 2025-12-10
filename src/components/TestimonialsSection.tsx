import { Star, Quote } from "lucide-react";

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
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="card-glass p-6 relative overflow-hidden group hover:border-secondary/50 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-secondary/20 group-hover:text-secondary/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground mb-6 leading-relaxed">
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
          ))}
        </div>

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
