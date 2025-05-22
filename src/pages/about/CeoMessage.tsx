import SubpageHero from '../../components/SubpageHero';

export default function CeoMessage() {
  return (
    <div>
      <SubpageHero title="CEO's Message" />
      <div className="py-[40px] px-[16px] md:px-[80px] md:py-[60px]">
        {/* <div className="flex items-center space-x-2 text-[#E25319] md:leading-[30px] text-[14px] md:text-[16px] font-medium mb-[20px] md:mb-[10px]">
          <span>COMPANY</span>
          <span className="flex items-center justify-center">
            <img src="/icons/about/star.svg" alt="" />
          </span>
          <span>CEO'S MESSAGE</span>
        </div> */}

        <div className="border-[2.5px] border-[#009140] rounded-xl md:rounded-[20px] p-4 md:px-[60px] md:py-[40px] md:mb-[0px] relative">
          <h2 className="text-2xl md:text-[40px] md:leading-[50px] text-[#E25319] font-medium mb-6">CEO's Message</h2>
          
          <div className="text-[#001D0D] text-justify text-sm md:text-[16px] md:leading-[32px]">
            <p className="mb-4 md:mb-[40px]">
              MicCom Cables and Wires Limited is a quality and customer oriented company with a global vision and reach. The journey of MicCom Cables and Wires Ltd started from very modest beginnings viz., a relatively small house wiring, power cables and conductor manufacturing plant in 1978 and has grown to a facility with over 5,000 MTPA capacities of both Copper & Aluminium in Lagos, Nigeria. MicCom Cables and Wires growth has been sure and steady due to its strong focus on quality in manufacturing process and systems resulting in a satisfied and loyal customer base spread across Nigeria.
            </p>
            
            <p className="mb-4 md:mb-[40px]">
              From its humble origins, MicCom Cables and Wires has over the past four decades reached a pre-eminent position in its market segment with fully operational marketing offices strategically placed to serve her customers by envisioning itself as a global player with a local presence. In this time, the company has developed strong technical capabilities and produces several different types of cables and wires for various electrical applications and has obtained quality systems certifications including ISO 9001, ISO 14001 and  ISO 45001.
            </p>
            
            <p className="mb-4 md:mb-[0px]">
              We know that our ongoing success is attributed to the wise vision and the support of our Board of Directors coupled with the hard work and commitment of our management and staff. Together we will continue to excel in achieving high productivity, sustaining our quality standards, meeting good environmental standards and building on the capacities of our employees to fulfill the objectives of our stakeholders.
            </p>
            
            <div className="flex items-center justify-between">
              <p>
                We welcome you to browse through our website to get a first hand impression of our capabilities.
              </p>
              
              <div className="w-32 md:w-[162.136px]">
                <img src="/icons/about/logo.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
