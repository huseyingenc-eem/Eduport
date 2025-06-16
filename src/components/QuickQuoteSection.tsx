import React from "react";
import QuickQuoteForm from "./QuickQuoteForm";
import { Container, Button } from "@/components";
import { ArrowUpRight } from "lucide-react";
import { Features_First } from "@/assets/images";

const QuickQuoteSection: React.FC = () => {
    return (
        <section className="relative py-12 md:py-0 text-white overflow-hidden">
            {/* Arka plan resmi aynı kalabilir */}
            <Container className="text-center">
                <div className="mx-auto px-4 relative max-w-full sm:max-w-[540px] md:max-w-[800px] lg:max-w-[960px] xl:max-w-[1000px]">
                    <img
                        src={Features_First}
                        alt="Mockup"
                        className="w-full h-auto object-cover rounded-3xl"
                    />
                </div>
            </Container>

            <div className="relative z-10 -mt-48 md:-mt-80">
                <Container innerClassName={"sm:px-8"}>
                    {/* DEĞİŞİKLİK 1: Bu satırdan mobil için olan 'px-4' kaldırıldı. */}
                    <div className="bg-gradient-to-r from-[#001A4E] via-[#2C166E] to-[#001A4E] rounded-none md:rounded-[40px] py-8 md:py-10 md:px-6 shadow-xl">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Hızlı Teklif Al</h2>
                            <p className="text-white/80 max-w-2xl mx-auto mt-2 mb-8 text-sm md:text-base md:px-10">
                                En iyi üniversitelerinin tercih ettiği eduport'u keşfedin – hemen bir demo talep edin!
                            </p>

                            <QuickQuoteForm>
                                <div className="space-y-3 md:space-y-0 md:flex md:flex-wrap md:gap-4 max-w-4xl mx-auto px-4">
                                    {/* Input'lar aynı kalıyor */}
                                    <input
                                        type="text"
                                        placeholder="Adınız Soyadınız"
                                        className="w-full md:flex-1 px-4 py-3 md:px-5 md:py-4 rounded-full bg-white text-black placeholder:text-gray-400 border-0 focus:ring-2 focus:ring-purple-300 text-sm md:text-base"
                                    />
                                    <input
                                        type="email"
                                        placeholder="E-Posta Adresiniz"
                                        className="w-full md:flex-1 px-4 py-3 md:px-5 md:py-4 rounded-full bg-white text-black placeholder:text-gray-400 border-0 focus:ring-2 focus:ring-purple-300 text-sm md:text-base"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Telefon Numaranız"
                                        className="w-full md:flex-1 px-4 py-3 md:px-5 md:py-4 rounded-full bg-white text-black placeholder:text-gray-400 border-0 focus:ring-2 focus:ring-purple-300 text-sm md:text-base"
                                    />
                                    <Button
                                        className="h-[48px] md:h-[56px] w-full md:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:from-purple-700 hover:to-purple-800 flex justify-center items-center gap-2 font-semibold text-sm md:text-base shadow-lg"
                                        icon={<ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />}
                                    >
                                        Teklif Al
                                    </Button>
                                </div>
                            </QuickQuoteForm>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default QuickQuoteSection;