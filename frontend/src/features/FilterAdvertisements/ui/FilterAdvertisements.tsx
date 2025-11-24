import { Button } from "@/shared/components/Button/Button"
import { SearchInput } from "@/shared/components/SearchInput/SearchInput"
import { CATEGORIES_LIST } from "@/shared/consts/categories"
import { STATUSES_LIST } from "@/shared/consts/statuses"
import { Select, MenuItem, Checkbox, FormControlLabel, Input } from "@mui/material"
import s from './FilterAdvertisements.module.scss'
import { useFilterAdvertisements } from "../hooks/useFilterAdvertisement"

export const FilterAdvertisements = () => {
    const { 
        maxPrice, 
        minPrice, 
        selectedCategoryId, 
        selectedStatuses, 
        handleSelectCategory, 
        handleSelectStatus, 
        handleSetMaxPrice, 
        handleSetMinPrice, 
        resetParams }
     = useFilterAdvertisements()

    return (
        <div className={s.content}>
            <SearchInput/>
            
            <Select
            sx={{ backgroundColor: 'white', fontFamily: 'var(--font-family)' }}
            value={selectedCategoryId}
            onChange={(e) => handleSelectCategory(e.target.value)}
            displayEmpty>
                <MenuItem value="" disabled>Категория</MenuItem>

                {CATEGORIES_LIST.map(({ id, label }) => <MenuItem value={id} key={label}>{label}</MenuItem>)}
            </Select>
            
            <p>Фильтр по статусу:</p>
            <div>
                {STATUSES_LIST.map(({ original, translated }) => (
                    <FormControlLabel 
                    key={original} 
                    control={
                        <Checkbox 
                        sx={{
                            color: 'grey',
                        }}
                        onClick={(e) => handleSelectStatus(e.target.value)} 
                        value={original}/>
                    } 
                    label={translated}
                    checked={selectedStatuses.includes(original)}/>))
                }
            </div>

            <div className={s.pricing}>
                <FormControlLabel 
                className={s.pricingInput} 
                control={
                    <Input 
                    sx={{ backgroundColor: 'white', paddingLeft: '10px'}}
                    placeholder='500' 
                    value={minPrice} 
                    onChange={(e) => handleSetMinPrice(e.target.value)}/>
                } 
                labelPlacement='start' 
                label='Мин. стоимость (в ₽)*'/>

                <FormControlLabel 
                className={s.pricingInput} 
                control={
                    <Input 
                    sx={{ backgroundColor: 'white', paddingLeft: '10px'}}
                    placeholder='10000'
                    value={maxPrice} 
                    onChange={(e) => handleSetMaxPrice(e.target.value)} />
                } 
                labelPlacement='start' 
                label='Макс. стоимость (в ₽)*'/>
            </div>
            <Button onClick={() => resetParams()} variantType="primary">Сбросить фильтры</Button>
        </div>
    )
}
