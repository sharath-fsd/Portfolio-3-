import { certifications } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function CertificationDetails({ certification }) {
  const content = (
    <>
      <h3>{certification.title}</h3>
      <p>{certification.issuer}</p>
    </>
  );

  if (!certification.url) return <div>{content}</div>;

  return (
    <a
      className="certification-link"
      href={certification.url}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}

export default function Credentials() {
  return (
    <section
      className="credentials page-shell"
      id="credentials"
      aria-labelledby="credentials-title"
    >
      <SectionHeading
        index="04 / Credentials"
        title="Education & certifications"
        titleId="credentials-title"
      />

      <div className="credentials-layout">
        <article className="education-card reveal">
          <p className="credential-label">Education</p>
          <h3>Bachelor of Engineering (B.E.)</h3>
          <p className="education-field">Electronics and Communication Engineering</p>
          <p className="education-school">King’s Engineering College, Sriperumbudur</p>
          <dl className="education-meta">
            <div>
              <dt>Duration</dt>
              <dd>2022–2026</dd>
            </div>
            <div>
              <dt>CGPA</dt>
              <dd>7.7</dd>
            </div>
          </dl>
        </article>

        <div className="certification-panel">
          <p className="credential-label reveal">Certifications</p>
          <ol className="certification-list">
            {certifications.map((certification) => (
              <li className="reveal" key={certification.number}>
                <span>{certification.number}</span>
                <CertificationDetails certification={certification} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
