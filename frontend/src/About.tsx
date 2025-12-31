import Heroabout from "./components/HeroAbout";
import Stats from "./components/stats";
import Visimisi from "./components/Visimisi";

function About() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Heroabout />
        <Stats />
        <Visimisi />
      </div>
    </>
  );
}

export default About;
