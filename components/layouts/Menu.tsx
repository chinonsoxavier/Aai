"use client";
import FancyButton from "@/app/widgets/FancyButton";
import { useStore } from "../zustand/zustand";

const Menu = () => {
  const menuOpen = useStore((state: any) => state.menuOpen);

  const handleMenuClick = useStore((state: any) => state.handleMenuClick);

  return (
    <div onClick={handleMenuClick} className="w-ll bg-[red] w-[100vw]" >
    <div
      className={`bg-interface px-6 py-8 w-full max-w-[350px] -translte-x-[100%] duration-1000 delay-100 fixed top-0 z-40 h-[100vh] text-white overflow-x-clip ${
        menuOpen ? "-translate-x-[0]" : "-translate-x-[100%]"
      }`}
    >
      <div className="mb-8 w-full flex items-center justify-between">
        <svg
          width="85"
          height="36"
          viewBox="0 0 85 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.2964 11.1961H31.8141C31.7148 10.0218 31.1782 8.9276 30.3106 8.13012C29.4429 7.33264 28.3074 6.89002 27.129 6.8899H24.9759V1.29186C24.9759 0.949234 24.8398 0.620646 24.5975 0.378376C24.3552 0.136106 24.0266 0 23.684 0C23.3414 0 23.0128 0.136106 22.7705 0.378376C22.5283 0.620646 22.3922 0.949234 22.3922 1.29186V6.8899H9.90423C8.72575 6.89002 7.59029 7.33264 6.72263 8.13012C5.85497 8.9276 5.31838 10.0218 5.2191 11.1961H4.7368C3.48053 11.1961 2.2757 11.6951 1.38738 12.5835C0.499055 13.4718 0 14.6766 0 15.9329V19.3778C0 20.6341 0.499055 21.8389 1.38738 22.7273C2.2757 23.6156 3.48053 24.1146 4.7368 24.1146H5.16742V27.129C5.16742 28.3852 5.66648 29.5901 6.5548 30.4784C7.44312 31.3667 8.64795 31.8658 9.90423 31.8658H10.9205V33.8466C10.9172 34.2606 11.0344 34.6665 11.2576 35.0152C11.4808 35.3638 11.8006 35.64 12.1779 35.8102C12.4584 35.9401 12.7646 36.0049 13.0736 35.9997C13.5858 36.0018 14.0815 35.8182 14.4688 35.483L18.6544 31.8658H27.129C28.3852 31.8658 29.5901 31.3667 30.4784 30.4784C31.3667 29.5901 31.8658 28.3852 31.8658 27.129V24.1146H32.2964C33.5527 24.1146 34.7575 23.6156 35.6458 22.7273C36.5341 21.8389 37.0332 20.6341 37.0332 19.3778V15.9329C37.0332 14.6766 36.5341 13.4718 35.6458 12.5835C34.7575 11.6951 33.5527 11.1961 32.2964 11.1961ZM4.7368 21.5309C4.16577 21.5309 3.61812 21.3041 3.21434 20.9003C2.81055 20.4965 2.58371 19.9489 2.58371 19.3778V15.9329C2.58371 15.3619 2.81055 14.8142 3.21434 14.4104C3.61812 14.0066 4.16577 13.7798 4.7368 13.7798H5.16742V21.5309H4.7368ZM29.2821 27.129C29.2821 27.7 29.0552 28.2477 28.6514 28.6514C28.2477 29.0552 27.7 29.2821 27.129 29.2821H18.1721C17.8624 29.2795 17.5624 29.3897 17.3281 29.5921L13.5042 32.8993V30.5739C13.5042 30.2313 13.3681 29.9027 13.1258 29.6604C12.8836 29.4182 12.555 29.2821 12.2123 29.2821H9.90423C9.33319 29.2821 8.78554 29.0552 8.38176 28.6514C7.97798 28.2477 7.75113 27.7 7.75113 27.129V11.6267C7.75113 11.0557 7.97798 10.508 8.38176 10.1042C8.78554 9.70045 9.33319 9.47361 9.90423 9.47361H27.129C27.7 9.47361 28.2477 9.70045 28.6514 10.1042C29.0552 10.508 29.2821 11.0557 29.2821 11.6267V27.129ZM34.4495 19.3778C34.4495 19.9489 34.2226 20.4965 33.8189 20.9003C33.4151 21.3041 32.8674 21.5309 32.2964 21.5309H31.8658V13.7798H32.2964C32.8674 13.7798 33.4151 14.0066 33.8189 14.4104C34.2226 14.8142 34.4495 15.3619 34.4495 15.9329V19.3778ZM24.9759 15.9329C24.9714 16.2741 24.8339 16.6001 24.5926 16.8414C24.3513 17.0827 24.0253 17.2203 23.684 17.2247H13.3492C13.0066 17.2247 12.678 17.0886 12.4357 16.8464C12.1934 16.6041 12.0573 16.2755 12.0573 15.9329C12.0573 15.5903 12.1934 15.2617 12.4357 15.0194C12.678 14.7771 13.0066 14.641 13.3492 14.641H23.684C24.0266 14.641 24.3552 14.7771 24.5975 15.0194C24.8398 15.2617 24.9759 15.5903 24.9759 15.9329ZM24.9759 22.8228C24.9714 23.164 24.8339 23.49 24.5926 23.7313C24.3513 23.9726 24.0253 24.1102 23.684 24.1146H13.3492C13.0066 24.1146 12.678 23.9785 12.4357 23.7363C12.1934 23.494 12.0573 23.1654 12.0573 22.8228C12.0573 22.4802 12.1934 22.1516 12.4357 21.9093C12.678 21.667 13.0066 21.5309 13.3492 21.5309H23.684C24.0266 21.5309 24.3552 21.667 24.5975 21.9093C24.8398 22.1516 24.9759 22.4802 24.9759 22.8228Z"
            fill="url(#paint0_linear_118_3163)"
          />
          <path
            d="M45.7077 28.9998H41.4697L49.2437 8.64181H54.3137L62.1137 28.9998H57.7717L56.2377 24.8918H47.2157L45.7077 28.9998ZM51.7397 12.7238L48.6717 20.9918H54.8077L51.7397 12.7238Z"
            fill="white"
          />
          <path
            d="M67.4595 29.2598C66.1595 29.2598 65.0415 28.8958 64.1315 28.1418C63.2215 27.3878 62.7795 26.3738 62.7795 25.1258V25.0738C62.7795 23.4358 63.5855 22.2398 64.8335 21.6418C66.1075 21.0438 67.4075 20.8098 68.9675 20.8098H70.3455C71.0735 20.8098 71.4375 20.4718 71.4375 19.7958C71.4375 18.8338 70.6575 18.0798 69.2015 18.0798C67.8235 18.0798 66.8095 18.7038 66.1075 19.9518L63.0135 18.1058C64.2095 15.8958 66.3415 14.8038 69.3835 14.8038C73.0495 14.8038 75.4155 16.7538 75.4155 20.3938V28.9998H71.6715V27.2838L71.6195 27.2578C70.6835 28.5838 69.3055 29.2598 67.4595 29.2598ZM68.6295 26.2958C70.3715 26.2958 71.4115 25.1518 71.4115 23.6178V23.3058H68.9675C67.7975 23.3058 66.8615 23.8518 66.8615 24.8918C66.8615 25.8278 67.5895 26.2958 68.6295 26.2958Z"
            fill="white"
          />
          <path
            d="M80.6244 7.75781C82.0544 7.75781 83.1724 8.84981 83.1724 10.2798C83.1724 11.6578 82.0544 12.7758 80.6244 12.7758C79.2724 12.7758 78.1284 11.6578 78.1284 10.2798C78.1284 8.90181 79.2724 7.75781 80.6244 7.75781ZM82.7044 28.9998H78.6224V15.1158H82.7044V28.9998Z"
            fill="white"
          />
          <path
            d="M61.6875 31.5998H84.5764V32.8998H61.6875V31.5998Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_3163"
              x1="0.648081"
              y1="3.60393e-07"
              x2="33.788"
              y2="37.7516"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80FCF0" />
              <stop offset="0.526042" stop-color="#EFCE85" />
              <stop offset="1" stop-color="#AC5DFA" />
            </linearGradient>
          </defs>
        </svg>
        <div className="hidden mobile:flex cursor-pointer">
          <div
            className="items-center flex justify-center flex-col gap-1 cursor-pointer relative transi transition-transform w-10  h-10 p-1 "
            onClick={handleMenuClick}
          >
            {/* <div> */}
            <span
              className={`w-full h-[2px] bg-white duration-500 ${
                menuOpen &&
                "rotate-45 w-[80%] medium:w-[65%] absolute transition-transform"
              }`}
            ></span>
            <span
              className={`w-full h-[2px] my-[2px] bg-white duration-500 ${
                menuOpen && "hidden absolute transition-opacity "
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-white duration-500 ${
                menuOpen &&
                "-rotate-45 w-[80%] medium:w-[65%] absolute transition-transform"
              }`}
            ></span>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="py-3 border-b border-[rgba(255,255,255,0.12)]">
        <p className="text-lg hover:text-[#edcb88] cursor-pointer medium:text-base hover:translate-x-1 duration-200">
          Home
        </p>
      </div>
      <div className="py-3 border-b border-[rgba(255,255,255,0.12)]">
        <p className="text-lg hover:text-[#edcb88] cursor-pointer medium:text-base hover:translate-x-1 duration-200">
          About Us
        </p>
      </div>
      <div className="py-3 border-b border-[rgba(255,255,255,0.12)]">
        <p className="text-lg hover:text-[#edcb88] cursor-pointer medium:text-base hover:translate-x-1 duration-200">
          Services
        </p>
      </div>
      <div className="py-3 border-b border-[rgba(255,255,255,0.12)]">
        <p className="text-lg hover:text-[#edcb88] cursor-pointer medium:text-base hover:translate-x-1 duration-200">
          Pages
        </p>
      </div>
      <div className="py-3 border-b border-[rgba(255,255,255,0.12)]">
        <p className="text-lg hover:text-[#edcb88] cursor-pointer medium:text-base hover:translate-x-1 duration-200">
          Blog
        </p>
      </div>
      <div className="py-3 border-b border-[rgba(255,255,255,0.12)]">
        <p className="text-lg hover:text-[#edcb88] cursor-pointer medium:text-base hover:translate-x-1 duration-200">
          Contact
        </p>
      </div>
      <div className="flex items-center justify-start my-5 gap-8">
        <p className="hf tablet:block border-b border-b-[white] cursor-pointer text-base">
          Login
        </p>
       <FancyButton accent="dark" text="SignUp" />
      </div>
    </div>
    </div>
  );
};

export default Menu;
