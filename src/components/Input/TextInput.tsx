import { ReactNode } from "react";

export interface TextInputProps {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export function TextInput(props: TextInputProps) {
    const {
        startIcon,
        endIcon
    } = props;
    return (
        <div className={`TextInput-container`}>
            {startIcon && <span className={`TextInput-icon TextInput-start-icon`}>{startIcon}</span>}
            <input className={`TextInput-input`}/>
            {endIcon && <span className={`TextInput-icon TextInput-end-icon`}>{endIcon}</span>}
        </div>
    );
}