import type { Category } from "../../../../shared/types/categories.types";
import type { Color } from "../../../../shared/types/color.types";
import type { ConditionStatus } from "../../../../shared/types/conditionStatus.types";
import type { GuaranteeStatus } from "../../../../shared/types/guaranteeStatus.types";
import type { PriorityStatus } from "../../../../shared/types/priorityStatus.types";
import type { RejectionReason } from "../../../../shared/types/rejectionReason.types";
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
    characteristics: Characteristics,
    moderationHistory: ModerationHistory[],
}

interface Characteristics {
    'Состояние': ConditionStatus,
    'Гарантия': GuaranteeStatus,
    'Производитель': `Бренд ${string}`,
    'Модель': `Модель ${number}`,
    'Цвет': Color,
}

interface ModerationHistory {
    id: number,
    moderatorId: number,
    moderatorName: string,
    action: Status,
    reason: RejectionReason | null,
    comment: Comment,
    timestamp: string,
}

type Comment = 'Объявление не соответствует правилам платформы' | 'Объявление прошло модерацию успешно'