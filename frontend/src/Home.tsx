import Hero from "./components/Hero";
import Socialproof from "./components/Socialproof";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-background-light min-h-screen flex flex-col">
        <Hero />
        <Socialproof />
        <Footer />
      </div>
    </>
  );
}
