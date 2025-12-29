function Navbar() {
  return (
    <>
      <header className="w-full bg-white flex items-center justify-between py-4 px-[min(3rem,5%)] border-b sticky top-0">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-white bg-blue-700 rounded-md p-2">
            verified
          </span>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">
            NexGen Corp
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-10">
            <a
              href="#"
              className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-100 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300 ease-in-out"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-lg bg-blue-700 rounded-lg text-white px-4 py-2 duration-300 ease-in-out font-medium hover:bg-blue-800 hover:scale-105"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
