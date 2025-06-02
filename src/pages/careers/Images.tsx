interface CardProps {
  text: string;
  image: string; // Add image prop
}

const Card = ({ text, image }: CardProps) => {
  return (
    <a href="mailto:info@miccomcables.com" className="flex-1 group cursor-pointer">
      <div className="relative md:h-[320px] rounded-[6px]">
        <img
          src={image}
          alt="Career opportunity"
          className="w-full h-full md:h-[320px] object-cover rounded-[6px]"
        />
        {/* Add gradient overlay */}
        <div 
          className="absolute inset-0 rounded-[6px]"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 75.68%)'
          }}
        />
        <div className="absolute inset-0 flex items-end z-10">
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
      image: "/images/career/institution.png" // Add specific image path
    },
    {
      text: "Learn more about our Students Internship programmes",
      image: "/images/career/intern.png" // Add specific image path
    },
  ];

  return (
    <div className="px-[16px] py-[40px] md:px-[80px] md:pb-[60px] md:pt-[0px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[40px]">
        {cardData.map((card, index) => (
          <Card key={index} text={card.text} image={card.image} />
        ))}
      </div>
    </div>
  );
}