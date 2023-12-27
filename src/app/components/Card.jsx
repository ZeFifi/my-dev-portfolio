export default function Card({ className, content, title }) {
  return (
    <div className={`${className} rounded-md`}>
      {title && <h2></h2>}
      <p className="p-5">{content}</p>
    </div>
  );
}
