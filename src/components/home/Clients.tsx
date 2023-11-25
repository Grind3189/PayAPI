import tesla from "@assets/shared/desktop/tesla.svg";
import microsoft from "@assets/shared/desktop/microsoft.svg";
import hewlett from "@assets/shared/desktop/hewlett-packard.svg";
import oracle from "@assets/shared/desktop/oracle.svg";
import google from "@assets/shared/desktop/google.svg";
import nvidia from "@assets/shared/desktop/nvidia.svg";

const Clients = () => {
  const clients: string[] = [tesla, microsoft, hewlett, oracle, google, nvidia];

  return (
    <section className="bg-mirage-blue-#1B262F text-[#FBFCFE]">
      <div>{clients.map(client => {
        return (
            <img src={client} alt={client + " logo"} />
        )
      })}</div>
      <div>
        <h1>Who we work with</h1>
      </div>
    </section>
  );
};

export default Clients;
