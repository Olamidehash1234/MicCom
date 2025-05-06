import { useState } from "react";

interface AccordionSection {
  id: "awards" | "certificates" | "son" | "iso" | "permits";
  title: string;
  items: string[];
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
        "Gold Medal Award for Quality - Trademarks Publication Corporation, Washington DC",
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
        "Gold Medal Award for Quality - Trademarks Publication Corporation, Washington DC",
        "International Africa for Quality",
        "International Trophy for Technology",
        "Swiss Gold Award for Quality",
        "Product Quality Award - Standards Organisation of Nigeria (SON)",
      ],
    },
    {
      id: "son",
      title: "Standards Organisation of Nigeria (SON) Certifications",
      items: [
        "Gold Medal Award for Quality - Trademarks Publication Corporation, Washington DC",
        "International Africa for Quality",
        "International Trophy for Technology",
        "Swiss Gold Award for Quality",
        "Product Quality Award - Standards Organisation of Nigeria (SON)",
      ],
    },
    {
      id: "iso",
      title: "ISO Quality Management System Certifications",
      items: [
        "Gold Medal Award for Quality - Trademarks Publication Corporation, Washington DC",
        "International Africa for Quality",
        "International Trophy for Technology",
        "Swiss Gold Award for Quality",
        "Product Quality Award - Standards Organisation of Nigeria (SON)",
      ],
    },
    {
      id: "permits",
      title: "Regulatory & Operational Permits",
      items: [
        "Gold Medal Award for Quality - Trademarks Publication Corporation, Washington DC",
        "International Africa for Quality",
        "International Trophy for Technology",
        "Swiss Gold Award for Quality",
        "Product Quality Award - Standards Organisation of Nigeria (SON)",
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
                  ? "border-b border-[#0000004D] pb-4 md:pb-[0px]"
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
                <div className="text-[#001D0D] pl-1 md:pl-[20px] md:pb-[20px] space-y-[20px]">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex text-sm md:text-base md:max-w-[522px] md:leading-[26px] "
                    >
                      <div className="">•</div>
                      <div className=" pl-[10px]">{item}</div>
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
