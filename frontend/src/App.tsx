import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./components/Footer";
import Portofolio from "./Portofolio";

function App() {
  return (
    <Router>
      <Navbar />
      {/* MAIN CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portofolio" element={<Portofolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </Router>
  );
}

export default App;
