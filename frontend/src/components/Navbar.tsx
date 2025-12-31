import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
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
          <Link to="/" className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300">Home</Link>
          <Link to="/about" className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300">About</Link>
          <Link to="/services" className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300">Services</Link>
          <Link to="/contact" className="text-slate-900 hover:text-blue-700 text-sm font-medium duration-300">Contact</Link>
          <Link to="#" className="text-sm bg-blue-700 rounded-lg text-white px-4 py-2 font-medium hover:bg-blue-800 transition-colors">Get Started</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-900 focus:outline-none transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} 
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
          <Link 
            to="/" 
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="text-slate-900 hover:text-blue-700 font-medium hover:pl-2 duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="#" 
            className="bg-blue-700 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;