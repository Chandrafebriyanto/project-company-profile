import { Link } from "react-router-dom";
import ServicesItem from "./components/ServicesItem";
import { motion } from "motion/react";

function Services() {
  return (
    <>
      {/* Services Intro */}
      <div className="bg-background-light">
        <div className="text-center justify-items-center lg:py-40 md:py-20 py-10 px-5 w-max-[900px] mx-auto md:w-[500px] lg:w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full border border-slate-200 w-max mb-1"
          >
            <p className="text-primary text-sm font-bold"> What We Do</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="font-black text-[2rem] leading-none my-10 lg:text-[4rem] text-slate-900"
          >
            Solutions Tailored to your Business needs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="text-m text-slate-600 lg:text-xl"
          >
            We leverage cutting-edge technology and creative strategy to drive
            growth and efficiency for your organization
          </motion.p>
        </div>
      </div>

      {/* Services */}
      <ServicesItem />

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-background-light">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="overflow-hidden rounded-2xl bg-white  shadow-xl ring-1 ring-slate-900/5 "
          >
            <div className="flex flex-col items-center justify-center gap-6 px-6 py-12 text-center sm:px-12 sm:py-16">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to start your project?
              </h2>
              <p className="max-w-xl text-lg text-slate-600">
                Contact us today for a detailed proposal tailored specifically
                to your needs and goals.
              </p>
              <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <Link to="/contact">
                  <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors">
                    Get a Quote
                  </button>
                </Link>
                <Link to="/portfolio">
                  <button className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-transparent px-8 text-base font-bold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors">
                    View Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
