export default function GetStartedComponent() {
  return (
    <div className="bg-[#004820] text-white p-6 mx-[16px] my-[80px] md:mx-[80px] md:p-[60px] rounded-lg md:rounded-[20px] relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
        <div className="md:w-[700px]">
          <h2 className="text-2xl md:text-[40px] font-medium mb-4 md:mb-[30px]">
            QUALITY POLICY
          </h2>
          <p className="text-sm md:text-[14px] mb-6 md:mb-[40px] md:leading-[24px] text-lowercase text-justify uppercase">
            It IS OUR POLICY AT <span className="font-[700] uppercase">MicCom Cables & Wires Ltd</span> TO PRODUCE AND
            DELIVER QUALITY CABLES AND WIRES THAT MEET CUSTOMERS' REQUIRMENTS.
            We ARE ALSO COMMITTED TO COMPLYING WITH THE REQUIREMENT OF THE ISO
            9001: 2015 STANDARD AND TO CONTINUALLY IMPROVE THE EFECTIVENESS OF
            OUR QUALITY MANAGEMENT SYSTEM. WE HAVE SET MEASURABLE OBJECTIVE AT
            CORPORATE AND DEPARTMENTAL LEVEL WHICH ARE REVIEWED AS NECESSARY FOR
            CONTINUAL SUITABILITY.
          </p>
          <button className="w-full md:w-auto bg-[#E25319] hover:bg-orange-600 text-white font-medium py-2 px-6 md:px-[54px] md:py-[9px] md:leading-[26px] md:text-[14px] rounded-md transition-colors duration-300">
            Download Bronchure
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-30 md:opacity-100 lg:right-12">
        <div className="md:pr-[44px]">
          <img src="/icons/product/quality.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
}
