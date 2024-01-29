import Link from "next/link";

type Props = {
  items: any[];
  sectionTitle: string;
};

function NavigationSection({ items, sectionTitle }: Props) {
  return (
    <div>
      <p className="px-2 pt-5 pb-2 text-xs font-semibold text-slate-500">
        {sectionTitle}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li className="flex items-stretch space-x-1" key={item.id}>
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
}

export default NavigationSection;
