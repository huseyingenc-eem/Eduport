import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    innerClassName?: string; // Header gibi durumlar için ekstra class
}

const Container: React.FC<ContainerProps> = ({ children, className = "", innerClassName = "" }) => {
    return (
        <div className={` px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className={`max-w-screen-xl w-full mx-auto ${innerClassName}`}>
                {children}
            </div>
        </div>
    );
};


export default Container;
