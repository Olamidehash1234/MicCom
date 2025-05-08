export default function CompanyProfile() {
  return (
    <div className="p-4 px-[16px] md:p-[80px]">
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
      <div className="relative mb-8 md:mb-[30px]">
        <h1 className="text-[24px] md:text-[40px] font-medium text-[#001D0D] leading-tight">
          Pioneering Cable Manufacturing<br />
          Excellence in Nigeria and Beyond
        </h1>
        
        {/* Decorative Stars */}
        {/* <div className="absolute hidden md:flex right-[252px] -top-[20px] w-32 h-20 md:w-[126px] md:h-[126px]">
          <img src="/icons/about/star-big1.svg" alt="" />
          <img src="/icons/about/star-big2.svg" alt="" />
          <img src="/icons/about/star-big3.svg" alt="" />
        </div> */}
      </div>

      {/* Company Description */}
      <div className="mb-12 text-sm md:text-[14px] text-[#001D0D] md:leading-[30px] text-justify">
        <p className="mb-6 md:mb-[30px]">
          MicCom Cables & Wires Ltd stands as a symbol of innovation, resilience, and excellence in Nigeria's manufacturing landscape. Established in 1978 as the country's first indigenous cable manufacturer, MicCom has grown into a trusted name across West Africa and the wider continent. With a commitment to quality, safety, and global standards, we produce a wide range of high-performance cables that power everything from homes and offices to complex industrial and infrastructure projects. Our legacy is built on decades of expertise, industry-leading technology, and a passion for powering progress—one cable at a time.
        </p>
      </div>

      {/* CEO Message Box */}
      <div className="border-[2.5px] border-[#009140] rounded-xl md:rounded-[20px] p-4 md:px-[60px] md:py-[40px] mb-8 md:mb-[0px] relative">
        <h2 className="text-2xl md:text-[40px] md:leading-[50px] text-[#E25319] font-medium mb-6">CEO's Message</h2>
        
        <div className=" text-[#001D0D] text-justify text-sm md:text-[16px] md:leading-[32px]">
          <p className="mb-4 md:mb-[40px]">
            MicCom Cables and Wires Limited is a quality and customer oriented company with a global vision and reach. The journey of MicCom Cables and Wires Ltd started from very modest beginnings viz., a relatively small house wiring, power cables and conductor manufacturing plant in 1978 and has grown to a facility with over 5,000 MTPA capacities of both Copper & Aluminium in Lagos, Nigeria. MicCom Cables and Wires growth has been sure and steady due to its strong focus on quality in manufacturing process and systems resulting in a satisfied and loyal customer base spread across Nigeria.
          </p>
          
          <p className="mb-4 md:mb-[40px]">
            From its humble origins, MicCom Cables and Wires has over the past four decades reached a pre-eminent position in its market segment with fully operational marketing offices strategically placed to serve her customers by envisioning itself as a global player with a local presence. In this time, the company has developed strong technical capabilities and produces several different types of cables and wires for various electrical applications and has obtained quality systems certifications including ISO 9001, ISO 14001 and OHSAS 18001.
          </p>
          
          <p className="mb-4 md:mb-[0px]">
            We know that our ongoing success is attributed to the wise vision and the support of our Board of Directors coupled with the hard work and commitment of our management and staff. Together we will continue to excel in achieving high productivity, sustaining our quality standards, meeting good environmental standards and building on the capacities of our employees to fulfill the objectives of our stakeholders.
          </p>
          
          <div className="flex items-center justify-between">
            <p className="">
              We welcome you to browse through our website to get a first hand impression of our capabilities.
            </p>
            
            {/* Company Logo */}
            <div className="w-32 md:w-[162.136px]">
              <img src="/icons/about/logo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}