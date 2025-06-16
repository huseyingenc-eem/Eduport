export interface MenuItem {
    label: string;
    path: string;
}

const useMenu = () => [
    { label: "Özellikler", path: "/features" },
    { label: "Modüller", path: "/modules" },
    { label: "Nedir?", path: "/about" },
    { label: "Blog", path: "/blog" },
];
export default useMenu;