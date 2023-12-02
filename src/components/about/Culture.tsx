const Culture = () => {
  return (
    <section className="px-6 md:px-[2.4375rem] xl:px-0 mb-12 md:mb-[4.5rem]">
      <div className="flex flex-col gap-4 text-center md:flex-row md:gap-20 mb-12 md:text-left xl:mx-auto xl:w-[920px] md:mb-16">
        <h1 className="font-dm text-[1.5rem] tracking-[-0.246px] text-sanjuan-blue-#36536B md:whitespace-nowrap md:text-[2rem]">
          The Culture
        </h1>
        <p className="font-publicSans text-[0.9375rem] leading-[28px] text-lightsanjuan-blue-#6C8294">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-center md:flex-row md:gap-20 md:text-left xl:mx-auto xl:w-[920px]">
        <h1 className="font-dm text-[1.5rem] tracking-[-0.246px] text-sanjuan-blue-#36536B md:whitespace-nowrap md:text-[2rem]">
          The People
        </h1>
        <p className="font-publicSans text-[0.9375rem] leading-[28px] text-lightsanjuan-blue-#6C8294">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
    </section>
  );
};

export default Culture;
