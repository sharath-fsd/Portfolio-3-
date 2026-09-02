export default function SectionHeading({ index, title, titleId }) {
  return (
    <div className="section-heading reveal">
      <p className="section-index">{index}</p>
      <h2 id={titleId}>{title}</h2>
    </div>
  );
}
