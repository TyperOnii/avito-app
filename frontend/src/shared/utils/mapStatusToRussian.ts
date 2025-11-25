import { STATUSES, type Status } from "../types/status.types";

const STATUSES_WITH_TRANSLATE = {
    PENDING: 'в ожидании',
    APPROVED: 'одобрен',
    REJECTED: 'отклонен',
    DRAFT: 'на доработке',
} as const

type StatusTranslatedOnRussian = typeof STATUSES_WITH_TRANSLATE[keyof typeof STATUSES_WITH_TRANSLATE]

export const mapStatusToRussian = (status: Status): StatusTranslatedOnRussian => {
    switch(status) {
        case STATUSES.APPROVED: 
            return STATUSES_WITH_TRANSLATE.APPROVED

        case STATUSES.PENDING: 
            return STATUSES_WITH_TRANSLATE.PENDING

        case STATUSES.REJECTED:
            return STATUSES_WITH_TRANSLATE.REJECTED

        case STATUSES.DRAFT: 
            return STATUSES_WITH_TRANSLATE.DRAFT

        default: 
            return STATUSES_WITH_TRANSLATE.PENDING
    }
}