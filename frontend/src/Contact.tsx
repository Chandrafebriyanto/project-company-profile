import { motion } from "motion/react";

function Contact() {
  return (
    <>
      <div className="bg-background-light py-10">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          className="text-center justify-items-center md:py-18 py-7 px-5 w-max-[900px] mx-auto md:w-[500px] lg:w-[900px]"
        >
          <h1 className="font-black leading-none lg:my-5 md:my-4 my-3 lg:text-6xl md:text-4xl text-2xl text-slate-900">
            Let's Start a Conversation
          </h1>
          <p className="text-m text-slate-600 lg:text-xl md:text-base text-sm leading-none">
            Reach out via the form below or contact us directly. We are ready to
            work together
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 px-10">
          <div className="flex flex-col md:gap-5 gap-3">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="flex p-4 gap-3 bg-white border rounded-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  location_on
                </span>
              </div>
              <div>
                <h1 className="font-bold md:text-xl text-base">Our Office</h1>
                <p className="text-slate-600 md:text-sm text-xs my-1">
                  123 Business Rd, Tech City
                </p>
                <p className="text-slate-600 md:text-sm text-xs ">
                  Innovation District, CA 90210
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 1,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="flex p-4 gap-3 bg-white border rounded-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  mail
                </span>
              </div>
              <div>
                <h1 className="font-bold md:text-xl text-base">Email Us</h1>
                <p className="text-slate-600 md:text-sm text-xs my-1">
                  hello@company.com
                </p>
                <p className="text-slate-600 md:text-sm text-xs ">
                  support@company.com
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 1,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="flex p-4 gap-3 bg-white border rounded-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  call
                </span>
              </div>
              <div>
                <h1 className="font-bold md:text-xl text-base">
                  Phone Support
                </h1>
                <p className="text-slate-600 md:text-sm text-xs my-1">
                  +62 856-9546-1123
                </p>
                <p className="text-slate-600 md:text-sm text-xs ">
                  Mon-Fri, 8am - 4pm
                </p>
              </div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 1,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="bg-green-400 rounded-lg py-4 flex justify-center gap-2 items-center"
            >
              <span className="material-symbols-outlined text-2xl text-white">
                chat
              </span>
              <h1 className="font-semibold text-white">Chat on WhatsApp</h1>
            </motion.button>
            <motion.p
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="text-center text-slate-600 md:text-sm text-xs"
            >
              Typical response time: within 1 hour
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="bg-white p-6 md:p-8 rounded-lg border-2 border-slate-200  shadow-sm"
          >
            <form action="#" className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-900 ">
                    Name <span className="text-red-500">*</span>
                  </span>
                  <input
                    className="w-full h-12 rounded-lg border-2 border-slate-300  bg-white  px-4 text-base text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Jane Doe"
                    // required=""
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Email <span className="text-red-500">*</span>
                  </span>
                  <input
                    className="w-full h-12 rounded-lg border-2 border-slate-300  bg-white px-4 text-base text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="jane@example.com"
                    // required=""
                    type="email"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 mb-6">
                <span className="text-sm font-semibold text-slate-900">
                  Subject
                </span>
                <select className="w-full h-12 rounded-lg border-2 border-slate-300  bg-white px-4 text-base text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 mb-8">
                <span className="text-sm font-semibold text-slate-900">
                  Message <span className="text-red-500">*</span>
                </span>
                <textarea
                  className="w-full min-h-[160px] rounded-lg border-2 border-slate-300  bg-white p-4 text-base text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-y transition-all"
                  placeholder="Tell us about your project..."
                  // required=""
                ></textarea>
              </label>
              <button
                className="w-full md:w-auto min-w-[160px] h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg px-8 transition-colors flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[20px]">
                  send
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
