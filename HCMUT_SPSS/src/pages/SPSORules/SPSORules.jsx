import { Helmet } from "react-helmet";
import { Input, Heading } from "../../components/components";
import SidebarSPSO from "../../components/SidebarSPSO/SidebarSPSO";
import React from "react";

export default function SPSORules() {
  const SPSORulesMenuStyles = {
    button: {
      '&[data-rules="true"]': {
        borderColor: "white",
        "&:hover": {
          borderColor: "#b0b0b0",
        },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>SPSO Rules</title>
        <meta name="description" content="View rules for SPSO." />
      </Helmet>
      <div className="flex w-full items-start border border-solid border-black-900 bg-white-a700">
        <SidebarSPSO menuStyles={SPSORulesMenuStyles} />
        <div className="flex-1 h-screen overflow-y-auto p-8">
          <Heading
            size="headingmd"
            as="h1"
            className="font-arial text-[30px] font-bold leading-[41px] tracking-[0.50px] text-black-900 md:text-[28px] sm:text-[26px]"
          >
            <span className="text-[40px] text-indigo-900">
              <div className="mt-10">
                QUY ĐỊNH CHUNG
                <br />
              </div>
            </span>
            <span className="text-black-900">
              <br />
              <br />
            </span>
            <span className="text-[35px] text-indigo-900">
              Quy định về quản lý người dùng
              <br />
            </span>
            <ul className="list-disc pl-5 text-black-900 font-normal text-[1.7rem]">
              <li>
                Bảo mật tất cả dữ liệu liên quan đến sinh viên và hệ thống.
                Nghiêm cấm truy cập hoặc chia sẻ dữ liệu trái phép.
              </li>
              <li>
                Chỉ được truy cập hoặc chỉnh sửa dữ liệu và cài đặt liên quan
                đến vai trò của mình. Không được lạm dụng quyền quản trị.
              </li>
              <li>
                Phải đăng nhập bằng thông tin tài khoản riêng. Nghiêm cấm chia
                sẻ thông tin đăng nhập với người khác.
              </li>
            </ul>
            <br />
            <span className="text-[35px] text-indigo-900">
              Quy định về quản lý máy in
              <br />
            </span>
            <ul className="list-disc pl-5 text-black-900 font-normal text-[1.7rem]">
              <li>
                Có trách nhiệm lên lịch và thực hiện kiểm tra máy in thường
                xuyên (ví dụ: nạp giấy, mực, vệ sinh).
              </li>
              <li>
                Tất cả các lỗi được ghi nhận trên máy in (ví dụ: kẹt giấy, mực
                thấp) phải được giải quyết trong vòng 24 giờ hoặc báo cáo lên bộ
                phận hỗ trợ IT.
              </li>
              <li>
                Đảm bảo máy in được phân bổ tối ưu dựa trên nhu cầu và dữ liệu
                sử dụng của sinh viên.
              </li>
              <li>
                Máy in chỉ được bật hoặc tắt dựa trên nhu cầu hoạt động hoặc
                lịch bảo trì.
              </li>
            </ul>
            <br />
            <span className="text-[35px] text-indigo-900">
              Chính sách Quản lý Tệp tin
              <br />
            </span>
            <ul className="list-disc pl-5 text-black-900 font-normal text-[1.7rem]">
              <li>
                Chịu trách nhiệm cập nhật danh sách các loại tệp được hỗ trợ và
                đảm bảo sinh viên được thông báo về các thay đổi.
              </li>
            </ul>
            <br />
            <span className="text-[35px] text-indigo-900">
              Báo cáo và Phản hồi
              <br />
            </span>
            <ul className="list-disc pl-5 text-black-900 font-normal text-[1.7rem]">
              <li>
                Tạo và nộp báo cáo hàng tháng về việc sử dụng máy in, nhật ký in
                của sinh viên, và các lỗi phát sinh cho ban quản lý nhà trường.
              </li>
              <li>
                Thu thập và xem xét phản hồi của sinh viên về dịch vụ in ấn để
                xác định các khu vực cần cải thiện.
              </li>
            </ul>
            <br />
            <span className="text-[35px] text-indigo-900">
              Quy định về quản lý tài nguyên
              <br />
            </span>
            <ul className="list-disc pl-5 text-black-900 font-normal text-[1.5rem]">
              <li>
                Tuân thủ hạn mức in ấn mặc định do nhà trường quy định cho sinh
                viên mỗi học kỳ.
              </li>
              <li>
                Kiểm tra mức giấy và mực hàng ngày để đảm bảo dịch vụ không bị
                gián đoạn.
              </li>
            </ul>
          </Heading>
        </div>
      </div>
    </>
  );
}
