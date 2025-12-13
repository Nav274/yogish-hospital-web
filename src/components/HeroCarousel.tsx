import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import drYogish from "../assets/dr-yogish.jpg";

// Using existing image - upload your actual images (DR.-Yogish-vijaya.webp, Orthopaedic-Surgery.webp) to replace
const images = [drYogish, drYogish];

const SWIPE_THRESHOLD = 50;

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const startXRef = useRef<number | null>(null);
  const deltaXRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [nextSlide, isPaused]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextSlide, prevSlide]);

  // Touch / Mouse handlers for swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      startXRef.current = e.clientX;
      deltaXRef.current = 0;
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (startXRef.current === null) return;
      deltaXRef.current = e.clientX - startXRef.current;
    };

    const onPointerUp = () => {
      if (startXRef.current === null) return;
      const moved = deltaXRef.current;
      startXRef.current = null;
      deltaXRef.current = 0;

      if (Math.abs(moved) > SWIPE_THRESHOLD) {
        if (moved < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, [nextSlide, prevSlide]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[calc(100vh-80px)] bg-section-1 flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides container */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            draggable={false}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/50 text-white p-3 md:left-8 transition pointer-events-auto"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/50 text-white p-3 md:right-8 transition pointer-events-auto"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-8 flex items-center gap-3 pointer-events-auto">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? "bg-primary scale-125" : "bg-primary/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
