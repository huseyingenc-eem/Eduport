import React from "react";

const FeatureCard = ({
                         icon,
                         title,
                         bg,
                         textColor
                     }: {
    icon: React.ReactNode;
    title: string;
    bg: string;
    textColor: string;
}) => (
    <div
        className={`w-[250px] h-[104px] p-6 rounded-[16px] shadow-sm flex items-center gap-4 ${bg}`}
    >
        <div>{icon}</div>
        <p className={`text-[16px] font-semibold whitespace-pre-line ${textColor}`}>
            {title}
        </p>
    </div>
);

export default FeatureCard;
