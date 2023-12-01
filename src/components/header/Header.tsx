import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/shared/desktop/logo.svg";
import menuIc from "@assets/shared/mobile/menu.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <header className={`fixed top-0 z-[999] flex w-full justify-center transition-all duration-500 ${isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"}`}>
      <div
        className="flex w-full items-center justify-between overflow-hidden px-6 py-10 md:gap-16 md:px-10 xl:w-[1110px] xl:px-0"
      >
        <Link to="#">
          <img src={logo} alt="payapi logo" />
        </Link>

        <button onClick={toggleNav} className="md:hidden">
          <img src={menuIc} alt="hamburger menu" />
        </button>

        <Navbar showNav={showNav} toggleNav={toggleNav} />
      </div>
    </header>
  );
};

export default Header;
