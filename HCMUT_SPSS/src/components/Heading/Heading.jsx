import React from "react";

const sizes = {
  headingxs: "text-[24px] font-bold md:text-[22px]",
  headings: "text-[30px] font-bold md:text-[28px] sm:text-[26px]",
  headingmd: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
};

const Heading = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-indigo-900 font-arial ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
