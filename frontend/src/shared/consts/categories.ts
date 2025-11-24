import { CATEGORIES } from "../types/categories.types";

export const CATEGORIES_LIST = Object.values(CATEGORIES).map((category, i) => (
    { id: i, label: category }
))