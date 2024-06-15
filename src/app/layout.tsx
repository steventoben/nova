import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import '../styles/main.scss';
import {Header} from "@/components/Header/Header";
import {NavLinkType} from "@/components/Nav/Nav";
import { Drawer, DrawerProvider } from "@/components/Drawer/Drawer";
import { navRoutes } from "@/util/routes";
import { CheckoutProvider } from "@/context/CheckoutContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CheckoutProvider>
        <DrawerProvider>
        <Header navLinks={navRoutes}/>
        <main className={'Main'}>
            {children}
        </main>
        <Drawer/>
        </DrawerProvider>
        </CheckoutProvider>
      </body>
    </html>
  );
}
