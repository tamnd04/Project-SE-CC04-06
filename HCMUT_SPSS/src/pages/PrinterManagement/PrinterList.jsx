import { Img, Heading, Slider, Button } from "../../components/components";
import React from "react";

export default function PrinterList() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  const ltkPrinters = [
    "LTK_B4_1",
    "LTK_B4_2",
    "LTK_A4_1",
    "LTK_A4_2",
    "LTK_A2_1",
    "LTK_B3_1",
    "LTK_B2_1",
    "LTK_A3_1",
    "LTK_A1_1",
    "LTK_C4_1",
    "LTK_C3_1",
    "LTK_C2_1",
    "LTK_C1_1",
    "LTK_D4_1",
    "LTK_D3_1",
  ];

  const daPrinters = [
    "DA_H6_1",
    "DA_H6_2",
    "DA_H3_1",
    "DA_H3_2",
    "DA_H1_1",
    "DA_H1_2",
    "DA_H2_1",
    "DA_H2_2",
    "DA_H4_1",
    "DA_H4_2",
    "DA_H5_1",
    "DA_H5_2",
    "DA_B1_1",
    "DA_B1_2",
    "DA_B2_1",
  ];

  return (
    <div className="px-[34px] sm:px-5">
      <div className="flex items-center gap-4 md:flex-col">
        <div className="flex w-full flex-col items-start gap-[26px] md:w-full">
          <Heading
            size="headinglg"
            as="h2"
            className="ml-[46px] font-arial text-[35px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[33px] sm:text-[31px]"
          >
            Cơ sở Lý Thường Kiệt
          </Heading>
          <div className="flex items-center gap-[38px] self-stretch md:flex-col">
            <Button
              onClick={() => {
                sliderRef1?.current?.slidePrev();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_left.svg" className="h-[15px]" />
            </Button>

            <div className="mx-auto flex w-full md:mx-0 md:flex-col md:self-stretch">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 2 },
                  1051: { items: 5 },
                }}
                disableDotsControls
                activeIndex={sliderState1}
                onSlideChanged={(e) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                items={ltkPrinters.map((printerName, index) => (
                  <React.Fragment key={printerName}>
                    <div className="px-[19px]">
                      <div className="flex flex-col gap-2">
                        <div className="h-[240px] w-full">
                          <Img
                            src="images/img_printer.png"
                            alt="Image"
                            className="h-full w-full rounded-[14px] object-contain"
                          />
                        </div>
                        <Button
                          size="sm"
                          shape="round"
                          className="mx-4 self-stretch rounded-[14px] px-3.5 font-arial font-bold tracking-[0.50px] shadow-xs md:mx-0"
                        >
                          {printerName}
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>

            <Button
              onClick={() => {
                sliderRef1?.current?.slideNext();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_right.svg" className="h-[24px]" />
            </Button>
          </div>

          <Heading
            size="headinglg"
            as="h2"
            className="ml-[58px] font-arial text-[35px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[33px] sm:text-[31px]"
          >
            Cơ sở Dĩ An
          </Heading>
          <div className="flex items-center gap-[38px] self-stretch md:flex-col">
            <Button
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_left.svg" className="h-[15px]" />
            </Button>

            <div className="mx-auto flex w-full md:mx-0 md:flex-col md:self-stretch">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 2 },
                  1051: { items: 5 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={daPrinters.map((printerName, index) => (
                  <React.Fragment key={printerName}>
                    <div className="px-[19px]">
                      <div className="flex flex-col gap-2">
                        <div className="h-[240px] w-full">
                          <Img
                            src="images/img_printer2.png"
                            alt="Image"
                            className="h-full w-full rounded-[14px] object-contain"
                          />
                        </div>
                        <div className="relative mx-2.5 h-[42px] md:mx-0 md:h-auto">
                          <div className="h-[36px] flex-1 rounded-[14px] bg-indigo-900 shadow-xs" />
                          <Heading
                            size="headingxs"
                            as="h5"
                            className="absolute left-0 right-0 top-[6.04px] mx-auto w-max font-arial text-[21px] font-bold tracking-[0.50px] text-white-a700"
                          >
                            {printerName}
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>

            <Button
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_right.svg" className="h-[24px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
