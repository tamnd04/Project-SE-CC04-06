import { Helmet } from "react-helmet";
import { Input, Heading } from "../../components/components";
import SidebarSPSO from "../../components/SidebarSPSO/SidebarSPSO";
import PrinterList from "./PrinterList";
import React from "react";

export default function PrinterManagement() {
  const SPSORulesMenuStyles = {
    button: {
      '&[data-manage="true"]': {
        borderColor: "white",
        "&:hover": {
          borderColor: "#b0b0b0",
        },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>SPSO Rules</title>
        <meta name="description" content="View rules for SPSO." />
      </Helmet>
      <div className="flex w-full items-start border border-solid border-black-900 bg-white-a700">
        <SidebarSPSO menuStyles={SPSORulesMenuStyles} />
        <div className="flex w-[80%] flex-col gap-[82px] bg-white-a700 py-28 md:gap-[61px] md:py-5 sm:gap-[41px]">
          <div className="mx-6 mt-3.5 flex items-start justify-between gap-5 md:mx-0 md:flex-col">
            <Heading
              as="h1"
              className="ml-4 font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
            >
              QUẢN LÝ MÁY IN
            </Heading>
          </div>
          <PrinterList />
        </div>
      </div>
    </>
  );
}
