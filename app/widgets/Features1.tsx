"use client";
import { useInView } from "react-intersection-observer";

const Features1 = () => {

     const { ref, inView, entry } = useInView({
       threshold: 0,
     });

  return (
    <div
      ref={ref}
      className={`${
        inView
          ? "translate-y-0 backdrop:blur-md opacity-100"
          : "translate-y-[40%] opacity-0"
      } min-w-[260px]  duration-[1500ms] flex items-center justify-center gradient p-[1px] h-[420px] tablet:h-[320px] max-h-[auto] rounded-xl flex-1`}
      style={{
        background: "linear-gradient(137deg, #80fcf0 0%, #ac5dfa 100%)",
      }}
    >
      <div className="large:justify  flex items-center justify-between w-full flex-col h-full bg-primary rounded-xl py py-10 px-20 tablet:px-11 tablet:py-7">
        <div className="">
          <svg
            width="122"
            height="126"
            viewBox="0 0 154 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M136 65C136 78.3539 131.529 90.7366 124.036 100.691C119.927 106.033 114.973 110.767 109.293 114.409C100.109 120.479 89.1118 124 77.2688 124C44.7613 124 18.4169 97.535 18.4169 65C18.4169 32.3436 44.7613 6 77.148 6C88.9909 6 99.9879 9.52058 109.172 15.4691C114.852 19.1111 119.807 23.8457 123.915 29.1872C131.529 39.2634 136 51.5247 136 65Z"
              fill="#EAEEF9"
            />
            <path
              d="M22.3589 116.021C23.4466 116.021 24.4133 115.171 24.4133 113.957C24.4133 112.864 23.5674 111.893 22.3589 111.893C21.2713 111.893 20.3046 112.743 20.3046 113.957C20.3046 115.049 21.1505 116.021 22.3589 116.021Z"
              fill="url(#paint0_linear_82_4974)"
            />
            <path
              d="M40.1364 22.9959C41.224 22.9959 42.0699 22.1461 42.0699 21.0535C42.0699 19.9609 41.224 19.1111 40.1364 19.1111C39.0488 19.1111 38.2029 19.9609 38.2029 21.0535C38.2029 22.1461 39.0488 22.9959 40.1364 22.9959Z"
              fill="url(#paint1_linear_82_4974)"
            />
            <g filter="url(#filter0_d_82_4974)">
              <path
                d="M131.892 15.105V113.438C131.892 115.138 129.958 115.988 128.75 114.774L126.695 112.831C125.97 112.103 124.762 112.103 124.037 112.831L120.17 116.595C119.445 117.323 118.236 117.323 117.511 116.595L113.644 112.831C112.919 112.103 111.71 112.103 110.985 112.831L107.118 116.595C106.393 117.323 105.185 117.323 104.46 116.595L100.593 112.831C99.8675 112.103 98.659 112.103 97.934 112.831L94.1877 116.595C93.4627 117.323 92.2542 117.323 91.5291 116.595L87.6621 112.831C86.937 112.103 85.7285 112.103 85.0035 112.831L81.1364 116.595C80.4113 117.323 79.2028 117.323 78.4778 116.595L74.6107 112.831C73.8856 112.103 72.6772 112.103 71.9521 112.831L68.085 116.595C67.3599 117.323 66.1515 117.323 65.4264 116.595L60.3509 111.496L59.9883 111.86L56.9672 114.774C55.7587 115.988 53.8252 115.138 53.8252 113.438V15.105C53.8252 13.4054 55.7587 12.5556 56.9672 13.7696L59.0216 15.712C59.7466 16.4404 60.9551 16.4404 61.6802 15.712L65.5473 11.9486C66.2723 11.2202 67.4808 11.2202 68.2059 11.9486L72.0729 15.712C72.798 16.4404 74.0065 16.4404 74.7315 15.712L78.5986 11.9486C79.3237 11.2202 80.5321 11.2202 81.2572 11.9486L85.1243 15.712C85.8494 16.4404 87.0578 16.4404 87.7829 15.712L91.65 11.9486C92.3751 11.2202 93.5835 11.2202 94.3086 11.9486L98.0548 15.712C98.7799 16.4404 99.9883 16.4404 100.713 15.712L104.58 11.9486C105.306 11.2202 106.514 11.2202 107.239 11.9486L111.106 15.712C111.831 16.4404 113.04 16.4404 113.765 15.712L117.632 11.9486C118.357 11.2202 119.565 11.2202 120.29 11.9486L124.158 15.712C124.883 16.4404 126.091 16.4404 126.816 15.712L128.871 13.7696C129.958 12.5556 131.892 13.4054 131.892 15.105Z"
                fill="white"
              />
            </g>
            <path
              opacity="0.3"
              d="M121.787 81.9027C121.787 77.2691 117.997 73.5894 113.396 73.5894H109.2V71.954C109.2 71.4088 108.794 71 108.253 71C107.982 71 107.847 71.1363 107.711 71.1363L103.38 74.5434C102.974 74.8159 102.839 75.4974 103.245 75.9062L103.38 76.0425L107.711 79.4496C108.117 79.7222 108.659 79.7222 109.065 79.3133C109.2 79.177 109.2 78.9045 109.2 78.7682V77.1328H113.396C115.967 77.1328 117.997 79.177 117.997 81.7664C117.997 84.3558 115.967 86.4001 113.396 86.4001H105.005C104.057 86.4001 103.11 87.2178 103.11 88.1717C103.11 89.1257 103.922 90.0797 104.869 90.0797H113.396C117.997 90.3523 121.787 86.5363 121.787 81.9027Z"
              fill="url(#paint2_linear_82_4974)"
            />
            <path
              d="M117.27 37.1998H108.81C107.964 37.1998 107.239 36.4714 107.239 35.6216C107.239 34.7719 107.964 34.0435 108.81 34.0435H117.27C118.116 34.0435 118.841 34.7719 118.841 35.6216C118.841 36.4714 118.116 37.1998 117.27 37.1998Z"
              fill="#C5CCDE"
            />
            <path
              d="M101.076 37.1998H67.7225C66.8766 37.1998 66.1515 36.4714 66.1515 35.6216C66.1515 34.7719 66.8766 34.0435 67.7225 34.0435H101.076C101.922 34.0435 102.647 34.7719 102.647 35.6216C102.647 36.4714 101.922 37.1998 101.076 37.1998Z"
              fill="#C5CCDE"
            />
            <path
              d="M117.269 52.2535H102.767C101.921 52.2535 101.196 51.5252 101.196 50.6754C101.196 49.8256 101.921 49.0972 102.767 49.0972H117.269C118.115 49.0972 118.84 49.8256 118.84 50.6754C118.84 51.5252 118.115 52.2535 117.269 52.2535Z"
              fill="#C5CCDE"
            />
            <path
              d="M95.0338 52.2535H80.1698C79.3238 52.2535 78.5988 51.5252 78.5988 50.6754C78.5988 49.8256 79.3238 49.0972 80.1698 49.0972H95.1547C96.0006 49.0972 96.7256 49.8256 96.7256 50.6754C96.7256 51.5252 95.8797 52.2535 95.0338 52.2535Z"
              fill="#C5CCDE"
            />
            <path
              d="M74.369 52.2535H67.7225C66.8766 52.2535 66.1515 51.5252 66.1515 50.6754C66.1515 49.8256 66.8766 49.0972 67.7225 49.0972H74.369C75.2149 49.0972 75.94 49.8256 75.94 50.6754C75.94 51.5252 75.2149 52.2535 74.369 52.2535Z"
              fill="#C5CCDE"
            />
            <path
              d="M92.4958 67.4283H81.0155C80.1695 67.4283 79.4445 66.7 79.4445 65.8502C79.4445 65.0004 80.1695 64.272 81.0155 64.272H92.4958C93.3417 64.272 94.0668 65.0004 94.0668 65.8502C94.0668 66.7 93.3417 67.4283 92.4958 67.4283Z"
              fill="#C5CCDE"
            />
            <path
              d="M74.8524 67.4283H67.7225C66.8766 67.4283 66.1515 66.7 66.1515 65.8502C66.1515 65.0004 66.8766 64.272 67.7225 64.272H74.8524C75.6983 64.272 76.4234 65.0004 76.4234 65.8502C76.4234 66.7 75.6983 67.4283 74.8524 67.4283Z"
              fill="#C5CCDE"
            />
            <path
              d="M92.4959 82.4816H67.7225C66.8766 82.4816 66.1515 81.7532 66.1515 80.9034C66.1515 80.0536 66.8766 79.3252 67.7225 79.3252H92.4959C93.3418 79.3252 94.0669 80.0536 94.0669 80.9034C94.0669 81.7532 93.3418 82.4816 92.4959 82.4816Z"
              fill="#C5CCDE"
            />
            <path
              d="M92.496 94.5005C83.7951 94.5005 76.4235 94.5005 67.7225 94.5005C65.6682 94.5005 65.6682 97.5355 67.7225 97.5355C77.2694 97.5355 83.07 97.5355 92.496 97.5355C93.3419 97.5355 94.067 96.8071 94.067 95.9573C94.067 95.1075 93.3419 94.5005 92.496 94.5005Z"
              fill="#C5CCDE"
            />
            <path
              d="M37.1716 94.1197C53.2826 94.1197 66.3432 81.1091 66.3432 65.0598C66.3432 49.0105 53.2826 36 37.1716 36C21.0606 36 8 49.0105 8 65.0598C8 81.1091 21.0606 94.1197 37.1716 94.1197Z"
              fill="#D5DFEA"
            />
            <g filter="url(#filter1_d_82_4974)">
              <path
                d="M37.1716 94.1197C53.2826 94.1197 66.3432 81.1091 66.3432 65.0598C66.3432 49.0105 53.2826 36 37.1716 36C21.0606 36 8 49.0105 8 65.0598C8 81.1091 21.0606 94.1197 37.1716 94.1197Z"
                fill="url(#paint3_linear_82_4974)"
              />
            </g>
            <path
              d="M24.3583 82.6097C23.5575 82.6097 22.8711 81.9259 22.8711 81.1282V48.8775C22.8711 48.0798 23.5575 47.396 24.3583 47.396C25.1591 47.396 25.8455 48.0798 25.8455 48.8775V81.1282C25.8455 82.0399 25.1591 82.6097 24.3583 82.6097Z"
              fill="#4260FF"
            />
            <path
              d="M24.3586 76.5699C26.6331 76.5699 28.4769 74.7331 28.4769 72.4673C28.4769 70.2015 26.6331 68.3647 24.3586 68.3647C22.0841 68.3647 20.2402 70.2015 20.2402 72.4673C20.2402 74.7331 22.0841 76.5699 24.3586 76.5699Z"
              fill="#B3C6FF"
            />
            <path
              d="M37.0568 82.6097C36.256 82.6097 35.5696 81.9259 35.5696 81.1282V48.8775C35.5696 48.0798 36.256 47.396 37.0568 47.396C37.8575 47.396 38.5439 48.0798 38.5439 48.8775V81.1282C38.5439 82.0399 37.8575 82.6097 37.0568 82.6097Z"
              fill="#4260FF"
            />
            <path
              d="M37.1712 60.6153C39.4457 60.6153 41.2895 58.7785 41.2895 56.5127C41.2895 54.2469 39.4457 52.4102 37.1712 52.4102C34.8967 52.4102 33.0529 54.2469 33.0529 56.5127C33.0529 58.7785 34.8967 60.6153 37.1712 60.6153Z"
              fill="#B3C6FF"
            />
            <path
              d="M49.869 82.6097C49.0682 82.6097 48.3818 81.9259 48.3818 81.1282V48.8775C48.3818 48.0798 49.0682 47.396 49.869 47.396C50.6698 47.396 51.3562 48.0798 51.3562 48.8775V81.1282C51.3562 82.0399 50.6698 82.6097 49.869 82.6097Z"
              fill="#4260FF"
            />
            <path
              d="M49.8693 69.0484C52.1438 69.0484 53.9877 67.2116 53.9877 64.9458C53.9877 62.68 52.1438 60.8433 49.8693 60.8433C47.5948 60.8433 45.751 62.68 45.751 64.9458C45.751 67.2116 47.5948 69.0484 49.8693 69.0484Z"
              fill="#B3C6FF"
            />
            <defs>
              <filter
                id="filter0_d_82_4974"
                x="31.8252"
                y="0.402344"
                width="122.067"
                height="149.739"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="11" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_82_4974"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_82_4974"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_82_4974"
                x="0"
                y="33"
                width="74.3431"
                height="74.1196"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.1125 0 0 0 0 0.295916 0 0 0 0 1 0 0 0 0.22 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_82_4974"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_82_4974"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_82_4974"
                x1="20.2516"
                y1="113.998"
                x2="24.4827"
                y2="113.998"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_82_4974"
                x1="38.1531"
                y1="21.0922"
                x2="42.1352"
                y2="21.0922"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_82_4974"
                x1="114.687"
                y1="82.9754"
                x2="104.971"
                y2="73.0327"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00289017"
                  stop-color="#7897DA"
                  stop-opacity="0.89"
                />
                <stop offset="1" stop-color="#003CC1" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_82_4974"
                x1="22.6891"
                y1="44.3068"
                x2="66.6646"
                y2="71.2771"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex-">
          <p className="text-2xl font-semibold mb-2 text-center tablet:text-xl">
            Plagiarism checker
          </p>

          <p className="text-center text-[rgba(255,255,255,0.5)] text-base tablet:text-sm">
            Convert data noise intelligent for a quis lorem.
          </p>
        </div>
        <div className="mt-5">
          <svg
            width="37"
            height="13"
            viewBox="0 0 37 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.375 1L35.055 6.27428L29.375 11.9543"
              stroke="currentColor"
              stroke-opacity="0.80"
              stroke-width="1.52"
              stroke-linecap="round"
            ></path>
            <path
              d="M34 6.25L1 6.25"
              stroke="currentColor"
              stroke-opacity="0.80"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};


export default Features1;