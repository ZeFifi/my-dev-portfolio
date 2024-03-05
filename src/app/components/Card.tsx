import Image from "next/image";
import Link from "next/link";

type CardProps = {
  content?: string;
  hasLogoOnly?: boolean;
  logo: string;
  title?: string;
  url?: string;
};

const Card = ({ content, hasLogoOnly, logo, title, url }: CardProps) => {
  return (
    <div className="bg-white p-4 border border-gray-150 mb-2 rounded-lg text-sm w-full">
      <div
        className={hasLogoOnly ? undefined : "grid grid-cols-[48px,1fr] gap-4"}
      >
        <div className={hasLogoOnly ? "flex justify-center" : undefined}>
          <Image
            className="rounded-lg"
            src={logo}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        {!hasLogoOnly && (
          <div>
            <div className="flex justify-between mb-5">
              {title && <p className="font-bold">{title}</p>}
              {url && (
                <Link className="text-slate-500" href={url} target="_blank">
                  Visiter le site{" "}
                  <i className="fi fi-rs-arrow-up-right-from-square"></i>
                </Link>
              )}
            </div>
            {content && <p>{content}</p>}
          </div>
        )}
      </div>
      {hasLogoOnly && <p className="mt-4 text-center">{title}</p>}
    </div>
  );
};

export default Card;
