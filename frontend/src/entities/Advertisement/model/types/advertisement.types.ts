import type { Category } from "../../../../shared/types/categories.types";
import type { PriorityStatus } from "../../../../shared/types/priorityStatus.types";
import type { Status } from "../../../../shared/types/status.types";
import type { Seller } from "../../../Seller";

export interface Advertisement {
    id: number,
    title: string,
    description: string,
    price: number,
    category: Category,
    categoryId: number,
    status: Status,
    priority: PriorityStatus,
    createdAt: string,
    updatedAt: string,
    images: string[], 
    seller: Seller,
    characteristics: Record<string, string>,
    moderationHistory: string[],
}