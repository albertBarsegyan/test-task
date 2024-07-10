import styles from './styles.module.css'
import {CSSProperties, ReactNode} from "react";


export function Button({content, onClick,variant = 'primary', style}:{content: ReactNode, variant?:'primary' | 'icon', onClick?: () => void,style?:CSSProperties}) {
    return (
        <button style={style} className={variant === 'primary' ? styles.button: styles.icon} type='button' onClick={onClick}>
            {content}
        </button>
    );
}
