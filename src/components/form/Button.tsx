import { ButtonProps } from "@/types/button";

const variantClasses = {
  primary:
    "bg-racing-green/70 text-foreground/90 border-1 border-racing-green/70 hover:border-racing-green hover:text-foreground hover:bg-racing-green focus:shadow-inner-xl focus:shadow-[inset_0_10px_10px_rgba(255,255,255,1)]",
  transparent:
    "h-9! bg-transparent text-foreground/90 hover:text-foreground hover:bg-foreground/10 focus:bg-foreground/20",
  outline:
    "bg-transparent border-foreground/40 border-1 text-foreground/90 hover:text-foreground hover:border-foreground/70 focus:bg-racing-green/10",
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
      className={`flex capitalize items-center gap-3 h-fit whitespace-nowrap rounded-md font-semibold transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
