import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components/components";
import ChooseprinterRowchnmyinOne from "./ChooseprinterRowchnmyinOne";
import React from "react";
import SidebarStudent from "../../components/SidebarStudent/SidebarStudent";

export default function Chooseprinter() {
  return (
    <>
      <Helmet>
        <title>Tm&#39;s Application2</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
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
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 flex items-center justify-center">
                    {/* White checkmark inside blue circle */}
                    <div className="h-3 w-3 rounded-full bg-indigo-800" />
                  </div>
                  <Text className="mt-2 text-blue-900">Chọn máy in</Text>
                </div>

                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>

                {/* Third Circle (Blue) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-gray-400 flex items-center justify-center"></div>
                  <Text className="mt-2 text-gray-400">Nhập thông số in</Text>
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
          <ChooseprinterRowchnmyinOne />
        </div>
      </div>
    </>
  );
}
