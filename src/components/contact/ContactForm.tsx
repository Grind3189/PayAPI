import { useState } from "react";
import { useFormik } from "formik";
import { contactFormSchema } from "./schema";

interface InitialValues {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
  [key: string]: string;
}

type ContactFormProp = {
  inputs: {
    name: string;
    placeholder: string;
  }[];
};

const ContactForm = ({ inputs }: ContactFormProp) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubmit = async (values: any, actions: any) => {
    console.log("sbumitting", values, actions);
  };

  const { values, handleSubmit, touched, errors, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        company: "",
        title: "",
        message: "",
      } as InitialValues,
      validationSchema: contactFormSchema,
      onSubmit,
    });

    const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setIsSubscribed(prev => !prev)
    }

  return (
    <form
      className="mb-20 md:mx-auto md:w-[445px] xl:w-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        {inputs.map((inputDetails) => {
          return inputDetails.name === "message" ? (
            <div key={inputDetails.name} className="font-publicSans ">
              <textarea
                className={`h-[89px] w-full resize-none border-b border-gray-300 bg-transparent px-5 text-[0.9375rem] text-sanjuan-blue-#36536B outline-none ${
                  errors.message && touched.message
                    ? "border-[#FF0000] placeholder:text-[#FF0000] placeholder:opacity-50"
                    : "text-sanjuan-blue-#36536B"
                }`}
                placeholder={inputDetails.placeholder}
                onChange={handleChange}
                value={values.message}
                name={inputDetails.name}
                onBlur={handleBlur}
              ></textarea>
              {errors.message && touched.message && (
                <span className="ml-5 mt-2 text-[0.6875rem] text-[#FF0000] opacity-50">
                  {errors.message}
                </span>
              )}
            </div>
          ) : (
            <div key={inputDetails.name} className="font-publicSans">
              <input
                type={inputDetails.name === "email" ? "email" : "text"}
                placeholder={inputDetails.placeholder}
                onChange={handleChange}
                name={inputDetails.name}
                onBlur={handleBlur}
                value={values[inputDetails.name]}
                className={`w-full border-b border-gray-300 bg-transparent px-5 pb-4 text-[0.9375rem] text-sanjuan-blue-#36536B outline-none ${
                  errors[inputDetails.name] && touched.message
                    ? "border-[#FF0000] placeholder:text-[#FF0000] placeholder:opacity-50"
                    : "text-sanjuan-blue-#36536B"
                }`}
              />
              {errors[inputDetails.name] && touched[inputDetails.name] && (
                <span className="ml-5 mt-2 text-[0.6875rem] text-[#FF0000] opacity-50">
                  {errors[inputDetails.name]}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="my-6 flex items-center gap-[1.625rem]">
        <button
        onClick={handleSubscribe}
          className={`flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center ${
            isSubscribed
              ? "bg-dark-pink-##BA4270"
              : "bg-sanjuan-blue-#36536B opacity-25"
          }`}
        >
          {isSubscribed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
            >
              <path
                d="M2 6.97348L5.17296 10.1464L13.3194 2"
                stroke="white"
                stroke-width="3"
              />
            </svg>
          )}
        </button>
        <span className="text-[0.9375rem] leading-[25px] tracking-[-0.115px] text-sanjuan-blue-#36536B">
          Stay up-to-date with company announcements and updates to our API
        </span>
      </div>
      <button
        type="submit"
        className="h-[48px] w-[157px] rounded-3xl border border-sanjuan-blue-#36536B text-[0.9375rem] font-bold lg:hover:bg-sanjuan-blue-#36536B lg:hover:text-[#FBFCFE]"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
