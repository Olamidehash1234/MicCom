export default function CorePurpose() {
  return (
    <div className="pt-8 px-[16px] md:px-[80px]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[74px] justify-between">
        {/* Icon on the left */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <img src="/icons/about/flower.svg" alt="" />
        </div>

        {/* Content on the right */}
        <div className="flex-grow">
          <p className="text-[#E25319] font-medium text-sm md:text-[16px] uppercase mb-2 md:leading-[30px] md:mb-[20px]">
            OUR CORE PURPOSE
          </p>
          <p className="text-green-950 text-lg md:text-[34px] font-medium leading-relaxed md:leading-[48px] text-justify">
            To provide quality cables & wires that are in conformity with
            international standard, thus contributing to the technological and
            industrial development of Nigeria and the African continent as a
            whole.
          </p>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="w-full h-px bg-[#004820] mt-12 md:mt-[80px] mb-4"></div>
      </div>
  );
}
