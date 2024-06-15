import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}
export function CardGrid(props: Props) {
    const {
        children
    } = props;
    return (
        <div className="Card-grid">
            {children}
        </div>
    );
}