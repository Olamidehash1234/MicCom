export default function HeroComponent() {
    return (
      <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full pt:[90px] md:pt-[100px]">
          <div
            className="w-full h-full bg-gray-300"
            style={{
              backgroundImage: "url('/images/social-responsibilities/hero.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            aria-label="MicCom headquarters building"
          />
        </div>
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00000080] bg-opacity-40"></div>
  
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col md:mt-[40px] justify-center px-[16px] md:px-[80px]">
          <div className="">
            <h1 className="text-white font-medium text-3xl md:text-[56px] leading-tight mt-[80px] md:mt-[0px] md:leading-[68px]">
            Social Responsibilities
            </h1>
          </div>
        </div>
      </div>
    );
  }
  