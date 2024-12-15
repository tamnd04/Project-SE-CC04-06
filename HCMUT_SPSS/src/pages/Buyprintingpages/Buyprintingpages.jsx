import React, { useState, useEffect } from "react";
import { Button } from "../../components/components";
import SidebarStudent from "../../components/SidebarStudent/SidebarStudent";
import { Link } from "react-router-dom";

const BuyPages = () => {
  const [remainingPages, setRemainingPages] = useState(0);
  const [pagesToBuy, setPagesToBuy] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const PRICE_PER_PAGE = 2000; // 2k per page

  const BuyPagesMenuStyles = {
    button: {
      '&[data-buy="true"]': {
        borderColor: "white",
        "&:hover": {
          borderColor: "#b0b0b0",
        },
      },
    },
  };

  // Load initial remaining pages from localStorage
  useEffect(() => {
    const storedPages = localStorage.getItem("remainingPages");
    if (storedPages) {
      setRemainingPages(parseInt(storedPages));
    } else {
      localStorage.setItem("remainingPages", "0");
    }
  }, []);

  const calculateTotal = () => {
    const pages = parseInt(pagesToBuy) || 0;
    setTotalAmount(pages * PRICE_PER_PAGE);
  };

  const handlePurchase = () => {
    const pages = parseInt(pagesToBuy) || 0;
    if (pages > 0) {
      const newTotal = remainingPages + pages;
      setRemainingPages(newTotal);
      // Update localStorage to persist the data
      localStorage.setItem("remainingPages", newTotal.toString());
      // Reset input and total
      setPagesToBuy("");
      setTotalAmount(0);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow positive numbers
    if (value === "" || /^\d+$/.test(value)) {
      setPagesToBuy(value);
    }
  };

  return (
    <div className="flex w-full items-start border border-solid border-black-900 bg-white-a700">
      <SidebarStudent menuStyles={BuyPagesMenuStyles} />
      <div className="left-[386px] top-[245px] absolute text-[#030391] text-[40px] font-bold font-['Arial'] leading-none tracking-wide">
        MUA TRANG IN
      </div>

      <div className="w-[350px] p-5 left-[1250px] top-[312px] absolute rounded-lg shadow border border-[#1488db] justify-start items-center gap-2.5 inline-flex">
        <div className="text-[#373a40] text-2xl font-normal font-['Arial']">
          Số giấy còn lại: {remainingPages}
        </div>
      </div>

      <div className="w-[764px] h-14 left-[471px] top-[475px] absolute">
        <div className="left-0 top-[14px] absolute text-black text-2xl font-normal font-['Arial']">
          Số giấy cần mua:
        </div>
        <div className="h-14 left-[214px] top-0 absolute justify-start items-start gap-2.5 inline-flex">
          <input
            type="text"
            value={pagesToBuy}
            onChange={handleInputChange}
            placeholder="Điền số giấy cần mua (2.000đ/ tờ)"
            className="h-14 w-[550px] px-4 py-5 rounded border border-[#373a40] text-[#373a40] text-2xl font-normal font-['Arial'] leading-none tracking-wide text-left focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <Button
        shape="round"
        onClick={handlePurchase}
        className="px-2.5 py-5 left-[800px] top-[720px] absolute bg-[#1488db] rounded-[15px] shadow justify-start items-center gap-[15px] inline-flex hover:bg-blue-500 transition-colors text-3xl text-white"
      >
        Xác nhận thanh toán
      </Button>
      <Link to="/startprint" style={{ textDecoration: "none" }}>
        <Button
          shape="round"
          className="px-2.5 py-5 left-[780px] top-[800px] absolute bg-[#1488db] rounded-[15px] shadow justify-start items-center gap-[15px] inline-flex hover:bg-blue-500 transition-colors text-3xl text-white"
        >
          Quay về trang xác nhận in
        </Button>
      </Link>

      <div className="h-[143px] left-[751px] top-[531px] absolute justify-start items-center gap-[15px] inline-flex">
        <div className="p-2.5 justify-center items-end gap-2.5 flex">
          <div className="text-black text-2xl font-normal font-['Arial']">
            Số tiền cần trả: {totalAmount.toLocaleString()}đ
          </div>
        </div>
        <div className="p-2.5 justify-center items-start gap-2.5 flex">
          <button
            onClick={calculateTotal}
            className="text-[#1488db] text-2xl font-normal font-['Arial'] underline hover:text-blue-700"
          >
            Tính tổng thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPages;
