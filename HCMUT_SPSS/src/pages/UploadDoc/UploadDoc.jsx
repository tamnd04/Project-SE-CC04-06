import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components/components";
import SidebarStudent from "../../components/SidebarStudent/SidebarStudent";
import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const UploadDoc = () => {
  const [uploadedFiles, setUploadedFiles] = useState(() => {
    const savedFiles = localStorage.getItem("uploadedFiles");
    return savedFiles ? JSON.parse(savedFiles) : [];
  });
  const [showError, setShowError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFileContent, setSelectedFileContent] = useState(null);
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);

  const allowedTypes = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
  ];

  useEffect(() => {
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateAndAddFile = (file) => {
    if (file && allowedTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newFile = {
          name: file.name,
          type: file.type,
          content: e.target.result,
        };
        setUploadedFiles([newFile]); // Ensure only one file is added
        localStorage.setItem("selectedFileName", file.name);
      };
      reader.readAsDataURL(file);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length === 1) {
      validateAndAddFile(files[0]); // Only process the first file
    } else {
      setShowError(true); // Show error if multiple files are dropped
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 1) {
      validateAndAddFile(files[0]); // Only process the first file
    } else {
      setShowError(true); // Show error if multiple files are selected
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const removeFile = (index) => {
    if (localStorage.getItem("selectedFileName"))
      localStorage.removeItem("selectedFileName");
    setUploadedFiles([]);
  };

  const handleFileClick = (file) => {
    setSelectedFileContent(file);
  };

  return (
    <>
      <Helmet>
        <title>Tm's Application2</title>
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
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-indigo-800 bg-white-a700 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-indigo-800" />
                  </div>
                  <Text className="mt-2 text-blue-900">Tải tệp in</Text>
                </div>
                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                ></div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-gray-400 bg-white-a700" />
                  <Text className="mt-2 text-gray-400">Chọn máy in</Text>
                </div>
                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                >
                  <div className="absolute inset-y-0 -left-0.5 w-full h-full bg-gray-300" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-gray-400 bg-white-a700" />
                  <Text className="mt-2 text-gray-400">Nhập thông số in</Text>
                </div>
                <div
                  className="h-0.5 flex-1 bg-gray-400 relative"
                  style={{ transform: "translateY(-17px)" }}
                >
                  <div className="absolute inset-y-0 -left-0.5 w-full h-full bg-gray-300" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-gray-400 bg-white-a700" />
                  <Text className="mt-2 text-gray-400">Bắt đầu in</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="px-20 md:px-5">
            <div className="flex flex-col gap-16">
              <Heading
                as="h1"
                className="ml-4 font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
              >
                TẢI TỆP IN
              </Heading>

              <div className="relative mx-auto w-3/4">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInput}
                  accept=".docx,.pdf"
                  className="hidden"
                  single
                />

                <div
                  ref={dropZoneRef}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-full rounded-2xl border-2 border-gray-800 p-8 transition-colors duration-200 
                    ${isDragging ? "bg-blue-100 border-blue-500" : ""}`}
                >
                  <div
                    className={`flex flex-col min-h-[200px] border-2 border-dashed 
                    ${isDragging ? "border-blue-500" : "border-gray-800"} p-8`}
                  >
                    {isDragging ? (
                      <Text className="text-center text-blue-400">
                        Thả file vào đây
                        <Img
                          src="images/drag&drop.png"
                          className="mx-auto mt-2 h-[100px] w-[100px] object-contain filter hue-rotate-[240deg]"
                        />
                      </Text>
                    ) : uploadedFiles.length === 0 ? (
                      <>
                        <Text className="text-center text-gray-400">
                          Bạn có thể kéo và thả tệp vào đây
                          <br />
                          hoặc nhấn nút "Tải lên" ở dưới
                          <br />
                          (Bạn chỉ có thể đăng tải 1 file)
                        </Text>
                        <Button
                          onClick={() => fileInputRef.current.click()}
                          className="mx-auto mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white-a700 hover:bg-blue-500 transition-colors"
                        >
                          <Img
                            src="images/img_upload_24_outline.svg"
                            className="h-6 w-6"
                          />
                          Tải lên
                        </Button>
                      </>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {uploadedFiles.length > 0 && (
                          <div className="flex flex-col gap-3">
                            {uploadedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between bg-gray-50 p-2 rounded cursor-pointer hover:bg-gray-100"
                                onClick={() => handleFileClick(file)}
                              >
                                <div className="flex items-center gap-2">
                                  {file.type ===
                                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && (
                                    <Img
                                      src="images/icon_word.svg"
                                      className="h-6 w-6"
                                      alt="Word Icon"
                                    />
                                  )}
                                  {file.type === "application/pdf" && (
                                    <Img
                                      src="images/pdf-icon.svg"
                                      className="h-6 w-6"
                                      alt="PDF Icon"
                                    />
                                  )}
                                  <Text className="text-gray-700">
                                    {file.name}
                                  </Text>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                  }}
                                  className="text-gray-500 hover:text-red-500 transition-colors"
                                >
                                  <X size={20} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {selectedFileContent && (
                          <div className="fixed inset-0 bg-black-900_3f bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white-a700 rounded-lg p-4 w-3/4 h-3/4 overflow-auto">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">
                                  {selectedFileContent.name}
                                </h3>
                                <button
                                  onClick={() => setSelectedFileContent(null)}
                                  className="text-gray-500 hover:text-red-500"
                                >
                                  <X size={24} />
                                </button>
                              </div>
                              {selectedFileContent.type ===
                              "application/pdf" ? (
                                <iframe
                                  src={selectedFileContent.content}
                                  className="w-full h-full"
                                  title="PDF preview"
                                />
                              ) : (
                                <div className="text-center p-4">
                                  <p>Preview not available for DOCX files</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <Text className="mt-2 text-sm text-gray-400">
                  Định dạng tệp cho phép: .DOCX, .PDF
                </Text>

                {showError && (
                  <div className="absolute bottom-full left-0 mb-2 w-full rounded-lg bg-red-100 p-3 text-red-700">
                    Chỉ chấp nhận file .DOCX và .PDF
                  </div>
                )}
              </div>

              <div className="mr-5 mt-[105px] flex justify-between gap-5 self-stretch md:mr-0">
                <Button
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_double_chevron_24_outline.svg"
                      alt="Double Chevron / 24 / Outline"
                      className="h-[24px] w-[24px] object-contain"
                    />
                  }
                  color="gray_800_54"
                  className="min-w-[160px] gap-1 rounded-[16px] px-2.5 font-arial tracking-[0.50px] hover:bg-gray-700 transition-colors"
                >
                  Trang trước
                </Button>
                <Link to="/chooseprinter" style={{ textDecoration: "none" }}>
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
        </div>
      </div>
    </>
  );
};

export default UploadDoc;
