import { ReactNode } from "react";
import { CheckSvg, SvgElements } from "../Icon/Icon";
import { Button } from "../Button/Button";
import { Spacer } from "../Spacer/Spacer";
//import { useCheckout } from "@/context/CheckoutContext";

interface Props {
    icon: ReactNode;
    title: string;
    description: string;
    //cta: string;
    cta: ReactNode;
}
export function ServiceCard(props: Props) {
    const {
        icon,
        title,
        description,
        cta
    } = props;
    return (
        <article className="Card Card-container ServiceCard">
            <div className="Card-icon Icon">{icon}</div>
            <div className="Card-title"><h5 className="Heading large">{title}</h5></div>
            <div className="Card-body"><p className="Body small">{description}</p></div>
            <div className="Card-actions">
                <div className="Card-cta">{cta}</div>
            </div>
        </article>
    );
}
interface ServiceCardProps {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
    //cta: string;
    cta: ReactNode;
    price: number;
    info: string[];
}
export function ServicePriceCard(props: ServiceCardProps) {
    const {
        icon,
        title,
        description,
        cta,
        price,
        info,
    } = props;
    //const {addToCart} = useCheckout();
    return (
        <article className="Card Card-container ServiceCard ServicePriceCard">
                <h4 className="Heading large Bold">{title}</h4>
                
                <div className="Body small">{description}</div>

                <div className="Price-container">
                <div className="Price">${price}</div>
                {/* <span className="Label small Meta-text">{`One-time Flat-rate fee`}</span> */}
                </div>
                
                <div className="Divider"></div>
                <div className="List-container">
                    <ul className="List">
                        {info.map(i => (
                            <li className="List-item Body small" key={i}>
                                <span className="Checkmark"><CheckSvg size={1} /></span>
                                <span className="List-item-label Label medium">{i}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="Cta-container">
                    {cta}
                </div>

        </article>
    );
}

interface ServiceCardContent {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    cta: ReactNode;
    price: number;
    info: string[];
}


export const serviceCard1 = {
    title: 'Intelligent Information Gathering',
    description: 'Our industry-leading tools and techniques allow us to quickly and effectively gather critical information for our clients.',
    icon: SvgElements.FileSvg,
    cta: <Button label={"Learn More"} variant={"Arrow"} theme={"Primary"}  />
}
export const serviceCard2 = {
    title: 'Robust Security Measures',
    description: 'Your security is our top priority.',
    icon: SvgElements.LockSvg,
    cta: <Button label={"Discover our security solutions"} variant={"Arrow"} theme={"Primary"}  />
}
export const serviceCard3 = {
    title: 'Global Reach',
    description: 'With our vast network of resources and contacts, we offer a truly global perspective and the ability to handle international projects.',
    icon: SvgElements.LinkSvg,
    cta: <Button label={"Explore our global servies"} variant={"Arrow"} theme={"Primary"}  />
}
export const serviceCard4 = {
    title: 'Innovative Solutions',
    description: 'We are always pushing the boundaries and finding new, innovative solutions to help our clients stay ahead of the curve in information and security.',
    icon: SvgElements.LightbulbSvg,
    cta: <Button label={"Discover our latest innovations"} variant={"Arrow"} theme={"Primary"}  />
}
export const service1 = {
    id: 1,
    title: 'OSINT Investigation',
    //description: 'Let us uncover/find/unveil someone or thing or entity that requres some finessing or specialized web scraping or database searching or a collection of pieces of information that, when correlated, can and will reveal a truth that sometimes is obfuscated.',
    description: 'Uncover the truth and find the information you need.',
    icon: SvgElements.LightbulbSvg,
    cta: <Button label={"Uncover the truth"} variant={"Arrow"} theme={"Primary"}  />,
    price: 400,
    info: [
        'Specialized web scraping',
        'Deep database searches',
        'Aggregate data through numerous data sources',
        'Dark web search'
    ]
}
export const service2 = {
    id: 2,
    title: 'Cyber Security Audit',
    description: 'Full-scale information security audit.',
    icon: SvgElements.LightbulbSvg,
    cta: <Button label={"Check your security"} variant={"Arrow"} theme={"Primary"}  />,
    price: 200,
    info: [
        'Specialized web scraping',
        'Deep database searches',
        'Aggregate data through numerous data sources',
        'Dark web search'
    ]
}
export const service3 = {
    id: 3,
    title: 'Data obfuscation services',
    //description: `Find your vulnerabilites.`,
    description: `Discover how you're vulnerable.`,
    icon: SvgElements.LightbulbSvg,
    cta: <Button label={"Find your vulnerabilities"} variant={"Arrow"} theme={"Primary"}  />,
    price: 180,
    info: [
        'Thorough searches',
        'Discover your vulnerabilities',
        'Collect important personal data',
        'Aggregate data from many sources to find out sensitive information'
    ]
}
/* export const SAMPLE_DATA: ServiceCardContent[] = [
    serviceCard1,
    serviceCard2,
    serviceCard3,
    serviceCard4
]; */
export const SAMPLE_SERVICES: ServiceCardContent[] = [
    service1, service2, service3
]