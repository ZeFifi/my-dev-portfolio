import Card from "./Card";

type StackBlockProps = {
  array: {
    id: number;
    description?: string;
    logo: string;
    name: string;
    url?: string;
  }[];
  className: string;
  hasLogoOnly?: boolean;
  title: string;
};

function StackBlock({ array, className, hasLogoOnly, title }: StackBlockProps) {
  return (
    <>
      <h2 className="mb-5 text-xl font-bold">{title}</h2>
      <div className={className}>
        {array.map((arrayItem) => (
          <Card
            key={arrayItem.id}
            content={arrayItem.description}
            logo={arrayItem.logo}
            title={arrayItem.name}
            hasLogoOnly={hasLogoOnly}
          />
        ))}
      </div>
    </>
  );
}

export default StackBlock;
