'use client';
import React, { ReactNode } from "react";
import { ChevronSvg } from "../Icon/Icon";

export interface ExpandableProps {
    id: string;
    title: string;
    content: ReactNode;
    isExpanded: boolean;
}
export function ExpandablePane(props: ExpandableProps) {
    const {
        id,
        title,
        content,
        isExpanded
    } = props;
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = React.useState<boolean>(false);
    React.useLayoutEffect(() => {
        const setHeight = () => {
            const contentEl = contentRef.current;
            const contentHeight = contentEl?.scrollHeight;
            contentEl?.style.setProperty('--max-height', `${contentHeight}px`);
        }
        setHeight();
        window.addEventListener('resize', setHeight);
        return () => window.removeEventListener('resize', setHeight);
    }, []);
    return (
        <div className="Expandable-container" 
            data-id={id} 
            id={id}
            
            >
            <div className={`Expandable-trigger ${isActive?"Expanded":''}`} 
            aria-expanded={isActive}
            tabIndex={0}
            role="button"
            id={`trigger-${id}`}
            onClick={() => setIsActive(v => !v)}
            >
                <h3 className="Expandable-heading">
                    {title}
                </h3>
                <span className={`Expandable-chevron ${isActive?"Expanded":''}`}><ChevronSvg size={1}/></span>
            </div>
            <div ref={contentRef} className={`Expandable-content ${isActive?"Expanded":''}`} 
                id={`content-${id}`}
                aria-labelledby={`trigger-${id}`}
                >
                {content}
            </div>
        </div>
    );
}