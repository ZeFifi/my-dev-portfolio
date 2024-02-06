import Image from "next/image";
import Tag from "../Tag";

type Props = {
  logo: string;
  position: string;
  company: string;
  duration: string;
  where: string;
  summary: string;
  lists: string[];
  skills: string[];
};

function Experience({
  logo,
  position,
  company,
  duration,
  where,
  summary,
  lists,
  skills,
}: Props) {
  return (
    <div className="lg:grid lg:grid-cols-[48px,1fr] gap-4">
      <div className="float-left mr-4 lg:mr-0">
        <Image
          className="rounded-lg"
          src={logo}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="text-sm">
        <p className="font-bold">{position}</p>
        <p className="font-light">{company}</p>
        <p className="font-light text-slate-500 text-xs lg:text-sm">
          {duration}
        </p>
        <p className="font-light text-slate-500 mb-4 text-xs lg:text-sm">
          {where}
        </p>
        <p className="mt-8 lg:mt-0">{summary}</p>
        <br />
        <ul className="list-disc ml-4">
          {lists.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 text-slate-500 mt-5">
          {skills.map((skill) => (
            <Tag key={skill} content={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
