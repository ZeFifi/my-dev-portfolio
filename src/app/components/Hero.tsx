import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type HeroProps = {
  content: ReactNode;
  title: ReactNode;
  image: StaticImageData;
};

const Hero = ({ content, image, title }: HeroProps) => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr,240px] gap-4">
      <div>
        {title}
        {content}
      </div>
      <div className="flex justify-center">
        <Image
          className="rounded-lg"
          src={image}
          width={240}
          quality={100}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Hero;
