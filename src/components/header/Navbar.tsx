import { Link } from "react-router-dom";
import crossIc from "@assets/shared/mobile/close.svg";

interface NavigationsType {
  name: string;
  link: string;
}
interface NavbarProp {
  showNav: boolean;
  toggleNav: () => void;
}

const Navbar = ({ showNav, toggleNav }: NavbarProp) => {
  const navigations: NavigationsType[] = [
    {
      name: "Pricing",
      link: "pricing",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <nav
      className={`max-md:bg-mirage-blue-#1B262F right-0 top-0 z-50 h-full w-[85%] px-6 transition-all max-md:fixed md:flex md:items-center ${
        showNav
          ? "visible translate-x-0 opacity-100"
          : "max-md:invisible max-md:translate-x-[50%] max-md:opacity-0"
      }`}
    >
      <div className="my-12 flex flex-col gap-6 md:hidden">
        <button className="self-end" onClick={toggleNav}>
          <img src={crossIc} alt="cross" />
        </button>
        <div className="border-b border-b-[#FBFCFE] opacity-[.15]" />
      </div>

      <ul className="font-publicSans md:text-sanjuan-blue-#36536B flex gap-8 text-center text-[1.25rem] font-bold max-md:mb-8 max-md:flex-col max-md:text-[#FBFCFE] md:text-[0.9375rem]">
        {navigations.map((nav) => {
          return (
            <li className="opacity-75 lg:hover:opacity-100">
              <Link to="#">{nav.name}</Link>
            </li>
          );
        })}
      </ul>

      <Link
        to="#"
        className="bg-dark-pink-##BA4270 lg:hover:bg-[#DA6D97] inline-block rounded-3xl py-[0.875rem] text-center font-bold text-[#FBFCFE] max-md:w-full md:px-6 md:ml-auto"
      >
        Schedule a Demo
      </Link>
    </nav>
  );
};

export default Navbar;
