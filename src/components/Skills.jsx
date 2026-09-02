import { capabilities, technologies } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section className="services page-shell" id="skills" aria-labelledby="services-title">
      <SectionHeading
        index="04 / Technical stack"
        title="Backend"
        titleId="services-title"
      />

      <div className="capability-layout">
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability reveal" key={capability.number}>
              <p className="capability-marker">
                <Icon name={capability.icon} />
                <span>{capability.number}</span>
              </p>
              <div>
                <h3>{capability.title}</h3>
                <span>{capability.description}</span>
              </div>
            </article>
          ))}
        </div>

        <aside className="toolkit reveal" aria-labelledby="toolkit-title">
          <h3 id="toolkit-title">Languages & technologies</h3>
          <ul className="tool-list" aria-label="Development technologies">
            {technologies.map(([mark, technology]) => (
              <li key={technology}>
                <span className="tech-mark" aria-hidden="true">
                  {mark}
                </span>
                <span>{technology}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
