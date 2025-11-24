import { PRIORITY_STATUSES, type PriorityStatus } from "../types/priorityStatus.types"

const PRIORITY_STATUSES_WITH_TRANSLATE = {
    NORMAL: 'нормально',
    URGENT: 'срочно *',
} as const

type PriorityStatusTranslatedOnRussian = typeof PRIORITY_STATUSES_WITH_TRANSLATE[keyof typeof PRIORITY_STATUSES_WITH_TRANSLATE]

export const mapPriorityStatusToRussian = (status: PriorityStatus): PriorityStatusTranslatedOnRussian => {
    switch(status) {
        case PRIORITY_STATUSES.NORMAL: 
            return PRIORITY_STATUSES_WITH_TRANSLATE.NORMAL

        case PRIORITY_STATUSES.URGENT: 
            return PRIORITY_STATUSES_WITH_TRANSLATE.URGENT

        default: 
            return PRIORITY_STATUSES_WITH_TRANSLATE.NORMAL
    }
}