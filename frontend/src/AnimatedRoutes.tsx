import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
import { AnimatePresence } from "motion/react";
import PageTransition from "./components/PageTransition";

// Import halaman Lazy (copy dari App.tsx kamu)
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Contact = lazy(() => import("./Contact"));
const Portofolio = lazy(() => import("./Portofolio"));
import NotFound from "./NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/About"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/Services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/Portofolio"
          element={
            <PageTransition>
              <Portofolio />
            </PageTransition>
          }
        />
        <Route
          path="/Contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
