import React, { useState, useEffect } from "react";
import {
  Button,
  Img,
  Input,
  Text,
  SelectBox,
  Heading,
} from "../../components/components";
import { Link } from "react-router-dom";

export default function PrintingPropertiesSection() {
  const [paperSize, setPaperSize] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [printSides, setPrintSides] = useState("");
  const [copies, setCopies] = useState("");
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    // Load saved values on component mount
    const savedPaperSize = localStorage.getItem("paperSize");
    const savedPageCount = localStorage.getItem("pageCount");
    const savedPrintSides = localStorage.getItem("printSides");
    const savedCopies = localStorage.getItem("copies");

    if (savedPaperSize) setPaperSize(savedPaperSize);
    if (savedPageCount) setPageCount(savedPageCount);
    if (savedPrintSides) setPrintSides(savedPrintSides);
    if (savedCopies) setCopies(savedCopies);

    // Get max pages from uploaded files
    const uploadedFiles = JSON.parse(
      localStorage.getItem("uploadedFiles") || "[]"
    );
    const totalPages = uploadedFiles.reduce(
      (sum, file) => sum + (file.pages || 0),
      0
    );
    setMaxPages(totalPages);
  }, []);

  useEffect(() => {
    localStorage.setItem("paperSize", paperSize || "");
    localStorage.setItem("pageCount", pageCount || "");
    localStorage.setItem("printSides", JSON.stringify(printSides));
    localStorage.setItem("copies", copies || "");
  }, [paperSize, pageCount, printSides, copies]);

  const handleNumberInput = (e, setter, max = null) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value === "") {
      setter(value);
    } else {
      const numValue = parseInt(value);
      if (max !== null && numValue > max) {
        setter(max.toString());
      } else if (numValue > 0) {
        setter(value);
      }
    }
  };

  const paperSizeOptions = [
    { label: "khổ A3", value: "A3" },
    { label: "khổ A4", value: "A4" },
    { label: "khổ A5", value: "A5" },
  ];

  const printSidesOptions = [
    { label: "1 mặt", value: "1" },
    { label: "2 mặt", value: "2" },
  ];
  return (
    <>
      <div className="px-14 md:px-5">
        <div className="flex flex-col items-center">
          <Heading
            as="h1"
            className="self-start font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
          >
            NHẬP THÔNG SỐ IN
          </Heading>

          {/* Container */}
          <div className="mt-[68px] flex flex-col gap-8 w-full px-20 md:px-5">
            {/* Kích cỡ giấy */}
            <div className="flex items-center gap-4">
              <Text
                as="p"
                className="w-[150px] text-[24px] font-normal tracking-[0.50px] text-black-900"
              >
                Kích cỡ giấy:
              </Text>
              <SelectBox
                shape="round"
                value={paperSize}
                onChange={(value) => setPaperSize(value)}
                placeholder="Chọn cỡ giấy"
                options={paperSizeOptions}
                className="flex-1 min-w-[300px]"
              />
            </div>

            {/* Số trang in */}
            <div className="flex items-center gap-4">
              <Text
                as="p"
                className="w-[150px] text-[24px] font-normal tracking-[0.50px] text-black-900"
              >
                Số trang in:
              </Text>
              <Input
                type="text"
                value={pageCount}
                onChange={(e) => handleNumberInput(e, setPageCount)}
                placeholder={`Điền số trang in `}
                className="flex-1 min-w-[300px]"
              />
            </div>

            {/* Số mặt in */}
            <div className="flex items-center gap-4">
              <Text
                as="p"
                className="w-[150px] text-[24px] font-normal tracking-[0.50px] text-black-900"
              >
                Số mặt in:
              </Text>
              <SelectBox
                shape="round"
                value={printSides}
                onChange={(value) => setPrintSides(value)}
                placeholder="Chọn số mặt in"
                options={printSidesOptions}
                className="flex-1 min-w-[300px]"
              />
            </div>

            {/* Số bản in */}
            <div className="flex items-center gap-4">
              <Text
                as="p"
                className="w-[150px] text-[24px] font-normal tracking-[0.50px] text-black-900"
              >
                Số bản in:
              </Text>
              <Input
                type="text"
                value={copies}
                onChange={(e) => handleNumberInput(e, setCopies)}
                placeholder="Điền số bản in"
                className="flex-1 min-w-[300px]"
              />
            </div>
          </div>

          {/* Nút Trang trước và Trang sau */}
          <div className="mr-5 mt-[105px] flex justify-between gap-5 self-stretch md:mr-0">
            <Link to="/chooseprinter" style={{ textDecoration: "none" }}>
              <Button
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_double_chevron_24_outline.svg"
                    alt="Double Chevron / 24 / Outline"
                    className="h-[24px] w-[24px] object-contain"
                  />
                }
                className="min-w-[160px] gap-1 rounded-[16px] px-2.5 font-arial tracking-[0.50px] hover:bg-blue-500 transition-colors"
              >
                Trang trước
              </Button>
            </Link>
            <Link to="/startprint" style={{ textDecoration: "none" }}>
              <Button
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_double_chevron_24_outline_white_a700.svg"
                    alt="Double Chevron / 24 / Outline"
                    className="h-[24px] w-[24px] object-contain"
                  />
                }
                className="min-w-[160px] gap-[18px] rounded-[16px] px-2.5 font-arial tracking-[0.50px] hover:bg-blue-500 transition-colors"
              >
                Trang sau
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
