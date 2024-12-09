import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Input, Heading } from "../../components/components";
import SidebarSPSO from "../../components/SidebarSPSO/SidebarSPSO";
import { ReactTable } from "../../components/ReactTable/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { X } from "lucide-react";

const ENTRIES_PER_PAGE = 5;

const monthlyReports = [
  { stt: 1, thang: 12, nam: 2024, chitiet: "Báo cáo hệ thống 12/2024" },
  { stt: 2, thang: 11, nam: 2024, chitiet: "Báo cáo hệ thống 11/2024" },
  { stt: 3, thang: 10, nam: 2024, chitiet: "Báo cáo hệ thống 10/2024" },
  { stt: 4, thang: 9, nam: 2024, chitiet: "Báo cáo hệ thống 09/2024" },
  { stt: 5, thang: 8, nam: 2024, chitiet: "Báo cáo hệ thống 08/2024" },
  { stt: 6, thang: 7, nam: 2024, chitiet: "Báo cáo hệ thống 07/2024" },
  { stt: 7, thang: 6, nam: 2024, chitiet: "Báo cáo hệ thống 06/2024" },
  { stt: 8, thang: 5, nam: 2024, chitiet: "Báo cáo hệ thống 05/2024" },
  { stt: 9, thang: 4, nam: 2024, chitiet: "Báo cáo hệ thống 04/2024" },
  { stt: 10, thang: 3, nam: 2024, chitiet: "Báo cáo hệ thống 03/2024" },
  { stt: 11, thang: 2, nam: 2024, chitiet: "Báo cáo hệ thống 02/2024" },
  { stt: 12, thang: 1, nam: 2024, chitiet: "Báo cáo hệ thống 01/2024" },
  { stt: 13, thang: 12, nam: 2023, chitiet: "Báo cáo hệ thống 12/2023" },
  { stt: 14, thang: 11, nam: 2023, chitiet: "Báo cáo hệ thống 11/2023" },
];

const DetailPopup = ({ isOpen, onClose, report }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Generate data based on report month and year
  const generateSystemOverview = (month, year) => {
    if (!month || !year)
      return {
        tongSoLuotIn: "0 lượt",
        tongSoTrangIn: "0 trang",
        soLuotInNgay: "0 lượt",
        gioCaoDiem: "N/A",
        tongSoLoi: "0 lỗi",
        thoiGianMoiLuot: "0 phút",
      };

    // Create a more unique seed for each month/year combination
    const seed = ((month * 31 + year) * 17) % 20;

    // Create variations based on the seed
    const baseValue = 10000 + seed * 500; // Base value for calculations
    const variation = Math.sin(seed) * 1000; // Add some non-linear variation

    const tongSoLuotIn = Math.round(baseValue + variation);
    const avgPagesPerPrint = 5 + (seed % 3); // Average pages per print varies 5-7
    const tongSoTrangIn = tongSoLuotIn * avgPagesPerPrint;
    const soLuotInNgay = Math.round(tongSoLuotIn / 30); // Assuming 30 days per month

    // Generate different peak hours
    const peakHours = [
      "8:00 AM - 10:00 AM",
      "9:00 AM - 11:00 AM",
      "10:00 AM - 12:00 PM",
      "1:00 PM - 3:00 PM",
      "2:00 PM - 4:00 PM",
      "3:00 PM - 5:00 PM",
      "4:00 PM - 6:00 PM",
    ];
    const gioCaoDiem = peakHours[seed % peakHours.length];

    // Calculate errors based on usage
    const errorRate = 0.003 + (seed % 10) * 0.0001; // Error rate varies between 0.3% and 0.4%
    const tongSoLoi = Math.round(tongSoLuotIn * errorRate);

    // Calculate average time per print
    const baseTime = 2 + (seed % 5) * 0.1; // Base time varies between 2 and 2.4 minutes
    const thoiGianMoiLuot = (baseTime + Math.sin(seed) * 0.2).toFixed(2);

    return {
      tongSoLuotIn: `${tongSoLuotIn.toLocaleString()} lượt`,
      tongSoTrangIn: `${tongSoTrangIn.toLocaleString()} trang`,
      soLuotInNgay: `${soLuotInNgay.toLocaleString()} lượt`,
      gioCaoDiem: gioCaoDiem,
      tongSoLoi: `${tongSoLoi} lỗi`,
      thoiGianMoiLuot: `${thoiGianMoiLuot} phút`,
    };
  };

  const generateTopPrinters = (month, year) => {
    if (!month || !year) return [];

    // Create a seed for each month/year combination
    const seed = ((month * 31 + year) * 17) % 20;

    // Define all valid printer locations
    const validPrinters = [
      "LTK_A1_1",
      "LTK_A2_1",
      "LTK_A3_1",
      "LTK_A4_1",
      "LTK_A4_2",
      "LTK_B2_1",
      "LTK_B3_1",
      "LTK_B4_1",
      "LTK_B4_2",
      "LTK_C1_1",
      "LTK_C2_1",
      // DA building printers (1 floor, 3 printers)
      "DA_H1_1",
      "DA_H1_2",
      "DA_H2_1",
      "DA_H6_1",
    ];

    // Select 5 unique printers
    const selectedPrinters = new Set();
    const printers = [];

    // Make sure we don't try to select more printers than available
    const numPrintersToSelect = Math.min(5, validPrinters.length);

    while (selectedPrinters.size < numPrintersToSelect) {
      // Select a printer based on the seed and current size
      const index = (seed + selectedPrinters.size * 7) % validPrinters.length;
      const printerCode = validPrinters[index];

      if (!selectedPrinters.has(printerCode)) {
        selectedPrinters.add(printerCode);

        // Generate usage statistics
        const basePrints = 800 + seed * 10 + selectedPrinters.size * 50;
        const soLuotIn = Math.round(basePrints);

        // Pages per print varies between 5-8 pages average
        const pagesPerPrint = 5 + (seed % 4);
        const soTrangIn = soLuotIn * pagesPerPrint;

        printers.push({
          stt: selectedPrinters.size,
          maMayIn: printerCode,
          soLuotIn: soLuotIn,
          soTrangIn: soTrangIn,
        });
      }
    }

    // Sort by soLuotIn in descending order
    return printers.sort((a, b) => b.soLuotIn - a.soLuotIn);
  };

  if (!isOpen || !report) return null;

  const systemOverview = generateSystemOverview(report.thang, report.nam);
  const topPrinters = generateTopPrinters(report.thang, report.nam);

  return (
    <div className="fixed inset-0 bg-black-900_3f bg-opacity-50 flex items-center justify-center">
      <div className="bg-white-a700 rounded-lg p-8 w-[800px] max-h-[90vh] overflow-y-auto border">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600">{report.chitiet}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {currentPage === 1 ? (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">
              TỔNG QUAN HỆ THỐNG
            </h3>
            <table className="w-full mb-4 border-2 border-black">
              <tbody>
                <tr className="border-2 border-black">
                  <td className="bg-blue-500 text-white-a700 text-center p-3 text-xl">
                    Tổng số lượt in
                  </td>
                  <td className="p-3 text-xl border-l-2 border-black">
                    {systemOverview.tongSoLuotIn}
                  </td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="bg-blue-500 text-white-a700 text-center p-3 text-xl">
                    Tổng số trang in
                  </td>
                  <td className="p-3 text-xl border-l-2 border-black">
                    {systemOverview.tongSoTrangIn}
                  </td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="bg-blue-500 text-white-a700 text-center p-3 text-xl">
                    Số lượt in / ngày
                  </td>
                  <td className="p-3 text-xl border-l-2 border-black">
                    {systemOverview.soLuotInNgay}
                  </td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="bg-blue-500 text-white-a700 text-center p-3 text-xl">
                    Giờ cao điểm
                  </td>
                  <td className="p-3 text-xl border-l-2 border-black">
                    {systemOverview.gioCaoDiem}
                  </td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="bg-blue-500 text-white-a700 text-center p-3 text-xl">
                    Tổng số lỗi
                  </td>
                  <td className="p-3 text-xl border-l-2 border-black">
                    {systemOverview.tongSoLoi}
                  </td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="bg-blue-500 text-white-a700 text-center p-3 text-xl">
                    Thời gian trung bình mỗi lượt
                  </td>
                  <td className="p-3 text-xl border-l-2 border-black">
                    {systemOverview.thoiGianMoiLuot}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">
              MÁY ĐƯỢC SỬ DỤNG NHIỀU NHẤT
            </h3>
            <table className="w-full mb-4 border-2 border-black">
              <thead>
                <tr className="bg-blue-500 text-white-a700 border-2 border-black">
                  <th className="p-3 text-xl border-r-2 border-black">STT</th>
                  <th className="p-3 text-xl border-r-2 border-black">
                    Mã máy in
                  </th>
                  <th className="p-3 text-xl border-r-2 border-black">
                    Số lượt in
                  </th>
                  <th className="p-3 text-xl">Số trang in</th>
                </tr>
              </thead>
              <tbody>
                {topPrinters.map((printer) => (
                  <tr key={printer.stt} className="border-2 border-black">
                    <td className="p-3 text-center text-xl border-r-2 border-black">
                      {printer.stt}
                    </td>
                    <td className="p-3 text-center text-xl border-r-2 border-black">
                      {printer.maMayIn}
                    </td>
                    <td className="p-3 text-center text-xl border-r-2 border-black">
                      {printer.soLuotIn.toLocaleString()}
                    </td>
                    <td className="p-3 text-center text-xl">
                      {printer.soTrangIn.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-between mt-4">
          {currentPage !== 1 && (
            <button
              onClick={() => setCurrentPage(1)}
              className="bg-blue-800 text-white-a700 px-4 py-2 rounded text-xl hover:bg-gray-600 transition-colors"
            >
              « Trang trước
            </button>
          )}
          {currentPage === 1 && <div></div>}
          {currentPage === 1 && (
            <button
              onClick={() => setCurrentPage(2)}
              className="bg-blue-800 text-white-a700 px-4 py-2 rounded text-xl hover:bg-gray-600 transition-colors"
            >
              Trang sau »
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SPSOReport() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const historyPageMenuStyles = {
    button: {
      '&[data-report="true"]': {
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
      tableColumnHelper.accessor("stt", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-center">
            {info.getValue()}
          </div>
        ),
        header: () => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            STT
          </div>
        ),
        meta: { width: "100px" },
      }),
      tableColumnHelper.accessor("thang", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-center">
            {info.getValue()}
          </div>
        ),
        header: () => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            Tháng
          </div>
        ),
        meta: { width: "150px" },
      }),
      tableColumnHelper.accessor("nam", {
        cell: (info) => (
          <div className="text-black text-2xl p-4 text-center">
            {info.getValue()}
          </div>
        ),
        header: () => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            Năm
          </div>
        ),
        meta: { width: "150px" },
      }),
      tableColumnHelper.accessor("chitiet", {
        cell: (info) => (
          <div
            className="text-blue-600 text-2xl p-4 text-center cursor-pointer hover:underline"
            onClick={() => {
              setSelectedReport(info.row.original);
              setIsPopupOpen(true);
            }}
          >
            {info.getValue()}
          </div>
        ),
        header: () => (
          <div className="text-white-a700 text-2xl font-bold p-4 text-center">
            Chi tiết
          </div>
        ),
        meta: { width: "300px" },
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
    const filtered = filterData(monthlyReports);
    const start = (currentPage - 1) * ENTRIES_PER_PAGE;
    const end = start + ENTRIES_PER_PAGE;
    return filtered.slice(start, end);
  };

  const getTotalPages = () => {
    const filtered = filterData(monthlyReports);
    return Math.ceil(filtered.length / ENTRIES_PER_PAGE);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const paginatedData = getFilteredAndPaginatedData();
  const totalPages = getTotalPages();

  return (
    <>
      <Helmet>
        <title>Monthly System Reports SPSO</title>
        <meta name="description" content="View monthly system reports." />
      </Helmet>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarSPSO menuStyles={historyPageMenuStyles} />
        <div className="flex flex-1 flex-col items-start gap-[4em] bg-white-a700 py-56 pl-20 pr-14 md:p-5">
          <Heading
            as="h1"
            className="ml-4 font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
          >
            BÁO CÁO HỆ THỐNG
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
      <DetailPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        report={selectedReport}
      />
    </>
  );
}
