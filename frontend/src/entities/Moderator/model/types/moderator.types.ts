import type { Permission } from "@/shared/types/permissions.types"; 
import type { ModeratorStats } from "./moderatorStats.types";

export interface Moderator {
    id: number,
    name: string,
    email: string,
    role: string,
    statistics: ModeratorStats,
    permissions: Permission[],
}
