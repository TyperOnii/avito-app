
import { Button } from "@/shared/components/Button/Button";
import AutorenewIcon from '@mui/icons-material/Autorenew';

interface RequestChangesAdverisementButtonProps {
    onClick: () => void,
    disabled?: boolean,
}

export const RequestChangesAdverisementButton = (props: RequestChangesAdverisementButtonProps) => {
    const { onClick, disabled } = props;

    return (
        <Button 
            disabled={disabled}
            onClick={onClick}
            sx={{ backgroundColor: 'var(--c-yellow)', color: 'white', fontFamily: 'var(--font-family)' }}
            startIcon={<AutorenewIcon/>}>
            На доработку
        </Button>
    )
}