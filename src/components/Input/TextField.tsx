'use client';
import React from "react";

export interface TextFieldProps {
    label: string;
}

export function TextField(props: TextFieldProps) {
    const {
        label
    } = props;
    const [isFocused, setIsFocused] = React.useState(false);
    function handleFocus() {
        setIsFocused(true);
    }
    function handleBlur() {
        setIsFocused(false);
    }
    return (
        <div className={'FloatingTextField-container'}>
            <label className={`FloatingTextField-label ${isFocused?'Focused':''}`}>{label}</label>
            <input onFocus={handleFocus} onBlur={handleBlur} className={'FloatingTextField-input'}/>
        </div>
    );
}