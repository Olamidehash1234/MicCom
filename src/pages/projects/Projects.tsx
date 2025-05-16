import { useState } from "react";

const PartnersShowcaseComponent = () => {
  const [openSection, setOpenSection] = useState<number | null>(1);

  const toggleSection = (sectionId: number): void => {
    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  const categories = [
    {
      id: 1,
      name: "Government",
      // image: "/images/Projects/GOVERNMENT.png", 
      logos: [
        "/icons/projects/government/lseb.png",
        "/icons/projects/government/ogun.png",
        "/icons/projects/government/cbn.png",
        "/icons/projects/government/defense.png",
        
      ]
    },
    {
      id: 2,
      name: "DISCO",
      // image: "/images/Projects/disco.png",
      logos: [
        "/icons/projects/disco/EEDC.png", 
        "/icons/projects/disco/ekedc.png", 
        "/icons/projects/disco/ikeja.png", 
        "/icons/projects/disco/phedc.png", 
        
      ]
    },
    {
      id: 3,
      name: "Institutions",
      // image: "/images/Projects/institution.png",
      logos: [
        "/icons/projects/institution/abuad.png", 
        "/icons/projects/institution/OOPL.png", 
        "/icons/projects/institution/redeemers.png", 
        "/icons/projects/institution/CU.png", 
        "/icons/projects/institution/DP.png", 
        "/icons/projects/institution/MFM.png", 
        "/icons/projects/institution/winners.png", 
      ]
    },
    {
      id: 4,
      name: "Oil & Gas",
      // image: "/images/Projects/oil-gas.png",
      logos: [
        "/icons/projects/oil-gas/behind.png",
        "/icons/projects/oil-gas/dawo.png",
        "/icons/projects/oil-gas/saipem.png",
        "/icons/projects/oil-gas/shell.png",
        "/icons/projects/oil-gas/technimont.png",
        "/icons/projects/oil-gas/total.png",
        
      ]
    },
    {
      id: 5,
      name: "Industrial",
      // image: "/images/Projects/industrial.png",
      logos: [
        "/icons/projects/industrial/access.png",
        "/icons/projects/industrial/berg.png",
        "/icons/projects/industrial/bouy.png",
        "/icons/projects/industrial/dangote.png",
        "/icons/projects/industrial/elektrint.png",
        "/icons/projects/industrial/honeywell.png",
        "/icons/projects/industrial/kinetic.png",
        "/icons/projects/industrial/me.png",
        "/icons/projects/industrial/mar.png",
        "/icons/projects/industrial/orritech.png",
        "/icons/projects/industrial/ramit.png",
        "/icons/projects/industrial/tofa.png",
        "/icons/projects/industrial/vacc.png",
        "/icons/projects/industrial/kenol.png",
        "/icons/projects/industrial/lubell.png",  
      ]
    }
  ];

  const iconSizes: Record<string, string> = {
    // Government
    // "/icons/projects/government/lseb.png": "w-[80px] md:w-[120px]",
    // "/icons/projects/government/ogun.png": "w-[100px] md:w-[150px]",
    // "/icons/projects/government/cbn.png": "w-[90px] md:w-[130px]",
    "/icons/projects/government/defense.png": "w-[60px] md:w-[125px]",
    
    // DISCO
    "/icons/projects/disco/EEDC.png": "w-[100px] md:w-[190px] md:h-[89.88px]",
    "/icons/projects/disco/ekedc.png": "w-[90px] md:w-[110px]",
    "/icons/projects/disco/ikeja.png": "w-[85px] md:w-[125px]",
    "/icons/projects/disco/phedc.png": "w-[110px] md:w-[198px]",
    
    // Institutions
    "/icons/projects/institution/abuad.png": "w-[100px] md:w-[120px]",
    "/icons/projects/institution/OOPL.png": "w-[110px] md:w-[160px]",
    // "/icons/projects/institution/redeemers.png": "w-[130px] md:w-[190px]",
    "/icons/projects/institution/CU.png": "w-[90px] md:w-[130px]",
    "/icons/projects/institution/DP.png": "w-[85px] md:w-[125px]",
    "/icons/projects/institution/MFM.png": "w-[100px] md:w-[150px]",
    "/icons/projects/institution/winners.png": "w-[120px] md:w-[170px]",
    
    // Oil & Gas
    "/icons/projects/oil-gas/behind.png": "w-[100px] md:w-[97px]",
    "/icons/projects/oil-gas/dawo.png": "w-[90px] md:w-[300px]",
    "/icons/projects/oil-gas/saipem.png": "w-[110px] md:w-[160px]",
    "/icons/projects/oil-gas/shell.png": "w-[85px] md:w-[72px]",
    "/icons/projects/oil-gas/technimont.png": "w-[120px] md:w-[226px]",
    "/icons/projects/oil-gas/total.png": "w-[95px] md:w-[96px]",
    
    // Industrial
    "/icons/projects/industrial/access.png": "w-[100px] md:w-[108px]",
    "/icons/projects/industrial/berg.png": "w-[90px] md:w-[108px]",
    // "/icons/projects/industrial/bouy.png": "w-[95px] md:w-[140px]",
    // "/icons/projects/industrial/dangote.png": "w-[110px] md:w-[160px]",
    // "/icons/projects/industrial/elektrint.png": "w-[120px] md:w-[170px]",
    // "/icons/projects/industrial/honeywell.png": "w-[100px] md:w-[150px]",
    // "/icons/projects/industrial/kinetic.png": "w-[130px] md:w-[180px]",
    "/icons/projects/industrial/me.png": "w-[85px] md:w-[120px]",
    "/icons/projects/industrial/mar.png": "w-[90px] md:w-[120px]",
    "/icons/projects/industrial/ramit.png": "w-[100px] md:w-[120px]",
    "/icons/projects/industrial/tofa.png": "w-[95px] md:w-[140px]",
    // "/icons/projects/industrial/vacc.png": "w-[90px] md:w-[130px]",
    // "/icons/projects/industrial/kenol.png": "w-[110px] md:w-[160px]",
    // "/icons/projects/industrial/lubell.png": "w-[130px] md:w-[180px]"
  };

  return (
    <div className="px-[16px] md:px-[80px] md:pb-[0px]">
      <div className="divide-y divide-[#E25319] border-y border-[#E25319]">
        {categories.map((category) => (
          <div key={category.id} className="">
            <div
              className={`flex justify-between items-center cursor-pointer ${
                openSection === category.id ? "border-b border-[#E25319] pb-0 md:pb-[0px]" : ""
              }`}
              onClick={() => toggleSection(category.id)}
            >
              <h3 className="text-[#001D0D] font-medium text-lg md:text-[18px] md:leading-[36px] md:pl-[10px] py-4 md:pt-[10px] md:pb-[10px]">
                {category.name}
              </h3>
              <div className="text-[#001D0D] md:pr-[20px]">
                {openSection === category.id ? (
                  <img src="/icons/award/minus.svg" alt="minus" />
                ) : (
                  <img src="/icons/award/addition.svg" alt="plus" />
                )}
              </div>
            </div>

            {openSection === category.id && (
              <div className="mt-4 pb-6 md:mt-[0px] md:pt-[20px] md:pb-[60px]">
                <div className={`grid ${
                  category.id === 5 
                    ? "grid-cols-5 md:grid-cols-6 md:gap-x-[50px]" 
                    : "grid-cols-4 md:grid-cols-6 md:gap-x-[60px]"
                } gap-4  md:gap-y-[30px]`}>
                  {category.logos.map((logo, index) => (
                    <div key={`${category.name}-${index}`} className="flex justify-center w-full h-full">
                      <img 
                        src={logo} 
                        alt={`Partner logo ${index + 1}`} 
                        className={`${iconSizes[logo]} object-contain`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersShowcaseComponent;