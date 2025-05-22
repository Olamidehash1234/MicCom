export default function CompanyProfile() {
  return (
    <div className=" pt-[40px] px-[16px] md:px-[80px] md:pt-[60px] md:pb-[0px]">
      {/* Header Navigation */}
      <div className="flex justify-between items-center mb-[20px] md:mb-[10px]">
        <div className="flex items-center space-x-2 text-[#E25319] md:leading-[30px] text-[14px] md:text-[16px] font-medium">
          <span>COMPANY</span>
          <span className="flex items-center justify-center">
            <img src="/icons/about/star.svg" alt="" />
          </span>
          <span>ABOUT US</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="relative mb-8 md:mb-[30px] flex flex-col md:flex-row items-start md:items-center">
        <div className="max-w-[600px] flex-shrink-0">
          <h1 className="text-[24px] md:text-[40px] font-medium text-[#001D0D] leading-tight">
            Pioneering Cable Manufacturing<br />
            Excellence in Nigeria and Beyond
          </h1>
        </div>
        
        <div className="mt-6 md:mt-0 md:-mr-[70px] flex justify-center w-full md:w-[1400px]">
          <img src="/icons/about/bundles.svg" alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Company Description */}
      <div className="mb-12 text-sm md:text-[16px] text-[#001D0D] md:leading-[30px] text-justify">
        <p className="">
          MicCom Cables & Wires Ltd stands as a symbol of innovation, resilience, and excellence in Nigeria's manufacturing landscape. Established in 1978 as the country's first indigenous cable manufacturer, MicCom has grown into a trusted name across West Africa and the wider continent. With a commitment to quality, safety, and global standards, we produce a wide range of high-performance cables that power everything from homes and offices to complex industrial and infrastructure projects. Our legacy is built on decades of expertise, industry-leading technology, and a passion for powering progress—one cable at a time.
        </p>
      </div>
    </div>
  );
}