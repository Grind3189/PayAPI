import check from "@assets/shared/desktop/icon-check.svg";
import { Link } from "react-router-dom";

interface Inclusions {
  name: string;
  included: boolean;
}

type PlanProp = {
  plan: {
    title: string;
    desc: string;
    price: number;
    inclusions: Inclusions[];
  };
};

const Plan = ({ plan }: PlanProp) => {
  return (
    <div>
      <h1 className="mb-[5.0625rem] font-dm text-[1.5rem] tracking-[-0.185px] text-dark-pink-##BA4270 md:mb-[0.8125rem]">
        {plan.title}
      </h1>
      <p className="font-publicSans text-[0.9375rem] text-lightsanjuan-blue-#6C8294 max-md:hidden md:mb-5">
        {plan.desc}
      </p>
      <span className="mb-6 inline-block font-dm text-[3rem] text-sanjuan-blue-#36536B">
        ${plan.price.toFixed(2)}
      </span>
      <div className="flex flex-col gap-2 border-b border-t border-b-gray-300 border-t-gray-300 py-6">
        {plan.inclusions.map((inclusion) => {
          return (
            <div className="mx-auto flex w-[134px] items-center justify-start gap-6 xl:mx-0">
              <img
                src={check}
                alt="check"
                className={inclusion.included ? "opacity-100" : "opacity-0"}
              />
              <span
                className={`font-publicSans text-sanjuan-blue-#36536B ${
                  inclusion.included ? "opacity-100" : "opacity-50"
                }`}
              >
                {inclusion.name}
              </span>
            </div>
          );
        })}
      </div>
      <Link
        to="#"
        className="mt-6 inline-block rounded-3xl border border-sanjuan-blue-#36536B px-7 py-4"
      >
        Request Access
      </Link>
    </div>
  );
};

export default Plan;
