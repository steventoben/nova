'use client';
import {Nav, NavLinkType} from "@/components/Nav/Nav";
import image from '../../res/NP_ICO.png';
import Link from "next/link";
import { useDrawer } from "@/hooks/useDrawer";
import { CloseSvg, HamburgerMenuSvg } from "../Icon/Icon";
export interface HeaderProps {
    navLinks: NavLinkType[];
}

export function Header(props: HeaderProps) {
    const {
        navLinks
    } = props;
    const {toggleDrawer, isOpen} = useDrawer();
    return (
        <header className={'Header'}>
            <Link href={`/`}>
                <span className={'Logo-container'}>
                    <img src={image.src} alt={'Nova Piratica'}/>
                </span>
            </Link>
            <Nav navLinks={navLinks} />
            <span className="Drawer-button">
                <button className="Menu-icon-button" onClick={() => toggleDrawer()}>
                    <span className="Menu-icon">
                        {isOpen ? <CloseSvg size={2} /> : <HamburgerMenuSvg size={2} />}
                    </span>
                </button>
            </span>
        </header>
    );
}