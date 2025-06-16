import React, { useState } from "react";
import { useFaqs } from "@/hooks/useFaqs";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

const FaqSection: React.FC = () => {
    const faqs = useFaqs();
    const [openIndex, setOpenIndex] = useState<number | null>(1); // 2. soru açık başlayacak

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-medium text-gray-900">Sıkça Sorulan</h2>
                    <h3 className="text-6xl font-medium text-blue-600">Sorular</h3>
                </div>

                <div className="flex flex-col gap-4 max-w-3xl mx-auto px-4 sm:px-6">
                    {faqs.map((faq, index) => {
                        const isOpen = index === openIndex;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl transition-all duration-300 overflow-hidden py-3 ${
                                    isOpen ? "bg-blue-50 border border-gray-200" : "bg-white border border-gray-200"
                                }`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left"
                                >
                                    <span
                                        className={`font-medium ${
                                            isOpen ? "text-blue-700" : "text-gray-900"
                                        }`}
                                    >
                                        {faq.question}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 text-blue-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-600" />
                                    )}
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="h-px bg-gray-300 ml-6 mr-6" />
                                            <div className="px-6 pb-6 pt-4 text-sm text-gray-700">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default FaqSection;
