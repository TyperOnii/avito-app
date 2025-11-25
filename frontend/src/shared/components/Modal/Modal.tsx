import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react';
import s from './Modal.module.scss'
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { 
        children, 
        isOpen, 
        onClose, 
        closeOnOverlayClick = true,
        closeOnEscape = true 
    } = props;
    const overlayRef = useRef<HTMLDivElement>(null);

    // Обработка клика на оверлей
    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (closeOnOverlayClick && event.target === overlayRef.current) {
            onClose();
        }
    };

    // Обработка нажатия ESC
    useEffect(() => {
        if (!closeOnEscape || !isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose, closeOnEscape]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div 
            ref={overlayRef}
            className={s.overlay} 
            onClick={handleOverlayClick}
        >
            <div className={s.modal}>
                {children}
            </div>
        </div>, 
        document.getElementById('modal-container')!
    );
};

// Modal.Header = ({children}:{children?: ReactNode}) => {
//     if(!children) return null
//     return (
//         <div>{children}</div>
//     )
// }

// Modal.Body = ({children}:{children?: ReactNode}) => {
//     if(!children) return null
//     return (
//         <div>{children}</div>
//     )
// }

// Modal.Footer = ({children}:{children?: ReactNode}) => {
//     if(!children) return null
//     return (
//         <div>{children}</div>
//     )
// }