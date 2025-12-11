import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({ children, className, delay = 0 }: AnimatedCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && "animate-bounce-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
