export default function HeroComponent() {
  return (
    <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full pt-[80px]">
        <div
          className="w-full h-full bg-gray-300"
          style={{
            backgroundImage: "url('/images/career/hero.png')",
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
          <h1 className=" mt-[60px] text-white font-medium text-[24px] md:text-[56px] leading-tight md:leading-[68px]">
            Career
          </h1>
        </div>
      </div>
    </div>
  );
}
