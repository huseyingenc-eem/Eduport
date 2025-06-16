import React from "react";
import { Container, Button } from "@/components";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesIntroSection: React.FC = () => {
    return (
        <section className="relative py-20 sm:py-28 overflow-hidden">
            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center gap-10 max-w-3xl mx-auto">
                    {/* Başlık */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl font-bold text-gray-900"
                    >
                        Uygulamadaki Özellikleri <br />
                        <span className="text-blue-600">Deneyimleyin</span>
                    </motion.h2>

                    {/* Açıklama */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                        className="text-gray-600 text-base sm:text-lg leading-relaxed"
                    >
                        eduport’un sunduğu akıllı araçlar, kişiselleştirilmiş içerikler ve etkileşimli çözümlerle akademik dünyada fark yaratın.
                    </motion.p>

                    {/* Buton */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <Button
                            className="bg-blue-900 text-white text-base sm:text-lg px-8 py-3 rounded-full hover:bg-blue-950 transition-all duration-200"
                            icon={<ArrowUpRight className="w-5 h-5" />}
                        >
                            Keşfet
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturesIntroSection;
