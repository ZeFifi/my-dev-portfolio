import Image from "next/image";
import Link from "next/link";

import { me, projects } from "../../../data/navigation-items";
import { socialNetworks } from "../../../data/social-networks";
import Logo from "../../../public/logo.svg";
import NavigationSection from "./NavigationSection";

type Props = {
  isMenuOpened: boolean;
  setIsMenuOpened: Function;
};

function Navigation({ isMenuOpened, setIsMenuOpened }: Props) {
  return (
    <div>
      <button
        className="lg:hidden flex top-0 -left-1 z-20 absolute text-black focus:outline-none p-6"
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
              isMenuOpened ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
              isMenuOpened ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
              isMenuOpened ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
      <nav className="hidden fixed md:flex h-full max-h-screen min-h-screen border-r border-gray-150 bg-white pb-10 sm:pb-0 md:w-1/3 2xl:w-72">
        <div className="flex-1 px-9 py-9 space-y-1">
          <div className="flex justify-center">
            <Link href="/" className="mb-9">
              <Image src={Logo} width={120} alt="logo" />
            </Link>
          </div>
          <ul className="space-y-1">
            <li className="flex items-stretch space-x-1">
              <Link
                className="flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium text-gray-700 sm:hover:bg-gray-200 hover:bg-gradient-to-r from-sky-400 to-blue-500 hover:text-white"
                href="/"
              >
                <div>
                  <i className="fi fi-rr-home mr-2"></i>
                  Accueil
                </div>
              </Link>
            </li>
          </ul>
          <NavigationSection items={me} sectionTitle="Moi" />
          <NavigationSection items={projects} sectionTitle="Mes projets" />
          <NavigationSection
            items={socialNetworks}
            sectionTitle="Réseaux sociaux"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
