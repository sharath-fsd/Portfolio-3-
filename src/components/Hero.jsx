import { resumePath } from "../data/portfolio.js";
import useTypewriter from "../hooks/useTypewriter.js";

export default function Hero() {
  const signature = useTypewriter("Sarath K");

  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow reveal">Java Backend Developer · Fresher</p>
        <h1 id="hero-title" className="reveal">
          Java
          <br />
          Backend
          <br />
          Developer
        </h1>
        <p className="hero-intro reveal">
          Entry-level developer building secure RESTful applications with Java, Spring Boot,
          Spring Security, Hibernate/JPA, MySQL, and JWT.
        </p>
        <div className="hero-actions reveal">
          <a className="button button-solid" href="#featured">
            View projects <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-ghost" href={resumePath} download>
            Download resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <p className="typewriter-signature reveal" aria-label="Sarath K">
        <span className="typewriter-text" aria-hidden="true">
          {signature}
        </span>
        <span className="typewriter-caret" aria-hidden="true" />
      </p>

      <p className="availability reveal">
        <span>Open to</span>
        <strong>Backend roles</strong>
        <a href="#contact">
          Fresher opportunities <span aria-hidden="true">↗</span>
        </a>
      </p>
    </section>
  );
}
