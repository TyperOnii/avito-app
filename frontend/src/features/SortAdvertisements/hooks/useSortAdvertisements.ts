import type { SortByAdvertisements, SortOrderAdvertisements } from "@/entities/Advertisement/model/api/params.types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSortAdvertisements = () => {
    const [params, setParams] = useSearchParams();
    const [selectedSortBy, setSelectedSortBy] = useState<SortByAdvertisements>(params.get('sortBy') as SortByAdvertisements ?? 'createdAt');
    const [selectedSortOrder, setSelectedSortOrder] = useState< SortOrderAdvertisements>(params.get('sortOrder') as SortOrderAdvertisements ?? 'desc')

    // Синхронизация состояний с поисковыми параметрами и установка дефолтных значений сортировки
    useEffect(() => {
        const sortByParam = params.get('sortBy') as SortByAdvertisements ?? 'createdAt'
        const sortOrderParam = params.get('sortOrder') as SortOrderAdvertisements ?? 'desc'

        const newParams = new URLSearchParams(params);
        newParams.set('sortBy', sortByParam)
        newParams.set('sortOrder', sortOrderParam)
        setParams(newParams)
        setSelectedSortBy(sortByParam);
        setSelectedSortOrder(sortOrderParam);
    }, [params])
    
    const handleSelect = (value: string) => {
        const [sortByValue, sortOrderValue] = value.split('-') as [SortByAdvertisements, SortOrderAdvertisements];
        const newParams = new URLSearchParams(params);
        setSelectedSortBy(sortByValue);
        setSelectedSortOrder(sortOrderValue);
        newParams.set('sortBy', sortByValue);
        newParams.set('sortOrder', sortOrderValue);
        setParams(newParams);
    }

    return {
        params,
        selectedSortBy,
        selectedSortOrder,
        handleSelect,
    }
}