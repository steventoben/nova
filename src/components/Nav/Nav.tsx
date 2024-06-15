import Link from "next/link";

export interface NavProps {
    navLinks: NavLinkType[];
}

export type NavLinkType = {
    label: string;
    link: string;
}

export function Nav(props: NavProps) {
    const {
        navLinks
    } = props;
    return (
        <nav className={'Nav-container'}>
            {navLinks.map((navLink: NavLinkType) => (
                <NavLink navLink={navLink} key={navLink.label} />
            ))}
        </nav>
    );
}

interface NavLinkProps {
    navLink: NavLinkType;
}
export function NavLink(props: NavLinkProps) {
    const {
        navLink
    } = props;
    return(
        <Link className={'NavLink-link'} href={navLink.link} >
            <span className={'NavLink-label'}>{navLink.label}</span>
        </Link>
    );
}