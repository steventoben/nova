'use client';
import React, {ReactNode, SetStateAction} from "react";
import { Nav, NavLinkType } from "../Nav/Nav";
import Link from "next/link";
import { useDrawer } from "@/hooks/useDrawer";
import { ArrowForwardSvg } from "../Icon/Icon";
import { navRoutes } from "@/util/routes";

type ContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = React.createContext<ContextType>({
    isOpen: false,
    setIsOpen: function (value: React.SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    }
});
export interface DrawerProviderProps {
    children: ReactNode;
}
export function DrawerProvider(props: DrawerProviderProps) {
    const {
        children
    } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <DrawerContext.Provider value={{isOpen, setIsOpen}} >
            {children}
        </DrawerContext.Provider>
    );
}
export interface DrawerProps {

}

export function Drawer(props: DrawerProps) {
    const {} = props;
    //const {isOpen, setIsOpen} = React.useContext(DrawerContext);
    const {isOpen, toggleDrawer, closeDrawer} = useDrawer();
    return (
        <div className={`Drawer-container ${isOpen?'Open':''}`}>
            <h2 className="Heading large">Nova Piratica</h2>
            <nav className="Drawer-nav">
                <ul className="Drawer-nav-list">
                    {navRoutes.map(route => (
                        <li className="Drawer-nav-list-item" key={route.label}>
                            <Link className="Drawer-link" onClick={closeDrawer} href={route.link}>
                                <div className="Drawer-link-content">
                                    <span className="Drawer-link-label">{route.label}</span>
                                    <span className="Drawer-link-arrow"><ArrowForwardSvg size={1.5}/></span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

/* const navRoutes: NavLinkType[] = [
    {label: 'About Us', link: '/about'},
    {label: 'Services', link: '/services'},
    {label: 'Contact', link: '/contact'},
    {label: 'Idk man', link: '/another-link'},
]; */