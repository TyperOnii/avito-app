import { FormControlLabel, Radio } from '@mui/material'
import s from './SortAdvertisements.module.scss'
import { SORT_ADVERTISEMENTS_LIST } from '../consts/sortAdvertisementsList'
import { useSortAdvertisements } from '../hooks/useSortAdvertisements'

export const SortAdvertisements = () => {
    const { selectedSortBy, selectedSortOrder, handleSelect } = useSortAdvertisements()

    return (
        <div>
            <p>Сортировать по: </p>
            <div>
                {SORT_ADVERTISEMENTS_LIST.map(({ label, value }) => (
                <FormControlLabel
                    key={value}
                    className={s.pricingInput} 
                    control={
                        <Radio 
                        sx={{
                            color: 'grey',
                        }}
                        name='sort' 
                        value={value} 
                        id={value} 
                        checked={`${selectedSortBy}-${selectedSortOrder}` === value} 
                        onClick={(e) => handleSelect(e.target.value)}/>
                    } 
                    labelPlacement='end'
                    label={label}
                />
                ))}
            </div>
        </div>
    )
}
