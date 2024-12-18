import React, { useState, useEffect } from "react";
import { Button, Img, SelectBox, Heading } from "../../components/components";
import { Link } from "react-router-dom";

const locationOptions = [
  { label: "Cơ sở Lý Thường Kiệt", value: "LTK" },
  { label: "Cơ sở Dĩ An", value: "DA" },
];

const buildingOptionsMap = {
  LTK: [
    { label: "A1", value: "A1" },
    { label: "A2", value: "A2" },
    { label: "B1", value: "B1" },
    { label: "B2", value: "B2" },
    { label: "C4", value: "C4" },
  ],
  DA: [
    { label: "H1", value: "H1" },
    { label: "H2", value: "H2" },
    { label: "H6", value: "H6" },
  ],
};

const printerOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
];

export default function ChooseprinterRowchnmyinOne() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [availableBuildings, setAvailableBuildings] = useState([]);

  useEffect(() => {
    // Load initial values
    const savedLocation = localStorage.getItem("selectedLocation");
    const savedBuilding = localStorage.getItem("selectedBuilding");
    const savedPrinter = localStorage.getItem("selectedPrinter");

    if (savedLocation) {
      const locationOption = locationOptions.find(
        (opt) => opt.value === savedLocation
      );
      if (locationOption) {
        setSelectedLocation(locationOption); // Set the full option object
        setAvailableBuildings(buildingOptionsMap[savedLocation] || []);
      }
    }

    if (savedBuilding && availableBuildings.length > 0) {
      const buildingOption = availableBuildings.find(
        (opt) => opt.value === savedBuilding
      );
      if (buildingOption) {
        setSelectedBuilding(buildingOption); // Set the full option object
      }
    }

    if (savedPrinter) {
      const printerOption = printerOptions.find(
        (opt) => opt.value === savedPrinter
      );
      if (printerOption) {
        setSelectedPrinter(printerOption); // Set the full option object
      }
    }
  }, [availableBuildings]);

  const handleLocationChange = (option) => {
    setSelectedLocation(option);
    setSelectedBuilding(null); // Reset building selection
    setAvailableBuildings(buildingOptionsMap[option.value] || []);

    localStorage.setItem("selectedLocationValue", option.value);
    localStorage.setItem("selectedLocationLabel", option.label);
  };

  const handleBuildingChange = (option) => {
    setSelectedBuilding(option);
    localStorage.setItem("selectedBuildingValue", option.value);
    localStorage.setItem("selectedBuildingLabel", option.label);
  };

  const handlePrinterChange = (option) => {
    setSelectedPrinter(option);
    localStorage.setItem("selectedPrinter", option.value);
    localStorage.setItem("selectedPrinterLabel", option.label);
  };

  return (
    <div className="px-14 md:px-5">
      <div className="flex flex-col items-center">
        <Heading
          size="headingxl"
          as="h1"
          className="ml-[26px] self-start font-arial text-[40px] font-bold tracking-[0.50px] text-indigo-900 md:ml-0 md:text-[38px] sm:text-[36px]"
        >
          CHỌN MÁY IN
        </Heading>

        <div className="mt-[108px] flex flex-col items-center gap-6 w-full max-w-md">
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                alt="Arrow Down"
                className="h-[24px] w-[24px]"
              />
            }
            name="location"
            placeholder="Chọn cơ sở"
            value={selectedLocation}
            onChange={handleLocationChange}
            options={locationOptions}
            className="w-full min-w-[300px] rounded border px-4 py-2 font-arial"
          />

          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                alt="Arrow Down"
                className="h-[24px] w-[24px]"
              />
            }
            name="building"
            placeholder="Chọn tòa"
            value={selectedBuilding}
            onChange={handleBuildingChange}
            options={availableBuildings}
            className="w-full min-w-[300px] rounded border px-4 py-2 font-arial"
          />

          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                alt="Arrow Down"
                className="h-[24px] w-[24px]"
              />
            }
            name="printer"
            placeholder="Chọn số máy"
            value={selectedPrinter}
            onChange={handlePrinterChange}
            options={printerOptions}
            className="w-full min-w-[300px] rounded border px-4 py-2 font-arial"
          />
        </div>

        <div className="mr-5 mt-[105px] flex justify-between gap-5 self-stretch md:mr-0">
          <Link to="/newprint" style={{ textDecoration: "none" }}>
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
          <Link to="/printproperties" style={{ textDecoration: "none" }}>
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
  );
}
