import React from "react";
import clsx from "clsx";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    innerClassName?: string;
}

const Container: React.FC<ContainerProps> = ({
                                                 children,
                                                 className = "",
                                                 innerClassName,
                                             }) => {
    return (
        <div className={clsx("w-full", className)}>
            <div
                className={clsx(
                    "max-w-screen-xl w-full mx-auto",
                    innerClassName ?? "px-6 sm:px-6 lg:px-8"
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
