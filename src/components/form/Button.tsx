import { ButtonProps } from "@/types/button";

const variantClasses = {
  primary:
    "bg-racing-green/30 text-foreground/70 border-1 border-racing-green/30 hover:border-racing-green/40 hover:text-foreground/90 hover:bg-racing-green/40",
  secondary:
    "bg-foreground/30 text-background/70 border-1 border-foreground/30 hover:border-foreground/40 hover:text-background/90 hover:bg-foreground/40",
  outline:
    "bg-transparent border-ginger/30 border-1 text-white/70 hover:bg-ginger/10 hover:text-white/90 hover:border-ginger/40",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-1 text-md",
  lg: "px-6 py-3 text-lg",
};

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`capitalize h-fit whitespace-nowrap rounded-md font-semibold transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
