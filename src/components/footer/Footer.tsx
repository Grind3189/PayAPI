import logoWhite from "@assets/shared/desktop/logo-white.svg";
import facebook from "@assets/shared/desktop/facebook.svg";
import twitter from "@assets/shared/desktop/twitter.svg";
import linkedIn from "@assets/shared/desktop/linkedin.svg";
import circle from "@assets/shared/desktop/bg-pattern-circle.svg";
import { Link } from "react-router-dom";
import Ready from "./Ready";

const Footer = () => {
  const navLinks: string[] = ["Pricing", "About", "Contact"];
  const socials: string[] = [facebook, twitter, linkedIn];
  return (
    <section className="mt-auto">
      <Ready />
      <footer className="mt-20 overflow-hidden bg-mirage-blue-#1B262F py-10 md:mt-[6.25rem] md:px-[2.4375rem] md:py-8 xl:px-0">
        <div className="relative flex flex-col items-center justify-center md:flex-row md:justify-start md:gap-16 xl:mx-auto xl:w-[1110px]">
          <img src={logoWhite} alt="payapi logo" className="max-md:mb-10" />
          <ul className="flex flex-col gap-[1.9375rem] text-center max-md:mb-[2.4375rem] md:flex-row">
            {navLinks.map((link) => {
              return (
                <li className="text-[#FBFCFE]" key={link}>
                  <Link
                    to={link.toLowerCase()}
                    className="font-publicSans text-[0.9375rem] font-bold opacity-70"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 md:ml-auto">
            {socials.map((social) => {
              return (
                <Link to="" key={social}>
                  <img src={social} alt={social} />
                </Link>
              );
            })}
          </div>
          <img
            src={circle}
            alt="gray circle"
            className="absolute bottom-[-380px] scale-[1.5] md:bottom-[-500px] md:right-[-320px] md:scale-90 xl:right-[-550px]"
          />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
