import React from "react";
import { Container } from "@/components";
import { Docker, ReactLogo, Meta , Aws } from "@/assets/images";
const FeaturesGridSection: React.FC = () => {
    return (
        <section className="py-12">
            <Container>
                {/* Üst Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Kart 1 */}
                    <div className="rounded-3xl bg-white p-6 shadow-md flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">Yapay Zeka Merkezde</h3>
                            <p className="mt-2 text-gray-600 text-sm">
                                Kişisel ve kurumsal verilerden arama yapan yapay zeka ile tüm bilgilere hızlı ulaşın
                            </p>
                        </div>
                        <img src="/images/soru.png" alt="Yapay Zeka" className="w-full mt-4" />
                    </div>

                    {/* Kart 2 */}
                    <div className="rounded-3xl bg-[#f8f9ff] p-6 shadow-md">
                        <h3 className="text-xl font-semibold">Teknoloji</h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Modern teknolojiler, özelleştirilebilir ve ölçeklenebilir yapısı ile kurumunuza uygundur
                        </p>
                        <div className="grid grid-cols-4 gap-4 mt-4 items-center justify-center">
                            <img src={ReactLogo} alt="React" className="w-12 h-12 object-contain" />
                            <img src={Docker} alt="Docker" className="w-12 h-12 object-contain" />
                            <img src={Meta} alt="Meta" className="w-12 h-12 object-contain" />
                            <img src={Aws} alt="AWS" className="w-12 h-12 object-contain" />
                        </div>
                    </div>
                </div>

                {/* Alt Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Sol 2/3 */}
                    <div className="md:col-span-2 bg-[#f5f9ff] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Kişiselleştirilmiş Deneyim</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✔ Kullanıcıya özel içerik gösterimi</li>
                                <li>✔ Yapay Zeka ile kişiselleştirilmiş arama</li>
                                <li>✔ Bildirim yapısı ile anlık bilgilendirmeler</li>
                            </ul>
                        </div>
                        <img src="/images/avatar-boy.png" className="w-36 rounded-xl" alt="Kullanıcı" />
                    </div>

                    {/* Sağ CTA */}
                    <div className="bg-blue-700 rounded-3xl p-6 text-white flex flex-col justify-end items-start">
                        <span className="text-lg font-semibold">Tüm Özellikler</span>
                        <span className="text-sm mt-1">\u2192</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturesGridSection;