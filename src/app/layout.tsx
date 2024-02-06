"use client";

import { Inter } from "next/font/google";
import { ReactNode, useState } from "react";
import MenuOverlay from "./components/MenuOverlay";
import Navigation from "./components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="relative flex h-full min-h-screen w-full">
          <Navigation
            isMenuOpened={isMenuOpened}
            setIsMenuOpened={setIsMenuOpened}
          />
          <MenuOverlay
            isMenuOpened={isMenuOpened}
            setIsMenuOpened={setIsMenuOpened}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
