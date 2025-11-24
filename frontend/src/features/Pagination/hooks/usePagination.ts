import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"

export const usePagination = (totalPages: number, currentPage?: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [params, setParams] = useSearchParams();
    const page =  Number(params.get('page') ?? currentPage ?? 1);
    const currentParams = Object.fromEntries(params.entries());

    const pagesArray = useMemo<number[]>(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages])

    const prevPage = (): void => {
        if(page > 1) {
            setParams({ ...currentParams, page: String(page - 1)})
        } else {
            setParams({ ...currentParams, page: String(totalPages)})
        }
    }

    const nextPage = (): void => {
        if(page !== totalPages) {
            setParams({ ...currentParams, page: String(page + 1)})
        } else {
            setParams({ ...currentParams, page: '1' })
        }
    }

    const switchPage = (page: number): void => {
        setParams({ ...currentParams, page: String(page) })
    }

    return {
        currentPage: page,
        pagesArray,
        switchPage,
        prevPage,
        nextPage,
    }
}