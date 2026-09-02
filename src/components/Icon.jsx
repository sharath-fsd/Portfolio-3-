export default function Icon({ name, className, ariaHidden = true }) {
  return (
    <svg className={className} aria-hidden={ariaHidden}>
      <use href={`#icon-${name}`} />
    </svg>
  );
}
