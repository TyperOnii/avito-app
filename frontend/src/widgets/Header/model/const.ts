import { ROUTES } from "@/shared/config/routes";

export const HEADER_MENU = [
    {
        href: ROUTES.LIST,
        label: 'Главная',
    },
    {
        href: ROUTES.STATS,
        label: 'Статистика',
    },
] as const