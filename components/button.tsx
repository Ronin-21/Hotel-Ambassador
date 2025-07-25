import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: keyof typeof buttonVariants.size;
  variant?: keyof typeof buttonVariants.variant;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const buttonVariants = {
  variant: {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

const Button = ({
  children,
  size = "default",
  variant = "default",
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${buttonVariants.size[size]} ${buttonVariants.variant[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
