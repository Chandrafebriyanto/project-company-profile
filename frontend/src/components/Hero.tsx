function Hero() {
  return (
    <section className="h-full items-center flex my-20 px-[min(3rem,5%)] gap-10 lg:flex-row flex-col">
      <div>
        <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full border border-slate-200 w-max mb-4">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          <p className="text-primary text-sm font-bold">
            {" "}
            Top Rated Agency 2025
          </p>
        </div>
        <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Strategic Branding for{" "}
          <span className="text-primary">Modern Business</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0 mx-auto">
          We help forward-thinking companies define their identity and connect
          with their audience through innovative design, digital strategy, and
          creative storytelling.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
          <button className="group relative flex h-12 min-w-[160px] items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95">
            <span>Hubungi Kami</span>
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
          <button className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-8 text-base font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95">
            <span className="material-symbols-outlined text-lg text-primary">
              play_circle
            </span>
            <span>Watch Video</span>
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-slate-200 pt-8 lg:flex-row lg:items-center">
          <div className="flex -space-x-3">
            <img
              alt="Portrait of a satisfied client"
              className="h-10 w-10 rounded-full border-2 border-white object-cover "
              data-alt="Portrait of a satisfied client"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcmcLC7c07fsPSkiS4Z_W_VADaQS4_cmubCw1mcMVmIQXaKDeAdH1Ec7zcmkNX0e4XjMpDSG6Ku7zttT5xJSdNMUM_FH0sbK9S5OPE0Tifs8iKUcXn4x8NVhGaoehYKOSaU1_XfoN3VrGEe-36Mo28TKC5uKs7PHxOIsd6dcgue9a_OPJgeVQy8-fGEuTvaAGQiEHrF3LVZmWBeG2lUWkOSDtAEp3oA84B955KY7nf-1ev3dB78iLnKweak5tWtLKY8Q_fTzPKb-JF"
            />
            <img
              alt="Portrait of a team member"
              className="h-10 w-10 rounded-full border-2 border-white object-cover"
              data-alt="Portrait of a team member"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCALxPEM4_cnAGVSxTjkt_X29RTFr5CuSPIAaOGSnJRmK7OUb3Y8NSPEP3TOCrDqHJRvpXk509U0ccEyMU2ZN5SxYuADM9LAGN6QqhFS4dcJST_Qd0yU5iPgVM69UaN2Zi3Q5ziJHEXSn4lIYdM1d40kLVhumo7-TwSdSlcCH8Eyxlz50tB2etvs4Ap6Dfh8eHhoe4-45TIsFZjcYgqwZwpAX9Rbk_7kL6eu1TcGq1cI5taP2B1hR_5N40lcLhsBsvGy7s0bI3rm06K"
            />
            <img
              alt="Portrait of a happy customer"
              className="h-10 w-10 rounded-full border-2 border-white object-cover"
              data-alt="Portrait of a happy customer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArtGa8HV7GtCYa0ydzoVoarmcbSuWJVm418ZZ7RmIF1XKCvcHUS7QcQC_Vp9I8mdtGY67ReALfr6Qu1Y4MQrs1FGeg1ETS3SxgOt4uGO3VyCUHTUAwZ6Ut9L330mRJmUiiO4RmgOW-30LvY_XAuuTP0CEQxhvPmybA63D_gNzx2mStE6kWhRpGaXhFBmuDumJgwSddQ8V1xSPfnB30snpRpAdx4ZXOAjaTOba8m_LrSRhTsC7P4Cq-ErUWvyHoVL69uLhzzOXxLYH1"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-600">
              +500
            </div>
          </div>
          <div className="text-center text-sm font-medium text-slate-600 lg:text-left">
            Trusted by{" "}
            <span className="font-bold text-slate-900 ">500+ companies</span>{" "}
            worldwide.
          </div>
        </div>
      </div>

      <div className="relative order-1 lg:order-2 w-[100%] lg:w-1/2 flex-shrink-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-slate-200/50 bg-slate-200">
          <img
            alt="Modern office team collaborating on a branding project"
            className="h-full w-full object-cover"
            data-alt="Modern office team collaborating on a branding project"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4EjlLOs_es_drMFFXXAHEO1ULvY-cgVsS3sTkP5-76YoM3-QExB84jXjgb2lYIP7EKjmKexG96awILy1r-hUjfuAKq0hIVevDEcmeIh8qzlA39q8mVSNN4_ck4wBXrntiydDf7-xNQYpA8RxOiHHJNs2n7YeiUGIfvG5PpdiPhLGxnTlp_ckjcMBMWR4cT9mbvVMoJaxkGXFeJU2AsQVAdRoMltOPDZKvNUHY1Uvv6qjqFlIY3P5Ywpfz7p1sfZmHMzxqpqJTx5vd"
          />
          <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto lg:w-64 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm ring-1 ring-slate-900/5 hover:scale-110 duration-300 ease-in-out">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 ">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Growth Rate
                </p>
                <p className="text-lg font-bold text-slate-900">+124%</p>
              </div>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-100">
              <div className="h-1.5 w-[75%] rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
