import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function ProjectItems() {
  const {t} = useTranslation();
  return (
    <>
      <div className="bg-background-light py-10">
        <div>
          <ul className="flex justify-center md:gap-7 gap-3 px-5 mb-10 md:text-base text-xs flex-wrap text-slate-600 font-semibold cursor-pointer">
            <div className="border-2 active:border-primary rounded-full active:shadow-primary/40 active:shadow-md transition-all">
              <li className="py-2 px-5 rounded-full active:bg-primary bg-white active:text-white border-white border-2 transition-all">
                {t("portfolio.all_projects")}
              </li>
            </div>
            <div className="border-2 active:border-primary rounded-full active:shadow-primary/40 active:shadow-md transition-all">
              <li className="py-2 px-5 rounded-full active:bg-primary bg-white active:text-white border-white border-2 transition-all">
                {t("services.items.web.title")}
              </li>
            </div>
            <div className="border-2 active:border-primary rounded-full active:shadow-primary/40 active:shadow-md transition-all">
              <li className="py-2 px-5 rounded-full active:bg-primary bg-white active:text-white border-white border-2 transition-all">
                {t("services.items.analytics.title")}
              </li>
            </div>
            <div className="border-2 active:border-primary rounded-full active:shadow-primary/40 active:shadow-md transition-all">
              <li className="py-2 px-5 rounded-full active:bg-primary bg-white active:text-white border-white border-2 transition-all">
                {t("services.items.brand.title")}
              </li>
            </div>
            <div className="border-2 active:border-primary rounded-full active:shadow-primary/40 active:shadow-md transition-all">
              <li className="py-2 px-5 rounded-full active:bg-primary bg-white active:text-white border-white border-2 transition-all">
                {t("services.items.marketing.title")}
              </li>
            </div>
            <div className="border-2 active:border-primary rounded-full active:shadow-primary/40 active:shadow-md transition-all">
              <li className="py-2 px-5 rounded-full active:bg-primary bg-white active:text-white border-white border-2 transition-all">
                {t("services.items.strategy.title")}
              </li>
            </div>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 md:px-20 px-5">
          {/* project 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="group aspect-[4/3] w-full rounded-xl bg-slate-100  relative overflow-hidden border border-slate-200 ">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-primary/20 group-hover:text-primary/30 transition-colors">
                <span className="material-symbols-outlined text-6xl">
                  design_services
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-primary text-sm">{t("portfolio.items.project1.title")}</h1>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                arrow_outward
              </span>
            </div>
            <h1 className="font-bold text-xl">{t("portfolio.items.project1.subtitle")}</h1>
            <p className="text-sm text-slate-600">
              {t("portfolio.items.project1.desc")}
            </p>
          </motion.div>
          {/* project 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2}}
            className="flex flex-col gap-2"
          >
            <div className="group aspect-[4/3] w-full rounded-xl bg-slate-100  relative overflow-hidden border border-slate-200 ">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors">
                <span className="material-symbols-outlined text-6xl">
                  devices
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-primary text-sm">{t("portfolio.items.project2.title")}</h1>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                arrow_outward
              </span>
            </div>
            <h1 className="font-bold text-xl">{t("portfolio.items.project2.subtitle")}</h1>
            <p className="text-sm text-slate-600">
              {t("portfolio.items.project2.desc")}
            </p>
          </motion.div>
          {/* project 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4}}
            className="flex flex-col gap-2"
          >
            <div className="group aspect-[4/3] w-full rounded-xl bg-slate-100  relative overflow-hidden border border-slate-200 ">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-fuchsia-100 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-purple-500/20 group-hover:text-purple-500/30 transition-colors">
                <span className="material-symbols-outlined text-6xl">
                  shopping_cart
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-primary text-sm">{t("portfolio.items.project3.title")}</h1>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                arrow_outward
              </span>
            </div>
            <h1 className="font-bold text-xl">{t("portfolio.items.project3.subtitle")}</h1>
            <p className="text-sm text-slate-600">
              {t("portfolio.items.project3.desc")}
            </p>
          </motion.div>
          {/* project 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5}}
            className="flex flex-col gap-2"
          >
            <div className="group aspect-[4/3] w-full rounded-xl bg-slate-100  relative overflow-hidden border border-slate-200 ">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-100 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-orange-500/20 group-hover:text-orange-500/30 transition-colors">
                <span className="material-symbols-outlined text-6xl">
                  campaign
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-primary text-sm">{t("portfolio.items.project3.title")}</h1>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                arrow_outward
              </span>
            </div>
            <h1 className="font-bold text-xl">{t("portfolio.items.project3.subtitle")}</h1>
            <p className="text-sm text-slate-600">
              {t("portfolio.items.project3.desc")}
            </p>
          </motion.div>
          {/* project 5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2}}
            className="flex flex-col gap-2"
          >
            <div className="group aspect-[4/3] w-full rounded-xl bg-slate-100  relative overflow-hidden border border-slate-200 ">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-sky-100 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-cyan-500/20 group-hover:text-cyan-500/30 transition-colors">
                <span className="material-symbols-outlined text-6xl">
                  cloud
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-primary text-sm">{t("portfolio.items.project4.title")}</h1>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                arrow_outward
              </span>
            </div>
            <h1 className="font-bold text-xl">{t("portfolio.items.project4.subtitle")}</h1>
            <p className="text-sm text-slate-600">
              {t("portfolio.items.project4.desc")}
            </p>
          </motion.div>
          {/* project 6 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4}}
            className="flex flex-col gap-2"
          >
            <div className="group aspect-[4/3] w-full rounded-xl bg-slate-100  relative overflow-hidden border border-slate-200 ">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-100 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-rose-500/20 group-hover:text-rose-500/30 transition-colors">
                <span className="material-symbols-outlined text-6xl">
                  movie
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-primary text-sm">{t("portfolio.items.project6.title")}</h1>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                arrow_outward
              </span>
            </div>
            <h1 className="font-bold text-xl">{t("portfolio.items.project6.subtitle")}</h1>
            <p className="text-sm text-slate-600">
              {t("portfolio.items.project6.desc")}
            </p>
          </motion.div>
        </div>

        <div className="mt-10 items-center justify-center flex">
          <button className="group relative flex h-12 min-w-[160px] items-center justify-center gap-2 overflow-hidden rounded-lg bg-background-dark px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-black/80 hover:shadow-black-500/40 active:scale-95">
            <span>{t("portfolio.view_project")}</span>
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectItems;
