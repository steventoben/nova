import React, {ReactNode} from "react";

export interface TextProps {
    el: string;
    fontSize: string;
    fontWeight: number;
    children: ReactNode;
}

export function Text(props: TextProps) {
    const {
        el,
        children,
        ...rest
    } = props;
    return React.createElement(`${el}`, {style: rest}, children);
}