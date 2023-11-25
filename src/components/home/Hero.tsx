import phone from "@assets/home/desktop/illustration-phone-mockup.svg";
import bgCircle from "@assets/shared/desktop/bg-pattern-circle.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const container = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.3 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="relative z-10 overflow-hidden bg-[#EDF3F8] pb-20 pt-[6.875rem] max-xl:px-6">
      <div className="flex flex-col items-center justify-center xl:mx-auto xl:w-[1110px] xl:flex-row-reverse xl:justify-between">
        <motion.img
          src={phone}
          alt="mobile phone mockup"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="ml-[50px] h-[430px] w-[280px] xl:h-[600px] xl:w-[350px]"
        />

        <motion.div
          className="mt-[-50px] flex flex-col gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="font-dm max-w-[573px] text-center text-[2rem] leading-[36px] tracking-[-0.246px] md:text-[48px] md:leading-[56px] xl:text-left xl:text-[4.5rem] xl:leading-[72px]"
          >
            Start building with our APIs for absolutely free.
          </motion.h1>
          <motion.div
            variants={item}
            className="font-publicSans flex flex-col gap-4 text-[0.9375rem] md:relative md:flex-row md:rounded-3xl md:shadow-md"
          >
            <input
              type="email"
              placeholder="Enter email address"
              className="rounded-3xl px-7 py-[0.875rem] outline-none md:flex-1 md:pr-[180px]"
            />
            <button className="bg-dark-pink-##BA4270 rounded-3xl py-[0.875rem] font-bold text-[#FBFCFE] md:absolute md:right-0 md:w-[173px]">
              Schedule a Demo
            </button>
          </motion.div>
          <motion.span
            variants={item}
            className="font-publicSans text-lightsanjuan-blue-#6C8294 text-center text-[0.9375rem] xl:text-left"
          >
            Have any questions?{" "}
            <Link to="#" className="font-bold">
              Contact Us
            </Link>
          </motion.span>
        </motion.div>
      </div>
      <motion.img
        src={bgCircle}
        alt="grey circle"
        initial={{ scale: 0 }}
        animate={{ scale: 1.25 }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-[-200px] -z-10 scale-125 md:top-[-570px] xl:left-[800px] xl:top-[-200px] xl:scale-100"
      />
    </section>
  );
};

export default Hero;
