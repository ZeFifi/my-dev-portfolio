import Image from "next/image";

type Props = {
  picture: string;
  person: string;
  company: string;
  position: string;
  reference: string;
};

function Testimonials({
  picture,
  person,
  company,
  position,
  reference,
}: Props) {
  return (
    <div className="grid grid-cols-[48px,1fr] gap-4">
      <div>
        <Image
          className="rounded-lg"
          src={picture}
          alt="ex-colleague picture"
          width={100}
          height={100}
        />
      </div>
      <div className="text-sm">
        <p className="font-bold">{person}</p>
        <p className="font-light">{company}</p>
        <p className="font-light text-slate-500 mb-4">{position}</p>
        <p>{reference}</p>
      </div>
    </div>
  );
}

export default Testimonials;
