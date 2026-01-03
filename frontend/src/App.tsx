import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Contact = lazy(() => import("./Contact"));
const Portofolio = lazy(() => import("./Portofolio"));

function App() {
  return (
    <Router>
      <Navbar />
      {/* ROUTES */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portofolio" element={<Portofolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {/* ROUTES */}
      <Footer />
    </Router>
  );
}

export default App;
