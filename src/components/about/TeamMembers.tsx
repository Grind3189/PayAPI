

const TeamMembers = () => {
  return (
    <section className="px-6 mb-12 md:px-[2.4375rem] xl:px-0 xl:w-[1110px] xl:mx-auto">
      <div className="flex flex-col gap-8 text-center py-4 max-md:border-t max-md:border-b border-t-gray-300 border-b-gray-300 md:flex-row">
        <div className="md:flex-1 md:border-t md:border-b md:border-b-gray-300 md:border-t-gray-300 md:flex md:flex-col md:justify-end md:items-start md:h-[134px]">
          <span className="font-publicSans text-sanjuan-blue-#36536B opacity-70 md:max-xl:hidden">
            Team Members
          </span>
          <h1 className="text-[3.5rem] font-dm tracking-[-0.431px] text-dark-pink-##BA4270">300+</h1>
        </div>
        <div className="md:flex-1 md:border-t md:border-b md:border-b-gray-300 md:border-t-gray-300 md:flex md:flex-col md:justify-end md:items-start md:h-[134px]">
          <span className="font-publicSans text-sanjuan-blue-#36536B opacity-70 md:max-xl:hidden">
            Offices in the US
          </span>
          <h1 className="text-[3.5rem] font-dm tracking-[-0.431px] text-dark-pink-##BA4270">3</h1>
        </div>
        <div className="md:flex-1 md:border-t md:border-b md:border-b-gray-300 md:border-t-gray-300 md:flex md:flex-col md:justify-end md:items-start md:h-[134px]">
          <span className="font-publicSans text-sanjuan-blue-#36536B opacity-70 md:max-xl:hidden">
            Transactions analyzed
          </span>
          <h1 className="text-[3.5rem] font-dm tracking-[-0.431px] text-dark-pink-##BA4270">10M+</h1>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
