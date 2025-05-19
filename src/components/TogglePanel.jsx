import React, { useState } from "react";

const TogglePanel = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
      <button
        aria-expanded={isOpen}
        aria-controls="toggle-panel-content"
        className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="transition-transform duration-300 transform">
          {isOpen ? "▼" : "►"}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-[1000px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default TogglePanel;
