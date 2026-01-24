import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function ServicesItem() {
  // animated service items
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white">
        <div className="grid grid-cols-1 gap-8 px-[min(3rem,5%)] py-20 md:grid-cols-3 sm:grid-cols-2">
          {/* Service Item 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                design_services
              </span>
            </div>
            <h1 className="font-bold text-xl">
              {t("services.items.brand.title")}
            </h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              {t("services.items.brand.desc")}
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/brand-identity"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                {t("services.items.learn_more")} <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>

          {/* Service Item 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">code</span>
            </div>
            <h1 className="font-bold text-xl">
              {t("services.items.web.title")}
            </h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              {t("services.items.web.desc")}
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/web-development"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                {t("services.items.learn_more")} <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>

          {/* Service Item 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                campaign
              </span>
            </div>
            <h1 className="font-bold text-xl">
              {t("services.items.marketing.title")}
            </h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              {t("services.items.marketing.desc")}
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/digital-marketing"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                {t("services.items.learn_more")} <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>

          {/* Service Item 4 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                trending_up
              </span>
            </div>
            <h1 className="font-bold text-xl">
              {t("services.items.strategy.title")}
            </h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              {t("services.items.strategy.desc")}
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/business-strategy"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                {t("services.items.learn_more")} <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>

          {/* Service Item 5 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">cloud</span>
            </div>
            <h1 className="font-bold text-xl">
              {t("services.items.cloud.title")}
            </h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              {t("services.items.cloud.desc")}
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/cloud-solutions"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                {t("services.items.learn_more")} <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>

          {/* Service Item 6 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                analytics
              </span>
            </div>
            <h1 className="font-bold text-xl">
              {t("services.items.analytics.title")}
            </h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              {t("services.items.analytics.desc")}
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/analytics-ai"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                {t("services.items.learn_more")} <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ServicesItem;
