'use client';

import { ArrowForwardSvg } from "../Icon/Icon";

export enum ButtonVariants {
    Filled = 'filled',
    Text = 'text',
    Outline = 'outline',
    Ghost = 'ghost',
    Arrow = 'arrow'
}
export enum ButtonColorVariants {
    Primary = 'primary',
    Seconday = 'secondary',
}
export type ButtonVariantType = keyof typeof ButtonVariants;
export type ButtonColorVariantType = keyof typeof ButtonColorVariants;
export interface ButtonProps {
    label: string;
    variant: ButtonVariantType;
    theme: ButtonColorVariantType;
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
    const {
        label,
        variant = 'Filled',
        theme = 'Primary',
        onClick = () => console.log('no action passed to button')
    } = props;
    return (
        <button onClick={onClick} className={`Button ${variant} ${theme}`}>
            <span className={'Button-label'}>{label}</span>
            {variant==='Arrow' && <span className="Button-arrow"><ArrowForwardSvg size={1.5}/></span>}
        </button>
    );
}