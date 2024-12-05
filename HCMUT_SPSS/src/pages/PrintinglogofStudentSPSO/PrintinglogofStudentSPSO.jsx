import { Helmet } from "react-helmet";
import { Input, Heading } from "../../components/components";
import Sidebar3 from "../../components/Sidebar3/Sidebar3";
import React from "react";

export default function PrintinglogofStudentSPSOPage() {
  const historyPageMenuStyles = {
    button: {
      '&[data-history="true"]': {
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
        <title>Printing Log of Student SPSO</title>
        <meta name="description" content="View printing logs for students." />
      </Helmet>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <Sidebar3 menuStyles={historyPageMenuStyles} />
        <div className="flex flex-1 flex-col items-start gap-[4em] bg-white-a700 py-56 pl-20 pr-14 md:p-5">
          <Heading
            as="h1"
            className="ml-4 font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
          >
            LỊCH SỬ SINH VIÊN
          </Heading>
          <div className="mb-[428px] flex justify-center self-stretch px-14 md:px-5">
            <Input
              size="xs"
              name="nhập_mssv"
              placeholder={`Nhập MSSV`}
              className="w-[90%] rounded-lg !border px-2.5 !text-gray-800_cc"
            />
          </div>
        </div>
      </div>
    </>
  );
}
