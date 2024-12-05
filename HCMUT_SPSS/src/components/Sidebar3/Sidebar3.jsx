import { Img } from "./../Img/Img";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Sidebar3({ className, menuStyles, ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const defaultMenuStyles = {
    button: {
      padding: "10px",
      gap: "16px",
      color: "#ffffff",
      fontWeight: 400,
      fontSize: "24px",
      borderRadius: "16px",
      border: "1px solid transparent",
      [`&:hover`]: {
        color: "#b0b0b0",
        "& img": {
          opacity: 0.7,
          filter: "brightness(0.7)",
        },
      },
      [`&.ps-active`]: {
        borderColor: "transparent",
      },
    },
  };

  const finalMenuStyles = {
    ...defaultMenuStyles,
    button: {
      ...defaultMenuStyles.button,
      ...(menuStyles?.button || {}),
    },
  };

  return (
    <Sidebar
      {...props}
      width="290px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 48 } }}
      className={`${props.className} flex flex-col h-screen pt-6 gap-12 top-0 sm:pt-5 bg-indigo-900 !sticky overflow-auto`}
    >
      <div className="mt-3 self-stretch">
        <div className="flex items-start">
          <Img
            src="images/img_01_logobachkhoatoi.png"
            alt="One"
            className="relative z-[1] h-[118px] w-[40%] self-center object-contain"
          />
          <Img
            src="images/img_sidebar_logo.png"
            alt="Sidebarlogo"
            className="relative ml-[-30px] mt-1.5 h-[96px] w-[174px] object-contain"
          />
        </div>
      </div>
      <Menu
        menuItemStyles={finalMenuStyles}
        rootStyles={{ ["&>ul"]: { gap: "462px" } }}
        className="flex w-full flex-col self-stretch px-6 sm:px-5"
      >
        <div>
          <MenuItem
            icon={
              <Img
                src="images/img_home.svg"
                alt="Home"
                className="h-[20px] w-[18px]"
              />
            }
          >
            Trang chủ
          </MenuItem>
          <Link to="/rules" style={{ textDecoration: "none" }}>
            <MenuItem
              icon={
                <Img
                  src="images/img_notes_24_outline.svg"
                  alt="Notestwentyfour"
                  className="h-[24px] w-[24px]"
                />
              }
            >
              Quy định chung
            </MenuItem>
          </Link>
          <MenuItem
            icon={
              <Img
                src="images/img_printer_24_outline.svg"
                alt="Printertwentyfo"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Quản lý máy in
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="images/img_clock.svg"
                alt="Clock"
                className="h-[20px] w-[20px]"
              />
            }
            data-history="true"
          >
            Lịch sử sinh viên
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="images/img_bar_graph_24.svg"
                alt="Bargraphtwentyf"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Xem báo cáo
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="images/img_vector.svg"
                alt="Vector"
                className="h-[4px] w-[18px]"
              />
            }
          >
            Khác
          </MenuItem>
        </div>
        <div>
          <MenuItem
            icon={
              <Img
                src="images/img_logout_24_outline.svg"
                alt="Logouttwentyfou"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Đăng xuất
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
