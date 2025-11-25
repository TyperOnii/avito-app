import { Button } from "@/shared/components/Button/Button";
import { Error } from "@mui/icons-material";

interface RejectAdvertisementButtonProps {
    onClick: () => void,
    disabled?: boolean,
}

export const RejectAdvertisementButton = (props: RejectAdvertisementButtonProps) => {
    const { onClick, disabled } = props;

    return (
        <Button 
            disabled={disabled}
            onClick={onClick}
            sx={{ backgroundColor: 'var(--c-red)', color: 'white', fontFamily: 'var(--font-family)' }}
            startIcon={<Error/>}>
            Отклонить
        </Button>
    )
}