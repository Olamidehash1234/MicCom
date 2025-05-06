const PartnersShowcaseComponent = () => {
  const categories = [
    {
      id: 1,
      name: "DISCO",
      image: "/images/Projects/disco.png",
      logos: [
        "/icons/projects/disco/EEDC.svg", 
        "/icons/projects/disco/ekedc.svg", 
        "/icons/projects/disco/ikeja.svg", 
        "/icons/projects/disco/phedc.svg", 
        
      ]
    },
    {
      id: 2,
      name: "Government",
      image: "/images/Projects/GOVERNMENT.png", 
      logos: [
        "/icons/projects/government/lseb.svg",
        "/icons/projects/government/ogun.svg",
        "/icons/projects/government/cbn.svg",
        "/icons/projects/government/defense.svg",
        
      ]
    },
    {
      id: 3,
      name: "Institutions",
      image: "/images/Projects/institution.png",
      logos: [
        "/icons/projects/institution/abuad.svg", 
        "/icons/projects/institution/CU.svg", 
        "/icons/projects/institution/DP.svg", 
        "/icons/projects/institution/mfm.svg", 
        "/icons/projects/institution/oopl.svg", 
        "/icons/projects/institution/redeem.svg", 
        "/icons/projects/institution/winners.svg", 
      ]
    },
    {
      id: 4,
      name: "Oil & Gas",
      image: "/images/Projects/oil-gas.png",
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
      image: "/images/Projects/industrial.png", // Replace with your actual image path - full width
      logos: [
        "/icons/projects/industrial/access.svg",
        "/icons/projects/industrial/berg.svg",
        "/icons/projects/industrial/bouy.svg",
        "/icons/projects/industrial/dangote.svg",
        "/icons/projects/industrial/elektrint.svg",
        "/icons/projects/industrial/honeywell.svg",
        "/icons/projects/industrial/kinetic.svg",
        "/icons/projects/industrial/me.svg",
        "/icons/projects/industrial/lubell.svg",
        "/icons/projects/industrial/mar.svg",
        "/icons/projects/industrial/orritech.svg",
        "/icons/projects/industrial/ramit.svg",
        "/icons/projects/industrial/tofa.svg",
        "/icons/projects/industrial/vacc.svg",
        "/icons/projects/industrial/kenol.svg",  
      ]
    }
  ];

  return (
    <div className="px-[16px] py-[40px] md:p-[80px]">
      {/* Grid layout for sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First two sections side by side on medium+ screens */}
        <div className="bg-white p-4 rounded shadow">
          <div className="h-40 md:h-[232px] mb-4 overflow-hidden">
            <img 
              src={categories[0].image} 
              alt={categories[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm md:text-[22px] md:mb-[24px] md:leading-[36px] font-medium mb-3 text-gray-700">{categories[0].name}</p>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-[33px]">
            {categories[0].logos.map((logo, index) => (
              <div key={`disco-${index}`} className="flex items-center justify-center">
                <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-[80px] md:max-h-[120px] max-w-full" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <div className="h-40 md:h-[232px] mb-4 overflow-hidden">
            <img 
              src={categories[1].image} 
              alt={categories[1].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm md:text-[22px] md:mb-[24px] md:leading-[36px] font-medium mb-3 text-gray-700">{categories[1].name}</p>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-[33px]">
            {categories[1].logos.map((logo, index) => (
              <div key={`substation-${index}`} className="flex items-center justify-center">
                <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-[80px] md:max-h-[120px] max-w-full" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Second two sections side by side on medium+ screens */}
        <div className="bg-white p-4 rounded shadow">
          <div className="h-40 md:h-[232px] mb-4 overflow-hidden">
            <img 
              src={categories[2].image} 
              alt={categories[2].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm md:text-[22px] md:mb-[24px] md:leading-[36px] font-medium mb-3 text-gray-700">{categories[2].name}</p>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-[33px]">
            {categories[2].logos.map((logo, index) => (
              <div key={`distribution-${index}`} className="flex items-center justify-center">
                <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-[80px] md:max-h-[120px] max-w-full" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <div className="h-40 md:h-[232px] mb-4 overflow-hidden">
            <img 
              src={categories[3].image} 
              alt={categories[3].name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm md:text-[22px] md:mb-[24px] md:leading-[36px] font-medium mb-3 text-gray-700">{categories[3].name}</p>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-[33px]">
            {categories[3].logos.map((logo, index) => (
              <div key={`oil-gas-${index}`} className="flex items-center justify-center">
                <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-[80px] md:max-h-[120px] max-w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Full width industrial section */}
      <div className="bg-white p-4 rounded shadow mt-6">
        <div className="h-40 md:h-[232px] mb-4 overflow-hidden">
          <img 
            src={categories[4].image} 
            alt={categories[4].name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm md:text-[22px] md:leading-[36px] font-medium md:mb-[24px] mb-3 text-gray-700">{categories[4].name}</p>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4 md:gap-[40px]">
          {categories[4].logos.map((logo, index) => (
            <div key={`industrial-${index}`} className="flex items-center justify-center">
              <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-[80px] md:max-h-[120px] max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersShowcaseComponent;