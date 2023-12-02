import people from "@assets/about/desktop/image-team-members.jpg";
import circle from "@assets/shared/desktop/bg-pattern-circle.svg";
import { motion } from "framer-motion";

const People = () => {
  return (
    <section className="relative mb-12 md:mb-16 xl:mx-auto xl:w-[1440px]">
      <img
        src={people}
        alt="people sitting on a desk"
        className="object-cover"
      />
      <motion.img
        src={circle}
        alt="circle"
        className="absolute top-0 -z-10 max-xl:hidden xl:left-[-500px] xl:top-[-150px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default People;
