import ProjectItems from "./components/ProjectItems";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({
  value,
  duration,
}: {
  value: number;
  duration: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: duration });
    }
  }, [isInView, value, duration, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

function Portofolio() {
  return (
    <>
      <div>
        <div className="text-center justify-items-center md:py-20 py-7 px-5 w-max-[900px] mx-auto md:w-[500px] lg:w-[900px]">
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            className="text-primary font-bold lg:text-xl md:text-md text-sm"
          >
            OUR PORTOFOLIO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="font-black leading-none lg:my-5 md:my-4 my-3 lg:text-6xl md:text-4xl text-3xl text-slate-900"
          >
            Selected & Digital Innovations
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
            className="text-m text-slate-600 lg:text-xl md:text-base text-sm"
          >
            We leverage cutting-edge technology and creative strategy to drive
            growth and efficiency for your organization
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 md:px-20 px-24 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border border-slate-200 md:py-7 md:px-12 py-3 text-center rounded-xl shadow-md"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-3">
              calendar_month
            </span>
            <h1 className="text-primary font-bold md:text-4xl text-2xl m-1">
              <AnimatedNumber value={10} duration={2} />+
            </h1>
            <p className="font-semibold text-slate-600 md:font-xl text-sm">
              Years of Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border border-slate-200 md:py-7 md:px-12 py-3 text-center rounded-xl shadow-md"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-3">
              deployed_code
            </span>
            <h1 className="text-primary font-bold md:text-4xl text-2xl mb-1">
              <AnimatedNumber value={500} duration={2} />+
            </h1>
            <p className="font-semibold text-slate-600 md:font-xl text-sm">
              Project Delivered
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="border border-slate-200 md:py-7 md:px-12 py-3 text-center rounded-xl shadow-md"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-3">
              trophy
            </span>
            <h1 className="text-primary font-bold md:text-4xl text-2xl mb-1">
              <AnimatedNumber value={25} duration={2} />
            </h1>
            <p className="font-semibold text-slate-600 md:font-xl text-sm text-">
              Global Awards
            </p>
          </motion.div>
        </div>
      </div>
      {/* Project Items */}
      <ProjectItems />
    </>
  );
}

export default Portofolio;
