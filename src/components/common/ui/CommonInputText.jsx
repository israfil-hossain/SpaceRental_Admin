import React from "react";

export default function CommonInputText({
  name,
  label,
  placeholder,
  value,
  onChange,
  className,
  textformat,
  error,
  type = "text",
  ...rest
}) {
  return (
    <div className={`mb-4 mt-4 `}>
      {label && (
        <label
          htmlFor={label}
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          {label}
        </label>
      )}
      {textformat === "rich" ? (
        <textarea
          name={name}
          className={`border border-gray-300  ${className} bg-[#E7E9E2] rounded-xl py-2 px-3 w-full focus:outline-none focus:ring-1 focus:border-yellow-500 `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      ) : (
        <>
          <input
            type={type}
            name={name}
            className={`border border-gray-300  ${className}  bg-[#E7E9E2] rounded-xl py-2 px-3 w-full focus:outline-none focus:ring-1 focus:border-yellow-500 `}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...rest}
          />
        </>
      )}
    </div>
  );
}
