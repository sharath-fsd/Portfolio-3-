import { interests } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Interests() {
  return (
    <section className="interests page-shell" id="interests" aria-labelledby="interests-title">
      <SectionHeading
        index="06 / Beyond code"
        title="Hobbies & interests"
        titleId="interests-title"
      />

      <p className="interests-intro reveal">
        When I’m not coding, you’ll find me exploring these passions.
      </p>

      <ul className="interest-grid">
        {interests.map(([icon, title, description]) => (
          <li className="interest-card reveal" key={title}>
            <span className="interest-icon" aria-hidden="true">
              {icon}
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
