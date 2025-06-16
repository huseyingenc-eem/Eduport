import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Container, Button } from "@/components";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <section className="relative py-12 sm:py-15 overflow-hidden">
            <Container className="relative z-10 flex flex-col items-center text-center gap-10">
                {/* Başlık + AI rozeti */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center text-center gap-6"
                >
                    {/* AI + Başlık */}
                    <div className="flex items-center justify-center flex-wrap gap-4">
                        <span className="hidden md:inline-block bg-blue-200 text-blue-700 text-[48px] font-bold px-8 py-4 rounded-full leading-none">
                            AI
                        </span>

                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight">
                            Yapay Zeka Destekli <span className="text-blue-600">Portal</span>
                        </h1>
                    </div>

                    {/* Açıklama (aynı animasyonla birlikte gelir) */}
                    <p className="text-gray-500 text-base sm:text-xl leading-relaxed sm:leading-8 max-w-2xl py-2">
                        Yapay zeka destekli eduport, bir portalden çok daha fazlası.
                        Kişiselleştirilmiş içerikler, akıllı öneriler ve etkileşimli araçlarla her seviyeden kullanıcının vazgeçilmezi.
                    </p>
                </motion.div>

                {/* Buton */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-6"
                >
                    <Button
                        className="bg-blue-600 text-white text-lg px-12 py-4 rounded-full hover:bg-blue-700 transition-all duration-200"
                        icon={<ArrowUpRight className="w-5 h-5" />}
                    >
                        Teklif Al
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
};

export default HeroSection;
