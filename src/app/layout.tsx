import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navigation from "./components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex h-full min-h-screen w-full">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}