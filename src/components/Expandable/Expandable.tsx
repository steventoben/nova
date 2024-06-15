import React, { ReactNode } from "react";

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
            <div className="Expandable-trigger" 
            aria-expanded={isExpanded}
            tabIndex={0}
            role="button"
            id={`trigger-${id}`}
            >
                <h3 className="Expandable-heading">
                    {title}
                </h3>
            </div>
            <div ref={contentRef} className="Expandable-content" 
                id={`content-${id}`}
                aria-labelledby={`trigger-${id}`}
                >
                {content}
            </div>
        </div>
    );
}