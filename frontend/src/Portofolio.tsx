import ProjectItems from "./components/ProjectItems";

function Portofolio() {
  return (
    <>
      <div>
        <div className="text-center justify-items-center md:py-20 py-7 px-5 w-max-[900px] mx-auto md:w-[500px] lg:w-[900px]">
          <p className="text-primary font-bold lg:text-xl md:text-md text-sm">
            OUR PORTOFOLIO 
          </p>

          <h1 className="font-black leading-none lg:my-5 md:my-4 my-3 lg:text-6xl md:text-4xl text-3xl text-slate-900">
            Selected & Digital Innovations
          </h1>
          <p className="text-m text-slate-600 lg:text-xl md:text-base text-sm">
            We leverage cutting-edge technology and creative strategy to drive
            growth and efficiency for your organization
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 md:px-20 px-24 mb-10">
          <div className="border border-slate-200 md:py-7 md:px-12 py-3 text-center rounded-xl shadow-md">
            <span className="material-symbols-outlined text-primary text-4xl mb-3">
              calendar_month
            </span>
            <h1 className="text-primary font-bold md:text-4xl text-2xl m-1">
              10+
            </h1>
            <p className="font-semibold text-slate-600 md:font-xl text-sm">
              Years of Experience
            </p>
          </div>
          <div className="border border-slate-200 md:py-7 md:px-12 py-3 text-center rounded-xl shadow-md">
            <span className="material-symbols-outlined text-primary text-4xl mb-3">
              deployed_code
            </span>
            <h1 className="text-primary font-bold md:text-4xl text-2xl mb-1">
              500+
            </h1>
            <p className="font-semibold text-slate-600 md:font-xl text-sm">
              Project Delivered
            </p>
          </div>
          <div className="border border-slate-200 md:py-7 md:px-12 py-3 text-center rounded-xl shadow-md">
            <span className="material-symbols-outlined text-primary text-4xl mb-3">
              trophy
            </span>
            <h1 className="text-primary font-bold md:text-4xl text-2xl mb-1">
              25
            </h1>
            <p className="font-semibold text-slate-600 md:font-xl text-sm text-">
              Global Awards
            </p>
          </div>
        </div>
      </div>
      {/* Project Items */}
      <ProjectItems />
    </>
  );
}

export default Portofolio;
