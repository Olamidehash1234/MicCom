import React, { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  options: { value: string; label: string }[]; // Dropdown options
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string; // Error message for validation
}

const CustomSelectReUse: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative w-full" ref={selectRef}>
      {/* Select Input */}
      <div
        className={`border rounded p-[10px] md:px-[20px] md:py-[10px] cursor-pointer flex justify-between items-center ${
          error ? "border-red-500" : "border-[#D9D9D9]"
        }`}
        onClick={toggleDropdown}
      >
        <span>{options.find((opt) => opt.value === value)?.label || placeholder}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full border border-[#D9D9D9] bg-[#F9F3E8] rounded shadow-lg mt-1 z-10 max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className={`p-2 cursor-pointer text-black hover:bg-[#E25319] hover:text-[#fff] ${
                value === option.value ? "bg-[#E25319] text-[#fff]" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelectReUse;
