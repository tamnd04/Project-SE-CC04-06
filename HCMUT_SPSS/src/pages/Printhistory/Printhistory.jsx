import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Input, Heading } from "../../components/components";
import SidebarStudent from "../../components/SidebarStudent/SidebarStudent";
import { ReactTable } from "../../components/ReactTable/ReactTable"; // Fixed import
import { createColumnHelper } from "@tanstack/react-table";

const ENTRIES_PER_PAGE = 5; // Maximum entries per page
const studentData = {
  2252734: [
    {
      rowtntp: "Figma_Tutorial.pdf",
      rowthigianin: "20/10/2024 15:33:30",
      rowmmyin: "LTK_B4_1",
      rowstrang: "5",
      rowsbn: "2",
    },
    {
      rowtntp: "DTB_Lab1.docx",
      rowthigianin: "16/10/2024 08:06:18",
      rowmmyin: "LTK_A3_2",
      rowstrang: "4",
      rowsbn: "1",
    },
    {
      rowtntp: "ComNet_Assignment.pdf",
      rowthigianin: "15/10/2024 12:45:13",
      rowmmyin: "DA_H1_3",
      rowstrang: "22",
      rowsbn: "2",
    },
    {
      rowtntp: "Java_Project.pdf",
      rowthigianin: "22/10/2024 10:05:45",
      rowmmyin: "DA_H3_1",
      rowstrang: "12",
      rowsbn: "3",
    },
    {
      rowtntp: "Web_Dev_Quiz.docx",
      rowthigianin: "18/10/2024 16:30:10",
      rowmmyin: "LTK_A5_2",
      rowstrang: "8",
      rowsbn: "1",
    },
    {
      rowtntp: "Data_Structures_Quiz.pdf",
      rowthigianin: "23/10/2024 11:10:05",
      rowmmyin: "DA_H2_3",
      rowstrang: "5",
      rowsbn: "2",
    },
    {
      rowtntp: "AI_Research.docx",
      rowthigianin: "16/10/2024 10:50:30",
      rowmmyin: "LTK_C4_1",
      rowstrang: "20",
      rowsbn: "4",
    },
    {
      rowtntp: "Blockchain_Notes.pdf",
      rowthigianin: "21/10/2024 14:05:18",
      rowmmyin: "DA_H6_1",
      rowstrang: "10",
      rowsbn: "2",
    },
  ],
};

export default function PrintinglogofStudentSPSOPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

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

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowtntp", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-left">
            {info.getValue()}
          </div>
        ),
        header: (info) => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-left">
            Tên tệp
          </div>
        ),
        meta: { width: "300px" },
      }),
      tableColumnHelper.accessor("rowthigianin", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-center">
            {info.getValue()}
          </div>
        ),
        header: (info) => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            Thời gian in
          </div>
        ),
        meta: { width: "220px" },
      }),
      tableColumnHelper.accessor("rowmmyin", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-center">
            {info.getValue()}
          </div>
        ),
        header: (info) => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            Mã máy in
          </div>
        ),
        meta: { width: "150px" },
      }),
      tableColumnHelper.accessor("rowstrang", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-center">
            {info.getValue()}
          </div>
        ),
        header: (info) => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            Số trang
          </div>
        ),
        meta: { width: "120px" },
      }),
      tableColumnHelper.accessor("rowsbn", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-center">
            {info.getValue()}
          </div>
        ),
        header: (info) => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            Số bản
          </div>
        ),
        meta: { width: "120px" },
      }),
    ];
  }, []);

  const filterData = (data) => {
    if (!searchQuery) return data;

    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const getFilteredAndPaginatedData = () => {
    const filtered = filterData(studentData["2252734"]); // Fixed to specific ID
    const start = (currentPage - 1) * ENTRIES_PER_PAGE;
    const end = start + ENTRIES_PER_PAGE;

    return filtered.slice(start, end);
  };

  const getTotalPages = () => {
    const filtered = filterData(studentData["2252734"]); // Fixed to specific ID
    return Math.ceil(filtered.length / ENTRIES_PER_PAGE);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const paginatedData = getFilteredAndPaginatedData();
  const totalPages = getTotalPages();

  return (
    <>
      <Helmet>
        <title>Printing Log of Student SPSO</title>
        <meta name="description" content="View printing logs for students." />
      </Helmet>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarStudent menuStyles={historyPageMenuStyles} />
        <div className="flex flex-1 flex-col items-start gap-[4em] bg-white-a700 py-56 pl-20 pr-14 md:p-5">
          <Heading
            as="h1"
            className="ml-4 font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
          >
            LỊCH SỬ IN ẤN
          </Heading>
          <div className="w-[90%] px-14">
            <div className="relative mb-4">
              <div className="flex justify-end">
                <Input
                  size="xs"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-64 h-10 rounded-lg border px-2.5 text-xl text-gray-800_cc transition-colors duration-200 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
            <div className="flex flex-col h-[450px]">
              <div className="flex-grow overflow-auto">
                <ReactTable
                  columns={tableColumns}
                  data={paginatedData}
                  headerCellProps={{
                    className: "bg-blue-600",
                  }}
                  cellProps={{
                    className: "border-blue-600 border-b border-solid",
                  }}
                  className="w-full table-fixed"
                />
              </div>
              {totalPages > 1 && (
                <div className="mt-4 flex justify-center space-x-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 rounded ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white-a700"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
