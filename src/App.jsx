import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ContactPortrait from "./components/ContactPortrait.jsx";
import Credentials from "./components/Credentials.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import IconSprite from "./components/IconSprite.jsx";
import Interests from "./components/Interests.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import ScrollSequence from "./components/ScrollSequence.jsx";
import Skills from "./components/Skills.jsx";
import useRevealOnScroll from "./hooks/useRevealOnScroll.js";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <ScrollSequence endMarkerSelector="#contact-portrait" />
      <IconSprite />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Credentials />
        <Profile />
        <Interests />
        <Contact />
        <ContactPortrait />
      </main>
    </>
  );
}
