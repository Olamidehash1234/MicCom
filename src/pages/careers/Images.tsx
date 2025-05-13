interface CardProps {
  text: string;
}

const Card = ({ text }: CardProps) => {
  return (
    <a href="mailto:info@miccomcables.com" className="flex-1 group cursor-pointer">
      <div className="relative overflow-hidden md:h-[220px] rounded-[6px]">
        <img
          src="/images/career/image.png"
          alt="Career opportunity"
          className="w-full h-[280px] md:h-[220px] object-cover  rounded-[6px]"
        />
        <div className="absolute inset-0 flex items-end">
          <p className="text-[#F8F8F8] px-[20px] py-[20px] text-[18px] md:text-[16px] md:leading-[20px]">
            {text}
          </p>
        </div>
      </div>
    </a>
  );
};

export default function CareerCards() {
  const cardData = [
    {
      text: "Learn more about our strategic partnership with tertiary institutions",
    },
    {
      text: "Learn more about our Graduate training programmes",
    },
    {
      text: "Learn more about our Students Internship programmes",
    },
  ];

  return (
    <div className="px-[16px] py-[40px] md:px-[80px] md:pb-[60px] md:pt-[0px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[40px]">
        {cardData.map((card, index) => (
          <Card key={index} text={card.text} />
        ))}
      </div>
    </div>
  );
}
