export default function CoreValues() {
  const coreValues = [
    {
      title: "Deliver Quality Products & Services Always",
      description:
        "We are committed to excellence, ensuring every product and service we offer meets the highest standards of performance, reliability, and customer satisfaction.",
    },
    {
      title: "Act with Integrity",
      description:
        "We uphold honesty, transparency, and strong moral principles in all our dealings, building lasting trust with clients, partners, and one another.",
    },
    {
      title: "Act with Urgency and Purpose",
      description:
        "We approach every task with speed and clarity, ensuring that our actions are purposeful, efficient, and aligned with our greater mission.",
    },
    {
      title: "Show Respect for Others and Ourselves",
      description:
        "We treat everyone with dignity and courtesy, fostering a positive environment where mutual respect and professional growth thrive.",
    },
    {
      title: "Eliminate Waste and Wasteful Practices",
      description:
        "We strive for operational efficiency by reducing waste, maximizing resources, and focusing on what truly adds value to our work and our customers.",
    },
    {
      title: "Take Cleanliness as a Way of Life",
      description:
        "We maintain clean, organized spaces as a standard of professionalism—promoting safety, discipline, and pride in our work environment.",
    },
    {
      title: "Maintain a Safe Environment at All Times",
      description:
        "We prioritize the health and safety of our people by upholding strict safety practices and cultivating a culture of responsibility.",
    },
    {
      title: "Be Disciplined in All We Do",
      description:
        "We are committed to structure, consistency, and accountability—ensuring our work is timely, thorough, and dependable.",
    },
    {
      title: "Be Practical in Our Approach to Work",
      description:
        "We focus on solutions that are effective and create meaningful impact. By staying grounded in practicality, we deliver efficient results that solve real-world challenges.",
    },
  ];

  return (
    <div>
      <div className="px-4 py-8 md:px-[80px] md:pt-[0px] md:pb-[40px]">
        {/* Header */}
        <div className="mb-6 text-justify">
          <p className="text-[#E25319] md:text-[16px] md:leading-[30px] font-medium text-sm mb-2">
            OUR CORE VALUES
          </p>
          <h1 className="text-2xl md:leading-[50px] md:text-[40px] font-medium text-[#001D0D] mb-4">
            The Principles That Power Our Purpose
          </h1>
          <p className="text-[#001D0D] text-sm md:text-[14px] md:leading-[30px]">
            At MicCom Cables & Wires Ltd, our core values are more than
            words—they're the foundation of how we work, serve, and grow. They
            guide our decisions, shape our culture, and ensure that we
            consistently deliver excellence in everything we do. These values
            reflect our commitment to quality, integrity, safety, and
            progress—for our people, our partners, and the communities we serve.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-[40px] md:gap-x-[81px] mt-12">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-3 md:mb-[20px]">
                <img src="/icons/about/collection-star.svg" alt="" />
              </div>
              <h3 className="font-medium text-[#001D0D] md:text-[18px] mb-2 md:leading-[30px]">
                {value.title}
              </h3>
              <p className="text-[#001D0D] text-justify text-sm md:text-[14px] md:leading-[24px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-[#004820] mt-12 md:mt-[80px] mb-4"></div>

      </div>
    </div>
  );
}
