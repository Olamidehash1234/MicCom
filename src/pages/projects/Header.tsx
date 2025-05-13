const ProductsHeader = () => {
  return (
    <div className="w-full  px-[16px] md:px-[80px] py-8 md:py-[80px] flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="">
        <div className="mb-2 md:mb-[10px]">
          <p className="text-[#E25319] font-medium text-[14px] md:text-[16px] uppercase tracking-wide md:leading-[30px]">
          PROJECTS
          </p>
        </div>
        <h1 className="text-[24px] md:text-[40px] font-medium text-[#001D0D] mb-4 leading-tight md:leading-[50px] md:mb-[20px]">
          Projects That Power Progress Across Africa
        </h1>
        <p className="text-sm md:text-[14px] text-[#001D0D] md:max-w-[766px] md:leading-[30px]">
          MicCom Cables and Wires Ltd has been engaged in the manufacturing and
          supply of cables and wires for various projects across Nigeria and
          Africa as whole. Here are just some of the projects;
        </p>
      </div>

      <div className="mt-6 flex-shrink-0 md:flex md:justify-center md:w-auto w-full flex justify-center">
        <div className="md:w-auto md:h-auto">
          <img src="/icons/product/poll.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
