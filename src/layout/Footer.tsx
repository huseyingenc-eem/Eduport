import React from "react";
import { Container } from "@/components";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import {Eduport} from "@/assets/images";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-12 pb-32">
            <Container>
                <div className="flex flex-col gap-12">
                    {/* Üst kısım */}
                    <div className="flex justify-between items-start gap-12">
                        {/* Sol logo ve açıklama */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center">
                                <img src={Eduport} alt="logo" className="w-8 h-8" />
                                <span className="text-4xl font-bold text-gray-900">eduport</span>
                            </div>
                        </div>

                        {/* Menü grupları */}
                        <div className="grid grid-cols-3 gap-15">
                            <div>
                                <h4 className="text-base font-semibold text-gray-900 mb-4">Hakkında</h4>
                                <ul className="space-y-2 text-sm text-gray-600 gap-3">
                                    <li className="py-1">Nam urna neque</li>
                                    <li className="py-1">Nam urna neque</li>
                                    <li className="py-1">Nam urna neque</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-base font-semibold text-gray-900 mb-4">Fiyatlandırma</h4>
                                <ul className="space-y-2 text-sm text-gray-600 gap-3">
                                    <li className="py-1">Nam urna neque</li>
                                    <li className="py-1">Nam urna neque</li>
                                    <li className="py-1">Nam urna neque</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-base font-semibold text-gray-900 mb-4 gap-3">Teknoloji</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="py-1">Altyapı</li>
                                    <li className="py-1">Ölçekleme</li>
                                    <li className="py-1">Kullancı Yönetimi</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sağ ikonlar ve iletişim */}
                        <div className="flex flex-col gap-4 items-end">
                            <div className="flex gap-4">
                                <a href="#" className="w-15 h-15 flex items-center justify-center rounded-full bg-[#f3f5ff]">
                                    <Linkedin className="w-5 h-5 text-blue-600" />
                                </a>
                                <a href="#" className="w-15 h-15 flex items-center justify-center rounded-full bg-[#f3f5ff]">
                                    <Instagram className="w-5 h-5 text-blue-600" />
                                </a>
                                <a href="#" className="w-15 h-15 flex items-center justify-center rounded-full bg-[#f3f5ff]">
                                    <Facebook className="w-5 h-5 text-blue-600" />
                                </a>
                            </div>
                            <a
                                href="mailto:info@eduport.io"
                                className="w-53 h-15 flex items-center justify-center bg-[#f3f5ff] text-blue-700 text-sm font-medium rounded-full"
                            >
                                info@eduport.io
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
