import { motion } from "motion/react";

function HeroAbout() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-6 lg:px-[min(3rem,5%)] py-10 lg:py-20 gap-10 items-center justify-center bg-white mb-10 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          className="w-full lg:w-1/2 aspect-[4/3] rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-primary font-bold mb-2 lg:m-4 text-lg"
          >
            WHO WE ARE
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="text-4xl lg:text-6xl font-black mb-4 lg:m-4 leading-tight"
          >
            Building The Future of Tech, Today.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="text-slate-700 mb-4 lg:m-4 text-base lg:text-lg"
          >
            Founded in 2015, NexGen Corp began with a simple idea: to make
            enterprise-grade technology accessible to everyone. We are a
            dedicated team of innovators, engineers, and strategists committed
            to delivering excellence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.6,
              ease: "easeInOut",
            }}
            className="text-slate-700 mb-6 lg:m-4 text-base lg:text-lg"
          >
            Today, we serve thousands of clients worldwide, helping them
            navigate digital transformation with confidence and clarity.
          </motion.p>
          <div className="flex gap-4 pt-2 lg:m-4">
            <motion.button
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.6,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Our History
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroAbout;
