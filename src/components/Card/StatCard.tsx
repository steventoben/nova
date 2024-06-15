import { ReactNode } from "react";
import { Icon, SearchSvg, SheildSvg, SvgElements, UsersSvg } from "../Icon/Icon";

interface StatCardProps {
    icon: ReactNode;
    title: string;
    stat: string;
}
export function StatCard(props: StatCardProps) {
    const {
        icon,
        title,
        stat
    } = props;
    return (
        <article className="Card StatCard Card-container">
            <div className="Card-icon">
                {icon}
            </div>
            <div className="Card-title">
                <h6 className="Heading large">{title}</h6>
            </div>
            <div className="Card-stat">
                <span className="Label large Statistic">{stat}</span>
            </div>
        </article>
    );
}

export interface Statistic {
    title: string;
    stat: string;
    icon: ReactNode;
}

export const stat1 = {
    title: 'Cyber Security Threats',
    stat: '500k',
    icon: <SheildSvg size={2} />
};
export const stat2 = {
    title: 'Online Information Sources',
    stat: '1M',
    icon: <SearchSvg size={2} />
};
export const stat3 = {
    title: 'Online Privacy Breaches',
    stat: '100k',
    icon: <UsersSvg size={2} />
};

export const SAMPLE_STATS: Statistic[] = [
    stat1,
    stat2,
    stat3
]