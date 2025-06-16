import {
    RehberArama,
    AcademicProfile,
    SearchKnowledge,
} from "@/assets/images";

export const useModules = () => {
    return [
        {
            title: "Rehber Arama",
            description:
                "Rehber Arama ile kurumunuzdaki kişilere hızlıca ulaşın, kurum içi iletişimi kolaylaştırın.",
            image: RehberArama,
            tooltip: RehberArama,
            bg: "from-[#f1f4ff] to-[#f9f4fc]",
        },
        {
            title: "Search Knowledge with AI",
            description:
                "Yapay zeka destekli arama motoru ile içeriklerinizi hızlıca bulun.",
            image: SearchKnowledge,
            tooltip: SearchKnowledge,
            bg: "from-[#eef3ff] to-[#eef1fd]",
        },
        {
            title: "Academic Profile",
            description:
                "Akademik profillerinizi kolayca yönetin, yayınlar ve ders bilgilerini düzenleyin.",
            image: AcademicProfile,
            tooltip: AcademicProfile,
            bg: "from-[#fef6f2] to-[#fff9f6]",
        },
    ];
};
