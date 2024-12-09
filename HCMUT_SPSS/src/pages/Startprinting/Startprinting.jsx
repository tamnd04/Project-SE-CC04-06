import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components/components";
import SidebarStudent from "../../components/SidebarStudent/SidebarStudent";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function StartprintingPage() {
  const [printData, setPrintData] = useState({
    location: "",
    building: "",
    paperSize: "",
    pageCount: "",
    printSides: 1,
    copies: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state variable

  useEffect(() => {
    const storedPrintSides = localStorage.getItem("printSides");
    const parsedPrintSides = storedPrintSides
      ? JSON.parse(storedPrintSides)
      : null;

    setPrintData((prevData) => ({
      ...prevData,
      printSides: parsedPrintSides.value,
    }));
    console.log("Parsed printSides:", parsedPrintSides.value);
  }, []);

  useEffect(() => {
    // Load all saved data
    setPrintData({
      location: localStorage.getItem("selectedLocationLabel") || "", // Retrieve the label for display
      building: localStorage.getItem("selectedBuildingLabel") || "", // Retrieve the label for display
      paperSize: localStorage.getItem("paperSize") || "",
      pageCount: localStorage.getItem("pageCount") || "",
      //printSides: localStorage.getItem("printSides") || "",
      copies: localStorage.getItem("copies") || "",
    });
  }, []);

  const calculateTotalPages = () => {
    const pages = parseInt(printData.pageCount) || 0;
    const sides = parseInt(printData.printSides) || 1;
    const copies = parseInt(printData.copies) || 0;
    return Math.ceil(pages / sides) * copies;
  };

  const handlePrint = () => {
    const remainingPages =
      parseInt(localStorage.getItem("remainingPages")) || 0;
    const requiredPages = calculateTotalPages();

    if (requiredPages > remainingPages) {
      setShowPopup(true);
      setShowSuccessMessage(false); // Ensure no success message if not enough pages
    } else {
      // Proceed with printing
      const newRemaining = remainingPages - requiredPages;
      localStorage.setItem("remainingPages", newRemaining.toString());
      setShowSuccessMessage(true); // Show success message
      // Add printing logic here
    }
  };

  return (
    <>
      <Helmet>
        <title>Vng's Application4</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarStudent />
        <div className="flex flex-1 flex-col gap-[102px] bg-white-a700 py-[98px] md:gap-[76px] md:py-5 sm:gap-[51px]">
          <div className="mx-48 mt-1.5 flex flex-col items-start md:mx-0">
            <div className="self-stretch">
              <div className="flex items-center justify-start">
                {/* First Circle (Blue) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 bg-indigo-800 flex items-center justify-center">
                    <Img src="images/img_checkmark.svg" className="h-5 w-5" />
                  </div>
                  <Text className="mt-2 text-blue-900">Tải tệp in</Text>
                </div>

                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>

                {/* Second Circle (Blue) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 bg-indigo-800 flex items-center justify-center">
                    <Img src="images/img_checkmark.svg" className="h-5 w-5" />
                  </div>
                  <Text className="mt-2 text-blue-900">Chọn máy in</Text>
                </div>

                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>

                {/* Third Circle (Blue) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 bg-indigo-800 flex items-center justify-center">
                    <Img src="images/img_checkmark.svg" className="h-5 w-5" />
                  </div>
                  <Text className="mt-2 text-blue-900">Nhập thông số in</Text>
                </div>

                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>

                {/* Fourth Circle (White with Blue Point) */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-gray-400 bg-white-a700 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-indigo-800" />
                  </div>
                  <Text className="mt-2 text-gray-400">Bắt đầu in</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="px-14 md:px-5">
            <div className="flex flex-col items-center">
              <Heading
                as="h1"
                className="self-start font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
              >
                XÁC NHẬN THÔNG TIN VÀ IN
              </Heading>
              <div className="flex w-full justify-center">
                <div className="flex w-full flex-col gap-10 items-center md:items-stretch">
                  <div className="w-full">
                    <div className="preview-section mt-8">
                      <div className="border-4 border-gray-400 rounded-sm p-4 max-w-max mx-auto">
                        <div className="grid grid-cols-[auto,1fr] gap-y-2 gap-x-4">
                          <Text className="font-bold">Máy in tại cơ sở:</Text>
                          <Text>Cơ sở Lý Thường Kiệt</Text>

                          <Text className="font-bold">Tòa:</Text>
                          <Text>B2</Text>

                          <Text className="font-bold">Giấy in cỡ:</Text>
                          <Text>khổ A4</Text>

                          <Text className="font-bold">Số trang in:</Text>
                          <Text>{printData.pageCount}</Text>

                          <Text className="font-bold">Số mặt in:</Text>
                          <Text>
                            {printData.printSides === 1 ? "1 mặt" : "2 mặt"}
                          </Text>

                          <Text className="font-bold">Số bản in:</Text>
                          <Text>{printData.copies}</Text>

                          <Text className="font-bold">
                            Tổng số trang cần in:
                          </Text>
                          <Text>{calculateTotalPages()}</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center gap-6">
                <Button
                  onClick={handlePrint}
                  color="blue_600"
                  size="xl"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_printer_24_outline.svg"
                      alt="Printer / 24 / Outline"
                      className="h-6 w-6 object-contain"
                    />
                  }
                  className="min-w-48 gap-4 rounded-4 px-6 font-arial font-bold"
                >
                  Thực hiện in
                </Button>
                {/* Success Message */}
                {showSuccessMessage && (
                  <Text
                    size="textbold"
                    className="text-green-600 font-bold mt-4"
                    style={{ fontSize: "24px" }}
                  >
                    Đã in thành công
                  </Text>
                )}
              </div>
              {showPopup && (
                <div className="fixed inset-0 bg-black-900_3f bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white-a700 p-10 rounded-lg relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-2 right-2 text-2xl font-bold"
                    >
                      X
                    </button>

                    {/* Popup Content */}
                    <div className="flex flex-col items-center gap-4">
                      <h3 className="text-3xl">Bạn không đủ số giấy để in</h3>
                      <p className="text-xl">
                        Bạn cần mua thêm giấy để thực hiện in.
                      </p>
                      <div className="flex justify-center gap-4 mt-4">
                        <Link to="/buypages">
                          <Button>Mua thêm giấy</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="mr-5 mt-[105px] flex justify-between gap-5 self-stretch md:mr-0">
                <Link to="/printproperties" style={{ textDecoration: "none" }}>
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
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_double_chevron_24_outline_white_a700.svg"
                      alt="Double Chevron / 24 / Outline"
                      className="h-[24px] w-[24px] object-contain"
                    />
                  }
                  color="gray_800_54"
                  className="min-w-[160px] gap-[18px] rounded-[16px] px-2.5 font-arial tracking-[0.50px] hover:bg-gray-700  transition-colors"
                >
                  Trang sau
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
