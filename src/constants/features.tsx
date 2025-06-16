import {
    User,
    Mic,
    Globe,
    Palette,
    Settings,
    LayoutGrid,
    Languages
} from "lucide-react";

export const features = [
    {
        icon: <User className="w-[50px] h-[45px] text-blue-600" />,
        title: "Single\nSign-On",
        bg: "bg-[#eaf1fe]",
        textColor: "text-blue-600"
    },
    {
        icon: <Settings className="w-[50px] h-[45px] text-purple-600" />,
        title: "Güçlü İçerik\nYönetim Sistemi",
        bg: "bg-[#f6effb]",
        textColor: "text-purple-600"
    },
    {
        icon: <Languages className="w-[50px] h-[45px] text-blue-600" />,
        title: "Çoklu\nDil Desteği",
        bg: "bg-[#eaf1fe]",
        textColor: "text-blue-600"
    },
    {
        icon: <Mic className="w-[50px] h-[45px] text-purple-500" />,
        title: "Sesli Komut\nDesteği",
        bg: "bg-[#f6effb]",
        textColor: "text-purple-500"
    },
    {
        icon: <Palette className="w-[50px] h-[45px] text-blue-500" />,
        title: "Tema Sistemi",
        bg: "bg-[#eaf1fe]",
        textColor: "text-blue-500"
    },
    {
        icon: <LayoutGrid className="w-[50px] h-[45px] text-purple-600" />,
        title: "Responsive\nTasarım",
        bg: "bg-[#f6effb]",
        textColor: "text-purple-600"
    },
    {
        icon: <Globe className="w-[50px] h-[45px] text-blue-500" />,
        title: "Modern\nTeknoloji",
        bg: "bg-[#eaf1fe]",
        textColor: "text-blue-500"
    }
];
