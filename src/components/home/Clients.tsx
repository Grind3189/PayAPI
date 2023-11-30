import tesla from "@assets/shared/desktop/tesla.svg";
import microsoft from "@assets/shared/desktop/microsoft.svg";
import hewlett from "@assets/shared/desktop/hewlett-packard.svg";
import oracle from "@assets/shared/desktop/oracle.svg";
import google from "@assets/shared/desktop/google.svg";
import nvidia from "@assets/shared/desktop/nvidia.svg";
import circle from "@assets/shared/desktop/bg-pattern-circle.svg";
import { Link } from "react-router-dom";

const Clients = () => {
  const clients: string[] = [tesla, microsoft, hewlett, oracle, google, nvidia];

  return (
    <section className="flex flex-col gap-16 overflow-hidden bg-mirage-blue-#1B262F px-6 py-20 text-[#FBFCFE] md:px-28 md:py-[5.5rem] xl:flex-row-reverse xl:items-center xl:justify-center xl:gap-[8.1875rem] xl:px-40 xl:py-[6.25rem] mb-20 md:mb-[6.25rem] xl:mb-[1.125rem]">
      <div className="relative grid grid-cols-2 place-items-center gap-x-[3.0625rem] gap-y-11 md:grid-cols-3 md:gap-x-[3.75rem] md:gap-y-10">
        {clients.map((client) => {
          return <img src={client} alt={client + " logo"} />;
        })}
        <img
          src={circle}
          alt="circle"
          className="absolute top-[-300px] scale-150 md:top-[-550px] md:scale-110 xl:left-[-800px] xl:top-[-350px]"
        />
      </div>
      <div className="text-center text-[#FBFCFE] xl:text-left">
        <h1 className="mb-4 font-dm text-[2rem] tracking-[-0.246px] md:mb-6 md:text-[3rem] md:tracking-[-0.369px]">
          Who we work with
        </h1>
        <p className="mb-[3.75rem] font-publicSans text-[0.9375rem] leading-[28px] opacity-70 md:mx-auto md:mb-8 md:w-[456px]">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.{" "}
        </p>
        <Link
          to="#"
          className="inline-block rounded-3xl border border-[#FBFCFE] px-8 py-4 text-[0.9375rem] font-bold"
        >
          About Us
        </Link>
      </div>
    </section>
  );
};

export default Clients;
