import { motion, type Variants } from "motion/react";

function Testimonial() {
  const cardMotionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.3, 
      } as const,
    }),
    hover: {
      y: -10,
      transition: {ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="flex justify-between px-[min(3rem,5%)] py-10 items-center text-center">
        <h1 className="font-bold text-xl md:text-2xl">What Our Clients Say</h1>
      </div>

      <div className="flex gap-6 overflow-auto px-5 lg:px-10 pb-10 snap-x scrollbar-hide">
        {/* Card 1 */}
        <motion.div
          custom={0} 
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardMotionVariants}
          className="group snap-start min-w-[320px] md:min-w-[380px] flex-1 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between gap-6 relative overflow-hidden hover:shadow-xl"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 text-primary">
            <span className="material-symbols-outlined text-8xl leading-none">
              format_quote
            </span>
          </div>
          <div className="relative z-10">
            <div className="flex text-yellow-400 mb-4">
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              "The team transformed our digital presence completely. Their
              attention to detail and commitment to quality is unmatched in the
              industry."
            </p>
          </div>
          <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-100">
            <div
              className="w-12 h-12 rounded-full bg-cover bg-center"
              data-alt="Portrait of John Doe smiling"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwrSVIKwoqf9I-cKXV89nAyPGRdgpwVSDz4TgRrBpdrdKj1C1RXzIYLK70iKlv_UGfFyKxROWCRtfdzpRkBIulnIswM1cucb5YyA4a9TSZ_urDE4LfFjK33fQhiqPnXmmeA0CHoUMEMpwlhiYS4LRp1npgoZeLPrr-i2rmhoQqNjhHH_npk7j6e2Wd6Epe9gnFs35wE94bMD8l34qi6mDut3rBcKegEgm2HjCxomvva9jg4fD_zUB9V-xdlkwkBrIecRyNufDT202"
                alt=""
              />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm">John Doe</p>
              <p className="text-slate-500 text-xs">CEO at TechCorp</p>
            </div>
            <div className="ml-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-opacity">
              <div
                className="h-16 w-16 bg-contain bg-no-repeat bg-right"
                data-alt="Small logo of TechCorp"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN5aMpQRvGnElG2dDV1hVkBtBpoTR4SnP4uhhUX5HYoyiJgVpdc1AAaGbhxJ9qHGPOQMW88M7YPpTAGPEMRY2ByB4jjpmSRzBQcs-A_8wk2cYIZIDi8sP6gLDrQsSV01hTF9QsM12MDEikX6jNuju-rQrPR4HCghaSidFBRMwiXaZq23vmUUZ-uUz0UKrDh70MpGoawqXPeNTNcqa_aSKbU8mPzqaOn7LmCMJQ0ahyoWJHmqREdWyQw_74ma5tD4jr5aRi71zzs2R_"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          custom={1} 
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardMotionVariants}
          className="group snap-start min-w-[320px] md:min-w-[380px] flex-1 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between gap-6 relative overflow-hidden hover:shadow-xl"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 text-primary">
            <span className="material-symbols-outlined text-8xl leading-none">
              format_quote
            </span>
          </div>
          <div className="relative z-10">
            <div className="flex text-yellow-400 mb-4">
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              "Exceptional quality and dedication to the project goals. They
              delivered on time and exceeded all our expectations."
            </p>
          </div>
          <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-100">
            <div
              className="w-12 h-12 rounded-full bg-cover bg-center"
              data-alt="Portrait of Jane Smith looking professional"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt282s9qQWprSVfRCdvd9F-AHYblYFlx2mTls_WW7QaM9YxU3dU07wGB0V1WqRbL17jECqvSUSWoGqqBRyOTeNDo-k2bSbxKLk-IBLEkgNrE335GEIUbujAfVZbNuU7ew3iu7JgxVR5zcGAegwdhvGLIDNvNy_0SMsXBYK2FfOQXNfccnbHBNrhlGz_I27xhtPQxBJ5eFePKheGN7IS9N_JuT3FX0NdBR7t-2RNirfxaGy0pPgOEFSkQvm0OT21-7yK5bGqe7QKL6M"
                alt=""
              />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm">Jane Smith</p>
              <p className="text-slate-500 text-xs">Director at Innovate</p>
            </div>
            <div className="ml-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-opacity">
              <div
                className="h-16 w-16 bg-contain bg-no-repeat bg-right"
                data-alt="Small logo of Innovate"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGzhEwbgWAjgOWNSKNihrEr6Hn8LhU2ZchP5RRyFDXFuB3JmkqvLelh4r_1xCBWZsPXpoiAU5B-uxcUE0tevYjBu8SJ5c9M_Ht5lCGsLURIuh4P18vCcfY0fe-_XoH5XI2-8x6cwKrqlFdOS_terGZ5Hz2jmMZPg94yaFQ-B4ZqjmAKA0yVSXkIf5zUW_946Qw3xCCMot-mFahC59Mb0SG5VbhZArGQPOYp7lHV6tXzmThrifw2LlTY81H_Q2UhXfY95XYNDYNU8YJ"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3*/}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardMotionVariants}
          className="group snap-start min-w-[320px] md:min-w-[380px] flex-1 bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between gap-6 relative overflow-hidden hover:shadow-xl"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 text-primary">
            <span className="material-symbols-outlined text-8xl leading-none">
              format_quote
            </span>
          </div>
          <div className="relative z-10">
            <div className="flex text-yellow-400 mb-4">
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
              <span className="material-symbols-outlined text-sm fill-current">star</span>
            </div>
            <p className="text-slate-700 :text-slate-300 text-lg leading-relaxed font-medium">
              "A trustworthy partner that consistently delivers top-tier
              results. We highly recommend their services to any enterprise."
            </p>
          </div>
          <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-slate-100">
            <div
              className="w-12 h-12 rounded-full bg-cover bg-center"
              data-alt="Portrait of Mike Ross looking confident"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDICuG4YZjUf6SgBFCryj9I3_UggfSg6Gn0AceOGc7GA-H8sLEPF2Rq76HIk-NaWx57JrbHLdUWoPY9a4Inq04RnzV_VKkT5vnjeSqUAuN3Sppi07MmBqQZ6v1wudrh2FFphpIgXMOGMt-9_qzQoZDnzNprKoP1KqJPYRSfSwMDU8MwQ_JdsvWVqqr3oSBFpBiQ6qIzHSDWPBSRmjjNJNlpB6-T7kzhstOWxDcWl6U2-CIpC30zx5WJI2TU2lwdMvpt9ZpccLFjIx6n"
                alt=""
              />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm">Mike Ross</p>
              <p className="text-slate-500 text-xs">Founder at StartUp</p>
            </div>
            <div className="ml-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-opacity">
              <div
                className="h-16 w-16 bg-contain bg-no-repeat bg-right"
                data-alt="Small logo of StartUp"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW5Ypnb_40fwltLGicAuSvF1aUniLmNFeokq1AZTl5LUgh1rN3tDYlt2I3e9ehAxM0PIQI0ZUysFi1gogEcnN0TUCscZwBkHJF7t2CDcRGf3OJiAf6Youdus9EHAB_Blhy-HiXC-mmafyzf5ID0Sx3t-dEjgHBHSPOkOTjtlut0S_4kLVx6NMjlKbDbiAKmONkK7akgrYcx1DzaxMMPTzoJZNYrgt4z6KkI9v1ImHsu8_VK28gs1Qiw3xkcGWIIHubCbEDhImeuia2"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Testimonial;