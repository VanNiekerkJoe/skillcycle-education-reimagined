import { ReactNode } from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export const StatCard = ({
  value,
  suffix = "",
  prefix = "",
  label,
  icon,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "relative p-6 md:p-8 rounded-2xl bg-card border border-border",
        "hover:border-primary/50 transition-all duration-300",
        "group",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            {icon}
          </div>
        )}
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
          <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
        </div>
        <p className="text-muted-foreground text-sm md:text-base">{label}</p>
      </div>
    </div>
  );
};
