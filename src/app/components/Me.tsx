import Image from "next/image";
import { ReactNode } from "react";
import Avatar from "../../../public/avatar.jpeg";

type Props = {
  content: ReactNode;
  title: ReactNode;
};

export default function Me({ content, title }: Props) {
  return (
    <div className="grid grid-cols-[1fr,240px] gap-4">
      <div>
        {title}
        {content}
      </div>
      <div>
        <Image className="rounded-lg" src={Avatar} width={240} alt="Avatar" />
      </div>
    </div>
  );
}
