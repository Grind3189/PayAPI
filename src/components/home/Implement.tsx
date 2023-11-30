import implement from "@assets/home/desktop/illustration-easy-to-implement.svg";
import simple from "@assets/home/desktop/illustration-simple-ui.svg";

const Implement = () => {
  return (
    <section className="flex flex-col gap-20 px-6">
      <div className="flex flex-col justify-center items-center text-center">
        <img src={implement} alt="code script" className="border mb-12"/>
        <h1 className="text-[2.25rem] font-dm tracking-[-0.277px] mb-6 text-sanjuan-blue-#36536B">Easy to implement</h1>
        <p className="text-[0.9375rem] font-publicSans leading-[28px] text-lightsanjuan-blue-#6C8294">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
      <div>
        <img src={simple} alt="phone mockups" />
        <h1>Simple UI & UX</h1>
        <p>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
    </section>
  );
};

export default Implement;
