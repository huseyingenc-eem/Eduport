import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { features } from "@/constants/features";
import { FeatureCard, GlowBall } from "@/components";

const FeatureShowcase: React.FC = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const xRight = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden">
            {/* GlowBall'lar - container'a göre sol ve sağa sabitlenmiş */}
            <div className="absolute inset-0 pointer-events-none">
                <GlowBall
                    size={700}
                    color="bg-white"
                    className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-100 blur-[200px] z-20 sm:w-[400px] sm:h-[400px]"
                />
                <GlowBall
                    size={700}
                    color="bg-white"
                    className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-100 blur-[200px] z-20 sm:w-[400px] sm:h-[400px]"
                />
            </div>

            <div className="text-center mb-12 relative z-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                    ... ve daha fazla <span className="text-blue-600">iyileştirilmiş</span> özellik
                </h2>
            </div>

            <div className="w-full flex flex-col gap-10 px-4 py-5 overflow-hidden relative">
                {/* Web için animasyonlu 1. satır */}
                <motion.div style={{ x: xLeft }} className="hidden md:flex gap-6 relative">
                    {features.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </motion.div>

                {/* Web için animasyonlu 2. satır */}
                <motion.div style={{ x: xRight }} className="hidden md:flex gap-6 relative">
                    {[...features].reverse().map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </motion.div>

                {/* Mobile için yalnızca 1. satır */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden relative">
                    {features.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
