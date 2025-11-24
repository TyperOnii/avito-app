import { Button } from '@mui/material'
import s from './Pagination.module.scss'
import clsx from 'clsx';
import { usePagination } from '../hooks/usePagination';
import { wordCorrector } from '@/entities/Advertisement';

interface PaginationProps {
    itemsPerPage: number,
    totalItems: number,
    totalPages: number,
}

export const Pagination = (props: PaginationProps) => {
    const { totalItems, totalPages } = props;
    const { currentPage, nextPage, prevPage, switchPage, pagesArray } = usePagination(totalPages);

    const isValidPageForRender = (page: number): boolean => [1, 2, 3, totalPages - 2, totalPages - 1, totalPages].includes(page) || currentPage === page;

    const renderTab = (page: number) => 
        isValidPageForRender(page) ?
    <span key={page} onClick={() => switchPage(page)} className={clsx(s.tab, { [s.active ]: currentPage === page })}>{page}</span>
    : '.'
    
    if(totalPages === 0) {
        return null
    }

    return (
        <div className={s.pagination}>
            <div className={s.inner}>
                <Button onClick={prevPage}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24.000000" height="24.000000" fill="none">
                        <rect id="Стрелка влево 1" width="24.000000" height="24.000000" x="0.000000" y="0.000000" />
                        <path id="Форма 73" d="M2.89941 12L20.8994 12" stroke="rgb(36,36,36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path id="Форма 74" d="M8.8994 18L2.89941 12L8.8994 6" fillRule="nonzero" stroke="rgb(36,36,36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                </Button>
                <div className={s.list}>
                    {pagesArray.map((page) => renderTab(page))}
                </div>
                <Button onClick={nextPage}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24.000000" height="24.000000" fill="none">
                        <rect id="Стрелка вправо 1" width="24.000000" height="24.000000" x="0.000000" y="0.000000" />
                        <path id="Форма 75" d="M21 12L3 12" stroke="rgb(36,36,36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path id="Форма 76" d="M15 6L21 12L15 18" fillRule="nonzero" stroke="rgb(36,36,36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                </Button>
            </div>
            <div className={s.totalLabel}>Всего: {totalItems} {wordCorrector(totalItems)}</div>
        </div>
    )
}
