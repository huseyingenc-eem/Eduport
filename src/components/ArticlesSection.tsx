import React from "react";
import { Container } from "@/components";
import { useArticlesSection } from "@/hooks/useArticlesSection";
import { motion, easeOut } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: easeOut, // ✅ artık Easing fonksiyonu
        },
    }),
};

const ArticlesSection: React.FC = () => {
    const articles = useArticlesSection();

    return (
        <section className="py-24 bg-[#f9faff]">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                        Deneyimler ve Keşif için <br />
                        <span className="text-blue-600">Makaleleri Okuyun</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Sol büyük makale */}
                    <motion.a
                        href="#"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="group flex-1 space-y-4 transition-all duration-50 hover:shadow-lg hover:border-blue-500 border-transparent border rounded-2xl"
                    >
                        <img
                            src={articles[0].image}
                            alt={articles[0].title}
                            className="w-full h-auto rounded-2xl object-cover shadow-md"
                        />
                        <div className="px-1 pb-2">
                            <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition">
                                {articles[0].title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {articles[0].description}
                            </p>
                        </div>
                    </motion.a>

                    {/* Sağdaki küçük 3 makale */}
                    <div className="flex-1 flex flex-col gap-6">
                        {articles.slice(1).map((item, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                custom={idx + 2}
                                viewport={{ once: true }}
                                className="group flex items-center gap-4 p-2 rounded-2xl transition-all duration-50 hover:shadow-md hover:border hover:border-blue-500"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[195px] h-[145px] rounded-xl object-cover"
                                />
                                <p className="text-sm text-gray-800 font-medium leading-snug group-hover:text-blue-700 transition">
                                    {item.title}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ArticlesSection;
