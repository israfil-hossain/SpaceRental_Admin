import React from "react";


const CommonTooltip = ({ text, placement, children }) => {
  return (
    <div className="position-relative">
      <div className={` tooltip custom-tooltip-${placement || "top"}`}>
        <span className="w-100">{text}</span>
      </div>
      {children}
    </div>
  );
};

export default CommonTooltip;