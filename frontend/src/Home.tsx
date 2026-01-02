import Hero from "./components/Hero";
import Socialproof from "./components/Socialproof";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="bg-background-light min-h-screen flex flex-col">
        <Hero />
        <Socialproof />
        <Testimonial />
      </div>
    </>
  );
}
