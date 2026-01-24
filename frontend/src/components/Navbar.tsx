import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between py-4 px-[min(3rem,5%)] bg-white z-50 relative">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-white bg-blue-700 rounded-md p-2">
            verified
          </span>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">
            NexGen Corp
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300"
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/about"
            className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300"
          >
            {t("navbar.about")}
          </Link>
          <Link
            to="/services"
            className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300"
          >
            {t("navbar.services")}
          </Link>
          <Link
            to="/portfolio"
            className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300"
          >
            {t("navbar.portfolio")}
          </Link>

          <Link
            to="/contact"
            className="text-sm bg-blue-700 rounded-lg text-white px-4 py-2 font-medium hover:bg-blue-800 transition-colors"
          >
            {t("navbar.cta")}
          </Link>
          
          <button
            onClick={changeLanguage}
            className="text-sm font-bold text-slate-600 hover:text-blue-700 border px-2 py-1 rounded hover:bg-slate-50 transition-colors"
          >
            {i18n.language === "en" ? "ID" : "EN"}
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-900 focus:outline-none transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN DENGAN TRANSISI */}
      <div
        className={`md:hidden absolute w-full bg-white border-b shadow-lg overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          <button
            onClick={changeLanguage}
            className="text-sm font-bold text-slate-600 border px-2 py-1 rounded"
          >
            {i18n.language === "en" ? "ID" : "EN"}
          </button>
          <Link
            to="/"
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/about"
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.about")}
          </Link>
          <Link
            to="/services"
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.services")}
          </Link>
          <Link
            to="/portfolio"
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.portfolio")}
          </Link>
          <Link
            to="/contact"
            className="bg-blue-700 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            {t("navbar.cta")}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
