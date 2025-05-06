import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: "/images/Home/hero2.png",
      title: "Built to International Standards, Made for Africa",
      description:
        "Since 1978, MicCom Cables & Wires Ltd has been a trailblazer in the Nigerian manufacturing industry—delivering top-quality electrical cables and wires designed to meet both local and international standards.",
    },
    {
      id: 2,
      imageUrl: "/images/Home/hero2.png",
      title: "Providing Trusted Cable Solutions Since 1978",
      description:
        "Trusted for over four decades to deliver high-quality cable solutions. From homes to high-rise buildings and national infrastructure, we have been powering progress across the continent with unmatched expertise and innovation.",
    },
    {
      id: 3,
      imageUrl: "/images/Home/hero2.png",
      title: "Providing Trusted Cable Solutions Since 1978",
      description:
        "Trusted for over four decades to deliver high-quality cable solutions. From homes to high-rise buildings and national infrastructure, we have been powering progress across the continent with unmatched expertise and innovation.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] md:h-[764px] overflow-hidden">
      {/* Slideshow */}
      <div className="relative w-full h-full">
        {slides.map((slide, index: number) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#0000008C]"></div>
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-[16px] md:px-[80px]">
                <div className="max-w-3xl">
                  <h1 className="text-3xl md:text-[56px] font-medium text-white md:leading-[68px] md:mb-[40px] mb-[30px]">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-[16px] md:leading-[24px] text-white/90 max-w-2xl font-medium ">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-[80px] left-0 right-0 px-[16px] md:px-[80px] ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[15px] md:space-x-[50px] ">
            {slides.map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`relative w-[50px] h-[10px] md:w-[120px] md:h-[10px] flex items-center justify-center mt-[10px] ${
                    index === currentSlide
                      ? "border-r-2 border-b-2 border-l-2 border-[#F8F8F8]"
                      : "border-r-2 border-b-2 border-l-2 border-[#F8F8F8]/30"
                  }`}
                >
                  <span
                    className={`text-[14px] mb-[20px] ${
                      index === currentSlide ? "text-white" : "text-white/60"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-[10px]">
            <button
              onClick={prevSlide}
              className="rounded-full hover:bg-white/20 flex items-center justify-center transition-colors rotate-180"
              aria-label="Previous slide"
            >
              <img src="/icons/home/arrow-right.svg" alt="Previous" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <img src="/icons/home/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
