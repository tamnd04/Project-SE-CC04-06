import { Helmet } from "react-helmet";
import { Heading, Button, Img } from "../../components/components";
import SidebarHomepage from "../../components/SidebarHomepage/SidebarHomepage";
import { Link } from "react-router-dom";
import { React, useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.setItem("isStudentAuthenticated", "false");
    localStorage.setItem("isSPSOAuthenticated", "false");
    localStorage.setItem("role", "");
  }, []);
  const homePageMenuStyles = {
    button: {
      '&[data-home="true"]': {
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
        <title>Homepage</title>
        <meta name="description" content="HCMUT_SPSS homepage." />
      </Helmet>
      <div className="flex w-full border border-solid border-black-900 bg-white-a700">
        <SidebarHomepage menuStyles={homePageMenuStyles} />
        <div className="flex h-[1024px] flex-1 items-start justify-center bg-[url(/images/img_group_1202.png)] bg-cover bg-center px-14 py-[234px] md:h-auto md:p-5">
          <div className="relative mb-[158px] h-[398px] w-[84%]">
            <div className="rowlogin_border absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[60%] justify-center rounded-[66px] bg-gray-400 bg-opacity-60 p-[46px] md:p-5 shadow-lg backdrop-blur-md backdrop-brightness-95 backdrop-contrast-125">
              <Link to="/loginas" style={{ textDecoration: "none" }}>
                <Button
                  color="blue_600"
                  size="xl"
                  leftIcon={
                    <Img
                      src="images/img_login_24_outline.svg"
                      alt="Login / 24 / Outline"
                      className="mb-0.5 h-[24px] w-[24px] object-contain"
                    />
                  }
                  className="mt-[246px] min-w-[182px] gap-[18px] rounded-lg font-arial font-bold shadow-lg"
                >
                  Login
                </Button>
              </Link>
            </div>

            <Heading
              size="heading2xl"
              as="h1"
              className="absolute left-0 right-0 top-[27%] mx-auto flex-1 text-center font-arial text-[48px] font-bold leading-5 tracking-[0.50px] text-deep_purple-900 md:text-[44px] sm:text-[38px]"
            >
              <>
                {" "}
                CHÀO MỪNG ĐẾN VỚI <br />
                <br />
                <br />
                HCMUT_SPSS
              </>
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
