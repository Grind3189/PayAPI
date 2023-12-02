import PlanList from "@components/pricing/PlanList";

function Pricing() {
  return (
    <main className="px-6 pt-[7.875rem] md:pt-[10.187rem] xl:px-0">
      <div className="text-center xl:mx-auto xl:w-[1110px] xl:text-left">
        <h1 className="mb-12 font-dm text-[2rem] tracking-[-0.246px] text-sanjuan-blue-#36536B md:mb-[4.3125rem] md:text-[3rem]">
          Pricing
        </h1>
        <PlanList />
        
      </div>
    </main>
  );
}

export default Pricing;
