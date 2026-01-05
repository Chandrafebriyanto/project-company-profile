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

function Stats() {
  return (
    <>
      <div className="bg-primary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-white/20 py-10 px-6 lg:px-20">
          <div className="text-center">
            <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">
              {/* Panggil komponen kustom tadi */}
              <AnimatedNumber value={10} duration={2} />+
            </h2>
            <p className="text-white text-sm lg:text-base">
              Years of Experience
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">
              <AnimatedNumber value={250} duration={2} />+
            </h2>
            <p className="text-white text-sm lg:text-base">Projects Done</p>
          </div>

          <div className="text-center">
            <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">
              <AnimatedNumber value={50} duration={2} />+
            </h2>
            <p className="text-white text-sm lg:text-base">Team Members</p>
          </div>

          {/* Tambahan kolom ke-4 biar grid-cols-4 pas (opsional) */}
          <div className="text-center">
            <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">
              <AnimatedNumber value={99} duration={2} />%
            </h2>
            <p className="text-white text-sm lg:text-base">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
