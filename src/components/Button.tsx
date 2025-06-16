import React from "react";
import { cn } from "@/lib/utils"; // className birleştirme fonksiyonu (isteğe bağlı)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    variant?: "solid" | "outline";
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           icon,
                                           variant = "solid",
                                           className = "",
                                           ...props
                                       }) => {
    const baseStyle =
        variant === "outline"
            ? "border text-gray-800 bg-white hover:bg-gray-50"
            : "bg-blue-600 text-white hover:bg-blue-700";

    return (
        <button
            className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                baseStyle,
                className
            )}
            {...props}
        >
            {children}
            {icon && <span className="ml-1">{icon}</span>}
        </button>
    );
};

export default Button;
