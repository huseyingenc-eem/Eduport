import React, { useRef } from "react";
import { Button, Container } from "@/components";
import { ArrowRight } from "lucide-react";
import { useModules } from "@/hooks/useModules";

const ModuleShowcase: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const modules = useModules();

    return (
        <section className="relative py-12">
            <Container className="pb-0"> {/* alt padding'i sıfırladık */}
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-gray-900">
                        eduport Modüllerini <br /> <span className="text-blue-600">Keşfedin</span>
                    </h2>
                </div>

                <div
                    ref={scrollRef}
                    className="relative h-[450px] overflow-y-scroll snap-y snap-mandatory rounded-3xl no-scrollbar"
                >
                    <div className="flex flex-col gap-0 py-0">
                        {modules.map((mod, index) => (
                            <div
                                key={index}
                                className={`snap-start bg-gradient-to-r ${mod.bg} px-6 md:px-8 py-4 md:py-6 rounded-3xl shadow-xl 
                                            flex flex-col md:flex-row items-start gap-8 h-[450px]`}
                            >
                                {/* Sol içerik */}
                                <div className="flex-1 h-full flex flex-col justify-between pt-2 max-w-[380px]">
                                    <div>
                                        <h3 className="text-5xl font-medium text-gray-900 mb-4 ">{mod.title}</h3>
                                        <p className="text-gray-700 mb-6 max-w-[270px]">{mod.description}</p>
                                    </div>
                                    <Button className="gap-2 w-fit py-2">
                                        Keşfet <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>

                                {/* Sağ görsel */}
                                <div className="flex-1 relative h-full flex items-end justify-center">
                                    <div className="relative w-full max-w-[680px] h-full">
                                        <img
                                            src={mod.image}
                                            alt={mod.title}
                                            className="w-full h-full object-cover shadow-md
                                                       border-t-[8px] border-l-[8px] border-r-[8px] border-b-0 border-black
                                                       rounded-t-[24px] rounded-b-none"
                                        />
                                        {mod.tooltip && (
                                            <img
                                                src={mod.tooltip}
                                                alt="Tooltip"
                                                width={378}
                                                height={115}
                                                className="absolute bottom-[50px] -left-[30%] w-[378px] h-[115px]
                                                           rounded-2xl shadow-xl"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alt buton */}
                <div className="mt-12 text-center">
                    <Button
                        variant="outline"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50 py-2"
                    >
                        Tümünü Modülleri İncele
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default ModuleShowcase;