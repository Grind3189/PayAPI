import Clients from "@components/contact/Clients";
import ContactForm from "@components/contact/ContactForm";

interface Inputs {
  name: string;
  placeholder: string;
}

function Contact() {
  const inputs: Inputs[] = [
    {
      name: "name",
      placeholder: "Name"
    },
    {
      name: "email",
      placeholder: "Email Address"
    },
    {
      name: "company",
      placeholder: "Company Name"
    },
    {
      name: "title",
      placeholder: "Title"
    },
    {
      name: "message",
      placeholder: "Message"
    },
  ];
  return (
    <main className="px-6 pt-[7.875rem] md:px-0 xl:mx-auto xl:w-[1110px] xl:pt-[10.625rem]">
      <h1 className="mb-10 text-center font-dm text-[2rem] leading-[36px] tracking-[-0.246px] md:mx-auto md:mb-[3.375rem] md:w-[500px] md:text-[3rem] md:leading-[56px] xl:mx-0 xl:w-[730px] xl:text-left xl:text-[3.5rem]">
        Submit a help request and we’ll get in touch shortly.
      </h1>
      <div className="xl:flex xl:items-center xl:justify-between xl:gap-[7.8125rem]">
        <ContactForm inputs={inputs} />
        <Clients />
      </div>
    </main>
  );
}

export default Contact;
