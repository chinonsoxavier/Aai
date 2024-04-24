"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const WritingSteps2 = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  // const []
  return (
    <div className="w-full flex items-center justify-center text-white">
      <div className="max-width flex items-center justify-center">
        <div
          ref={ref}
          className={`${
            inView
              ? "translate-y-0 backdrop:blur-md opacity-100"
              : "translate-y-[40%] opacity-0"
          } inl inline-flex duration-[1500ms] items-center bg-[gren] sx-10 justify-between grid-cols-3 base:flex-col basx-10 w-full border border-[rgba(255,255,255,0.12)] bg-[#111629] rounded-[30px] px0 base:h-auto h-[360px]`}
        >
          <div className="bg- w-full base:pl0 py-10 h-full relative flex flexcol items-center justify-between pl-10">
            <div className="flx flex-col ">
              <svg
                className="w-9 h-9 "
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Broken/Add-User">
                  <g id="Add-User">
                    <path
                      id="Vector"
                      d="M14.952 22.7534C19.0102 22.775 28.5172 23.1428 28.5172 29.394C28.5172 35.3142 20.3799 36 14.2586 36C13.6416 36 13.0336 35.991 12.4364 35.9766C11.7261 35.955 11.1665 35.3592 11.1881 34.6446C11.2078 33.9318 11.823 33.3954 12.5117 33.39C13.0838 33.408 13.6667 33.4152 14.2586 33.4152C22.0103 33.4152 25.9417 32.0634 25.9417 29.394C25.9417 26.7012 22.0103 25.3369 14.2586 25.3369C6.50694 25.3369 2.57552 26.6904 2.57552 29.358C2.57552 30.231 2.884 31.4964 5.56175 32.4072C6.23612 32.6358 6.59662 33.3702 6.36884 34.0452C6.13927 34.7184 5.41109 35.0892 4.73493 34.8552C0.821439 33.525 0 31.131 0 29.358C0 23.4361 8.13726 22.7521 14.2586 22.7521L14.952 22.7534ZM30.9853 10.862C31.7278 10.862 32.3304 11.4668 32.3304 12.212V14.4692H34.6548C35.3974 14.4692 36 15.074 36 15.8192C36 16.5644 35.3974 17.1692 34.6548 17.1692H32.3304V19.4282C32.3304 20.1734 31.7278 20.7782 30.9853 20.7782C30.2428 20.7782 29.6401 20.1734 29.6401 19.4282V17.1692H27.3193C26.5768 17.1692 25.9741 16.5644 25.9741 15.8192C25.9741 15.074 26.5768 14.4692 27.3193 14.4692H29.6401V12.212C29.6401 11.4668 30.2428 10.862 30.9853 10.862ZM14.2586 0C19.5531 0 23.8594 4.32358 23.8594 9.63715C23.8594 14.9507 19.5531 19.2743 14.2586 19.2743C8.96408 19.2743 4.65781 14.9507 4.65781 9.63715C4.65781 4.32358 8.96408 0 14.2586 0ZM14.2586 2.58659C10.3846 2.58659 7.23332 5.74917 7.23332 9.63715C7.23332 13.5251 10.3846 16.6877 14.2586 16.6877C18.1326 16.6877 21.2839 13.5251 21.2839 9.63715C21.2839 5.74917 18.1326 2.58659 14.2586 2.58659Z"
                      fill="url(#paint0_linear_82_4608)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_82_4608"
                    x1="0.63"
                    y1="3.60393e-07"
                    x2="33.8785"
                    y2="36.8186"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="0.526042" stop-color="#EFCE85" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="f font-bold text-2xl my-6 large:my-3 medium:text-xl">
                Select writing template
              </p>

              <p className="medium:text-base text-lg font-normal text-[#747681] largtext-base">
                Simply choose a template from available list to write content.
              </p>
            </div>
            <div className="flex items-center base:hidden justify-center z-10 bg-primary absolute -right-6 rounded-full w-12 h-12 border border-[rgba(255,255,255,0.12)]">
              <svg
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L11.4211 9.52632L1 19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" py-10 bg-[re]  base:px-10 w-full base:border-l-transparent base:border-r-transparent h-full bg-[] base:border-b border-t relative border-r border-l px-20 border-[rgba(255,255,255,0.12)] flex flexcol items-center justify-between">
            <div className="h-full flex b-[red] items-start justify-start flex-col">
              <svg
                className="w-9 h-9 "
                viewBox="0 0 32 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Broken/Home">
                  <g id="Home">
                    <path
                      id="Vector"
                      d="M3.39404 8.53098C3.9296 8.36593 4.52131 8.55526 4.85896 9.01953C5.23413 9.53538 5.18974 10.2451 4.75322 10.7101L3.55754 11.5958C2.99099 12.0665 2.6614 12.7635 2.65708 13.5001V27.0069C2.67324 29.2071 4.4572 30.9845 6.65746 30.9925H13.4478V31.022C14.1815 31.022 14.7763 31.6169 14.7763 32.3506C14.7763 33.0843 14.1815 33.6791 13.4478 33.6791H6.65746C2.98402 33.671 0.00811815 30.6951 0 27.0217V13.5001C0.0234865 11.9376 0.756909 10.4707 1.99281 9.51445L3.21802 8.59923L3.39404 8.53098ZM12.0897 1.3513C14.3312 -0.450435 17.5242 -0.450435 19.7657 1.3513L29.966 9.48492C31.1746 10.457 31.8842 11.9195 31.8997 13.4705L31.885 27.0069C31.885 30.6837 28.9043 33.6644 25.2275 33.6644H22.2752C20.4955 33.6644 19.0505 32.226 19.0424 30.4463V24.3351L19.0286 24.1812C18.9561 23.7818 18.6066 23.4789 18.1862 23.4789H13.7578C13.5281 23.4789 13.3081 23.5711 13.1471 23.7348C12.9861 23.8986 12.8976 24.1202 12.9016 24.3498V26.6821C12.9016 27.4159 12.3068 28.0107 11.5731 28.0107C10.8393 28.0107 10.2445 27.4159 10.2445 26.6821V24.3498C10.2445 23.4141 10.6162 22.5168 11.2779 21.8551C11.9395 21.1935 12.8368 20.8218 13.7725 20.8218H18.201C20.1437 20.8299 21.7143 22.4071 21.7143 24.3498V30.4463C21.7143 30.7561 21.9654 31.0073 22.2752 31.0073H25.3013C27.5025 31.0073 29.2869 29.2229 29.2869 27.0217V13.5001C29.2761 12.751 28.9293 12.0464 28.3422 11.5811L18.142 3.44745C16.8557 2.3885 14.9997 2.3885 13.7135 3.44745L10.4364 5.89787C9.82906 6.33403 8.98311 6.19524 8.54694 5.58787C8.11078 4.9805 8.24957 4.13456 8.85694 3.69839L12.0897 1.3513Z"
                      fill="url(#paint0_linear_82_4602)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_82_4602"
                    x1="0.558245"
                    y1="3.37158e-07"
                    x2="31.7896"
                    y2="32.7577"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="0.526042" stop-color="#EFCE85" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="f font-bold text-2xl my-6 large:my-3 medium:text-xl">
                Describe your topic
              </p>

              <p className="medium:text-base text-lg font-normal text-[#747681] largtext-base">
                Provide our AI content writer with few sentences.
              </p>
            </div>
            <div className="flex base:hidden items-center justify-center bg-primary absolute -right-6 rounded-full w-12 h-12 border border-[rgba(255,255,255,0.12)]">
              <svg
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L11.4211 9.52632L1 19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full h-full base:items-start py-10 relative flex flex-col items-center justify-start px-10">
            <div>
              <svg
                className="w-9 h-9"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Broken/Wallet">
                  <g id="Wallet">
                    <path
                      id="Vector"
                      d="M23.9397 0C29.3127 0 33.6842 4.47121 33.6842 9.96869V22.0313C33.6842 27.5288 29.3127 32 23.9397 32C23.32 32 22.8169 31.4853 22.8169 30.8512C22.8169 30.217 23.32 29.7024 23.9397 29.7024C28.0747 29.7024 31.4386 26.262 31.4386 22.0313V12.4042H25.9084C24.0924 12.4057 22.6118 13.9191 22.6103 15.7787C22.6118 17.6382 24.0924 19.1516 25.9084 19.1531H28.2064C28.8262 19.1531 29.3292 19.6678 29.3292 20.3019C29.3292 20.9361 28.8262 21.4508 28.2064 21.4508H25.9084C22.8529 21.4492 20.3662 18.905 20.3647 15.7787C20.3662 12.6523 22.8529 10.1081 25.9084 10.1066H31.4386V9.96869C31.4386 5.73797 28.0747 2.29764 23.9397 2.29764H9.74297C6.41048 2.29764 3.61394 4.54626 2.63935 7.62663H17.4394C18.0592 7.62663 18.5622 8.1413 18.5622 8.77545C18.5622 9.41113 18.0592 9.92427 17.4394 9.92427H2.25011L2.24561 9.96869V22.0313C2.24561 26.262 5.60805 29.7024 9.74297 29.7024H16.8855C17.5053 29.7024 18.0083 30.217 18.0083 30.8512C18.0083 31.4853 17.5053 32 16.8855 32H9.74297C4.36996 32 0 27.5288 0 22.0313V9.96869C0 4.47121 4.36996 0 9.74297 0H23.9397ZM26.6623 14.5263C27.2821 14.5263 27.7851 15.041 27.7851 15.6751C27.7851 16.3093 27.2821 16.8239 26.6623 16.8239H26.1518C25.532 16.8239 25.029 16.3093 25.029 15.6751C25.029 15.041 25.532 14.5263 26.1518 14.5263H26.6623Z"
                      fill="url(#paint0_linear_82_4596)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_82_4596"
                    x1="0.589473"
                    y1="3.20349e-07"
                    x2="29.9519"
                    y2="34.2266"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="0.526042" stop-color="#EFCE85" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="f font-bold text-2xl my-6 large:my-3 medium:text-xl">
                Select writing template
              </p>
              <p className="f text-lg font-normal text-[#747681] largeext-base medium:text-base">
                Our powerful AI tools will generate content in few second{" "}
              </p>
            </div>
          </div>
          {/* <div>2</div>
            <div>3</div> */}
        </div>
      </div>
    </div>
  );
};

export default WritingSteps2;
