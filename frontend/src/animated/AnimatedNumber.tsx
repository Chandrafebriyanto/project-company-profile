// import library yang digunakan
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

// masukan nilai yang ingin diberi animasi
<AnimatedNumber value={10} duration={2} />;

export default AnimatedNumber;