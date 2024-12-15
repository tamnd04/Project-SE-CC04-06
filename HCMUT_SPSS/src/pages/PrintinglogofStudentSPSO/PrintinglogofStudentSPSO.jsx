import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Input, Heading } from "../../components/components";
import SidebarSPSO from "../../components/SidebarSPSO/SidebarSPSO";
import { ReactTable } from "../../components/ReactTable/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const ENTRIES_PER_PAGE = 5;
const AVAILABLE_STUDENT_IDS = [
  "2252734",
  "1923043",
  "2150234",
  "1950123",
  "2252345",
];

export default function PrintinglogofStudentSPSOPage() {
  const [inputValue, setInputValue] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [studentLogs, setStudentLogs] = useState({});
  const inputRef = useRef(null);

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

  // Function to initialize or update localStorage with student logs
  const initializeStudentLogs = () => {
    const existingLogs = JSON.parse(localStorage.getItem("studentLogs")) || {};
    let updated = false;

    AVAILABLE_STUDENT_IDS.forEach((id) => {
      if (!existingLogs[id]) {
        updated = true;
        existingLogs[id] = getDefaultLogsForStudent(id);
      }
    });

    if (updated) {
      localStorage.setItem("studentLogs", JSON.stringify(existingLogs));
    }

    setStudentLogs(existingLogs);
  };

  // Function to get default logs for a student (using the existing data)
  const getDefaultLogsForStudent = (studentId) => {
    const defaultData = {
      2252734: [
        {
          rowtntp: "inthachot2015.pdf",
          rowthigianin: "11/12/2024 22:11:31",
          rowmmyin: "LTK_B2_3",
          rowstrang: "11",
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
      1923043: [
        {
          rowtntp: "CS_Project_Final.pdf",
          rowthigianin: "19/10/2024 14:20:15",
          rowmmyin: "LTK_C2_1",
          rowstrang: "15",
          rowsbn: "3",
        },
        {
          rowtntp: "Physics_Report.docx",
          rowthigianin: "18/10/2024 09:45:22",
          rowmmyin: "DA_H5_2",
          rowstrang: "8",
          rowsbn: "1",
        },
        {
          rowtntp: "Math_Homework.pdf",
          rowthigianin: "17/10/2024 16:30:45",
          rowmmyin: "LTK_A1_3",
          rowstrang: "3",
          rowsbn: "2",
        },
        {
          rowtntp: "Mobile_App_Design.pdf",
          rowthigianin: "16/10/2024 17:20:22",
          rowmmyin: "LTK_A3_3",
          rowstrang: "18",
          rowsbn: "1",
        },
        {
          rowtntp: "Embedded_Systems_Lab.pdf",
          rowthigianin: "23/10/2024 08:40:12",
          rowmmyin: "DA_H4_2",
          rowstrang: "14",
          rowsbn: "2",
        },
        {
          rowtntp: "Signal_Processing_Notes.docx",
          rowthigianin: "17/10/2024 13:15:55",
          rowmmyin: "LTK_B1_3",
          rowstrang: "9",
          rowsbn: "1",
        },
      ],
      2150234: [
        {
          rowtntp: "AI_Research_Paper.pdf",
          rowthigianin: "20/10/2024 10:15:30",
          rowmmyin: "DA_H2_1",
          rowstrang: "30",
          rowsbn: "1",
        },
        {
          rowtntp: "Database_Notes.docx",
          rowthigianin: "19/10/2024 13:25:40",
          rowmmyin: "LTK_B2_2",
          rowstrang: "12",
          rowsbn: "2",
        },
        {
          rowtntp: "SE_Presentation.ppt",
          rowthigianin: "18/10/2024 11:50:20",
          rowmmyin: "DA_H3_3",
          rowstrang: "45",
          rowsbn: "4",
        },
      ],
      1950123: [
        {
          rowtntp: "Circuit_Design.pdf",
          rowthigianin: "20/10/2024 16:40:25",
          rowmmyin: "LTK_A4_1",
          rowstrang: "18",
          rowsbn: "2",
        },
        {
          rowtntp: "Ethics_Essay.docx",
          rowthigianin: "19/10/2024 12:35:15",
          rowmmyin: "DA_H6_2",
          rowstrang: "6",
          rowsbn: "1",
        },
        {
          rowtntp: "ML_Assignment.pdf",
          rowthigianin: "18/10/2024 14:20:30",
          rowmmyin: "LTK_C3_3",
          rowstrang: "25",
          rowsbn: "3",
        },
      ],
      2252345: [
        {
          rowtntp: "Intro_to_Programming.pdf",
          rowthigianin: "24/10/2024 10:05:15",
          rowmmyin: "LTK_B1_1",
          rowstrang: "12",
          rowsbn: "2",
        },
        {
          rowtntp: "Web_Development_Notes.docx",
          rowthigianin: "23/10/2024 14:30:45",
          rowmmyin: "DA_H4_1",
          rowstrang: "18",
          rowsbn: "1",
        },
        {
          rowtntp: "Data_Analysis_Assignment.pdf",
          rowthigianin: "21/10/2024 09:40:55",
          rowmmyin: "LTK_C2_3",
          rowstrang: "15",
          rowsbn: "3",
        },
        {
          rowtntp: "AI_Algorithms.pdf",
          rowthigianin: "20/10/2024 11:50:30",
          rowmmyin: "DA_H3_2",
          rowstrang: "25",
          rowsbn: "2",
        },
        {
          rowtntp: "Networking_Lab_Notes.docx",
          rowthigianin: "18/10/2024 17:25:10",
          rowmmyin: "LTK_A2_2",
          rowstrang: "10",
          rowsbn: "1",
        },
        {
          rowtntp: "Software_Engineering_Project.pdf",
          rowthigianin: "16/10/2024 13:15:40",
          rowmmyin: "DA_H5_1",
          rowstrang: "30",
          rowsbn: "4",
        },
        {
          rowtntp: "Machine_Learning_Quiz.docx",
          rowthigianin: "22/10/2024 08:45:00",
          rowmmyin: "LTK_B3_2",
          rowstrang: "12",
          rowsbn: "2",
        },
        {
          rowtntp: "Blockchain_Introduction.pdf",
          rowthigianin: "19/10/2024 10:20:25",
          rowmmyin: "DA_H6_1",
          rowstrang: "18",
          rowsbn: "3",
        },
        {
          rowtntp: "Computer_Networks_Lab.pdf",
          rowthigianin: "25/10/2024 09:30:00",
          rowmmyin: "LTK_C1_1",
          rowstrang: "20",
          rowsbn: "2",
        },
        {
          rowtntp: "Algorithms_Quiz.docx",
          rowthigianin: "24/10/2024 11:40:35",
          rowmmyin: "DA_H2_3",
          rowstrang: "8",
          rowsbn: "1",
        },
        {
          rowtntp: "Cyber_Security_Notes.pdf",
          rowthigianin: "23/10/2024 12:10:22",
          rowmmyin: "LTK_A4_2",
          rowstrang: "14",
          rowsbn: "1",
        },
        {
          rowtntp: "Data_Structures_Lab_Notes.docx",
          rowthigianin: "22/10/2024 16:45:15",
          rowmmyin: "DA_H1_2",
          rowstrang: "10",
          rowsbn: "2",
        },
        {
          rowtntp: "Python_Programming_Assignment.pdf",
          rowthigianin: "21/10/2024 14:25:00",
          rowmmyin: "LTK_B5_1",
          rowstrang: "15",
          rowsbn: "3",
        },
        {
          rowtntp: "Digital_Signal_Processing.pdf",
          rowthigianin: "20/10/2024 13:05:40",
          rowmmyin: "DA_H7_1",
          rowstrang: "18",
          rowsbn: "2",
        },
      ],
    };

    return defaultData[studentId] || [];
  };

  // Initialize student logs on component mount
  useEffect(() => {
    initializeStudentLogs();

    // Set up localStorage change listener
    const handleStorageChange = (e) => {
      if (e.key === "studentLogs") {
        setStudentLogs(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    if (AVAILABLE_STUDENT_IDS.includes(inputValue)) {
      setSelectedStudent(inputValue);
      setShowDropdown(false);
    }
  }, [inputValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown || filteredIds.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredIds.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredIds.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredIds[highlightedIndex]) {
        handleStudentSelect(filteredIds[highlightedIndex]);
      }
    }
  };

  const handleStudentSelect = (id) => {
    setInputValue(id);
    setSelectedStudent(id);
    setCurrentPage(1);
    setShowDropdown(false);
  };

  const filterData = (data) => {
    if (!searchQuery) return data;
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const getFilteredAndPaginatedData = () => {
    if (!selectedStudent || !studentLogs[selectedStudent]) return [];

    const filtered = filterData(studentLogs[selectedStudent]);
    const start = (currentPage - 1) * ENTRIES_PER_PAGE;
    const end = start + ENTRIES_PER_PAGE;

    return filtered.slice(start, end);
  };

  const getTotalPages = () => {
    if (!selectedStudent || !studentLogs[selectedStudent]) return 0;

    const filtered = filterData(studentLogs[selectedStudent]);
    return Math.ceil(filtered.length / ENTRIES_PER_PAGE);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredIds = AVAILABLE_STUDENT_IDS.filter((id) =>
    id.startsWith(inputValue)
  ).sort((a, b) => b.localeCompare(a));

  const paginatedData = getFilteredAndPaginatedData();
  const totalPages = getTotalPages();

  return (
    <>
      <Helmet>
        <title>Printing Log of Student SPSO</title>
        <meta name="description" content="View printing logs for students." />
      </Helmet>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarSPSO menuStyles={historyPageMenuStyles} />
        <div className="flex flex-1 flex-col items-start gap-[4em] bg-white-a700 py-56 pl-20 pr-14 md:p-5">
          <Heading
            as="h1"
            className="ml-4 font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
          >
            LỊCH SỬ SINH VIÊN
          </Heading>
          <div className="relative w-full px-14 md:px-5">
            <div ref={inputRef}>
              <Input
                size="xs"
                name="nhập_mssv"
                placeholder="Nhập MSSV"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-[90%] rounded-lg border px-2.5 text-gray-800_cc transition-colors duration-200 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {showDropdown && filteredIds.length > 0 && (
                <div className="absolute left-14 mt-1 w-[83%] max-h-[110px] overflow-y-hidden rounded-lg border border-gray-200 bg-white-a700 shadow-lg">
                  {filteredIds.map((id, index) => (
                    <div
                      key={id}
                      className={`cursor-pointer px-4 py-2 ${
                        index === highlightedIndex ? "bg-blue-50" : ""
                      }`}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onClick={() => handleStudentSelect(id)}
                    >
                      {id}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {selectedStudent && (
            <div className="mt-0 w-[90%] px-14">
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
          )}
        </div>
      </div>
    </>
  );
}
