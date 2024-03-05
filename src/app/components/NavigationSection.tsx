import Link from "next/link";

type NavigationItem = {
  id: number;
  name: string;
  url: string;
  iconName?: string;
  isExternal: boolean;
};

type NavigationSectionProps = {
  items: NavigationItem[];
  sectionTitle: string;
};

const NavigationSection = ({ items, sectionTitle }: NavigationSectionProps) => {
  return (
    <div>
      <p className="hidden lg:block px-2 pt-5 pb-2 text-xs font-semibold text-slate-500">
        {sectionTitle}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            className="flex items-stretch space-x-1 border border-gray-150 lg:border-none p-4 lg:p-0 rounded-lg bg-white"
            key={item.id}
          >
            <Link
              className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r from-sky-400 to-blue-500 hover:text-white`}
              href={item.url}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <div className="flex">
                {item.iconName && (
                  <i className={`fi ${item.iconName} mr-2 mt-0.5`}></i>
                )}
                {item.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationSection;
