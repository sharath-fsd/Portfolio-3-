import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

const leetCodeUrl = "https://leetcode.com/u/dW5Hu0XQfj/";

export default function About() {
  return (
    <section className="metrics page-shell" id="about" aria-labelledby="metrics-title">
      <SectionHeading index="01 / About" title="About me" titleId="metrics-title" />

      <div className="about-summary reveal">
        <p>
          Entry-level Backend Software Engineer with hands-on experience developing backend
          services and REST APIs using Java, Spring Boot, Spring MVC, Spring Security,
          Hibernate/JPA, MySQL, and JWT. Built full-stack applications involving backend service
          development, database interactions, authentication, authorization, CRUD operations, API
          testing, and frontend-backend integration.
        </p>
        <p>
          Familiar with PostgreSQL, Docker/containerized environments, Git, Maven, JUnit 5,
          CI/CD concepts, Python, and AI API integrations. Strong foundation in problem solving,
          Core Java, OOP, Collections, SQL, debugging, and Data Structures & Algorithms, with{" "}
          <a
            className="leetcode-inline"
            href={leetCodeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View Sarath K’s LeetCode profile"
          >
            <Icon name="leetcode" className="leetcode-icon" />
            200+ LeetCode problems solved
          </a>
          . Interested in backend engineering, troubleshooting complex technical issues,
          reliability, security, and continuous improvement.
        </p>
      </div>

      <dl className="metric-grid">
        <div className="metric reveal">
          <dt>Featured projects</dt>
          <dd>{projects.length}</dd>
        </div>
        <div className="metric reveal">
          <dt>LeetCode problems solved</dt>
          <dd>
            <a
              className="leetcode-stat"
              href={leetCodeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Sarath K’s LeetCode profile"
            >
              <Icon name="leetcode" className="leetcode-icon" />
              200+
            </a>
          </dd>
        </div>
        <div className="metric reveal">
          <dt>Certifications</dt>
          <dd>5</dd>
        </div>
        <div className="metric reveal">
          <dt>Engineering CGPA</dt>
          <dd>7.7</dd>
        </div>
      </dl>
    </section>
  );
}
