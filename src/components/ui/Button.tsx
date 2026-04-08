import type React from "react";
import { cn } from "../../libs/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
    primary: cn(
        "bg-accent text-white border border-white/10",
        "hover:bg-blue-800/10 hover:text-white hover:border-white/60 ",
        "origin-left backdrop-blur-md",
        "hover:scale-105 hover:translate-x-1 hover:translate-y-1",
        "active:scale-95"
    ),
    secondary: cn(
        "bg-accent text-white border rounded-md border-white/10",
        "hover:bg-accent/90 hover:border-white/40",
        "origin-left backdrop-blur-md",
        "hover:scale-105 hover:translate-x-1 hover:translate-y-1",
        "active:scale-95",
    ),
    outline: cn(
        "text-primary border rounded-md border-primary",

    ),
    ghost: cn(
        "bg-transparent text-white border border-transparent",
        "hover:bg-white/10 hover:border-white/10"
    ),
    danger: cn(
        "hidden md:block bg-accent font-heading text-white border px-4 m-4 rounded-md border-red-500/30",

    ),
};

const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
};

export default function Button({
    children,
    className,
    variant = "primary",   // ← default variant
    size = "md",           // ← default size
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                // base styles shared by all variants
                "relative font-semibold uppercase transition-all duration-300",
                " disabled:pointer-events-none cursor-pointer",
                // variant + size
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}