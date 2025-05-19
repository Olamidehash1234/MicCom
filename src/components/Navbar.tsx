import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Remove scroll lock
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`w-full bg-white shadow-md transition-all max-w-[2000px] duration-300 ${
      isScrolled ? 'fixed top-0 z-50' : 'relative'
    }`}>
      {/* Desktop Navbar */}
      <div className="relative z-50 bg-white max-w-full px-4 md:px-[80px] pt-[9px] pb-[9px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/icons/miccom.svg"
                  alt="MicCom Logo"
                  className="w-[80px] md:w-[109.409px] md:h-[83px]"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation - change from md to xl */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-center space-x-[40px] text-[16px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/quality-assurance"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                Quality Assurance
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                Blog & News
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                Careers
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-medium leading-[24px] ${
                    isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Request Quote Button - change from md to xl */}
          <div className="hidden xl:block">
            <a
              href="#"
              className="inline-flex items-center justify-center pt-[9px] pr-[24px] pb-[9px] pl-[23px] border border-transparent rounded-md shadow-sm text-[14px] font-normal text-[#F8F8F8] bg-[#E25319] hover:bg-orange-700"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile menu button - change from md to xl */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#001D0D] hover:text-[#E25319] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - updated styles */}
      <div 
        className={`xl:hidden fixed inset-0 bg-[#F9F3E8] z-30 overflow-y-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
        style={{ top: '75px' }} // Adjust based on navbar height
      >
        <div className="min-h-screen py-20 pt-[20px] flex flex-col items-left px-[16px]">
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] w-full hover:text-[#E25319]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/projects"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/quality-assurance"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
              }`
            }
          >
            Quality Assurance
          </NavLink>
          <NavLink
            to="/blog"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
              }`
            }
          >
            Blog & News
          </NavLink>
          <NavLink
            to="/careers"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
              }`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `text-left py-4 text-[18px] font-medium ${
                isActive ? "text-[#E25319]" : "text-[#001D0D] hover:text-[#E25319]"
              }`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/quote"
            onClick={handleLinkClick}
            className="w-full py-4 text-[18px] font-medium text-white bg-[#E25319] text-center rounded-md"
          >
            Request a Quote
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
