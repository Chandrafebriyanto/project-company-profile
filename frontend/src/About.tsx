import Heroabout from "./components/HeroAbout";
import Stats from "./components/stats";
import Visimisi from "./components/Visimisi";
import Team from "./components/Team";
import Footer from "./components/Footer";

function About() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Heroabout />
        <Stats />
        <Visimisi />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default About;
