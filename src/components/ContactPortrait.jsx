import { useRef } from "react"; 
import { socialLinks } from "../data/portfolio.js";
import usePortraitScrollAnimation from "../hooks/usePortraitScrollAnimation.js";
import Icon from "./Icon.jsx";

export default function ContactPortrait() {
  // const sectionRef = useRef(null);
  // usePortraitScrollAnimation(sectionRef);

  return (
    <section
      // ref={sectionRef}
      className="contact-portrait"
      id="contact-portrait"
      aria-labelledby="portrait-profile-title"
    >
      {/* <div className="contact-portrait-image" aria-hidden="true" /> */}
      <div className="portrait-profile page-shell">
        <div className="portrait-profile-card">
          <p className="portrait-kicker">Personal profile</p>
          <h2 id="portrait-profile-title">Sarath K</h2>

          <dl className="portrait-facts">
            <div>
              <dt>Age</dt>
              <dd>20</dd>
            </div>
            <div>
              <dt>Looking for</dt>
              <dd>Java Backend Developer roles</dd>
            </div>
            <div className="portrait-about">
              <dt>About me</dt>
              <dd>
                Entry-level Backend Software Engineer focused on building secure, reliable REST
                APIs with Java, Spring Boot, Spring Security, Hibernate/JPA, and MySQL. Frontend
                knowledge: React.js, HTML5, CSS3, and Bootstrap.
              </dd>
            </div>
          </dl>

          <nav className="portrait-socials" aria-label="Sarath K profile links">
            {socialLinks.map((link) => {
              const isExternal = link.url.startsWith("http");

              return (
                <a
                  key={link.icon}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <Icon name={link.icon} className="contact-icon" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
