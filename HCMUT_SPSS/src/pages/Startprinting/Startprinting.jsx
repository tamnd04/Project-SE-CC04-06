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

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state variable
  const [remainingPages, setRemainingPages] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    console.log(
      "Selected Location Label:",
      localStorage.getItem("selectedLocationLabel")
    );
    console.log(
      "Selected Building Label:",
      localStorage.getItem("selectedBuildingLabel")
    );
    console.log("Paper Size Label:", localStorage.getItem("paperSizeLabel"));
    console.log("Print Sides:", localStorage.getItem("printSides"));
    // Load all saved data
    const files = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setUploadedFiles(files); // Set the uploaded files
    console.log("Uploaded Files:", files);
    setPrintData({
      location: localStorage.getItem("selectedLocationLabel") || "", // Get the label
      building: localStorage.getItem("selectedBuildingLabel") || "", // Get the label
      paperSize: localStorage.getItem("paperSizeLabel") || "", // Get the label
      pageCount: localStorage.getItem("pageCount") || "",
      printSides: localStorage.getItem("printSides") || "1",
      copies: localStorage.getItem("copies") || "",
    });

    const storedPages = localStorage.getItem("remainingPages");
    if (storedPages) {
      setRemainingPages(parseInt(storedPages));
    }
  }, []);

  const calculateTotalPages = () => {
    const pages = parseInt(printData.pageCount) || 0;
    const sides = parseInt(printData.printSides) || 1;
    const copies = parseInt(printData.copies) || 0;
    return Math.ceil(pages / sides) * copies;
  };

  const validatePrintData = () => {
    const errors = [];

    if (uploadedFiles.length === 0) {
      errors.push("'Tên file' - Vui lòng tải lên tệp cần in");
    }

    if (!printData.location) {
      errors.push("'Máy in tại cơ sở' - Vui lòng chọn cơ sở in");
    }

    if (!printData.building) {
      errors.push("'Tòa' - Vui lòng chọn tòa nhà");
    }

    if (!printData.paperSize) {
      errors.push("'Giấy in cỡ' - Vui lòng chọn cỡ giấy");
    }

    const totalPages =
      printData.pageCount && printData.copies
        ? printData.pageCount * printData.copies
        : 0;

    if (totalPages === 0) {
      errors.push(
        "'Tổng số trang cần in = 0' - Vui lòng chọn số trang in > 0 và số bản in > 0"
      );
    }

    return errors;
  };

  const handlePrint = () => {
    const errors = validatePrintData();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors([]); // Clear any previous errors

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
      setRemainingPages(newRemaining);
      setShowSuccessMessage(true); // Show success message
      // Add printing logic here
      const currentTime = new Date().toLocaleString("en-GB", {
        timeZone: "Asia/Ho_Chi_Minh",
      });
      const newEntry = {
        rowtntp: localStorage.getItem("selectedFileName") || "unknown", // Assuming the file name is stored in localStorage
        rowthigianin: currentTime, // Current date and time
        rowmmyin: `${localStorage.getItem("selectedLocationValue")}_${
          printData.building
        }_${localStorage.getItem("selectedPrinterLabel")}`, // Format "Location_Building_Printer"
        rowstrang: printData.pageCount,
        rowsbn: printData.copies,
      };
      const studentLogs = JSON.parse(localStorage.getItem("studentLogs")) || {};
      const studentID = "2252734"; // Hardcoded student ID
      if (!studentLogs[studentID]) {
        studentLogs[studentID] = [
          // Existing hardcoded entries
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
          // Any other hardcoded entries
        ];
      }

      studentLogs[studentID].unshift(newEntry);

      // Save the updated student logs back to localStorage
      localStorage.setItem("studentLogs", JSON.stringify(studentLogs));

      // Optionally, update the state if needed to re-render the table
      setRemainingPages((prev) => prev - parseInt(printData.pageCount)); // Example of reducing remaining pages
    }
  };

  // Load remaining pages from localStorage and keep it updated
  useEffect(() => {
    const loadRemainingPages = () => {
      const storedPages = localStorage.getItem("remainingPages");
      if (storedPages) {
        setRemainingPages(parseInt(storedPages));
      }
    };

    // Load initial value
    loadRemainingPages();

    // Set up event listener for storage changes
    window.addEventListener("storage", loadRemainingPages);

    // Cleanup
    return () => {
      window.removeEventListener("storage", loadRemainingPages);
    };
  }, []);

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
                          <Text className="font-bold">Tên file:</Text>
                          {uploadedFiles.length > 0 ? (
                            // If there are files, list all file names
                            uploadedFiles.map((file, index) => (
                              <Text key={index}>{file.name}</Text>
                            ))
                          ) : (
                            // If no files, display "Chưa upload file"
                            <Text>Chưa upload file</Text>
                          )}

                          <Text className="font-bold">Máy in tại cơ sở:</Text>
                          <Text>{printData.location || "Chưa chọn"}</Text>

                          <Text className="font-bold">Tòa:</Text>
                          <Text>{printData.building || "Chưa chọn"}</Text>

                          <Text className="font-bold">Giấy in cỡ:</Text>
                          <Text>{printData.paperSize || "Chưa chọn"}</Text>

                          <Text className="font-bold">Số trang in:</Text>
                          <Text>{printData.pageCount || "0"}</Text>

                          <Text className="font-bold">Số mặt in:</Text>
                          <Text>
                            {printData.printSides === "1" ? "1 mặt" : "2 mặt"}
                          </Text>

                          <Text className="font-bold">Số bản in:</Text>
                          <Text>{printData.copies || "0"}</Text>

                          <Text className="font-bold">
                            Tổng số trang cần in:
                          </Text>
                          <Text>
                            {printData.pageCount && printData.copies
                              ? printData.pageCount * printData.copies
                              : "0"}
                          </Text>

                          {/* Debug display */}
                          <div style={{ display: "none" }}>
                            <p>Debug Values:</p>
                            <p>
                              Location: {JSON.stringify(printData.location)}
                            </p>
                            <p>
                              Building: {JSON.stringify(printData.building)}
                            </p>
                            <p>
                              Paper Size: {JSON.stringify(printData.paperSize)}
                            </p>
                            <p>
                              Print Sides:{" "}
                              {JSON.stringify(printData.printSides)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {validationErrors.length > 0 && (
                <div className="mx-auto mt-4 max-w-md">
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Vui lòng kiểm tra lại các thông tin sau:
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <ul className="list-disc pl-5 space-y-1">
                            {validationErrors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  width: "350px",
                  height: "60px",
                  border: "1px solid #1488db",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  fontSize: "25px",
                  fontFamily: "Arial, var(--default-font-family)",
                  fontWeight: "400",
                  color: "#373a40",
                  paddingLeft: "7px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  marginTop: "20px",
                }}
              >
                <span style={{ marginRight: "32px" }}>Số giấy còn lại:</span>
                <span>{remainingPages}</span>
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
