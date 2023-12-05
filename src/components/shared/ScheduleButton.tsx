const ScheduleButton = () => {
  return (
    <div className="flex flex-col md:w-[445px] gap-4 font-publicSans text-[0.9375rem] md:relative md:flex-row md:rounded-3xl md:shadow-md">
      <input
        type="email"
        placeholder="Enter email address"
        className="rounded-3xl bg-white px-7 py-[0.875rem] shadow-md outline-none md:flex-1 md:pr-[180px]"
      />
      <button className="rounded-3xl bg-dark-pink-##BA4270 py-[0.875rem] font-bold text-[#FBFCFE] md:absolute md:right-0 md:w-[173px] lg:hover:bg-[#DA6D97]">
        Schedule a Demo
      </button>
    </div>
  );
};

export default ScheduleButton;
