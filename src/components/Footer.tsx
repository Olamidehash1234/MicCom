export default function Footer() {
  return (
    <footer className="bg-[rgba(249, 243, 232, 0.20)]">
      <div className="w-full h-px bg-[#00482033] mb-16 md:mb-[60px]"></div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-none md:flex md:justify-between gap-8 text-[#001D0D] px-[16px] md:px-[80px] mb-[60px] md:mb-[60px] gap-y-[60px]">
          {/* Logo Column */}
          <div className="flex justify-center md:justify-start">
            <div>
              <a href="/">
                <img src="/icons/footer/logo.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="text-left md:text-left">
            <h3 className="font-medium text-[#001D0D]  text-[18px] mb-4 md:mb-[20px]">
              Company
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <a href="/about" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/social-responsibilities" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  Social Responsibility
                </a>
              </li>
              <li>
                <a href="/awards" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  Awards & Certificate
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className="text-left md:text-left">
            <h3 className="font-medium text-[#001D0D]  text-[18px] mb-4 md:mb-[20px]">
              Policies
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <a href="/quality-assurance" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="/quality-assurance#product-design" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  Product Design & Testing
                </a>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="text-left lg:text-left">
            <h3 className="font-medium text-[#001D0D]  text-[18px] mb-4 md:mb-[20px]">
              Products
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <a href="/products#copper" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  All Copper Conductor (ACC)
                </a>
              </li>
              <li>
                <a href="/products#cables" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  Single & Multi-Core Cables
                </a>
              </li>
              <li>
                <a
                  href="/products#aluminum"
                  className="hover:text-[#E25319] text-[#001D0D]  text-[14px]"
                >
                  All Aluminum Conductor (AAC)
                </a>
              </li>
              <li>
                <a
                  href="/products#flexible"
                  className="hover:text-[#E25319] text-[#001D0D]  text-[14px]"
                >
                  Flexible Cables
                </a>
              </li>
              <li>
                <a
                  href="/products#armoured"
                  className="hover:text-[#E25319] text-[#001D0D]  text-[14px]"
                >
                  Armoured/Non Armoured Cables
                </a>
              </li>
              <li>
                <a href="/products#acsr" className="hover:text-[#E25319] text-[#001D0D]  text-[14px]">
                  All Aluminium Conductor Steel Reinforced (ACSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="text-left md:text-left col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-medium text-[#001D0D]  text-[18px] mb-4 md:mb-[20px]">
              Get In Touch
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <a
                  href="tel:0807-720-0496"
                  className="hover:text-[#E25319] text-[#001D0D] hover:underline"
                >
                  0807-720-0496
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@miccomcables.com"
                  className="hover:text-[#E25319] text-[#001D0D] hover:underline "
                >
                  info@miccomcables.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@miccomcables.com"
                  className="hover:text-[#E25319] text-[#001D0D] hover:underline "
                >
                  sales@miccomcables.com
                </a>
              </li>
              <li className="text-[14px] md:leading-[24px]">
                <a 
                  href="/contact#map" 
                  className="hover:text-[#E25319] hover:underline"
                >
                  3-5 Edun - Alaran Road
                  <br />
                  Behind Ahmadiya Hospital
                  <br />
                  Ojokoro Agege- Lagos, Nigeria.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
