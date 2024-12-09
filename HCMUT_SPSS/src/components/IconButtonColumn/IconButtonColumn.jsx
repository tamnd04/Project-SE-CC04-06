import { Text, Button, Img } from "./../components";
import React from "react";

export default function IconButtonColumn({
  downloadText = "Tải tệp in",
  selectPrinterText = "Chọn máy in",
  inputPrintParametersText = "Nhập thông số in",
  startPrintingText = "Bắt đầu in",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col justify-center items-center w-full mt-1.5`}>
      <div className="flex flex-col items-start">
        <Button size="xs" shape="circle" className="ml-[18px] w-[48px] rounded-[24px] px-0.5 sm:ml-0">
          <Img src="images/img_checkmark.svg" />
        </Button>
        <Text
          size="texts"
          as="p"
          className="font-arial text-[20px] font-normal tracking-[0.50px] text-indigo-900 sm:text-[17px]"
        >
          {downloadText}
        </Text>
      </div>
      <div className="flex flex-1 flex-col items-end px-[42px] md:px-5 sm:self-stretch">
        <Button size="xs" shape="circle" className="mr-[34px] w-[48px] rounded-[24px] px-0.5 sm:mr-0">
          <Img src="images/img_checkmark.svg" />
        </Button>
        <Text
          size="texts"
          as="p"
          className="font-arial text-[20px] font-normal tracking-[0.50px] text-indigo-900 sm:text-[17px]"
        >
          {selectPrinterText}
        </Text>
      </div>
      <div className="flex flex-1 flex-col items-center px-[42px] md:px-5 sm:self-stretch">
        <div className="flex flex-col items-center">
          <Button
            color="neutral_white"
            size="xs"
            shape="circle"
            className="w-[48px] rounded-[24px] border border-solid border-indigo-900 px-0.5"
          >
            <Img src="images/img_proggressing_animation.svg" />
          </Button>
          <Button size="xs" shape="circle" className="relative mt-[-48px] w-[48px] rounded-[24px] px-0.5">
            <Img src="images/img_checkmark.svg" />
          </Button>
        </div>
        <Text
          size="texts"
          as="p"
          className="relative mt-[-2px] font-arial text-[20px] font-normal tracking-[0.50px] text-indigo-900 sm:text-[17px]"
        >
          {inputPrintParametersText}
        </Text>
      </div>
      <div className="flex flex-col items-end">
        <div className="mr-[22px] flex flex-col items-center rounded-[24px] border border-solid border-indigo-900 bg-neutral-white sm:mr-0">
          <Button
            color="neutral_white"
            size="xs"
            shape="circle"
            className="w-[48px] rounded-[24px] border border-solid border-indigo-900 px-0.5"
          >
            <Img src="images/img_proggressing_animation.svg" />
          </Button>
        </div>
        <Text
          size="texts"
          as="p"
          className="relative mt-[-4px] font-arial text-[20px] font-normal tracking-[0.50px] text-indigo-900 sm:text-[17px]"
        >
          {startPrintingText}
        </Text>
      </div>
    </div>
  );
}
