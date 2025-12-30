function About() {
  return (
    <>
      <div>
        <div className="flex px-[min(3rem,5%)] py-20 gap-10 lg:flex-row flex-col items-center justify-center bg-white mb-32">
          <div className="aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg @[864px]:w-1/2 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9iXyr8Ia_izEVQR0cnu3KCiIkNTyCr3ocQghxsuVJaf1LRiRMV2m_ppBPT6CO-K7EYHcxaZE5fQUmz-qCapy5ehPB3OaweavXljN7GqGH8HTP4HKpyNJOHHASBH9MYrpE0Ztj0_vwecwV5QO7F4ANcgV4KYTthA7cDUD4gPv37KbXndXwwwpPbtS87pU39JF2imTSd9OnZOsaOC4PNPpsI0ilduFCo6mGL_4Tuf-4yy0tjGqQca7hEPaVaD9ruMDxI9JYiRtmhEnA"
              alt=""
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-primary font-bold m-4 text-l">WHO WHE ARE</h2>
            <h1 className="text-6xl font-black m-4">
              Building The Future of Tech, Today.
            </h1>
            <p className="text-slate-700 m-4 text-l">
              Founded in 2015, NexGen Corp began with a simple idea: to make
              enterprise-grade technology accessible to everyone. We are a
              dedicated team of innovators, engineers, and strategists committed
              to delivering excellence.{" "}
            </p>
            <p className="text-slate-700 m-4 text-l">
              Today, we serve thousands of clients worldwide, helping them
              navigate digital transformation with confidence and clarity.
            </p>
            <div className="flex gap-4 pt-2 m-4">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-sm">
                <span className="truncate">Our History</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-primary">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20 py-10 px-20">
                <div className="text-center">
                    <h2 className="text-white text-5xl font-bold mb-2">10+</h2>
                    <p className="text-white">Years of Experience</p>
                </div>
                <div className="text-center">
                    <h2 className="text-white text-5xl font-bold mb-2">250+</h2>
                    <p className="text-white">Project Done</p>
                </div>
                <div className="text-center">
                    <h2 className="text-white text-5xl font-bold mb-2">50+</h2>
                    <p className="text-white">Team Members</p>
                </div>
                <div className="text-center">
                    <h2 className="text-white text-5xl font-bold mb-2">12</h2>
                    <p className="text-white">Global Offices</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
