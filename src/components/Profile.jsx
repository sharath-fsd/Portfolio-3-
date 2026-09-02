import { strengths } from "../data/portfolio.js";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

function StrengthTitle({ strength }) {
  if (!strength.url) return <h3>{strength.title}</h3>;

  return (
    <h3>
      <a
        className="leetcode-heading"
        href={strength.url}
        target="_blank"
        rel="noreferrer"
        aria-label="View Sarath K’s LeetCode profile"
      >
        <Icon name="leetcode" className="leetcode-icon" />
        {strength.title}
      </a>
    </h3>
  );
}

export default function Profile() {
  return (
    <section className="process page-shell" aria-labelledby="process-title">
      <SectionHeading
        index="05 / Profile"
        title="Experience & strengths"
        titleId="process-title"
      />

      <article className="experience-highlight reveal">
        <div>
          <p className="experience-label">Self-employed Backend Developer</p>
          <h3>Beauty Parlour Management System</h3>
        </div>
        <p className="experience-duration">7 months</p>
        <p className="experience-copy">
          Built and delivered a management system for my aunt’s independently owned beauty
          parlour, covering service management, appointment booking, secure role-based access,
          CRUD operations, database persistence, API testing, and React integration.
        </p>
      </article>

      <ol className="process-list">
        {strengths.map((strength) => (
          <li className="reveal" key={strength.number}>
            <span>{strength.number}</span>
            <StrengthTitle strength={strength} />
            <p>{strength.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
