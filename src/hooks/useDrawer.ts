import { DrawerContext } from "@/components/Drawer/Drawer";
import React, { SetStateAction } from "react";



export function useDrawer() {
    const {isOpen, setIsOpen} = React.useContext(DrawerContext);
    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);
    const toggleDrawer = () => setIsOpen((v: boolean) => !v);
    return {
        openDrawer,
        closeDrawer,
        toggleDrawer,
        isOpen
    };
}