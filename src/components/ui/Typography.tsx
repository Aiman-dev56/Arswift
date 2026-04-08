import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/../../src/libs/utils";

const typographyVariants = cva("", {
    variants: {
        variant: {
            h1: "font-heading lg:text-[70px] md:text-[50px] text-[30px]  font-[400]",
            h2: "font-heading lg:text-4xl md:text-3xl text-[30px] font-semibold",
            h3: "font-heading lg:text-3xl md:text-[26px] text-[20px] ",
            h4: "font-heading lg:text-2xl md:text-[28px] text-[20px] font-[400] text-regular",

            p: "font-body text-[18px] leading font-normal",
            subtitle: "font-body lg:text-[28px] md:text-[28px] text-[20px] font-[400] text-muted",
            small: "font-body text-xs text-muted",
            li: "font-heading text-[16px] font-[400]   "
        },

        color: {
            primary: "text-primary",
            secondary: "text-secondary",

        },
    },

    defaultVariants: {
        variant: "p",
        color: "primary"
    },
});

type Props = React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof typographyVariants> & {
        as?: React.ElementType;
    };

export function Typography({
    variant,
    color,
    className,
    as,
    ...props
}: Props) {
    const Component =
        as ||
        (variant === "h1"
            ? "h1"
            : variant === "h2"
                ? "h2"
                : variant === "h3"
                    ? "h3"
                    : "p");

    return (
        <Component
            className={cn(typographyVariants({ variant, color }), className)}
            {...props}
        />
    );
}