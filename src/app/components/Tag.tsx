type TagProps = {
  content: string;
};

const Tag = ({ content }: TagProps) => {
  return (
    <div className="border border-solid border-1 border-slate-500 p-1 rounded-lg">
      <p className="text-xs">{content}</p>
    </div>
  );
};

export default Tag;
