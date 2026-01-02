import Heroabout from "./components/HeroAbout";
import Stats from "./components/stats";
import Visimisi from "./components/Visimisi";
import Team from "./components/Team";

function About() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Heroabout />
        <Stats />
        <Visimisi />
        <Team />
      </div>
    </>
  );
}

export default About;
