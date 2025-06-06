const ProductsHeader = () => {
  return (
    <div className="w-full  px-[16px] md:px-[80px] py-8 md:py-[60px] flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="">
        <div className="">
          <p className=" mb-2 md:mb-[10px] text-[#E25319] font-medium text-[14px] md:text-[16px] uppercase tracking-wide md:leading-[30px]">PRODUCTS</p>
        </div>
        <h1 className="text-[24px] md:text-[40px] font-medium text-[#001D0D] mb-4 leading-tight md:leading-[50px] md:mb-[20px]">
          Products That Drive Innovation Across Africa
        </h1>
        <p className="text-sm md:text-[16px] text-[#001D0D] md:max-w-[780px] md:leading-[30px]">
          Please find below, our list of products. Our product listing changes every year to accommodate new innovation from our 
          manufacturing department. Feel free to bookmark this page and check often for updates!
        </p>
      </div>

      <div className="mt-6 md:mt-[0px] flex-shrink-0 md:flex md:justify-center md:w-auto w-full flex justify-center md:mr-[50px]">
        <div className="md:w-auto md:h-auto">
          <img src="/icons/product/cable.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;