import Link from "next/link";
import { socialNetworks } from "../../../data/social-networks";

const hoverColor = (socialNetwork: { name: string }) => {
  if (socialNetwork.name === "Instagram") {
    return "text-[#fa035c]";
  }
  if (socialNetwork.name === "LinkedIn") {
    return "text-[#0966c2]";
  }
  return "";
};

function SocialNetworks() {
  return (
    <ul className="flex gap-9">
      {socialNetworks.map((socialNetwork) => (
        <Link
          className={`text-sm hover:${hoverColor(socialNetwork)}`}
          key={socialNetwork.id}
          href={socialNetwork.url}
          target="_blank"
        >
          <li className="flex">
            <i
              className={`fi ${socialNetwork.iconName} ${hoverColor(
                socialNetwork
              )} text-xl mr-2`}
            ></i>
            {socialNetwork.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default SocialNetworks;
