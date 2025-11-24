import { useDebouncedCallback } from 'use-debounce'
import s from './SearchInput.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export const SearchInput = () => {
    const [params, setParams] = useSearchParams();
    const [inputValue, setInputValue] = useState(params.get('search') ?? '');

    useEffect(() => {
        setInputValue(params.get('search') ?? '');
    }, [params]);

    const handleSearch = useDebouncedCallback((term: string) => {
        const newParams = new URLSearchParams(params);
        if(term) {
            newParams.set('search', term)
        } else {
            newParams.delete('search');
            newParams.set('page', '1');
        }
        setParams(newParams);
    }, 300)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        handleSearch(value);
    }

    return (
        <div className={s.container}>
            <input 
            className={s.input} 
            type='search' 
            placeholder='Поиск' 
            value={inputValue} 
            onChange={handleChange}/>
        </div>
    )
}
