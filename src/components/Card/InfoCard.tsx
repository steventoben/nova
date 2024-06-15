import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    description: string;
    //cta: string;
    cta: ReactNode;
}
export function InfoCard(props: Props) {
    const {
        icon,
        title,
        description,
        cta
    } = props;
    return (
        <article className="Card Card-container InfoCard">
            <div className="Card-icon Icon">{icon}</div>
            <div className="Card-title Heading Large"><h5>{title}</h5></div>
            <div className="Card-body Body Small">{description}</div>
        </article>
    );
}