import React, { useState , useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import useMenu from "@/hooks/useMenu";
import { Container, Button } from "@/components";
import { useWindowScroll } from "react-use";
import { Eduport } from "@/assets/images";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { y } = useWindowScroll();
    const menuItems = useMenu();
    const { pathname } = useLocation();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header
            className={`inset-x-0 top-0 z-40 transition-all duration-300 pointer-events-auto ${
                y > 10 ? "md:sticky md:bg-white/80 py-2" : "md:sticky md:bg-transparent "
            }`}
        >
            <Container>
                <div
                    className="max-w-screen-xl mx-auto flex items-center justify-between text-base transition-all duration-300"
                    style={{
                        paddingTop: y > 10 ? "0.5rem" : "1.5rem",
                        paddingBottom: y > 10 ? "0.5rem" : "1.5rem",
                    }}
                >
                    <div className="flex items-center ">
                        <img src={Eduport} alt="Eduport Logo" className="w-8 h-8 md:w-10 md:h-10" />
                        <Link to="/" className="text-2xl md:text-4xl font-bold text-gray-900">
                            eduport
                        </Link>
                    </div>

                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-[#F0F4FF] rounded-full py-1.5 px-1 flex gap-1 max-w-[500px] overflow-x-auto whitespace-nowrap">
                            {menuItems.map(({ label, path }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`px-4 py-2.5 rounded-full transition-all font-medium ${
                                        pathname === path
                                            ? "bg-white text-blue-500"
                                            : "bg-[#F0F4FF] text-gray-700 hover:bg-blue-100"
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex md:hidden items-center gap-3">
                        <Button
                            variant="outline"
                            icon={<ArrowUpRight className="w-4 h-4 text-blue-600" />}
                            className="bg-white text-gray-900 text-base rounded-full px-5 py-2 border-0 hover:bg-blue-100"
                        >
                            Teklif Al
                        </Button>

                        <button
                            className="inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setOpen(true)}
                            aria-label="Toggle navigation menu"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-3 relative">
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center gap-1 font-medium text-black hover:opacity-80"
                            >
                                EN
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${langOpen ? "rotate-180" : "rotate-0"}`}
                                />
                            </button>
                            {langOpen && (
                                <div className="absolute left-0 top-full mt-2 bg-white/80 backdrop-blur-md rounded-md shadow-md border border-gray-200 w-24 py-1 z-50">
                                    <button className="block w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100" onClick={() => setLangOpen(false)}>
                                        TR
                                    </button>
                                    <button className="block w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100" onClick={() => setLangOpen(false)}>
                                        EN
                                    </button>
                                </div>
                            )}
                        </div>

                        <Button
                            variant="outline"
                            icon={<ArrowUpRight className="w-4 h-4 text-blue-600" />}
                            className="bg-white text-gray-900 text-base rounded-full px-6 py-2 hover:bg-blue-200 border-0"
                        >
                            Teklif Al
                        </Button>

                        <Button className="bg-blue-600 text-white text-base rounded-full px-6 py-2 hover:bg-blue-700">
                            Demo
                        </Button>
                    </div>
                </div>
            </Container>

            {open && (
                <div className="fixed inset-0 z-50 bg-gradient-to-br from-white via-[#f0f2ff] to-purple-50 p-6 flex flex-col gap-8 md:hidden overflow-y-auto">
                    {/* ÜST ALAN */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={Eduport} alt="Eduport Logo" className="w-8 h-8" />
                            <span className="text-2xl font-bold text-gray-900">eduport</span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* BUTONLAR */}
                    <div className="flex flex-row gap-5 w-full">
                        <Button
                            variant="outline"
                            icon={<ArrowUpRight className="w-5 h-5 text-blue-600" />}
                            className="w-full h-14 bg-white text-gray-900 text- font-semibold rounded-full px-6 py-4 border border-gray-300 hover:bg-blue-100 hover:text-blue-600 transition flex items-center justify-center"
                        >
                            Teklif Al
                        </Button>

                        <Button
                            className="w-full h-14 bg-blue-600 text-white text-lg font-semibold rounded-full px-6 py-4 hover:bg-blue-700 transition flex justify-center items-center"
                        >
                            Demo
                        </Button>
                    </div>

                    {/* MENÜ LİSTESİ */}
                    <div className="flex flex-col gap-4 w-full mt-10">
                        {menuItems.map(({ label, path }) => {
                            const isActive = pathname === path;

                            return (
                                <Link
                                    key={path}
                                    to={path}
                                    onClick={() => setOpen(false)}
                                    className={`text-2xl font-medium px-6 py-4 rounded-full transition duration-200 ${
                                        isActive
                                            ? "bg-white text-blue-600"
                                            : "text-gray-800 hover:bg-white hover:text-blue-600"
                                    } w-max`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* ALT BİLGİLER */}
                    <div className="mt-auto flex flex-col gap-8 text-xl text-black pb-6">
                        <span className="font-semibold">Hakkında</span>
                        <span className="font-semibold">Fiyatlandırma</span>
                        <span className="font-semibold">Teknoloji</span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
