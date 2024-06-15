'use client';

import React from "react";

export const TocContext = React.createContext({});
interface ProviderProps {
    children: React.ReactNode;
    items: string[];
}
export function TocProvider(props: ProviderProps) {
const {
    children,
    items
} = props;
const [activeItem, setActiveItem] = React.useState('');
return (
    <TocContext.Provider value={{activeItem, setActiveItem}} >
        {children}
    </TocContext.Provider>
);
}
export function useToc() {
    const {activeItem, setActiveItem} = React.useContext(TocContext);
    return {activeItem, setActiveItem};
}
export interface TableOfContentsProps {
    items: string[];
}

export function TableOfContents(props: TableOfContentsProps) {
    const {
        items
    } = props;
    return (
        <div className={'TableOfContents-container'}>
            <ul className={'TableOfContents-list'}>
                {items.map(item => (
                    <Item label={item} key={item} />
                ))}
            </ul>
        </div>
    );
}

interface ItemProps {
    label: string;
}
function Item(props: ItemProps) {
    const {
        label
    } = props;
    return (
        <li className={'TableOfContents-list-item'}>
            <span>{label}</span>
        </li>
    );
}