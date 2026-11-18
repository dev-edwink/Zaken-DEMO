import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Setup from "../components/home/Setup.jsx";
import Features from "../components/home/Features.jsx";
import Faq from "../components/home/Faq.jsx";
// import Contact from "../components/home/Contact.jsx";
import GetStarted from "../components/home/GetStarted.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Setup />
      <Features />
      <Faq />
      {/* <Contact /> */}
      <GetStarted />
    </>
  );
}
