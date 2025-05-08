import { useState, useEffect, useRef } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  icon?: string;
  image?: string;
}

const ProductCategory: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const products: Product[] = [
    {
      id: 1,
      title: "All Copper Conductor (ACC)",
      description:
        "MicCom’s All Copper Conductor cables are engineered for superior conductivity, durability, and resistance to corrosion. Ideal for residential, commercial, and industrial applications, these cables ensure efficient power transmission with minimal energy loss. Made from 99.9% pure copper, they deliver exceptional performance in both low and medium-voltage installations.",
      buttonText: "Learn more",
    },
    {
      id: 2,
      title:
        "Wiring Cables(Single Core PVC Insulated PVC Sheated, Multi Core Flat Cables",
      description:
        "Whether you need single-core or multi-core cables, MicCom offers robust solutions designed to meet diverse wiring needs. Our Single & Multiple Cables are suitable for internal wiring, control panels, and power distribution—offering flexibility, easy installation, and long-term reliability in every spool.",
      buttonText: "Learn more",
    },
    {
      id: 3,
      title: "All Aluminum Conductor (AAC)",
      description:
        "Lightweight, corrosion-resistant, and cost-effective, our All Aluminum Conductors are ideal for overhead power lines and transmission applications. These conductors are especially effective in coastal or high-corrosion environments, delivering strong conductivity and ease of handling while maintaining structural integrity.",
      icon: "/api/placeholder/40/40",
      image: "/api/placeholder/400/300",
      buttonText: "Learn more",
    },
    {
      id: 4,
      title: "Armoured/Non-Armoured Cables",
      description:
        "From underground systems to industrial installations, our Armoured and Non-Armoured Cables offer unmatched protection and performance. Armoured options provide enhanced mechanical protection against physical stress, while non-armoured variants serve well in controlled environments. Both types are built to handle harsh conditions and support reliable power delivery.",
      icon: "/api/placeholder/40/40",
      image: "/api/placeholder/400/300",
      buttonText: "Learn more",
    },
  ];

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, products.length);

    const handleScroll = (): void => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const scrollPosition = container.scrollTop;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const sectionRef = sectionRefs.current[i];
        if (!sectionRef) continue;

        const sectionTop = sectionRef.offsetTop - containerTop;
        const sectionHeight = sectionRef.offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(i);
          break;
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [products.length]);

  const handleMouseEnter = (index: number): void => {
    setActiveSection(index);
  };

  return (
    <div className="py-12 md:pb-[150px] md:pt-[80px] relative overflow-hidden">
      <div className="px-[16px] md:px-[80px]">
        {/* Header Section */}
        <div className="absolute left-[15px] -top-[50px] md:left-[33px] md:-top-[20px] z-10">
          <img
            src="/icons/home/Left-Line.svg"
            alt="Cable Spool"
            className="w-[100px] md:w-[250px] h-auto md:h-[1350px]"
          />
        </div>
        <div className="mb-10 md:mb-16 relative">
          <div className="text-[#E25319] text-sm md:text-[16px] uppercase font-medium mb-2">
            PRODUCT CATEGORIES
          </div>
          <h2 className="text-2xl md:text-[40px] md:max-w-[700px] font-medium text-[#001D0D] mb-6 relative z-20 md:leading-[50px]">
            Harness the Power of Reliable Cable Solutions with MicCom.
          </h2>
          {/* Copper big image as absolute positioned background */}
          <div className="absolute -right-[22px] -top-[30px] md:-right-[60px] md:-top-[20px] z-[5]">
            <img
              src="/icons/home/copper-big.svg"
              alt="Cable Spool"
              className="w-[200px] md:w-[500px] h-auto"
            />
          </div>

          <div className="absolute -right-[22px] -bottom-[440px] md:-right-[60px] md:-bottom-[1300px] z-[15]">
            <img
              src="/icons/home/copper-big-end.svg"
              alt="Cable Spool"
              className="w-[100px] md:w-[250px] h-auto md:m-[px]"
            />
          </div>
        </div>

        {/* Product Display Section */}
        <div className="flex flex-col lg:flex-row gap-[50px] md:mt-[90px] relative z-20">
          {/* Left side - Image */}
          <div className="w-full md:w-[600px] flex-shrink-0">
            <div className="rounded-[6px] overflow-hidden">
              <img
                src="/images/Home/copper.png"
                alt="Cable Product"
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right side - Scrollable Content */}
          <div className="flex-1">
            <div
              ref={scrollContainerRef}
              className="overflow-y-auto mt-[50px] md:mt-[0px] pr-4 md:pr-0 hide-scrollbar h-[400px] md:h-[1000px]"
              style={{ scrollBehavior: "smooth" }}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el: HTMLDivElement | null) => {
                    sectionRefs.current[index] = el;
                  }}
                  className={`pb-8 md:pb-[50px] mb-8 md:mb-[30px] relative ${
                    index === products.length - 1
                      ? ""
                      : "border-b border-[#009140]/20"
                  } ${
                    activeSection === index
                      ? "opacity-100 translate-y-0"
                      : activeSection > index
                      ? "opacity-40 -translate-y-4"
                      : "opacity-60 translate-y-4"
                  } transition-all duration-500 hover:opacity-100 hover:translate-y-0`}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <div
                    className="transition-colors duration-300 text-justify"
                    style={{
                      color: activeSection === index ? "#001D0D" : "#001D0D",
                    }}
                  >
                    <h3 className="text-xl md:text-[24px] font-medium mb-4 md:leading-[40px]">
                      {product.title}
                    </h3>
                    <p className="mb-6 md:mb-[50px] text-[14px] md:text-[14px] opacity-80 md:leading-[30px] font-normal">
                      {product.description}
                    </p>

                    {/* Learn More Button */}
                    <button className="border border-[#FF5C00] text-[#FF5C00] px-[39px] py-[9px] text-sm rounded hover:bg-[#FF5C00] hover:text-white transition-colors duration-300">
                      {product.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS to hide scrollbar but allow scrolling
const ScrollbarStyles: React.FC = () => (
  <style>{`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

const ProductCategoryWithStyles: React.FC = () => (
  <>
    <ScrollbarStyles />
    <ProductCategory />
  </>
);

export default ProductCategoryWithStyles;
