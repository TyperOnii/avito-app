import type { RejectionReason } from "../../../../shared/types/rejectionReason.types";
import type { Status } from "../../../../shared/types/status.types";

export interface ModerationHistory {
    id: number,
    moderatorId: number,
    moderatorName: string,
    action: Status,
    reason: RejectionReason | null,
    comment: Comment,
    timestamp: string,
}

type Comment = 'Объявление не соответствует правилам платформы' | 'Объявление прошло модерацию успешно'