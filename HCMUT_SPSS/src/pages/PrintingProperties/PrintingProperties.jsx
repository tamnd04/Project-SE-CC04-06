import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components/components";
import SidebarStudent from "../../components/SidebarStudent/SidebarStudent";
import React from "react";
import PrintingPropertiesSection from "./PrintingPropertiesSection";

export default function PrintingProperties() {
  return (
    <>
      <Helmet>
        <title>Print Settings - Customize Your Printing Properties</title>
        <meta
          name="description"
          content="Set up your new print job with ease. Choose printers, specify paper sizes, select the number of pages and copies, and start printing. Manage your printing history and purchase additional pages all in one place."
        />
      </Helmet>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarStudent />
        <div className="flex flex-1 flex-col gap-[98px] bg-white-a700 py-[98px] md:gap-[73px] md:py-5 sm:gap-[49px]">
          <div className="mx-48 mt-1.5 flex flex-col items-start md:mx-0">
            <div className="self-stretch">
              <div className="flex items-center justify-start">
                {/* First Circle (Blue) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 bg-indigo-800 flex items-center justify-center">
                    {/* White checkmark inside blue circle */}
                    <Img src="images/img_checkmark.svg" className="h-5 w-5" />
                  </div>
                  <Text className="mt-2 text-blue-900">Tải tệp in</Text>
                </div>

                <div
                  className="h-0.5 flex-1 bg-indigo-800 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>

                {/* Second Circle (Blue) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 bg-indigo-800 flex items-center justify-center">
                    {/* White checkmark inside blue circle */}
                    <Img src="images/img_checkmark.svg" className="h-5 w-5" />
                  </div>
                  <Text className="mt-2 text-blue-900">Chọn máy in</Text>
                </div>

                <div
                  className="h-0.5 flex-1 bg-indigo-800 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>

                {/* Third Circle (Blue) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-indigo-800" />
                  </div>
                  <Text className="mt-2 text-blue-900">Nhập thông số in</Text>
                </div>

                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>

                {/* Fourth Circle (White with Blue Point) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-gray-400 bg-white-a700 flex items-center justify-center"></div>
                  <Text className="mt-2 text-gray-400">Bắt đầu in</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Printing properties */}
          <PrintingPropertiesSection />
        </div>
      </div>
    </>
  );
}
