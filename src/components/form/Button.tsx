import { ButtonProps } from "@/types/button";

const variantClasses = {
  primary:
    "bg-racing-green/60 text-foreground/80 hover:text-foreground/90 hover:bg-racing-green/70",
  secondary:
    "bg-background/80 text-foreground/80 border-1 border-background/80 hover:border-background-90 hover:text-foreground/90 hover:bg-background/90",
  outline:
    "bg-transparent border-ginger/20 border-1 text-foreground/80 hover:bg-ginger/10 hover:text-foreground/90 hover:border-ginger/10",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1 text-md",
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
