import React from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Outlet } from "react-router-dom";
import { GlowBall } from "@/components";

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen min-w-[400px] flex flex-col relative overflow-x-clip">
            {/* GlowBall'ları sticky'den ayırmak için dış kapsayıcı */}
            <div className="pointer-events-none overflow-x-hidden -z-10">
                <GlowBall size={750} color="bg-blue-200" className="hidden md:block absolute top-[0px] left-[-340px]" />
                <GlowBall size={750} color="bg-purple-200" className="hidden md:block absolute top-[-300px] right-[-400px]" />
                <GlowBall size={750} color="bg-purple-200" className="hidden md:block absolute top-[417px] left-[-417px]" />
                <GlowBall size={750} color="bg-blue-200" className="hidden md:block absolute top-[450px] right-[-600px]" />
            </div>

            {/* Sticky Header */}
            <div className="md:sticky md:top-0 z-50">
                <Header />
            </div>

            {/* Ana içerik */}
            <main className="flex-grow relative z-10">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
