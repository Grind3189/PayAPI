interface Inputs {
  name: string;
  placeholder: string;
}

const ContactForm = () => {
  const inputs: Inputs[] = [
    {
      name: "name",
      placeholder: "Name",
    },
    {
      name: "email",
      placeholder: "Email Address",
    },
    {
      name: "company",
      placeholder: "Company Name",
    },
    {
      name: "title",
      placeholder: "Title",
    },
    {
      name: "message",
      placeholder: "Message",
    },
  ];

  return (
    <form className="mb-20 md:w-[445px] md:mx-auto xl:w-auto">
      <div className="flex flex-col gap-6">
        {inputs.map((inputDetails) => {
          return inputDetails.name === "message" ? (
            <textarea
              key={inputDetails.name}
              className="h-[89px] resize-none border-b bg-transparent px-5 font-publicSans text-[0.9375rem] text-sanjuan-blue-#36536B outline-none border-gray-300"
              placeholder={inputDetails.placeholder}
            ></textarea>
          ) : (
            <input
              key={inputDetails.name}
              type={inputDetails.name === "email" ? "email" : "text"}
              placeholder={inputDetails.placeholder}
              className="border-b bg-transparent px-5 pb-4 font-publicSans text-[0.9375rem] outline-none border-gray-300 text-sanjuan-blue-#36536B"
            />
          );
        })}
      </div>
      <div className="my-6 flex items-center gap-[1.625rem]">
        <button className="h-[24px] w-[24px] flex-shrink-0 bg-sanjuan-blue-#36536B opacity-25" />
        <span className="text-[0.9375rem] leading-[25px] tracking-[-0.115px] text-sanjuan-blue-#36536B">
          Stay up-to-date with company announcements and updates to our API
        </span>
      </div>
      <button className="h-[48px] w-[157px] rounded-3xl border border-sanjuan-blue-#36536B text-[0.9375rem] font-bold">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
