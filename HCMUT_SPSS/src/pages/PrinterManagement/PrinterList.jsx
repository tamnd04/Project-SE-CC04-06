import {
  Img,
  Heading,
  Slider,
  Button,
  Input,
} from "../../components/components";
import React, { useState, useRef } from "react";

const PrinterModal = ({ printer, onClose, onDelete, onDisable, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [printerInfo, setPrinterInfo] = useState({
    id: printer.id,
    location: printer.location,
    model: printer.model,
    status: printer.status,
    paperRemaining: printer.paperRemaining,
    tonerLevel: printer.tonerLevel,
    totalPages: printer.totalPages,
    lastActivity: printer.lastActivity,
  });

  const handleUpdate = () => {
    onUpdate(printerInfo);
    setIsEditing(false);
  };

  const handleDisable = () => {
    const newStatus =
      printerInfo.status === "Hoạt động" ? "Tạm dừng hoạt động" : "Hoạt động";
    setPrinterInfo({ ...printerInfo, status: newStatus });
    onDisable();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black-900_3f bg-opacity-50">
      <div className="w-[700px] rounded-lg bg-white-a700 p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-indigo-900">
          THÔNG TIN MÁY IN
        </h2>
        <table className="w-full">
          <tbody className="text-lg">
            {isEditing ? (
              <>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Mã máy in
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    <input
                      className="w-full p-2 text-lg"
                      value={printerInfo.id}
                      onChange={(e) =>
                        setPrinterInfo({
                          ...printerInfo,
                          id: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Địa điểm
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    <input
                      className="w-full p-2 text-lg"
                      value={printerInfo.location}
                      onChange={(e) =>
                        setPrinterInfo({
                          ...printerInfo,
                          location: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Mẫu máy in
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    <input
                      className="w-full p-2 text-lg"
                      value={printerInfo.model}
                      onChange={(e) =>
                        setPrinterInfo({
                          ...printerInfo,
                          model: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Mã máy in
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.id}
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Địa điểm
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.location}
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Mẫu máy in
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.model}
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Trạng thái
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.status}
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Số giấy còn lại
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.paperRemaining}
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Lượng mực
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.tonerLevel}
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Tổng số trang in
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.totalPages}
                  </td>
                </tr>
                <tr>
                  <td className="bg-blue-500 p-3 text-white-a700 text-center border-gray-800 border border-solid">
                    Hoạt động gần nhất
                  </td>
                  <td className="p-3 border-gray-800 border border-solid">
                    {printerInfo.lastActivity}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center gap-4">
          <Button
            onClick={onDelete}
            className="bg-red-600 px-4 py-2 text-white-a700"
          >
            Xóa máy in
          </Button>
          <Button
            onClick={handleDisable}
            color="green_600"
            className={`px-4 py-2 text-white-a700 ${
              printerInfo.status === "Hoạt động"
                ? "bg-yellow-600"
                : "bg-green-600"
            }`}
          >
            {printerInfo.status === "Hoạt động"
              ? "Vô hiệu hóa máy in"
              : "Mở máy in"}
          </Button>
          {isEditing ? (
            <Button
              onClick={handleUpdate}
              color="green_600"
              className="px-4 py-2 text-white-a700"
            >
              Lưu thông tin
            </Button>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 px-4 py-2 text-white-a700"
            >
              Sửa thông tin
            </Button>
          )}
          <Button
            onClick={onClose}
            color="gray_600"
            className="px-4 py-2 text-white-a700"
          >
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

const AddPrinterModal = ({ onClose, onAdd, location }) => {
  const [newPrinter, setNewPrinter] = useState({
    id: "",
    model: "HP LaserJet Pro M404dn",
    status: "Hoạt động",
    paperRemaining: "500 tờ",
    tonerLevel: "100%",
    totalPages: "0 trang",
    lastActivity: "Chưa có hoạt động",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate printer ID format
    if (!newPrinter.id.startsWith("LTK_") && !newPrinter.id.startsWith("DA_")) {
      alert('Mã máy in phải bắt đầu bằng "LTK_" hoặc "DA_"');
      return;
    }

    // Set location based on ID prefix
    const location = newPrinter.id.startsWith("LTK_")
      ? "Tòa nhà B4, cơ sở Lý Thường Kiệt"
      : "Cơ sở Dĩ An";

    onAdd({ ...newPrinter, location });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[600px] rounded-lg bg-white-a700 p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-indigo-900">
          THÊM MÁY IN MỚI
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-lg font-medium">Mã máy in</label>
            <input
              className="w-full rounded border p-2 text-lg"
              value={newPrinter.id}
              onChange={(e) =>
                setNewPrinter({ ...newPrinter, id: e.target.value })
              }
              placeholder="VD: LTK_B4_1 hoặc DA_H6_1"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              onClick={onClose}
              color="gray_600"
              className="bg-gray-600 px-4 py-2 text-white-a700"
            >
              Hủy
            </Button>
            <Button
              type="submit"
              color="green-600"
              className="bg-green-600 px-4 py-2 text-white-a700"
            >
              Thêm máy in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function PrinterList() {
  const [sliderState, setSliderState] = useState(0);
  const [sliderState1, setSliderState1] = useState(0);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [ltkSearch, setLtkSearch] = useState("");
  const [daSearch, setDaSearch] = useState("");
  const [showAddPrinterModal, setShowAddPrinterModal] = useState(false);
  const sliderRef = useRef(null);
  const sliderRef1 = useRef(null);

  const initialLtkPrinters = [
    "LTK_B4_1",
    "LTK_B4_2",
    "LTK_A4_1",
    "LTK_A4_2",
    "LTK_A2_1",
    "LTK_B3_1",
    "LTK_B2_1",
    "LTK_A3_1",
    "LTK_A1_1",
    "LTK_C4_1",
    "LTK_C3_1",
    "LTK_C2_1",
    "LTK_C1_1",
    "LTK_D4_1",
    "LTK_D3_1",
  ];
  const initialDaPrinters = [
    "DA_H6_1",
    "DA_H6_2",
    "DA_H3_1",
    "DA_H3_2",
    "DA_H1_1",
    "DA_H1_2",
    "DA_H2_1",
    "DA_H2_2",
    "DA_H4_1",
    "DA_H4_2",
    "DA_H5_1",
    "DA_H5_2",
  ];

  const [printers, setPrinters] = useState({
    ltk: initialLtkPrinters.map((id) => ({
      id,
      location: "Tòa nhà B4, cơ sở Lý Thường Kiệt",
      model: "HP LaserJet Pro M404dn",
      status: "Hoạt động",
      paperRemaining: "450 tờ",
      tonerLevel: "75%",
      totalPages: "12,314 trang",
      lastActivity: "In thành công",
    })),
    da: initialDaPrinters.map((id) => ({
      id,
      location: "Cơ sở Dĩ An",
      model: "HP LaserJet Pro M404dn",
      status: "Hoạt động",
      paperRemaining: "450 tờ",
      tonerLevel: "75%",
      totalPages: "12,314 trang",
      lastActivity: "In thành công",
    })),
  });

  const filteredLtkPrinters = printers.ltk.filter((printer) =>
    printer.id.toLowerCase().includes(ltkSearch.toLowerCase())
  );

  const filteredDaPrinters = printers.da.filter((printer) =>
    printer.id.toLowerCase().includes(daSearch.toLowerCase())
  );

  const handlePrinterClick = (printer) => {
    setSelectedPrinter(printer);
  };

  const handleAddPrinter = (newPrinter) => {
    setPrinters((prev) => {
      // Determine which list to add to based on ID prefix
      const location = newPrinter.id.startsWith("LTK_") ? "ltk" : "da";
      return {
        ...prev,
        [location]: [...prev[location], newPrinter],
      };
    });
  };

  return (
    <div className="px-[34px] sm:px-5">
      <div className="flex items-center gap-4 md:flex-col">
        <div className="flex w-full flex-col items-start gap-[26px] md:w-full">
          <div className="flex items-center justify-between w-full">
            <Heading
              size="headinglg"
              as="h2"
              className="ml-[46px] font-arial text-[35px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[33px] sm:text-[31px]"
            >
              Cơ sở Lý Thường Kiệt
            </Heading>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  setShowAddPrinterModal(true);
                }}
                color="blue_600"
                className="bg-blue-600 px-4 py-2 text-white-a700 text-[23px]"
              >
                Thêm máy in
              </Button>
              <Input
                placeholder="Tìm kiếm máy in..."
                value={ltkSearch}
                onChange={(e) => setLtkSearch(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
          <div className="flex items-center gap-[38px] self-stretch md:flex-col">
            <Button
              onClick={() => {
                sliderRef1?.current?.slidePrev();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_left.svg" className="h-[15px]" />
            </Button>

            <div className="mx-auto flex w-full md:mx-0 md:flex-col md:self-stretch">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 2 },
                  1051: { items: 5 },
                }}
                disableDotsControls
                activeIndex={sliderState1}
                onSlideChanged={(e) => {
                  setSliderState1(e?.item);
                }}
                ref={sliderRef1}
                items={filteredLtkPrinters.map((printer) => (
                  <React.Fragment key={printer.id}>
                    <div className="px-[19px]">
                      <div className="flex flex-col gap-2">
                        <div className="h-[240px] w-full">
                          <Img
                            src="images/img_printer.png"
                            alt="Image"
                            className="h-full w-full rounded-[14px] object-contain"
                          />
                        </div>
                        <Button
                          onClick={() => handlePrinterClick(printer)}
                          size="sm"
                          shape="round"
                          className="mx-4 self-stretch rounded-[14px] px-3.5 font-arial font-bold tracking-[0.50px] shadow-xs md:mx-0"
                        >
                          {printer.id}
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>

            <Button
              onClick={() => {
                sliderRef1?.current?.slideNext();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_right.svg" className="h-[24px]" />
            </Button>
          </div>

          <div className="flex items-center justify-between w-full">
            <Heading
              size="headinglg"
              as="h2"
              className="ml-[58px] font-arial text-[35px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[33px] sm:text-[31px]"
            >
              Cơ sở Dĩ An
            </Heading>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  setShowAddPrinterModal(true);
                }}
                color="blue_600"
                className="bg-blue-600 px-4 py-2 text-white-a700 text-[23px]"
              >
                Thêm máy in
              </Button>
              <Input
                placeholder="Tìm kiếm máy in..."
                value={daSearch}
                onChange={(e) => setDaSearch(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
          <div className="flex items-center gap-[38px] self-stretch md:flex-col">
            <Button
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_left.svg" className="h-[15px]" />
            </Button>

            <div className="mx-auto flex w-full md:mx-0 md:flex-col md:self-stretch">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 2 },
                  1051: { items: 5 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={filteredDaPrinters.map((printer) => (
                  <React.Fragment key={printer.id}>
                    <div className="px-[19px]">
                      <div className="flex flex-col gap-2">
                        <div className="h-[240px] w-full">
                          <Img
                            src="images/img_printer2.png"
                            alt="Image"
                            className="h-full w-full rounded-[14px] object-contain"
                          />
                        </div>
                        <Button
                          onClick={() => handlePrinterClick(printer)}
                          size="sm"
                          shape="round"
                          className="mx-4 self-stretch rounded-[14px] px-3.5 font-arial font-bold tracking-[0.50px] shadow-xs md:mx-0"
                        >
                          {printer.id}
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>

            <Button
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
              size="xs"
              shape="square"
              color="white_A700"
              className="min-w-[24px]"
            >
              <Img src="images/img_arrow_right.svg" className="h-[24px]" />
            </Button>
          </div>
        </div>
      </div>
      {selectedPrinter && (
        <PrinterModal
          printer={selectedPrinter}
          onClose={() => setSelectedPrinter(null)}
          onDelete={() => {
            setPrinters((prev) => ({
              ltk: prev.ltk.filter((p) => p.id !== selectedPrinter.id),
              da: prev.da.filter((p) => p.id !== selectedPrinter.id),
            }));
            setSelectedPrinter(null);
          }}
          onDisable={() => {
            setPrinters((prev) => ({
              ltk: prev.ltk.map((p) =>
                p.id === selectedPrinter.id
                  ? {
                      ...p,
                      status:
                        p.status === "Hoạt động"
                          ? "Tạm dừng hoạt động"
                          : "Hoạt động",
                    }
                  : p
              ),
              da: prev.da.map((p) =>
                p.id === selectedPrinter.id
                  ? {
                      ...p,
                      status:
                        p.status === "Hoạt động"
                          ? "Tạm dừng hoạt động"
                          : "Hoạt động",
                    }
                  : p
              ),
            }));
          }}
          onUpdate={(updatedInfo) => {
            setPrinters((prev) => ({
              ltk: prev.ltk.map((p) =>
                p.id === selectedPrinter.id ? { ...p, ...updatedInfo } : p
              ),
              da: prev.da.map((p) =>
                p.id === selectedPrinter.id ? { ...p, ...updatedInfo } : p
              ),
            }));
          }}
        />
      )}
      {showAddPrinterModal && (
        <AddPrinterModal
          onClose={() => setShowAddPrinterModal(false)}
          onAdd={handleAddPrinter}
        />
      )}
    </div>
  );
}
