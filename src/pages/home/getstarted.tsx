export default function GetStartedComponent() {
  return (
    <div className="bg-[#004820] text-white p-6 mx-[16px] my-[80px] md:mx-[80px] md:p-[60px] rounded-lg md:rounded-[20px] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
        <div className="md:w-[700px]">
          <h2 className="text-2xl md:text-[40px] font-medium mb-4 md:mb-[30px]">
            Ready to get started with MicCom?
          </h2>
          <p className="text-sm md:text-[16px] md:text-justify mb-6 md:mb-[40px] md:leading-[24px]">
          Whether you're powering a home, a commercial project, or a large-scale infrastructure development, MicCom Cables & Wires Ltd is equipped to deliver the high-performance solutions you need. Reach out to our team today to discuss your requirements, request a quote, or learn more about how we can support your next project.
          </p>
          <button className="w-full md:w-auto bg-[#E25319] hover:bg-orange-600 text-white font-medium py-2 px-6 md:px-[54px] md:py-[9px] md:leading-[26px] md:text-[14px] rounded-md transition-colors duration-300">
            Get Started
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