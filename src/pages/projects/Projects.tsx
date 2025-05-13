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
        "/icons/projects/government/lseb.svg",
        "/icons/projects/government/ogun.svg",
        "/icons/projects/government/cbn.svg",
        "/icons/projects/government/defense.svg",
        
      ]
    },
    {
      id: 2,
      name: "DISCO",
      // image: "/images/Projects/disco.png",
      logos: [
        "/icons/projects/disco/EEDC.svg", 
        "/icons/projects/disco/ekedc.svg", 
        "/icons/projects/disco/ikeja.svg", 
        "/icons/projects/disco/phedc.svg", 
        
      ]
    },
    {
      id: 3,
      name: "Institutions",
      // image: "/images/Projects/institution.png",
      logos: [
        "/icons/projects/institution/abuad.svg", 
        "/icons/projects/institution/oopl.svg", 
        "/icons/projects/institution/redeemers.png", 
        "/icons/projects/institution/CU.svg", 
        "/icons/projects/institution/DP.svg", 
        "/icons/projects/institution/mfm.svg", 
        "/icons/projects/institution/winners.svg", 
      ]
    },
    {
      id: 4,
      name: "Oil & Gas",
      // image: "/images/Projects/oil-gas.png",
      logos: [
        "/icons/projects/oil-gas/behind.svg",
        "/icons/projects/oil-gas/dawo.svg",
        "/icons/projects/oil-gas/saipem.svg",
        "/icons/projects/oil-gas/shell.svg",
        "/icons/projects/oil-gas/technimont.svg",
        "/icons/projects/oil-gas/total.svg",
        
      ]
    },
    {
      id: 5,
      name: "Industrial",
      // image: "/images/Projects/industrial.png",
      logos: [
        "/icons/projects/industrial/access.svg",
        "/icons/projects/industrial/berg.svg",
        "/icons/projects/industrial/bouy.svg",
        "/icons/projects/industrial/dangote.svg",
        "/icons/projects/industrial/elektrint.svg",
        "/icons/projects/industrial/honeywell.svg",
        "/icons/projects/industrial/kinetic.png",
        "/icons/projects/industrial/me.svg",
        "/icons/projects/industrial/mar.svg",
        "/icons/projects/industrial/orritech.png",
        "/icons/projects/industrial/ramit.svg",
        "/icons/projects/industrial/tofa.svg",
        "/icons/projects/industrial/vacc.svg",
        "/icons/projects/industrial/kenol.svg",
        "icons/projects/industrial/lubell.png",  
      ]
    }
  ];

  return (
    <div className="px-[16px] md:px-[80px] md:pb-[0px]">
      <div className="divide-y divide-[#E25319] border-y border-[#E25319]">
        {categories.map((category) => (
          <div key={category.id} className="">
            <div
              className={`flex justify-between items-center cursor-pointer ${
                openSection === category.id ? "border-b border-[#E25319] pb-4 md:pb-[0px]" : ""
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
              <div className="mt-4 pb-6">
                <div className={`grid  ${
                  category.id === 5 
                    ? "grid-cols-5 md:grid-cols-auto" 
                    : "grid-cols-4 md:grid-cols-6"
                } gap-4 md:gap-x-[60px] md:gap-y-[30px]`}>
                  {category.logos.map((logo, index) => (
                    <div key={`${category.name}-${index}`} className="flex justify-center">
                      <img 
                        src={logo} 
                        alt={`Partner logo ${index + 1}`} 
                        className="w-auto h-auto md:w-auto md:h-auto object-contain"
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