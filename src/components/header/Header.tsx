import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import cirlce from "@assets/shared/desktop/bg-pattern-circle.svg";
import logo from "@assets/shared/desktop/logo.svg";
import menuIc from "@assets/shared/mobile/menu.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <header
      className={`fixed top-0 z-[999] flex w-full justify-center transition-all duration-500 ${
        isScrolled ? "bg-[#FBFCFE] shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="relative w-full px-6 py-10 md:px-10 xl:mx-auto xl:w-[1110px] xl:px-0">
        <div className="flex items-center justify-between overflow-hidden md:gap-16">
          <Link to="/">
            <img src={logo} alt="payapi logo" />
          </Link>

          <button onClick={toggleNav} className="md:hidden">
            <img src={menuIc} alt="hamburger menu" />
          </button>

          <Navbar showNav={showNav} toggleNav={toggleNav} />
        </div>
        {location.pathname !== "/" && (
          <motion.img
            src={cirlce}
            alt="circle"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1}}
            className="absolute right-[-300px] top-[-370px] -z-50 md:right-[-510px] md:top-[-450px] xl:right-[-300px] xl:top-[-500px]"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
