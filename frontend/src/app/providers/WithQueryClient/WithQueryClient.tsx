import { queryClient } from "@/shared/config/api.client"
import { QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

export const WithQueryClient = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}
