import { Button } from '@/shared/components/Button/Button'
import { Check } from '@mui/icons-material'

interface ApproveAdvertisementButtonProps {
    handleApprove: () => void,
    disabled?: boolean,

}

export const ApproveAdvertisementButton = (props: ApproveAdvertisementButtonProps) => {
    const { handleApprove, disabled } = props;

    return (
         <Button 
            onClick={handleApprove}
            disabled={disabled}
            sx={{ backgroundColor: 'var(--c-green)', color: 'white', fontFamily: 'var(--font-family)' }}
            startIcon={<Check/>}>
            Одобрить
        </Button>
    )
}