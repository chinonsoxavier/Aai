"use client";
import FancyButton from "@/app/widgets/FancyButton";
import { Capt, ServicesBg } from "@/constants/exports";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const Awards = () => {

   const { ref, inView, entry } = useInView({
     threshold: 0,
   });

  return (
    <div
      className="w-full h-full flex items-center justify-center flex-col text-white"
      style={{ backgroundImage: `url${ServicesBg.src}` }}
    >
      <div className="flex max-width items-start justify-between gap-10 flex-wrap">
        <div className="flex items-start justify-between flex-col gap-5 flex-1  mi-w-[440px] large:mx-w-[550px] basis-[400px]">
          <h2 className="text-2xl lg:text-5xl sm:text-4xl font-bold leading-[60px]">
            The awards won by our works.
          </h2>
          <div className="flex items-start justify-between flex-col gap-4">
            <span className="flex">
              <span className="mr-2">
                <svg
                  className="flex-shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_82_4624)">
                    <circle cx="12" cy="12" r="12" fill="#4562FF"></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_82_4624">
                      <rect width="24" height="24" rx="12" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="whitespace-nowrap">10+ million user </span>
            </span>
            <span className="flex">
              <span className="mr-2">
                <svg
                  className="flex-shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_82_4624)">
                    <circle cx="12" cy="12" r="12" fill="#4562FF"></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_82_4624">
                      <rect width="24" height="24" rx="12" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="whitespace-nowrap">6K+ Website user </span>
            </span>
            <span className="flex">
              <span className="mr-2">
                <svg
                  className="flex-shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_82_4624)">
                    <circle cx="12" cy="12" r="12" fill="#4562FF"></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_82_4624">
                      <rect width="24" height="24" rx="12" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="whitespace-nowrap">
                100% billion plagiarism past
              </span>
            </span>
            <FancyButton text="Learn More" accent="dark" />
          </div>
        </div>
        <div
          className={` ${
            inView
              ? "translate-x-0 backdrop:blur-md opacity-100"
              : "translate-x-[100%] opacity-0"
          } flex-1 flex flex-col gap-8 duration-[1500ms] items-center justify-center tablet:text-sm`}
          ref={ref}
        >
          <p className="tablet:text-sm">
            Our clients describe us as a product team which creates AI writing
            tools, by crafting top-notch user experience.
          </p>

          <div className="flex items-center tablet:gap-2 justify-start gap-6 w-full flex-rap medium:flex-col medium:items-start tablet:justify-between ">
            <div className="flex flex-1 flex-col max-w-min items-start justify-start">
              <svg
                className="w-full h-full max-w-[131px]"
                viewBox="0 0 123 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3291 10.7012H44.7726V13.0177H39.8731V26.0762H37.1876V13.0177H32.3086L32.3291 10.7012ZM44.2396 14.9447H46.5356V17.0972H46.5766C46.6586 16.7897 46.8021 16.5027 47.0071 16.2157C47.2121 15.9287 47.4581 15.6622 47.7656 15.4367C48.0526 15.1907 48.3806 15.0062 48.7496 14.8627C49.0981 14.7192 49.4671 14.6372 49.8361 14.6372C50.1231 14.6372 50.3281 14.6577 50.4306 14.6577C50.5331 14.6782 50.6561 14.6987 50.7586 14.6987V17.0562C50.5946 17.0152 50.4101 16.9947 50.2256 16.9742C50.0411 16.9537 49.8771 16.9332 49.6926 16.9332C49.2826 16.9332 48.8931 17.0152 48.5241 17.1792C48.1551 17.3432 47.8476 17.5892 47.5606 17.8967C47.2941 18.2247 47.0686 18.6142 46.9046 19.0857C46.7406 19.5572 46.6586 20.1107 46.6586 20.7257V26.0147H44.1986L44.2396 14.9447ZM62.0336 26.0762H59.6146V24.5182H59.5736C59.2661 25.0922 58.8151 25.5227 58.2206 25.8712C57.6261 26.2197 57.0111 26.3837 56.3961 26.3837C54.9406 26.3837 53.8746 26.0352 53.2186 25.2972C52.5626 24.5797 52.2346 23.4727 52.2346 22.0172V14.9447H54.6946V21.7712C54.6946 22.7552 54.8791 23.4522 55.2686 23.8417C55.6376 24.2517 56.1706 24.4567 56.8471 24.4567C57.3596 24.4567 57.7901 24.3747 58.1386 24.2107C58.4871 24.0467 58.7741 23.8417 58.9791 23.5752C59.2046 23.3087 59.3481 22.9807 59.4506 22.6117C59.5531 22.2427 59.5941 21.8327 59.5941 21.4022V14.9447H62.0541V26.0762H62.0336ZM66.2156 22.5092C66.2976 23.2267 66.5641 23.7187 67.0356 24.0262C67.5071 24.3132 68.0811 24.4567 68.7371 24.4567C68.9626 24.4567 69.2291 24.4362 69.5161 24.3952C69.8031 24.3542 70.0901 24.2927 70.3361 24.1902C70.6026 24.0877 70.8076 23.9442 70.9716 23.7392C71.1356 23.5342 71.2176 23.2882 71.1971 22.9807C71.1766 22.6732 71.0741 22.4067 70.8486 22.2017C70.6231 21.9967 70.3566 21.8532 70.0286 21.7097C69.7006 21.5867 69.3111 21.4842 68.8806 21.4022C68.4501 21.3202 68.0196 21.2177 67.5686 21.1152C67.1176 21.0127 66.6666 20.8897 66.2361 20.7462C65.8056 20.6027 65.4366 20.4182 65.0881 20.1517C64.7601 19.9057 64.4731 19.5982 64.2886 19.2087C64.0836 18.8192 63.9811 18.3682 63.9811 17.7942C63.9811 17.1792 64.1246 16.6872 64.4321 16.2772C64.7191 15.8672 65.1086 15.5392 65.5596 15.2932C66.0106 15.0472 66.5231 14.8627 67.0766 14.7602C67.6301 14.6577 68.1631 14.6167 68.6551 14.6167C69.2291 14.6167 69.7826 14.6782 70.2951 14.8012C70.8076 14.9242 71.2996 15.1087 71.7096 15.3957C72.1401 15.6622 72.4886 16.0312 72.7551 16.4617C73.0421 16.8922 73.2061 17.4252 73.2881 18.0402H70.7256C70.6026 17.4457 70.3361 17.0562 69.9261 16.8512C69.4956 16.6462 69.0241 16.5437 68.4706 16.5437C68.3066 16.5437 68.0811 16.5642 67.8556 16.5847C67.6096 16.6257 67.4046 16.6667 67.1791 16.7487C66.9741 16.8307 66.7896 16.9537 66.6461 17.0972C66.5026 17.2407 66.4206 17.4457 66.4206 17.6917C66.4206 17.9992 66.5231 18.2247 66.7281 18.4092C66.9331 18.5937 67.1996 18.7372 67.5481 18.8807C67.8761 19.0037 68.2656 19.1062 68.6961 19.1882C69.1266 19.2702 69.5776 19.3727 70.0286 19.4752C70.4796 19.5777 70.9101 19.7007 71.3406 19.8442C71.7711 19.9877 72.1606 20.1722 72.4886 20.4387C72.8166 20.6847 73.1036 20.9922 73.3086 21.3612C73.5136 21.7302 73.6161 22.2017 73.6161 22.7347C73.6161 23.3907 73.4726 23.9442 73.1651 24.4157C72.8576 24.8667 72.4681 25.2562 71.9966 25.5432C71.5251 25.8302 70.9716 26.0352 70.3976 26.1787C69.8031 26.3017 69.2291 26.3837 68.6551 26.3837C67.9581 26.3837 67.3021 26.3017 66.7076 26.1377C66.1131 25.9737 65.5801 25.7277 65.1496 25.4202C64.7191 25.0922 64.3706 24.7027 64.1246 24.2107C63.8786 23.7392 63.7351 23.1652 63.7146 22.4887H66.1951V22.5092H66.2156ZM74.3131 14.9447H76.1786V11.5827H78.6386V14.9242H80.8526V16.7487H78.6386V22.6937C78.6386 22.9602 78.6591 23.1652 78.6796 23.3702C78.7001 23.5547 78.7616 23.7187 78.8231 23.8417C78.9051 23.9647 79.0281 24.0672 79.1716 24.1287C79.3356 24.1902 79.5406 24.2312 79.8276 24.2312C79.9916 24.2312 80.1761 24.2312 80.3401 24.2107C80.5041 24.1902 80.6886 24.1697 80.8526 24.1287V26.0352C80.5861 26.0762 80.3196 26.0967 80.0531 26.1172C79.7866 26.1582 79.5406 26.1582 79.2536 26.1582C78.5976 26.1582 78.0851 26.0967 77.6956 25.9737C77.3061 25.8507 76.9986 25.6662 76.7731 25.4407C76.5476 25.1947 76.4041 24.9077 76.3221 24.5592C76.2401 24.2107 76.1991 23.7802 76.1786 23.3292V16.7692H74.3131V14.9037V14.9447ZM82.5746 14.9447H84.8911V16.4617H84.9321C85.2806 15.8057 85.7521 15.3547 86.3671 15.0677C86.9821 14.7807 87.6381 14.6372 88.3761 14.6372C89.2576 14.6372 90.0161 14.7807 90.6721 15.1087C91.3281 15.4162 91.8611 15.8262 92.2916 16.3797C92.7221 16.9127 93.0501 17.5482 93.2551 18.2657C93.4601 18.9832 93.5831 19.7622 93.5831 20.5617C93.5831 21.3202 93.4806 22.0377 93.2961 22.7347C93.0911 23.4317 92.8041 24.0672 92.4146 24.6002C92.0251 25.1332 91.5331 25.5637 90.9181 25.8917C90.3031 26.2197 89.6061 26.3837 88.7861 26.3837C88.4376 26.3837 88.0686 26.3427 87.7201 26.2812C87.3716 26.2197 87.0231 26.1172 86.6951 25.9737C86.3671 25.8302 86.0596 25.6457 85.7931 25.4202C85.5061 25.1947 85.2806 24.9282 85.0961 24.6412H85.0551V30.1967H82.5951V14.9447H82.5746ZM91.1641 20.5207C91.1641 20.0287 91.1026 19.5367 90.9591 19.0652C90.8361 18.5937 90.6311 18.1837 90.3646 17.8147C90.0981 17.4457 89.7701 17.1587 89.4011 16.9332C89.0116 16.7077 88.5606 16.6052 88.0686 16.6052C87.0436 16.6052 86.2646 16.9537 85.7316 17.6712C85.2191 18.3887 84.9526 19.3522 84.9526 20.5412C84.9526 21.1152 85.0141 21.6277 85.1576 22.0992C85.3011 22.5707 85.4856 22.9807 85.7726 23.3292C86.0391 23.6777 86.3671 23.9442 86.7566 24.1492C87.1461 24.3542 87.5766 24.4567 88.0891 24.4567C88.6631 24.4567 89.1141 24.3337 89.5036 24.1082C89.8931 23.8827 90.2006 23.5752 90.4671 23.2267C90.7131 22.8577 90.8976 22.4477 91.0001 21.9762C91.1026 21.4842 91.1641 21.0127 91.1641 20.5207ZM95.4896 10.7012H97.9496V13.0177H95.4896V10.7012ZM95.4896 14.9447H97.9496V26.0762H95.4896V14.9447ZM100.143 10.7012H102.603V26.0762H100.143V10.7012ZM110.106 26.3837C109.225 26.3837 108.425 26.2402 107.728 25.9327C107.031 25.6252 106.457 25.2357 105.965 24.7232C105.494 24.2107 105.125 23.5752 104.879 22.8577C104.633 22.1402 104.489 21.3407 104.489 20.5002C104.489 19.6597 104.612 18.8807 104.879 18.1632C105.125 17.4457 105.494 16.8307 105.965 16.2977C106.437 15.7852 107.031 15.3752 107.728 15.0882C108.425 14.8012 109.225 14.6372 110.106 14.6372C110.988 14.6372 111.787 14.7807 112.484 15.0882C113.181 15.3752 113.755 15.7852 114.247 16.2977C114.719 16.8102 115.088 17.4457 115.334 18.1632C115.58 18.8807 115.723 19.6597 115.723 20.5002C115.723 21.3612 115.6 22.1402 115.334 22.8577C115.067 23.5752 114.719 24.1902 114.247 24.7232C113.776 25.2357 113.181 25.6457 112.484 25.9327C111.787 26.2197 111.008 26.3837 110.106 26.3837ZM110.106 24.4362C110.639 24.4362 111.131 24.3132 111.521 24.0877C111.931 23.8622 112.238 23.5547 112.505 23.1857C112.771 22.8167 112.956 22.3862 113.079 21.9352C113.202 21.4637 113.263 20.9922 113.263 20.5002C113.263 20.0287 113.202 19.5572 113.079 19.0857C112.956 18.6142 112.771 18.2042 112.505 17.8352C112.238 17.4662 111.91 17.1792 111.521 16.9537C111.111 16.7282 110.639 16.6052 110.106 16.6052C109.573 16.6052 109.081 16.7282 108.692 16.9537C108.282 17.1792 107.974 17.4867 107.708 17.8352C107.441 18.2042 107.257 18.6142 107.134 19.0857C107.011 19.5572 106.949 20.0287 106.949 20.5002C106.949 20.9922 107.011 21.4637 107.134 21.9352C107.257 22.4067 107.441 22.8167 107.708 23.1857C107.974 23.5547 108.302 23.8622 108.692 24.0877C109.102 24.3337 109.573 24.4362 110.106 24.4362ZM116.461 14.9447H118.327V11.5827H120.787V14.9242H123.001V16.7487H120.787V22.6937C120.787 22.9602 120.807 23.1652 120.828 23.3702C120.848 23.5547 120.91 23.7187 120.971 23.8417C121.053 23.9647 121.176 24.0672 121.32 24.1287C121.484 24.1902 121.689 24.2312 121.976 24.2312C122.14 24.2312 122.324 24.2312 122.488 24.2107C122.652 24.1902 122.837 24.1697 123.001 24.1287V26.0352C122.734 26.0762 122.468 26.0967 122.201 26.1172C121.935 26.1582 121.689 26.1582 121.402 26.1582C120.746 26.1582 120.233 26.0967 119.844 25.9737C119.454 25.8507 119.147 25.6662 118.921 25.4407C118.696 25.1947 118.552 24.9077 118.47 24.5592C118.388 24.2107 118.347 23.7802 118.327 23.3292V16.7692H116.461V14.9037V14.9447Z"
                  fill="white"
                />
                <path
                  d="M29.4585 10.701H18.204L14.7395 0L11.2545 10.701L0 10.6805L9.10199 17.302L5.617 28.003L14.719 21.3815L23.821 28.003L20.3565 17.302L29.4585 10.701Z"
                  fill="#00B67A"
                />
                <path
                  d="M21.1362 19.7208L20.3572 17.3018L14.7402 21.3813L21.1362 19.7208Z"
                  fill="#005128"
                />
              </svg>
              <div className="flex items-center justify-center gap-1">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap text-[rgba(255,255,255,0.5)] pt-1">
                  4.8/5 Rating
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start">
              <Image src={Capt} alt="" className="" />

              <div className="flex items-center justify-center gap-1">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#f59e0b"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <span className="text-[rgba(255,255,255,0.5)] pt-1 tablet:text-sm whitespace-nowrap">
                  4.8/5 Rating
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-wrap justify-start gap-4  w-full">
            <svg
              width="138"
              height="40"
              viewBox="0 0 138 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_82_5428)">
                <path
                  d="M0.0163574 7.4386H4.82436V18.0794H14.9647V7.4386H19.7789V33.5584H14.9647V22.6942H4.82436V33.5584H0.0163574V7.4386ZM35.0106 25.0508C35.0106 27.2373 33.2223 29.0166 31.0279 29.0166C28.8326 29.0166 27.0453 27.2373 27.0453 25.0508V13.8053H22.4857V25.0508C22.4857 29.7423 26.3179 33.5584 31.0279 33.5584C35.7367 33.5584 39.5687 29.7423 39.5687 25.0508V13.8053H35.0106V25.0508ZM52.2976 13.937C50.0358 13.937 48.457 14.5908 46.9323 16.0817V7.4386H42.3578V23.4566C42.3578 29.4523 46.7096 33.5584 51.5987 33.5584C57.0339 33.5584 61.7962 29.3791 61.7962 23.748C61.7962 18.1883 57.4048 13.937 52.2976 13.937ZM52.4112 29.3428C49.3116 29.3428 46.9412 26.7641 46.9412 23.748C46.9412 20.7314 49.3116 18.1518 52.4112 18.1518C55.0377 18.1518 57.4094 20.7314 57.4094 23.748C57.4094 26.7641 55.0377 29.3428 52.4112 29.3428ZM69.4792 15.085C69.4792 12.7944 71.0114 12.0681 72.6888 12.0681C74.0392 12.0681 75.8261 13.0855 76.9923 14.3212L79.9826 10.8332C78.4882 8.83503 75.4612 7.45389 72.9807 7.45389C68.0195 7.45389 64.4447 10.3246 64.4447 15.085C64.4447 23.9143 75.3516 21.1156 75.3516 26.0585C75.3516 27.5829 73.8566 28.9286 72.1431 28.9286C69.4429 28.9286 68.567 27.6204 67.3273 26.2393L64.0073 29.6543C66.1242 32.2344 68.7496 33.5431 71.887 33.5431C76.5921 33.5431 80.3858 30.6362 80.3858 26.0936C80.3858 16.2835 69.4792 19.336 69.4792 15.085ZM92.4284 13.6811C87.5399 13.6811 83.1876 17.7848 83.1876 23.7818V39.8412H87.7618V31.157C89.2868 32.6468 90.8647 33.3017 93.1273 33.3017C98.2343 33.3017 102.626 29.0509 102.626 23.4912C102.626 17.8594 97.8626 13.6811 92.4284 13.6811ZM93.2413 29.0874C90.1419 29.0874 87.7713 26.5052 87.7713 23.4912C87.7713 20.4746 90.1419 17.8951 93.2413 17.8951C95.8672 17.8951 98.2392 20.4746 98.2392 23.4912C98.2392 26.5052 95.8672 29.0874 93.2413 29.0874ZM136.298 29.3428C133.599 29.3428 132.833 28.1806 132.833 26.3995V18.5151H137.027V14.5187H132.833V9.24953L128.202 11.3202V27.3806C128.202 31.487 131.047 33.5584 134.948 33.5584C135.531 33.5584 136.335 33.5209 136.773 33.4133L137.904 29.2715C137.393 29.3066 136.81 29.3428 136.298 29.3428Z"
                  fill="#45535E"
                />
                <path
                  d="M124.234 18.7474C123.357 17.2444 122.124 16.0395 120.581 15.1325C119.429 14.4642 118.234 14.04 116.887 13.8578V9.08234C118.234 8.51276 119.07 7.25209 119.07 5.78134C119.07 3.7767 117.456 2.15223 115.445 2.15223C113.433 2.15223 111.791 3.7767 111.791 5.78134C111.791 7.25209 112.578 8.51276 113.925 9.08234V13.86C112.847 14.015 111.73 14.3496 110.71 14.8636C108.626 13.2872 101.794 8.11543 97.7964 5.0948C97.8912 4.75434 97.9642 4.40342 97.9642 4.03319C97.9642 1.81285 96.1592 0.0131836 93.9295 0.0131836C91.6997 0.0131836 89.8955 1.81285 89.8955 4.03319C89.8955 6.25326 91.7016 8.05346 93.9314 8.05346C94.6919 8.05346 95.3954 7.83185 96.0025 7.46752L96.846 8.10497L108.437 16.424C107.824 16.9844 107.253 17.6219 106.797 18.3371C105.872 19.7953 105.306 21.3996 105.306 23.1497V23.5148C105.306 24.7433 105.541 25.9031 105.94 26.9926C106.291 27.9439 106.805 28.8089 107.442 29.591L103.595 33.4323C103.037 33.2256 102.432 33.1832 101.851 33.3101C101.27 33.437 100.738 33.7279 100.318 34.1481C100.028 34.436 99.7975 34.7784 99.6409 35.1556C99.4842 35.5328 99.4043 35.9372 99.4057 36.3453C99.4059 37.1751 99.7305 37.955 100.32 38.5418C100.609 38.8313 100.952 39.0609 101.331 39.2172C101.709 39.3735 102.115 39.4534 102.525 39.4524C102.935 39.4534 103.341 39.3735 103.72 39.2172C104.098 39.0609 104.442 38.8313 104.731 38.5418C105.021 38.2539 105.251 37.9116 105.408 37.5346C105.565 37.1576 105.645 36.7534 105.644 36.3453C105.644 36.0242 105.594 35.7108 105.501 35.413L109.477 31.4518C110.022 31.8269 110.61 32.1426 111.243 32.4149C112.492 32.9526 113.87 33.2802 115.377 33.2802H115.654C117.321 33.2802 118.894 32.8901 120.372 32.0922C121.93 31.249 123.149 30.0959 124.07 28.6238C124.996 27.1477 125.506 25.5168 125.506 23.7225V23.6328C125.506 21.8678 125.096 20.2393 124.234 18.7474ZM119.376 27.057C118.297 28.2517 117.056 28.9876 115.654 28.9876H115.423C114.622 28.9876 113.838 28.767 113.071 28.366C112.207 27.9244 111.55 27.2944 111.012 26.4968C110.456 25.7139 110.154 24.8592 110.154 23.9529V23.6777C110.154 22.7867 110.326 21.9418 110.758 21.144C111.221 20.2718 111.845 19.5935 112.676 19.0543C113.491 18.5188 114.362 18.2561 115.333 18.2561H115.423C116.302 18.2561 117.135 18.4289 117.921 18.8294C118.722 19.2566 119.376 19.8401 119.883 20.6077C120.376 21.3755 120.669 22.2037 120.763 23.1059C120.778 23.2935 120.785 23.4856 120.785 23.6691C120.785 24.8935 120.316 26.0276 119.376 27.057Z"
                  fill="#F8761F"
                />
              </g>
              <defs>
                <clipPath id="clip0_82_5428">
                  <rect width="137.895" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="187"
              height="40"
              viewBox="0 0 187 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_82_5424)">
                <path
                  d="M185.617 26.7262C185.038 26.7262 184.568 27.1997 184.568 27.7828C184.568 28.3658 185.038 28.8394 185.617 28.8394C186.196 28.8394 186.666 28.3658 186.666 27.7828C186.666 27.1997 186.196 26.7262 185.617 26.7262ZM185.617 28.6718C185.129 28.6718 184.734 28.2719 184.734 27.7828C184.734 27.2913 185.131 26.8937 185.617 26.8937C186.105 26.8937 186.502 27.2936 186.502 27.7828C186.502 28.272 186.105 28.6718 185.617 28.6718ZM185.959 27.6018C185.959 27.4097 185.823 27.2958 185.623 27.2958H185.288V28.2586H185.453V27.9101H185.632L185.805 28.2586H185.983L185.792 27.8744C185.894 27.8274 185.959 27.7336 185.959 27.6018ZM185.617 27.7604H185.455V27.441H185.617C185.728 27.441 185.794 27.4969 185.794 27.5996C185.794 27.7046 185.726 27.7604 185.617 27.7604ZM59.187 16.0328V13.4773H55.296V28.6807H59.187V19.5645C59.187 17.9137 60.2385 17.1028 61.8779 17.1028H64.0075V13.4774H62.1884C60.7642 13.4773 59.5264 14.2256 59.187 16.0328ZM67.6522 7.46387C66.3212 7.46387 65.3008 8.52272 65.3008 9.86301C65.3008 11.172 66.3212 12.2309 67.6522 12.2309C68.9832 12.2309 70.0037 11.172 70.0037 9.86301C70.0036 8.52266 68.9832 7.46387 67.6522 7.46387ZM65.7111 28.6808H69.5933V13.4773H65.7111V28.6808ZM88.0853 21.079C88.0853 25.4193 84.5914 28.9377 80.2812 28.9377C78.542 28.9377 76.9647 28.3636 75.7003 27.3941V33.144H71.8182V13.4773H75.7003V14.764C76.9647 13.7945 78.542 13.2204 80.2812 13.2204C84.5914 13.2204 88.0853 16.7387 88.0853 21.079ZM84.1788 21.079C84.1788 18.7224 82.28 16.8102 79.9396 16.8102C77.5992 16.8102 75.7003 18.7224 75.7003 21.079C75.7003 23.4357 77.5993 25.3479 79.9396 25.3479C82.28 25.3479 84.1788 23.438 84.1788 21.079ZM155.558 19.7455L153.293 19.12C151.803 18.729 151.224 18.2689 151.224 17.4759C151.224 16.7029 152.04 16.1624 153.207 16.1624C154.318 16.1624 155.19 16.8951 155.19 17.8333V17.9203H158.768V17.8333C158.768 15.0744 156.534 13.2204 153.207 13.2204C149.913 13.2204 147.519 15.0722 147.519 17.6255C147.519 19.6113 148.826 21.108 151.106 21.729L153.276 22.3254C154.924 22.7856 155.536 23.295 155.536 24.2086C155.536 25.1714 154.651 25.8192 153.333 25.8192C151.96 25.8192 151.035 24.9435 151.035 23.6434V23.5563H147.237V23.6434C147.237 26.7619 149.731 28.9421 153.302 28.9421C156.743 28.9421 159.241 26.8133 159.241 23.8824C159.241 22.4439 158.602 20.563 155.558 19.7455ZM101.857 13.4773H105.739V28.6807H101.857V27.394C100.592 28.3635 99.0151 28.9376 97.2759 28.9376C92.9657 28.9376 89.4718 25.4193 89.4718 21.079C89.4718 16.7386 92.9657 13.2204 97.2759 13.2204C99.0151 13.2204 100.592 13.7944 101.857 14.7639V13.4773ZM101.857 21.079C101.857 18.7201 99.9579 16.8102 97.6175 16.8102C95.2771 16.8102 93.3783 18.7224 93.3783 21.079C93.3783 23.4357 95.2771 25.3479 97.6175 25.3479C99.9601 25.3479 101.857 23.438 101.857 21.079ZM119.757 8.06699H123.639V28.683H119.757V27.3963C118.492 28.3658 116.915 28.9399 115.176 28.9399C110.865 28.9399 107.372 25.4216 107.372 21.0812C107.372 16.7408 110.865 13.2226 115.176 13.2226C116.915 13.2226 118.492 13.7967 119.757 14.7662V8.06699ZM119.757 21.079C119.757 18.7224 117.858 16.8102 115.517 16.8102C113.177 16.8102 111.278 18.7224 111.278 21.079C111.278 23.4357 113.175 25.3479 115.517 25.3479C117.858 25.3479 119.757 23.438 119.757 21.079ZM141.663 28.6808H145.545V13.4773H141.663V28.6808ZM143.604 7.46387C142.273 7.46387 141.252 8.52272 141.252 9.86301C141.252 11.172 142.273 12.2309 143.604 12.2309C144.935 12.2309 145.955 11.172 145.955 9.86301C145.955 8.52266 144.935 7.46387 143.604 7.46387ZM176.02 21.079C176.02 25.4193 172.526 28.9377 168.216 28.9377C163.906 28.9377 160.412 25.4194 160.412 21.079C160.412 16.7386 163.906 13.2204 168.216 13.2204C172.526 13.2204 176.02 16.7387 176.02 21.079ZM172.456 21.079C172.456 18.7224 170.557 16.8102 168.216 16.8102C165.876 16.8102 163.977 18.7224 163.977 21.079C163.977 23.4357 165.874 25.3479 168.216 25.3479C170.557 25.3479 172.456 23.438 172.456 21.079ZM57.1993 8.06699H42.3076V11.554H47.8202V28.6807H51.689V11.554H57.2016V8.06699H57.1993ZM132.51 24.5169L129.056 13.4774H124.979L130.158 28.6808H134.83L140.041 13.4774H135.964L132.51 24.5169ZM181.708 16.0328V13.4773H177.817V28.6807H181.708V19.5645C181.708 17.9137 182.76 17.1028 184.399 17.1028H186.529V13.4774H184.71C183.285 13.4773 182.05 14.2256 181.708 16.0328Z"
                  fill="white"
                />
                <path
                  d="M19.8541 39.9927C30.8193 39.9927 39.7083 31.0416 39.7083 19.9999C39.7083 8.95826 30.8193 0.00720215 19.8541 0.00720215C8.889 0.00720215 0 8.95826 0 19.9999C0 31.0416 8.889 39.9927 19.8541 39.9927Z"
                  fill="#34E0A1"
                />
                <path
                  d="M32.1175 16.0999L34.5134 13.4751H29.2004C26.5407 11.6456 23.3285 10.5801 19.8545 10.5801C16.385 10.5801 13.1818 11.6479 10.5264 13.4751H5.2002L7.59601 16.0999C6.12749 17.4491 5.20687 19.3926 5.20687 21.5505C5.20687 25.6227 8.48562 28.9243 12.5297 28.9243C14.4507 28.9243 16.201 28.1782 17.5076 26.9585L19.8546 29.5319L22.2016 26.9608C23.5082 28.1805 25.2562 28.9243 27.1773 28.9243C31.2214 28.9243 34.5045 25.6227 34.5045 21.5505C34.5067 19.3903 33.5861 17.4469 32.1175 16.0999ZM12.5318 26.5408C9.79436 26.5408 7.57608 24.307 7.57608 21.5505C7.57608 18.7939 9.79441 16.5601 12.5318 16.5601C15.2692 16.5601 17.4876 18.7939 17.4876 21.5505C17.4876 24.307 15.2692 26.5408 12.5318 26.5408ZM19.8568 21.4053C19.8568 18.1215 17.4854 15.3024 14.3553 14.0984C16.0479 13.3857 17.9046 12.9904 19.8545 12.9904C21.8045 12.9904 23.6634 13.3857 25.356 14.0984C22.2282 15.3047 19.8568 18.1215 19.8568 21.4053ZM27.1796 26.5408C24.4421 26.5408 22.2238 24.307 22.2238 21.5505C22.2238 18.7939 24.4421 16.5601 27.1796 16.5601C29.917 16.5601 32.1353 18.7939 32.1353 21.5505C32.1353 24.307 29.917 26.5408 27.1796 26.5408ZM27.1796 18.9324C25.7443 18.9324 24.5818 20.1029 24.5818 21.5482C24.5818 22.9935 25.7443 24.164 27.1796 24.164C28.6148 24.164 29.7772 22.9935 29.7772 21.5482C29.7772 20.1051 28.6148 18.9324 27.1796 18.9324ZM15.1295 21.5505C15.1295 22.9957 13.9671 24.1663 12.5318 24.1663C11.0966 24.1663 9.93416 22.9957 9.93416 21.5505C9.93416 20.1051 11.0966 18.9346 12.5318 18.9346C13.9671 18.9324 15.1295 20.1051 15.1295 21.5505Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_82_5424">
                  <rect width="186.667" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="145"
              height="40"
              viewBox="0 0 145 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_82_5431)">
                <path
                  d="M143.412 34.7986C143.412 32.5755 141.835 30.9477 139.664 30.9477C137.496 30.9477 135.917 32.5755 135.917 34.7986C135.917 37.0181 137.496 38.6432 139.664 38.6432C141.835 38.6432 143.412 37.0154 143.412 34.7986ZM138.679 34.9961V37.5114H137.866V31.9649H139.886C141.069 31.9649 141.612 32.4817 141.612 33.4891C141.612 34.1096 141.192 34.6011 140.652 34.6723V34.6958C141.121 34.7706 141.293 35.1891 141.39 35.9548C141.464 36.4508 141.562 37.3112 141.739 37.5132H140.777C140.554 36.9919 140.576 36.2542 140.404 35.6364C140.262 35.1665 140.011 34.9952 139.472 34.9952H138.683V34.9979L138.679 34.9961ZM139.686 34.2791C140.475 34.2791 140.701 33.8589 140.701 33.4882C140.701 33.0499 140.475 32.7036 139.686 32.7036H138.679V34.2809H139.686V34.2791ZM135.024 34.7986C135.024 32.0597 137.198 30.2081 139.66 30.2081C142.129 30.2081 144.301 32.0597 144.301 34.7986C144.301 37.5321 142.13 39.3854 139.66 39.3854C137.198 39.3854 135.024 37.5321 135.024 34.7986Z"
                  fill="#FF5A00"
                />
                <path
                  d="M118.955 38.5855L113.609 32.5908L108.311 38.5855H97.1622L108.058 26.3436L97.1622 14.0982H108.659L114.059 20.0469L119.254 14.0982H130.349L119.507 26.2922L130.499 38.5855H118.955ZM75.7539 38.5855V0.0102539H97.1622V8.60858H84.8221V14.0982H97.1622V22.3718H84.8221V29.9655H97.1622V38.5855H75.7539Z"
                  fill="#FF5A00"
                />
                <path
                  d="M66.7195 0.0102539V15.7973H66.6194C64.62 13.4994 62.1209 12.6985 59.2233 12.6985C53.2854 12.6985 48.8122 16.7379 47.2421 22.0742C45.451 16.1932 40.8326 12.5885 33.9857 12.5885C28.4239 12.5885 24.0336 15.0839 21.7402 19.1513V14.0973H10.246V8.60948H22.7909V0.0120601H0V38.5855H10.246V22.3718H20.4587C20.1441 23.6187 19.9868 24.8999 19.9906 26.1858C19.9906 34.2286 26.1368 39.8805 33.9838 39.8805C40.58 39.8805 44.9306 36.7809 47.2295 31.1379H38.4481C37.2612 32.8361 36.3593 33.3376 33.9848 33.3376C31.2323 33.3376 28.8568 30.935 28.8568 28.0905H46.737C47.5126 34.4802 52.4909 39.9897 59.3234 39.9897C62.2707 39.9897 64.969 38.5404 66.6185 36.0918H66.7177V38.5909H75.7516V0.0120601H66.7195V0.0102539ZM29.1418 22.4873C29.7126 20.036 31.6129 18.4343 33.9848 18.4343C36.5965 18.4343 38.4003 19.9864 38.8737 22.4873H29.1418ZM61.2371 32.7153C57.9084 32.7153 55.8395 29.6138 55.8395 26.3743C55.8395 22.9112 57.6396 19.5842 61.2371 19.5842C64.9699 19.5842 66.4571 22.913 66.4571 26.3743C66.4571 29.6553 64.8824 32.7153 61.2371 32.7153Z"
                  fill="#29007C"
                />
              </g>
              <defs>
                <clipPath id="clip0_82_5431">
                  <rect width="144.3" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;