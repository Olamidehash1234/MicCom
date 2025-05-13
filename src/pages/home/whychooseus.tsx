const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "/icons/home/medal.svg", // Replace with your icon path
      title: "45+",
      description: "Years of Experience",
    },
    {
      id: 2,
      icon: "/icons/home/certificate.svg", // Replace with your icon path
      title: "Tripple ISO Certified",
      description: "Certification",
    },
    {
      id: 3,
      icon: "/icons/home/global.svg", // Replace with your icon path
      title: "Pan-African",
      description: "Reach",
    },
  ];

  return (
    <section className="w-full pt-12 md:pb-[10px] md:pt-[0px] lg:py-20]">
      <div className="w-full h-px bg-[#00482033] mb-16 md:mb-[60px]"></div>
      <div className="px-[16px] md:px-[80px] bg-[#F9F3E8]" >
        <h2 className="text-3xl md:text-[40px] lg:text-5xl font-medium text-[#001D0D] mb-12 md:mb-[40px] md:leading-[50px]">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[40px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col p-[30px] md:p-[30px] rounded-lg border-[1px] border-[#E25319] bg-[#F9F3E8] transition-all duration-300 hover:bg-[#E25319] group"
            >
              <div className="mb-6 md:mb-[50px]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 md:w-[70px] md:h-[70px] transition-all duration-100 group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </div>

              <h3 className="text-[26px] md:text-[34px] md:leading-[40px] font-medium text-[#001D0D] mb-2 md:mb-[10px] transition-colors duration-100 group-hover:text-white">
                {feature.title}
              </h3>

              <div className="h-0.5 w-full md:h-[2px] bg-[#E25319] mb-4 md:mb-[10px] transition-colors duration-100 group-hover:bg-white"></div>

              <p className="text-base md:text-[18px] text-[#001D0D] md:leading-[30px] transition-colors duration-100 group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle top border */}
      <div className="w-full h-px bg-[#00482033] mt-16 md:mt-[60px]"></div>
    </section>
  );
};

export default WhyChooseUs;
