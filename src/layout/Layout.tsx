import React from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Outlet } from "react-router-dom";
import { GlowBall } from "@/components";

/**
 * Layout bileşeni: Tüm sayfaları ortak header/footer ile sarar.
 */
const Layout: React.FC = () => {
    return (
        // 1. Kapsayıcıyı en basit haline getiriyoruz. 'relative' kalmalı çünkü GlowBall'lar buna göre konumlanacak.
        // Hiçbir overflow class'ı yok. Bu sayede Header'ın 'sticky' özelliği sorunsuz çalışır.
        <div className="min-h-screen flex flex-col relative min-w-[375px]">

            {/* 2. GlowBall'lara responsive class'lar ekliyoruz.
              - 'hidden': Mobil öncelikli (mobile-first) bir yaklaşım olduğu için, bu elementi varsayılan olarak gizler.
              - 'md:block': Ekran genişliği "medium" (md: 768px) veya daha büyük olduğunda elementi tekrar görünür yapar (display: block).
              - Bu sayede bu toplar mobil cihazlarda hiç render edilmez ve taşma sorununa neden olamaz.
            */}
            <GlowBall size={750} color="bg-blue-200" className="hidden md:block absolute top-[0px] left-[-340px] z-[-1]" />
            <GlowBall size={750} color="bg-purple-200" className="hidden md:block absolute top-[-300px] right-[-400px] z-[-1]" />
            <GlowBall size={750} color="bg-purple-200" className="hidden md:block absolute top-[417px] left-[-417px] z-[-1]" />
            <GlowBall size={750} color="bg-blue-200" className="hidden md:block absolute top-[450px] right-[-600px] z-[-1]" />

            {/* 3. İçerik olduğu gibi kalıyor. */}
            <Header />
            <main className="flex-grow relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;