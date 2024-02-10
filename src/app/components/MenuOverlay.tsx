import Image from "next/image";
import Link from "next/link";
import { mobileNavigationItems } from "../../../data/navigation-items";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

import { useState } from "react";
import { socialNetworks } from "../../../data/social-networks";
import Logo from "../../../public/logo.svg";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type Props = {
  isMenuOpened: boolean;
  setIsMenuOpened: Function;
};

export default function MenuOverlay({ isMenuOpened, setIsMenuOpened }: Props) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <AlertDialog open={openModal} onOpenChange={setOpenModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Contact</AlertDialogTitle>
            <AlertDialogDescription className="text-left">
              Remplissez ce court formulaire pour me contact. Je vous répondrai
              dans les plus brefs délais.
            </AlertDialogDescription>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <div className="text-left">
                  <Input type="text" id="lastname" placeholder="Nom" />
                </div>
                <div className="text-left">
                  <Input type="text" id="firstname" placeholder="Prénom" />
                </div>
              </div>
              <div className="text-left">
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <Textarea placeholder="Votre message..." className="h-[220px]" />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex justify-center items-baseline gap-5">
              <AlertDialogCancel>Fermer</AlertDialogCancel>
              <AlertDialogAction onClick={() => console.log("Message envoyé")}>
                Envoyer
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
              onClick={() => {
                if (item.url === "#") {
                  setOpenModal(true);
                }
                setIsMenuOpened(false);
              }}
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
    </>
  );
}
