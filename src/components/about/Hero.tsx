const Hero = () => {
  return (
    <section className="mb-[4.75rem] px-6 text-center xl:mx-auto xl:w-[920px] xl:px-0 xl:text-left md:px-[2.4375rem]">
      <h1 className="mb-10 font-dm text-[2rem] leading-[36px] tracking-[-0.246px] md:mx-auto md:w-[573px] md:text-[3rem] md:leading-[56px] md:tracking-[-0.369px] xl:mx-0 xl:mb-[3.8175rem] xl:w-[600px] xl:text-[3.5rem]">
        We empower innovators by delivering access to the financial system
      </h1>

      <div className="mb-12 md:mb-16 md:flex md:text-left xl:mb-14">
        <h2 className="mb-4 md:w-[30%] font-dm text-[1.5rem] md:text-[2rem]">
          Our Vision
        </h2>
        <p className="font-publicSans text-[0.9375rem] leading-[1.75rem] text-lightsanjuan-blue-#6C8294 md:w-[70%]">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
      </div>

      <div className="mb-12 md:flex md:text-left">
        <h2 className="mb-4 md:w-[30%] font-dm text-[1.5rem] md:text-[2rem]">
          Our Business
        </h2>
        <p className="font-publicSans text-[0.9375rem] leading-[1.75rem] text-lightsanjuan-blue-#6C8294 md:w-[70%]">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </div>
    </section>
  );
};

export default Hero;
