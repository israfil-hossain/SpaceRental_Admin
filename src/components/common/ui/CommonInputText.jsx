import React from "react";

const CommonInputText = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  textformat,
  ...rest
}) => {
  const inputElement = textformat === "rich" ? (
    <textarea
      className="border bg-[#E7E9E2] rounded-xl py-2 px-3 w-full focus:outline-none focus:ring-1 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  ) : (
    <input
      type="text"
      className="border bg-[#E7E9E2] rounded-xl py-2 px-3 w-full focus:outline-none focus:ring-1 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );

  return (
    <div className={`mb-4 mt-4 ${className}`}>
      {label && (
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          {label}
        </label>
      )}
      {inputElement}
    </div>
  );
};

export default CommonInputText;
