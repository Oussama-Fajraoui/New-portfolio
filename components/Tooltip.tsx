import React from "react";

const Tooltip = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center bg-gray-700 text-white text-xs rounded py-1 px-2 z-10">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-700"></div>
      </div>
    </div>
  );
};

export default Tooltip;
