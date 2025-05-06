export default function HeroComponent() {
  return (
    <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full pt-[80px]">
        <div
          className="w-full h-full bg-gray-300"
          style={{
            backgroundImage: "url('/images/contact/hero.png')",
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
      <div className="absolute inset-0 flex flex-col md:mt-[40px] justify-center px-6 sm:px-12 md:px-[80px]">
        <div className="max-w-4xl">
          <h1 className="text-white font-medium text-3xl md:text-[56px] leading-tight md:leading-[68px] mt-[80px]">
          Blog & News
          </h1>
        </div>
      </div>
    </div>
  );
}
