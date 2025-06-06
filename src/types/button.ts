export type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type MenuButtonProps = {
  page: string;
  children: React.ReactNode;
  link: string;
};
