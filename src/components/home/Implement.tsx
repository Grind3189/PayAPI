import implement from "@assets/home/desktop/illustration-easy-to-implement.svg";
import simple from "@assets/home/desktop/simple-ui-image.png";

const Implement = () => {
  return (
    <section className="mb-20 flex flex-col gap-20 px-6 md:mb-[6.25rem] xl:mx-auto xl:mb-36 xl:w-[1110px] xl:gap-0 xl:px-0">
      <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between xl:gap-24">
        <img
          src={implement}
          alt="code script"
          className="mb-12 ml-9 xl:ml-[-55px]"
        />
        <div className="mt-[-80px] text-center md:mt-[-100px] xl:text-left">
          <h1 className="mb-6 font-dm text-[2.25rem] tracking-[-0.277px] text-sanjuan-blue-#36536B md:text-[3rem] md:tracking-[-0.369px]">
            Easy to implement
          </h1>
          <p className="font-publicSans text-[0.9375rem] leading-[28px] text-lightsanjuan-blue-#6C8294 md:mx-auto md:max-xl:w-[573px]">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center xl:flex-row-reverse xl:justify-between xl:gap-24">
        <img
          src={simple}
          alt="phone mockups"
          className="ml-5 border-spacing-2 xl:ml-0 xl:mr-[-100px]"
        />
        <div className="mt-[-20px] text-center md:mt-[-40px] xl:text-left">
          <h1 className="mb-6 font-dm text-[2.25rem] tracking-[-0.277px] text-sanjuan-blue-#36536B md:text-[3rem] md:tracking-[-0.369px]">
            Simple UI & UX
          </h1>
          <p className="font-publicSans text-[0.9375rem] leading-[28px] text-lightsanjuan-blue-#6C8294 md:mx-auto md:max-xl:w-[573px]">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Implement;
