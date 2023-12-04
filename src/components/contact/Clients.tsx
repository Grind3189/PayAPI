import microsoft from "@assets/shared/desktop/microsoft-dark.svg";
import hewlett from "@assets/shared/desktop/hewlett-packard-dark.svg";
import oracle from "@assets/shared/desktop/oracle-dark.svg";
import google from "@assets/shared/desktop/google-dark.svg";
import tesla from "@assets/shared/desktop/tesla-dark.svg";
import nvidia from "@assets/shared/desktop/nvidia-dark.svg";

const Clients = () => {
  const clients: string[] = [tesla, microsoft, hewlett, oracle, google, nvidia];

  return (
    <section className="mx-auto mb-20 w-[327px] md:w-[541px] xl:mx-0">
      <h1 className="mb-8 text-center font-dm text-[1.5rem] text-sanjuan-blue-#36536B opacity-75 md:w-[445px] md:mx-auto xl:text-left xl:mx-0 xl:mb-10">
        Join the thousands of innovators already building with us
      </h1>
      <div className="grid grid-cols-2 place-content-center place-items-center gap-y-11 md:grid-cols-3 md:gap-x-[3.875rem] md:gap-y-[3.4375rem]">
        {clients.map((client) => {
          return <img key={client} src={client} alt={client + " logo"} />;
        })}
      </div>
    </section>
  );
};

export default Clients;
