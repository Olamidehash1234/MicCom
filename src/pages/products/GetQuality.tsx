export default function GetStartedComponent() {
  return (
    <div className="bg-[#004820] text-white p-6 mx-[16px] my-[80px] md:mx-[80px] md:p-[60px] rounded-lg md:rounded-[20px] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
        <div className="md:w-[700px]">
          <h2 className="text-2xl md:text-[40px] font-medium mb-4 md:mb-[30px]">
            QUALITY POLICY
          </h2>
          <p className="text-sm md:text-[14px] mb-6 md:mb-[40px] md:leading-[24px] text-lowercase">
            it is our policy at <span className="text-[#E25319]"> miccom cables & wires ltd. </span> to produce and
            deliver quality cables and wires that meet customers' requirments.
            we are also committed to complying with the requirement of the <span className="text-[#E25319]"> ISO
            9001: 2015 standard</span> and to continually improve the efectiveness of
            our quality management system. we have set measurable objective at
            corporate and departmental level which are reviewed as necessary for
            continual suitability.
          </p>
          <button className="w-full md:w-auto bg-[#E25319] hover:bg-orange-600 text-white font-medium py-2 px-6 md:px-[54px] md:py-[9px] md:leading-[26px] md:text-[14px] rounded-md transition-colors duration-300">
            Download Bronchure
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-30 md:opacity-100 lg:right-12">
        <div className="">
          <img src="/icons/home/grid.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
}
