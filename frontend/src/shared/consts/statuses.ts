import { STATUSES } from "../types/status.types";
import { mapStatusToRussian } from "../utils/mapStatusToRussian";

export const STATUSES_LIST = Object.values(STATUSES).map((status) => (
    {
        original: status,
        translated: mapStatusToRussian(status)
    }
))