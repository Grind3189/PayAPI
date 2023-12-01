import PlanList from "@components/pricing/PlanList";

function Pricing() {
  return (
    <main className="px-6 pt-[7.875rem] xl:px-0 ">
      <div className="xl:w-[1110px] xl:mx-auto text-center xl:text-left">
        <h1 className="mb-12 font-dm text-[2rem] tracking-[-0.246px] text-sanjuan-blue-#36536B">
          Pricing
        </h1>
        <PlanList />
      </div>
    </main>
  );
}

export default Pricing;
