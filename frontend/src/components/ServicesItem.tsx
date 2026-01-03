import { Link } from "react-router-dom";

function ServicesItem() {
  return (
    <>
      <div className="bg-white">
        <div className="grid grid-cols-1 gap-8 px-[min(3rem,5%)] py-20 md:grid-cols-3 sm:grid-cols-2">
          {/* Service Item 1 */}
          <div className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                design_services
              </span>
            </div>
            <h1 className="font-bold text-xl">Brand Identity</h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              Logo design, typography, and visual guidelines to establish your
              brand's unique voice in the market.
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/brand-identity"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                Learn more <span>&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">code</span>
            </div>
            <h1 className="font-bold text-xl">Web Development</h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              Responsive websites and custom web applications built for high
              performance and scalability.
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/web-development"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                Learn more <span>&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                campaign
              </span>
            </div>
            <h1 className="font-bold text-xl">Digital Marketing</h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              SEO, social media strategy, and paid advertising campaigns
              designed to grow your audience.
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/digital-marketing"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                Learn more <span>&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                trending_up
              </span>
            </div>
            <h1 className="font-bold text-xl">Business Strategy</h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              Market analysis and growth consulting to guide your business
              forward with data-driven decisions.
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/business-strategy"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                Learn more <span>&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Service Item 5 */}
          <div className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">cloud</span>
            </div>
            <h1 className="font-bold text-xl">Cloud Solutions</h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              Secure cloud infrastructure migration and management to ensure
              your data is always accessible.
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/cloud-solutions"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                Learn more <span>&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Service Item 6 */}
          <div className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                analytics
              </span>
            </div>
            <h1 className="font-bold text-xl">Analytics &amp; AI</h1>
            <p className="text-sm text-slate-600 pt-3 pb-5">
              Harness the power of artificial intelligence and advanced
              analytics to optimize operations.
            </p>
            <div className="group-hover:translate-x-2 transition-all">
              <Link
                to="/services/analytics-ai"
                className="text-primary text-sm font-bold cursor-pointer"
              >
                Learn more <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesItem;
