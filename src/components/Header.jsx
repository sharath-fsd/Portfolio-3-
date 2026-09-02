import { resumePath } from "../data/portfolio.js";

const navigation = [
  ["Work", "#featured"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Sarath K portfolio home">
        <span className="brand-mark">SK</span>
        <span className="brand-name">
          Sarath K
          <br />
          Java Developer
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={resumePath} download>
        Resume <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}
