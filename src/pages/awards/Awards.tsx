export default function AwardsAndCertification() {
  return (
    <div className="px-4 py-10 md:p-[80px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="md:max-w-[758px]">
          {/* Header Navigation */}
          <div className="flex items-center space-x-2 mb-6 md:mb-[10px] text-sm md:text-base">
            <span className="text-[#E25319] font-medium">COMPANY</span>
            <span className="text-[#E25319] flex items-center justify-center">
              <img src="/icons/about/star.svg" alt="" />
            </span>
            <span className="text-[#E25319] font-medium">AWARDS AND CERTIFICATES</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-[26px] md:text-[40px] font-medium text-[#001D0D] mb-6 leading-tight md:leading-[50px]">
            Recognized for Excellence,<br />
            Certified for Quality
          </h1>
          
          {/* Main Content */}
          <div className="text-[#001D0D] text-base md:text-[14px] leading-relaxed md:leading-[30px]">
            <p className="mb-6">
              At MicCom Cables & Wires Ltd, our commitment to producing internationally compliant, high-performance cables has 
              earned us both local and global recognition. Through years of consistency, innovation, and strict adherence to quality 
              standards, we have received numerous awards and certifications that affirm our leadership in the cable manufacturing 
              industry.
            </p>
          </div>
        </div>
        
        {/* Award Icon */}
        <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img src="/icons/award/award.svg" alt="" />
        </div>
      </div>
    </div>
  );
}