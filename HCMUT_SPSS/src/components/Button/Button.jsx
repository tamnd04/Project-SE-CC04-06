import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
};
const variants = {
  fill: {
    gray_800_54: "bg-gray-400 text-white-a700",
    gray_800_4c: "bg-gray-800_4c text-white-a700",
    indigo_900: "bg-indigo-900 text-white-a700",
    blue_600: "bg-blue-600 shadow-xs text-white-a700",
    white_A700: "bg-white-a700",
    green_600: "bg-green-600",
    gray_600: "bg-gray-600",
  },
  outline: {
    blue_600: "border-blue-600 border border-solid text-gray-800",
  },
};
const sizes = {
  xs: "h-[24px]",
  sm: "h-[36px] px-3.5 text-[21px]",
  xl: "h-[58px] pl-[18px] pr-[34px] text-[24px]",
  "2xl": "h-[68px] px-2.5 text-[24px]",
  md: "h-[48px] px-0.5",
  lg: "h-[54px] px-2.5 text-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "indigo_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "xl", "2xl", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_800_54",
    "gray_800_4c",
    "indigo_900",
    "blue_600",
    "white_A700",
  ]),
};

export { Button };
