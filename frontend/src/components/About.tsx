function About() {
  return (
    <>
      <div className="w-full overflow-hidden">

        <div className="flex flex-col lg:flex-row px-6 lg:px-[min(3rem,5%)] py-10 lg:py-20 gap-10 items-center justify-center bg-white mb-10 lg:mb-32">
          

          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>


          <div className="w-full lg:w-1/2">
            <h2 className="text-primary font-bold mb-2 lg:m-4 text-lg">WHO WE ARE</h2>
            <h1 className="text-4xl lg:text-6xl font-black mb-4 lg:m-4 leading-tight">
              Building The Future of Tech, Today.
            </h1>
            <p className="text-slate-700 mb-4 lg:m-4 text-base lg:text-lg">
              Founded in 2015, NexGen Corp began with a simple idea: to make
              enterprise-grade technology accessible to everyone. We are a
              dedicated team of innovators, engineers, and strategists committed
              to delivering excellence.
            </p>
            <p className="text-slate-700 mb-6 lg:m-4 text-base lg:text-lg">
              Today, we serve thousands of clients worldwide, helping them
              navigate digital transformation with confidence and clarity.
            </p>
            <div className="flex gap-4 pt-2 lg:m-4">
              <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm">
                Our History
              </button>
            </div>
          </div>
        </div>


        <div className="bg-primary">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-white/20 py-10 px-6 lg:px-20">
            <div className="text-center">
              <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">10+</h2>
              <p className="text-white text-sm lg:text-base">Years of Experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">250+</h2>
              <p className="text-white text-sm lg:text-base">Projects Done</p>
            </div>
            <div className="text-center">
              <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">50+</h2>
              <p className="text-white text-sm lg:text-base">Team Members</p>
            </div>
            <div className="text-center">
              <h2 className="text-white text-3xl lg:text-5xl font-bold mb-2">12</h2>
              <p className="text-white text-sm lg:text-base">Global Offices</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 px-6 lg:px-32 py-12 lg:py-28 flex flex-col gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Vision & Mission</h1>
            <p className="text-slate-600 max-w-2xl">
              Driven purpose and defined by our commitment to integrity and
              innovation. We don't just build products; we build relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] bg-white p-6 shadow-sm hover:shadow-md transition-all hover:scale-105">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold leading-tight">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To become the global leader in sustainable technology
                  solutions that empower businesses to thrive in a digital
                  world.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] bg-white p-6 shadow-sm hover:shadow-md transition-all hover:scale-105">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">track_changes</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold leading-tight">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Delivering excellence through innovative products and
                  customer-centric services that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-[#dbdfe6] bg-white p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">star</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold leading-tight">Our Values</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integrity, Innovation, Quality, and Teamwork are at the heart
                  of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;