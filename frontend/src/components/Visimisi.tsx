import { motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";

function Visimisi() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const {t} = useTranslation()

  return (
    <>
      <div className="bg-slate-50 px-6 lg:px-32 py-12 lg:py-28 flex flex-col gap-12">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold mb-2"
          >
            {t("about.items.tittle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl"
          >
            {t("about.items.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight">{t("about.items.vision_title")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("about.items.vision_desc")}
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">track_changes</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight">{t("about.items.mission_title")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("about.items.mission_desc")}
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">star</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight">{t("about.items.value_tittle")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("about.items.value_desc")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Visimisi;
