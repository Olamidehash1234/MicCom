import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

interface ProductSection {
  id: 'copper' | 'cables' | 'aluminum' | 'flexible' | 'armoured' | 'acsr' | 'other';
  title: string;
  products: {
    product: string;
    type: string;
    application: string;
  }[];
}

export default function ProductsAccordion(){
  const [openSection, setOpenSection] = useState<ProductSection['id'] | null>('copper');
  const location = useLocation();

  useEffect(() => {
    // Get the hash from URL without the '#' symbol
    const hash = location.hash.replace('#', '');
    
    // If there's a hash and it matches one of our product IDs, open that section
    if (hash && ['copper', 'cables', 'aluminum', 'flexible', 'armoured', 'acsr', 'other'].includes(hash)) {
      setOpenSection(hash as ProductSection['id']);
      
      // Scroll to the section with smooth behavior
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]); // Run when hash changes

  const toggleSection = (sectionId: ProductSection['id']): void => {
    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  const productData: ProductSection[] = [
    {
      id: 'copper',
      title: '1.  All Copper Conductor',
      products: [
        {
          product: 'Copper Overhead Line (Stranded)',
          type: 'COHL',
          application: 'For use in earthing of electrical installations and for overhead lines'
        },
        {
          product: 'PVC insulated and Sheathed - Single-core copper cable 0.6/1kv',
          type: 'NCYY 1-Core',
          application: 'Used in installations, cable ducts/trays, and in industrial plants and substations. Can also be used underground with additional protection.'
        },
        {
          product: 'Flat Two-Core PVC Insulated and Sheathed Copper Cables 300/500V',
          type: 'NCYY F 2-Core',
          application: 'For use in housing, offices, and general installation to be fixed on surface'
        },
        {
          product: 'Flat Three-Core PVC Insulated and Sheathed Copper Cables 300/500V',
          type: 'NCYY F 3-Core',
          application: 'For use in housing and offices, to be fixed on surface'
        },
        {
          product: 'Flat Two -Core PVC Insulated and sheathed copper cables with earth continuity conductor 300/500v',
          type: 'NCYY F + E + 2-Core',
          application: 'General wiring installation to be fixed on surface'
        },
        {
          product: 'Flat Three -Core PVC Insulated and sheathed copper cables with earth continuity conductor 300/500v',
          type: 'NCYY F + E + 3-Core',
          application: 'General wiring installation to be fixed on surface'
        },
      ]
    },
    {
        id: 'cables',
        title: '2. Single & Multi-core Cables',
        products: [
          {
            product: 'PVC Insulated Consumer Connection - Aluminum Cables 0.6/1kv ',
            type: 'NAY',
            application: 'For use in housing, offices, and general installation'
          },
          {
            product: 'PVC Insulated and Sheathed - Single-core Aluminum Cable 0.6/1kv',
            type: 'NAYY',
            application: 'For housing, offices, and laying underground with additional protection. Also used in switch/distribution boards'
          },
          {
            product: 'PVC Insulated and sheathed Two-core -Armoured aluminum mains cables 0.6/1kv',
            type: 'NAYRY/FY 2-Core',
            application: 'General underground electricity supply'
          },
          {
            product: 'PVC Insulated and sheathed Three-core -Armoured aluminum mains cables 0.6/1kv',
            type: 'NAYRY/FY 3-Core',
            application: 'General underground electricity supply'
          },
          {
            product: 'PVC Insulated and sheathed Four-core -Armored aluminum mains cables 0.6/1kv',
            type: 'NAYRY/FY 4-Core',
            application: 'General underground electricity supply'
          },
          {
            product: 'PVC Insulated and sheathed Five-core -Armored aluminum mains cables 0.6/1kv',
            type: 'NAYRY/FY 5-Core',
            application: 'General underground electricity supply'
          },
          {
            product: 'PVC Insulated and sheathed Two- Core non-armored copper mains cables 0.6/1kv',
            type: 'NCYY 2 - Core',
            application: 'For indoor eletrical installation'
          },
          {
            product: 'PVC Insulated and sheathed Three- Core non-armoured copper mains cables 0.6/1kv',
            type: 'NCYY 3- Core',
            application: 'For indoor eletrical installation'
          },
          {
            product: 'PVC Insulated and sheathed Four- Core non-armoured copper mains cables 0.6/1kv',
            type: 'NCYY 4- Core',
            application: 'For indoor eletrical installation'
          },
          {
            product: 'PVC Insulated and sheathed Five- Core non-armoured copper mains cables 0.6/1kv',
            type: 'NCYY 5- Core',
            application: 'For indoor eletrical installation'
          },
        ]
      },
      {
        id: 'aluminum',
        title: '3. All Aluminum Conductor',
        products: [
          {
            product: 'Aluminum Overhead Line (Conductor)',
            type: 'AOHL',
            application: 'For use in low voltage lines (sometimes up to 66KV) and also as flexible busbar connections in High Voltage sub-stations.'
          },
          {
            product: 'PVC Insulated Consumer Connection -Aluminum Cables 0.6/1kv',
            type: 'NAY',
            application: 'For use in housing, offices and general installation'
          },
          {
            product: 'PVC Insulated and sheathed single core- Aluminum consumer connections cables 0.6/1kv',
            type: 'NAYY',
            application: 'For housing, offices and for laying underground with additional protection (where likely mechanical damage is possible). Also used in switch and distribution boards.'
          },
        ]
      },
      {
        id: 'flexible',
        title: '4. Flexible Cables',
        products: [
          {
            product: 'Ordinary Flexible Cords, PVC Insulated And Sheated 300/500 V',
            type: 'NCYY - R...f ',
            application: 'Use in light fittings and household appliances and office machines where the mechanical stresses are low.'
          },
          {
            product: 'Flexible Cables, PVC Insulated and sheathed 300/500V',
            type: 'NCYY - R...f',
            application: 'Use in light fittings and other indoor electrical installation'
          },
        ]
      },
      {
        id: 'armoured',
        title: '5. Armoured / Non-Armoured Cables',
        products: [
          {
            product: 'PVC Insulated and sheathed Two - Core armoured copper mains cables 0.6/1kv',
            type: 'NCYRY/FY 2- Core',
            application: 'For general underground electricity supply, where mechanical damages are expected to occur'
          },
          {
            product: 'PVC Insulated and sheathed Three - Core armoured copper mains cables 0.6/1kv',
            type: 'NCYRY/FY 3- Core',
            application: 'For general underground electricity supply, where mechanical damages are expected to occur'
          },
          {
            product: 'PVC Insulated and sheathed Four- Core armoured copper mains cables 0.6/1kv',
            type: 'NCYRY/FY 4- Core',
            application: 'For general underground electricity supply, where mechanical damages are expected to occur'
          },
          {
            product: 'PVC Insulated and sheathed Five- Core armoured copper mains cables 0.6/1kv',
            type: 'NCYRY/FY 5- Core',
            application: 'For general underground electricity supply, where mechanical damages are expected to occur'
          },
          {
            product: 'PVC Insulated and sheathed non-armoured copper mains cables 0.6/1kv with numbered cores',
            type: 'NCYY control cable 1.5 sqmm',
            application: 'For indoor and outdoor electricity supply, in industrial plants , substation and power distribution schemes'
          },
          {
            product: 'PVC Insulated and sheathed non-armoured copper mains cables 0.6/1kv with numbered cores',
            type: 'NCYY control cable 2.5 sqmm',
            application: 'For indoor and outdoor electricity supply, in industrial plants , substation and power distribution schemes'
          },
          {
            product: 'PVC Insulated and sheathed non-armoured copper mains cables 0.6/1kv with numbered cores',
            type: 'NCYY control cable 4 sqmm',
            application: 'For indoor and outdoor electricity supply, in industrial plants , substation and power distribution schemes'
          },
          {
            product: 'PVC Insulated and sheathed armoured copper mains cables 0.6/1kv with numbered cores',
            type: 'NCYY/FY -cc 1.5 sqmm',
            application: 'For indoor and outdoor electricity supply, in industrial plants , substation and power distribution schemes'
          },
          {
            product: 'PVC Insulated and sheathed armoured copper mains cables 0.6/1kv with numbered cores',
            type: 'NCYY/FY -cc 2.5 sqmm',
            application: 'For indoor and outdoor electricity supply, in industrial plants , substation and power distribution schemes'
          },
          {
            product: 'PVC Insulated and sheathed armoured copper mains cables 0.6/1kv with numbered cores',
            type: 'NCYY/FY -cc 4 sqmm',
            application: 'For indoor and outdoor electricity supply, in industrial plants , substation and power distribution schemes'
          },
        ]
      },
      {
        id: 'acsr',
        title: '6. ACSR (Aluminum Conductor Steel Reinforced)',
        products: [
          {
            product: 'Aluminum Conductor Steel Re-Inforced',
            type: 'ACSR',
            application: 'For use in overhead lines of medium, high and very high voltage'
          },
        ]
      },
      {
        id: 'other',
        title: '7. Other Products',
        products: [
          {
            product: 'Medium Voltage cables are triple layered insulated and manufactured for a voltage range from 3.3/6.6kv up to 19/33kv as per IEC and BS specifications.',
            type: 'Single Core Cables- Copper/Aluminium, Armoured / Un-armoured, pvc/pe/lsf sheathing from 50mm² to 1000mm². Three Core Cables- 6.6kv to 33kv with Copper/Aluminium, Armoured / Un-armoured, pvc/pe/lsf sheathing up to 400mm²',
            application: 'For bulk power transmission and distribution'
          },
          {
            product: 'HIGH VOLTAGE CABLES Manufacturing of XLPE insulated power cables from 60kv – 500kv',
            type: 'Conductors in either copper or aluminium. Conductor sizes from 150mm² - 2500mm². Cables are currently finished with a combination of either a lead sheath and copper wire screen or a laminated sheath and copper wire screen',
            application: 'For bulk power transmission and distribution'
          },
          {
            product: 'PERFORMANCE CABLES',
            type: 'Low smoke and Halogen free cables',
            application: 'For areas requiring circuit Integrity during fire mainly in fire alarm systems, sprinkler systems in schools, hospitals, cinemas and railways'
          },
          {
            product: 'INSTRUMENTATION AND CONTROL CABLES',
            type: 'Single and multicore cables',
            application: 'Used within industrial manufacturing plants for control, communication, data and voice transmission signals. These cables are used typically in industrial projects and OGP industries'
          },
          {
            product: 'SOLAR CABLES',
            type: 'Single and multicore cables',
            application: 'Used for interconnecting solar panels and other electrical components of a photovoltaic system'
          },
          {
            product: 'MARINE CABLES',
            type: 'Halogen free, flame retardant and self-extinguishing cables',
            application: 'Range of cables customized for the marine and offshore industry'
          },
          {
            product: 'PETROCHEMICAL CABLES',
            type: 'Single and multicore cables',
            application: 'Used in areas where chemical products consisting of acids, bases and different hydrocarbons are regularly put to use'
          },
        ]
      },
  ];

  return (
    <div className="p-[16px] md:pt-[0px] md:px-[80px] md:pb-[0px]">
      <div className="divide-y divide-[#0000004D] mx-auto border-y border-[#0000004D]">
        {productData.map((section) => (
          <div 
            key={section.id} 
            id={section.id}
            className="py-4 scroll-mt-32 " // Add scroll margin to account for fixed header
          >
            <div
              className={`flex justify-between items-center cursor-pointer  ${
                openSection === section.id ? " pb-4 md:pb-[10px]" : ""
              }`}
              onClick={() => toggleSection(section.id)}
            >
              <h3 className="text-[#001D0D] font-medium text-[14px] md:text-[16px] md:leading-[36px] md:pl-[10px]">
                {section.title}
              </h3>
              <div className="text-[#001D0D] md:pr-[20px]">
                {openSection === section.id ? 
                  <img src="/icons/award/minus.svg" alt="minus" /> : 
                  <img src="/icons/award/addition.svg" alt="plus" />
                }
              </div>
            </div>

            {openSection === section.id && section.products.length > 0 && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#0000004D] md:max-w-[1800px]">
                      <th className="text-left pb-[20px] px-4 text-sm font-medium text-[#001D0D] w-[30%]">Product</th>
                      <th className="text-center pb-[20px] px-4 text-sm font-medium text-[#001D0D] w-[30%]">Type</th>
                      <th className="text-left pb-[20px] px-4 text-sm font-medium text-[#001D0D] w-[40%]">Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0000004D] justify-between md:text-justify">
                    {section.products.map((item, index) => (
                      <tr key={index}>
                        <td className="py-6 px-4 md:py-[10px] text-sm text-[#001D0D] w-[30%]">{item.product}</td>
                        <td className="py-6 md:py-[10px] px-4 text-sm text-center text-[#001D0D] w-[30%] ">{item.type}</td>
                        <td className="py-6 md:py-[10px] px-4 text-sm text-[#001D0D] w-[40%]">{item.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
