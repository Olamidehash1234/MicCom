import React from "react";

interface CustomSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

const CustomSearch: React.FC<CustomSearchProps> = ({
  value,
  onChange,
  placeholder = "Search",
  error,
}) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-transparent border rounded p-[10px] pl-[35px]  placeholder-[#001D0D] focus:outline-none ${
          error ? "border-red-500" : "border-[#D9D9D9]"
        }`}
      />
      <img src="/icons/blog/search.svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#001D0D]" />
      
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomSearch;
