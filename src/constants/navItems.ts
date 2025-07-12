import { NavItem, NavLink } from "@/types";

export const MENU_ITEMS: NavLink[] = [
    {
        href: "/pizze",
        label: "Pizze"
    },
    {
        href: "/salatki",
        label: "Sałatki"
    },
    {
        href: "/makarony",
        label: "Makarony"
    },
    {
        href: "/przekaski",
        label: "Przekąski"
    },
    {
        href: "/desery",
        label: "Desery"
    },
]

export const NAV_ITEMS: NavItem[] = [
    {
        label: "O nas",
        isLink: true,
        href: "/o-nas"
    },
    {
        label: "Menu",
        isLink: false,
        menu: MENU_ITEMS
    },
    {
        label: "Pub",
        isLink: true,
        href: "/pub"
    },
    {
        label: "Kontakt",
        isLink: true,
        href: "/kontakt"
    },
]