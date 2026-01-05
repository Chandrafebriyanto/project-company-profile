import { motion } from "motion/react";

function Visimisi() {
  return (
    <>
      <div className="bg-slate-50 px-6 lg:px-32 py-12 lg:py-28 flex flex-col gap-12">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold mb-2"
          >
            Vision & Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl"
          >
            Driven purpose and defined by our commitment to integrity and
            innovation. We don't just build products; we build relationships.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become the global leader in sustainable technology solutions
                that empower businesses to thrive in a digital world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">track_changes</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivering excellence through innovative products and
                customer-centric services that solve real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5}}
            className="group px-6 py-7 border-2 border-slate-300 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined">star</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight">Our Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrity, Innovation, Quality, and Teamwork are at the heart of
                everything we do.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Visimisi;
