// import styles from "../Menu/menu.module.css";

import Image from "next/image";
import Link from "next/link";
import { mobileNavigationItems } from "../../../data/navigation-items";

import { socialNetworks } from "../../../data/social-networks";
import Logo from "../../../public/logo.svg";

type Props = {
  isMenuOpened: boolean;
  setIsMenuOpened: Function;
};

export default function MenuOverlay({ isMenuOpened, setIsMenuOpened }: Props) {
  return (
    <nav
      className={`fixed flex flex-col top-0 left-0 w-full p-10 z-10 h-screen bg-[#f1f5f9] text-black bg-opacity-100 transform delay-100 transition-all duration-300 ${
        isMenuOpened
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="flex justify-center">
        <Link href="/" className="mb-9">
          <Image src={Logo} width={120} alt="logo" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        {mobileNavigationItems.map((item) => (
          <Link
            key={item.id}
            className="bg-white p-4 border border-gray-150 rounded-lg h-[98px] flex items-center justify-center"
            onClick={() => setIsMenuOpened(false)}
            href={item.url}
            target={item.isExternal ? "_blank" : "_self"}
          >
            <div className="flex flex-col text-center">
              <i className={`fi ${item.iconName} text-2xl`}></i>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {socialNetworks.map((item) => (
          <Link
            key={item.id}
            className="bg-white p-4 border border-gray-150 rounded-lg h-[98px] flex items-center justify-center"
            onClick={() => setIsMenuOpened(false)}
            href={item.url}
            target={item.isExternal ? "_blank" : "_self"}
          >
            <div className="flex flex-col text-center">
              <i className={`fi ${item.iconName} text-2xl`}></i>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
