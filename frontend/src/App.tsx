import { BrowserRouter as Router } from "react-router-dom";
// import { Suspense, lazy } from "react";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
