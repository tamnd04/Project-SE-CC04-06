import React from "react";

const sizes = {
  textxs: "text-[18px] font-normal",
  texts: "text-[20px] font-normal",
  textmd: "text-[24px] font-normal lg:text-[24px] md:text-[22px]",
  textbold: "font-bold",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textmd",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`font-arial ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
