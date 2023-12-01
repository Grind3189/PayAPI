import Plan from "./Plan";
import data from "./data.json";

const PlanList = () => {
  return (
    <section className="flex flex-col gap-7 md:flex-row md:gap-[0.625rem] xl:gap-[1.875rem]">
      {data.map((plan, i) => {
        return <Plan key={i} plan={plan} />;
      })}
    </section>
  );
};

export default PlanList;
