import React from "react";

const HeaderBox = ({
  icon,
  heading,
  subheading,
  title,
  subicon,
  value,
  value1,
  bgColor,
  textcolor,
}) => {
  const boxStyle = {
    backgroundColor: bgColor || "white",
    color: textcolor || "white",
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="flex items-center">
        <div className={`mr-4  p-7 rounded-full`} style={boxStyle}>
          {icon}
        </div>
        <div>
          <p className="text-lg">{title}</p>
          <h2 className="text-xl font-semibold">{heading}</h2>
          <p className="flex items-center gap-1 text-gray-500">
            <div
              style={boxStyle}
              className="flex gap-1 text-sm rounded-3xl p-1 bg-emerald-600 text-white items-center"
            >
              <span>{subicon}</span>
              <span>{value}</span>
            </div>
            <span>{subheading}</span>
          </p>
        </div>
      </div>
      <div className="mt-2"></div>
    </div>
  );
};

export default HeaderBox;
