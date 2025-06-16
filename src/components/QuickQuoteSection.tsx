// components/QuickQuoteSection.tsx
import React from "react";
import QuickQuoteForm from "./QuickQuoteForm";
import { Container, Button } from "@/components";
import { ArrowUpRight } from "lucide-react";
import { Features_First } from "@/assets/images";

const QuickQuoteSection: React.FC = () => {
    return (
        <section className="relative bg-transparent py-0 px-6 text-white overflow-hidden">
            {/* Arka plan mockup */}
            <Container className="text-center">
                <div className="mx-auto max-w-[1000px] px-4 relative">
                    <img
                        src={Features_First}
                        alt="Mockup"
                        className="w-full h-auto object-cover rounded-3xl"
                    />
                </div>
            </Container>

            {/* Form alanı kutusu */}
            {/* Form alanı kutusu */}
            <div className="relative z-10 -mt-80">
                <Container>
                    <div className="bg-gradient-to-r from-[#001A4E] via-[#2C166E] to-[#001A4E] rounded-none md:rounded-[40px] py-6 px-4 sm:px-6 shadow-xl">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Hızlı Teklif Al</h2>
                            <p className="text-white/80 max-w-2xl mx-auto mt-2 mb-6">
                                En iyi üniversitelerinin tercih ettiği eduport'u keşfedin – hemen bir demo talep edin!
                            </p>

                            <QuickQuoteForm>
                                <input
                                    type="text"
                                    placeholder="Adınız Soyadınız"
                                    className="w-full md:flex-1 px-5 py-3 rounded-full bg-white text-black placeholder:text-gray-400 border-0 focus:ring-2 focus:ring-purple-300"
                                />
                                <input
                                    type="email"
                                    placeholder="E-Posta Adresiniz"
                                    className="w-full md:flex-1 px-5 py-3 rounded-full bg-white text-black placeholder:text-gray-400 border-0 focus:ring-2 focus:ring-purple-300"
                                />
                                <input
                                    type="tel"
                                    placeholder="Telefon Numaranız"
                                    className="w-full md:flex-1 px-5 py-3 rounded-full bg-white text-black placeholder:text-gray-400 border-0 focus:ring-2 focus:ring-purple-300"
                                />
                                <Button
                                    className=" h-[48px] w-full md:w-auto bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 flex justify-center"
                                    icon={<ArrowUpRight className="w-5 h-5" />}
                                >
                                    Teklif Al
                                </Button>
                            </QuickQuoteForm>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default QuickQuoteSection;
