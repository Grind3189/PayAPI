import finances from "@assets/home/desktop/icon-personal-finances.svg";
import banking from "@assets/home/desktop/icon-banking-and-coverage.svg";
import consumer from "@assets/home/desktop/icon-consumer-payments.svg";

interface FeatureListType {
  title: string;
  desc: string;
  image: string;
  alt: string;
}

const Features = () => {
  const featureList: FeatureListType[] = [
    {
      title: "Personal Finances",
      desc: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
      image: finances,
      alt: "money bag",
    },
    {
      title: "Banking & Coverage",
      desc: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts. ",
      image: banking,
      alt: "bar graphs",
    },
    {
      title: "Consumer Payments",
      desc: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. ",
      image: consumer,
      alt: "wallet",
    },
  ];
  return (
    <section className="flex flex-col gap-12 px-6 md:flex-row md:gap-[0.625rem] xl:w-[1110px] xl:mx-auto xl:justify-between xl:px-0 mb-20 md:mb-[6.25rem]">
      {featureList.map((feature) => {
        return (
          <div className="text-center font-publicSans">
            <img src={feature.image} alt={feature.alt} className="mx-auto mb-8" />
            <h1 className="mb-4 text-[1.125rem] font-bold tracking-[-0.138px] text-sanjuan-blue-#36536B">
              {feature.title}
            </h1>
            <p className="text-[0.9375rem] leading-[25px] tracking-[-0.115px] text-lightsanjuan-blue-#6C8294">
              {feature.desc}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
