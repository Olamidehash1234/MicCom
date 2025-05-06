export default function SocialResponsibilities() {
  return (
    <div className="px-[16px] py-10 md:p-[80px] ">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="">
          {/* Header Navigation */}
          <div className="flex items-center space-x-2 md:space-x-[10px] mb-6 text-sm md:text-[16px] md:mb-[10px]">
            <span className="text-[#E25319] text-[14px] font-medium md:leading-[30px]">COMPANY</span>
            <span className="text-[#E25319] flex items-center justify-center">
              <img src="/icons/about/star.svg" alt="star" />
            </span>
            <span className="text-[#E25319] font-medium md:leading-[30px]">SOCIAL RESPONSIBILITIES</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-[26px] md:text-[40px] md:leading-[50px] font-medium text-[#001D0D] mb-6 leading-tight">
            Our Commitment Beyond Cables
          </h1>
          
          {/* Main Content */}
          <div className="text-[#001D0D] text-[14px] md:text-[14px] md:leading-[30px] leading-relaxed text-justify">
            <p className="mb-6 max-w-[758px]">
              At MicCom Cables & Wires Ltd, we believe our responsibility extends far beyond manufacturing high-quality cables and 
              wires. As Nigeria's first indigenous cable manufacturing company, we understand the importance of using our platform to 
              create lasting, positive change in the communities we serve. We are committed to driving social and economic development 
              by investing in people, protecting our environment, and contributing to a more equitable and sustainable future. Through 
              education, empowerment, and corporate citizenship, we aim to build a stronger, healthier society—where progress is 
              shared, opportunities are created, and every connection counts.
            </p>
          </div>
        </div>
        
        {/* Cable Image/Icon */}
        <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img src="/images/social-responsibilities/cables.svg" alt="" />
        </div>
      </div>
    </div>
  );
}