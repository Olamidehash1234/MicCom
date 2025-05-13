export default function CSRInitiatives() {
  const Images = {
    education: "/images/social-responsibilities/education.png",
    community: "/images/social-responsibilities/community.png",
    faith: "/images/social-responsibilities/faith.png",
    health: "/images/social-responsibilities/health.png",
  };

  const initiatives = [
    {
      id: "education",
      title: "Education & Academic Development",
      image: Images.education,
      programs: [
        {
          title: "MicCom Foundation for Educational Development",
          description:
            "Offers scholarships and bursaries to pupils/primary and post-secondary students across Nigeria, supporting academic excellence and access to education.",
        },
        {
          title: "MicCom University Funds for Teaching & Research",
          description:
            "Supports the development of teaching and research capabilities in Nigerian universities to strengthen higher education outcomes.",
        },
        {
          title: "Donation of Technical Workshops, Laboratories & Classrooms",
          description:
            "Provides essential infrastructure to various educational institutions, equipping students with practical learning environments.",
        },
      ],
    },
    {
      id: "community",
      title: "Community Development & Infrastructure",
      image: Images.community,
      programs: [
        {
          title: "Electrification of Various Communities",
          description:
            "Brings power to underserved areas, improving living standards and enabling economic activity.",
        },
        {
          title: "Donation of Street Lights",
          description:
            "Enhances safety, visibility, and nighttime visibility in several communities across Nigeria.",
        },
        {
          title: "Donation of Water Wells",
          description:
            "Improves access to clean water for households across multiple compounds in various Nigerian states."
        },
        {
          title: "Donation of Boreholes",
          description:
            "Improves access to clean water for households across multiple compounds in various Nigerian states.",
        },
      ],
    },
    {
      id: "faith",
      title: "Faith & Social Harmony",
      image: Images.faith,
      programs: [
        {
          title: "MicCom Foundation for Evangelism",
          description:
            "Promotes moral and religious education with a mission to foster values-based development throughout the country.",
        },
        {
          title: "Donations to Churches and Mosques",
          description:
            "Contributes to the building and renovation of places of worship to support spiritual life and community gathering across religious lines.",
        },
      ],
    },
    {
      id: "health",
      title: "Health & Wellness Initiatives",
      image: Images.health,
      programs: [
        {
          title: "MicCom Foundation for Cancer Research",
          description:
            "Focused on empowering individuals and communities to reduce the burden of cancer through awareness, research support, and preventive action.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] pt-4 md:pt-[0px] px-[16px] md:px-[80px]">
        {initiatives.map((initiative) => (
          <div
            key={initiative.id}
            className="bg-[#FFFAF0] rounded-[6px] md:rounded-[10px] overflow-hidden shadow-sm"
          >
            {/* Image */}
            <div className="h-52 md:h-[232px] overflow-hidden p-[15px] md:px-[20px] md:pt-[20px] md:pb-[0px] ">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>

            {/* Content */}
            <div className="p-[15px] md:p-[20px]">
              <h3 className="text-[#001D0D] font-semibold text-lg mb-4">
                {initiative.title}
              </h3>

              <div className="space-y-4">
                {initiative.programs.map((program, index) => (
                  <div key={index} className="space-y-1 text-justify">
                    <div className="flex items-start md:items-center mb-2 md:mb-[0px]">
                      <img
                        src="/icons/social/small-star.svg"
                        alt=""
                        className="mr-2 md:mr-[10px]"
                      />
                      <h4 className="text-[#001D0D] font-medium text-[16px] md:leading-[26px] md:text-[16px] leading-tight ">
                        {program.title}
                      </h4>
                    </div>
                    <p className="text-[#001D0D] text-[14px] leading-relaxed pl-6 md:pl-[30px] md:text-[14px] md:leading-[24px]">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-[#00482033] mt-16 md:mt-[60px]"></div>
    </div>
  );
}
