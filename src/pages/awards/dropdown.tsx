import { useState } from "react";

interface AccordionSection {
  id: "awards" | "certificates" | "son" | "iso" | "permits";
  title: string;
  items: Array<string | { main: string; subItems: string[] }> ;
}

export default function AwardsAccordion() {
  const [openSection, setOpenSection] = useState<AccordionSection["id"] | null>(
    "awards"
  );

  const toggleSection = (sectionId: AccordionSection["id"]): void => {
    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  const accordionData: AccordionSection[] = [
    {
      id: "awards",
      title: "Awards for Quality & Excellence",
      items: [
        "Gold Medal Award for Quality",
        "International Africa for Quality",
        "International Trophy for Technology",
        "Swiss Gold Award for Quality",
        "Product Quality Award - Standards Organisation of Nigeria (SON)",
      ],
    },
    {
      id: "certificates",
      title: "Certificates of Membership & Recognition",
      items: [
        "Certificate of Membership – Manufacturers Association of Nigeria (MAN)",
        "Cable Manufacturers Association of Nigeria (CAMAN)",
        "DUNS & BRADSTREET Certificate"
      ],
    },
    {
      id: "son",
      title: "Standards Organisation of Nigeria (SON) Certifications",
      items: [
        "Certificate of Product Quality – Standards Organisation of Nigeria (SON)",
        "Certificate of Product Quality (Singles Cables, AAC, Multicore Elect. Cables)",
        "NIS Certificate on Quality Management System Conformity",
        "NIS-SON Silver",
        "NIS-SON Gold Award",
      ],
    },
    {
      id: "iso",
      title: "ISO Management System Certification",
      items: [
        "ISO 9001:2015",
        "ISO 14001:2015",
        "ISO 45001:2018",
      ],
    },
    {
      id: "permits",
      title: "Regulatory & Operational Permits",
      items: [
        {
          main: "DPR Permit to Operate As An Oil Industry Service Company:",
          subItems: [
            "Specialized Category",
            "Major Category",
          ],
        },
        "Nigerian Content Equipment Certificate (NCEC)",
        "Nigerian Oil and Gas Industry Content Joint Qualification System (NOGICJQS) Registration Certificate",
        "Nigerian Petroleum Exchange (NIPEX) Certificate",
        "Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) Certificate",
        "Nigerian Upstream Petroleum Regulatory Commission (NUPRC) Certificate"
      ],
    },
  ];

  return (
    <div className="p-[16px] md:px-[80px] md:pb-[0px] md:pt-[0px]">
      <div className="divide-y divide-[#0000004D] border-b border-[#0000004D]">
        {accordionData.map((section) => (
          <div key={section.id} className=" ">
            <div
              className={`flex justify-between items-center cursor-pointer  ${
                openSection === section.id
                  ? "border-b border-[#0000004D] pb-0 md:pb-[0px]"
                  : ""
              }`}
              onClick={() => toggleSection(section.id)}
            >
              <h3 className="text-[#001D0D] font-medium text-lg md:text-[22px] md:leading-[36px] md:pl-[10px] py-4  md:pt-[20px] md:pb-[20px]">
                {section.title}
              </h3>
              <div className="text-[#001D0D] md:pr-[20px]">
                {openSection === section.id ? (
                  <img src="/icons/award/minus.svg" alt="minus" />
                ) : (
                  <img src="/icons/award/addition.svg" alt="minus" />
                )}
              </div>
            </div>

            {openSection === section.id && section.items.length > 0 && (
              <div className="mt-4 divide-y divide-[#0000004D]">
                <div className="text-[#001D0D] pl-1 md:pl-[20px] pb-[20px] md:pb-[20px] space-y-[20px]">
                  {section.items.map((item, index) => (
                    <div key={index}>
                      {typeof item === "string" ? (
                        <div className="flex text-sm md:text-base md:max-w-[750px] md:leading-[26px]">
                          <div>•</div>
                          <div className="pl-[10px]">{item}</div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex text-sm md:text-base md:max-w-[550px] md:leading-[26px]">
                            <div>•</div>
                            <div className="pl-[10px]">{item.main}</div>
                          </div>
                          <div className="pl-[20px] space-y-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="flex text-sm md:text-base md:max-w-[550px] md:leading-[26px]"
                              >
                                <div>•</div>
                                <div className="pl-[10px]">{subItem}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
}
