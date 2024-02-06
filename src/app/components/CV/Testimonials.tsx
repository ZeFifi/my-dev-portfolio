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
    <div className="lg:grid lg:grid-cols-[48px,1fr] gap-4">
      <div className="float-left mr-4 lg:mr-0">
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
        <p className="mt-14 lg:mt-0">{reference}</p>
      </div>
    </div>
  );
}

export default Testimonials;
