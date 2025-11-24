import type { Status } from "@/shared/types/status.types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

export const useFilterAdvertisements = () => {
    const [params, setParams] = useSearchParams();
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
    const [selectedStatuses, setSelectedStatuses] = useState<Status[]>(params.getAll('status') as Status[] ?? []);
    const [minPrice, setMinPrice] = useState<string>(params.get('minPrice') ?? '');
    const [maxPrice, setMaxPrice] = useState<string>(params.get('maxPrice') ?? '');

    useEffect(() => {
        const categoryId = params.get('categoryId');
        setSelectedCategoryId(categoryId !== null ? categoryId : '');
        setMinPrice(params.get('minPrice') ?? '');
        setMaxPrice(params.get('maxPrice') ?? '');
        
        const statusParams = params.getAll('status') as Status[];
        setSelectedStatuses(statusParams);
    }, [params]);
    
    const handleSetMinPriceParam = useDebouncedCallback((value: string) => {
        const newParams = new URLSearchParams(params);
        if (value) {
            newParams.set('minPrice', value);
        } else {
            newParams.delete('minPrice');
        }
        setParams(newParams);
    }, 300)

    const handleSetMaxPriceParam = useDebouncedCallback((value: string) => {
        const newParams = new URLSearchParams(params);
        if (value) {
            newParams.set('maxPrice', value);
        } else {
            newParams.delete('maxPrice');
        }
        setParams(newParams);
    }, 300)

    const handleSetMinPrice = (value: string) => {
        setMinPrice(value);
        handleSetMinPriceParam(value)
    }

    const handleSetMaxPrice = (value: string) => {
        setMaxPrice(value);
        handleSetMaxPriceParam(value)
    }
    
    const handleSelectStatus = (status: Status) => {
        const newSelectedStatuses = selectedStatuses.includes(status) 
            ? selectedStatuses.filter((s) => s !== status)
            : [...selectedStatuses, status];
            
        setSelectedStatuses(newSelectedStatuses);
        
        const newParams = new URLSearchParams();
        
        params.forEach((value, key) => {
            if (key !== 'status') {
                newParams.append(key, value);
            }
        });
        
        newSelectedStatuses.forEach(status => {
            newParams.append('status', status);
        });
        
        setParams(newParams);
    }
    
    const handleSelectCategory = (categoryId: string): void => {
        setSelectedCategoryId(categoryId);
        const newParams = new URLSearchParams(params);
        if (categoryId !== '') {
            newParams.set('categoryId', categoryId);
        } else {
            newParams.delete('categoryId');
        }
        setParams(newParams);
    }
    
    // Сброс фильтров и очистка параметров
    const resetParams = (): void => {
        const [sortBy, sortOrder] = [params.get('sortBy'), params.get('sortOrder')];
        if(sortBy && sortOrder) {
            setParams({ sortBy, sortOrder });
        } else {
            setParams(new URLSearchParams())
        }
    }

    return {
        params,
        selectedCategoryId,
        selectedStatuses,
        minPrice,
        maxPrice,
        handleSetMinPrice,
        handleSetMaxPrice,
        handleSetMaxPriceParam,
        handleSetMinPriceParam,
        handleSelectCategory,
        handleSelectStatus,
        resetParams,
    }
}