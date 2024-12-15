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

  const paperSizeOptions = [
    { label: "khổ A3", value: "A3" },
    { label: "khổ A4", value: "A4" },
    { label: "khổ A5", value: "A5" },
  ];

  const printSidesOptions = [
    { label: "1 mặt", value: "1" },
    { label: "2 mặt", value: "2" },
  ];

  useEffect(() => {
    // Load saved values on component mount
    const savedPaperSize = localStorage.getItem("paperSize");
    const savedPageCount = localStorage.getItem("pageCount");
    const savedPrintSides = localStorage.getItem("printSides");
    const savedCopies = localStorage.getItem("copies");

    if (savedPaperSize) {
      const option = paperSizeOptions.find(
        (opt) => opt.value === savedPaperSize
      );
      if (option) {
        localStorage.setItem("paperSizeLabel", option.label);
      }
    }
    if (savedPageCount) setPageCount(savedPageCount);
    if (savedPrintSides) setPrintSides(savedPrintSides);
    if (savedCopies) setCopies(savedCopies);
  }, []);

  const handleNumberInput = (e, setter, max = null, key) => {
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

    // Save the input value to localStorage
    if (key) {
      localStorage.setItem(key, value);
    }
  };

  const handlePaperSizeChange = (value) => {
    console.log("Setting paper size:", value); // Debug log
    setPaperSize(value);
    const paperSizeValue = value.value || value;
    const selectedOption = paperSizeOptions.find(
      (opt) => opt.value === paperSizeValue
    );
    console.log("Selected option:", selectedOption);
    if (selectedOption) {
      localStorage.setItem("paperSize", value);
      localStorage.setItem("paperSizeLabel", selectedOption.label);
      console.log("Saved paper size label:", selectedOption.label); // Debug log
    }
  };

  const handlePrintSidesChange = (value) => {
    console.log("Setting print sides:", value); // Debug log
    setPrintSides(value);
    const paperSizeValue = value.value || value;
    const selectedOption = printSidesOptions.find(
      (opt) => opt.value === paperSizeValue
    );
    if (selectedOption) {
      localStorage.setItem("printSides", value.value);
      console.log(
        "Saved print sides:",
        selectedOption.label,
        " ",
        selectedOption.value
      ); // Confirm label
    }
  };

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
                onChange={handlePaperSizeChange}
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
                onChange={(e) =>
                  handleNumberInput(e, setPageCount, null, "pageCount")
                }
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
                onChange={handlePrintSidesChange}
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
                onChange={(e) =>
                  handleNumberInput(e, setCopies, null, "copies")
                }
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
