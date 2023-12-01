import ScheduleButton from "@components/shared/ScheduleButton";

const Ready = () => {
  return (
    <div className="px-6 text-center xl:flex xl:items-center xl:justify-between xl:w-[1110px] xl:mx-auto xl:p-0">
      <h1 className="mb-8 font-dm text-[2rem] tracking-[-0.246px] text-sanjuan-blue-#36536B md:mb-10 xl:mb-0 md:text-[3rem]">
        Ready to start ?
      </h1>
      <div className="grid place-items-center">
        <ScheduleButton />
      </div>
    </div>
  );
};

export default Ready;
