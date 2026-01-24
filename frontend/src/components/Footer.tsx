import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation();
  const location = useLocation();
  const bgColor =
    location.pathname === "/about" ? "bg-background-light" : "bg-white";

  return (
    <>
      <div
        className={`${bgColor} mt-auto border-t transition-colors duration-300`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-[min(3rem,5%)] py-10 gap-10 lg:gap-10">
          {/* KOLOM 1: Logo & Deskripsi */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-white bg-blue-700 rounded-md p-2">
                verified
              </span>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                NexGen Corp
              </h1>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t("footer.tittle")}
            </p>
          </div>

          {/* KOLOM 2: Company Links */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg text-slate-900 mb-2">{t("footer.company")}</h1>
            <Link
              to="/"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("navbar.home")}
            </Link>
            <Link
              to="/about"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("navbar.about")}
            </Link>
            <Link
              to="/services"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("navbar.services")}
            </Link>
            <Link
              to="/portfolio"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("navbar.portfolio")}
            </Link>
          </div>

          {/* KOLOM 3: Services Links */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg text-slate-900 mb-2">{t("footer.services")}</h1>
            <Link
              to="/services/brand-identity"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("services.items.brand.title")}
            </Link>
            <Link
              to="/services/web-development"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("services.items.web.title")}
            </Link>
            <Link
              to="/services/digital-marketing"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("services.items.marketing.title")}
            </Link>
            <Link
              to="/services/business-strategy"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("services.items.strategy.title")}
            </Link>
            <Link
              to="/services/cloud-solutions"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("services.items.cloud.title")}
            </Link>
            <Link
              to="/services/analytics-ai"
              className="text-slate-500 hover:text-blue-700 text-sm transition-colors"
            >
              {t("services.items.brand.title")}
            </Link>
          </div>

          {/* KOLOM 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-lg text-slate-900 mb-2">
                {t("footer.update")}
              </h1>
              <p className="text-slate-500 text-sm">
                {t("footer.update_desc")}
              </p>
            </div>
            <form action="" className="flex gap-2">
              <input
                type="email"
                className="w-full p-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-700 text-sm"
                placeholder="Email Address"
              />
              <button
                type="button"
                className="bg-primary text-white p-2 rounded-lg hover:bg-blue-700 transition-all hover:shadow-md flex items-center justify-center min-w-[44px]"
              >
                &#8594;
              </button>
            </form>
          </div>
        </div>

        <hr className="border-slate-200" />
        <div className="text-center text-slate-500 text-sm py-6 px-4">
          &copy; {new Date().getFullYear()} {t("footer.mark")}
        </div>
      </div>
    </>
  );
}

export default Footer;
