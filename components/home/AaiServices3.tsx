"use client";
import FancyButton from "@/app/widgets/FancyButton";
import React from "react";
import { useInView } from "react-intersection-observer";

const AaiServices3 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="w-full h-full flex items-center justify-center text-white">
      <div className="flex max-width items-center justify-between gap-10 large:flex-col large:items-center large:justify-center">
        <div
          ref={ref}
          className={`${
            inView
              ? "translate-x-0 backdrop:blur-md opacity-100"
              : "-translate-x-[100%] opacity-0"
          } flex-1 large:min-w-[auto] mi-w-[440px] duration-[1500ms] large:max-w-[550px] basis-[100px]`}
        >
          <svg
            width="w-full"
            height="h-full"
            viewBox="0 0 553 575"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M552.781 297.038C552.781 359.942 531.648 417.837 496.613 464.598C477.149 489.649 453.792 511.916 427.098 529.173C383.721 557.564 332.002 574.264 276.39 574.264C123.458 574.264 0 450.124 0 297.594C0 144.508 124.014 20.9248 276.39 20.9248C332.002 20.9248 383.721 37.6252 427.098 65.4591C453.792 82.7162 477.149 104.983 496.613 130.034C532.204 176.238 552.781 234.133 552.781 297.038Z"
              fill="#EAEEF9"
            />
            <path
              d="M25.0264 120.57C30.2477 120.57 34.4804 116.333 34.4804 111.106C34.4804 105.88 30.2477 101.643 25.0264 101.643C19.8051 101.643 15.5724 105.88 15.5724 111.106C15.5724 116.333 19.8051 120.57 25.0264 120.57Z"
              fill="url(#paint0_linear_82_4816)"
            />
            <path
              d="M486.046 572.799C490.961 572.799 494.944 568.811 494.944 563.892C494.944 558.973 490.961 554.985 486.046 554.985C481.132 554.985 477.149 558.973 477.149 563.892C477.149 568.811 481.132 572.799 486.046 572.799Z"
              fill="url(#paint1_linear_82_4816)"
            />
            <path
              d="M504.418 295.004C504.418 327.632 497.532 358.882 485.596 386.915C468.61 426.437 441.066 460.445 406.176 485.261C368.073 512.375 321.707 528 271.209 528C142.669 528 38 423.68 38 295.004C38 268.349 42.5907 242.614 50.854 218.717C56.822 201.713 64.1671 186.088 73.8077 171.382C115.124 105.665 187.658 62.0074 270.291 61.5479H271.668C274.881 61.5479 278.095 61.5479 281.308 61.5479C297.835 62.0074 313.903 64.7648 329.511 68.4412C353.383 74.4155 375.418 84.0662 395.618 96.9339C436.934 122.669 469.528 161.272 487.891 206.768L493.4 222.393C500.745 245.371 504.418 269.728 504.418 295.004Z"
              fill="#C5D3E8"
            />
            <path
              d="M487.433 207.228C486.056 205.849 484.219 204.93 483.301 204.93C479.629 203.551 470.906 205.39 469.988 195.279C469.988 194.82 469.529 194.36 469.07 193.441C467.234 195.739 465.397 197.577 462.643 200.794C460.348 196.199 458.511 192.063 456.675 187.467C455.298 188.846 454.38 190.224 453.002 190.684C451.166 191.603 448.871 192.982 447.493 192.063C443.821 190.224 443.821 181.952 443.362 179.654C434.639 182.871 430.049 175.518 422.704 174.14C421.785 179.654 420.867 185.629 419.949 191.603C396.077 197.577 397.455 195.279 383.682 171.382C388.732 167.246 394.241 164.949 400.209 164.949C411.227 165.408 421.785 151.162 419.949 147.945C416.736 143.349 418.113 138.294 419.031 132.779C417.195 132.32 415.358 131.401 413.522 131.86C408.931 132.32 406.636 130.482 404.8 126.346C402.045 118.993 391.946 127.265 389.65 113.478C386.896 96.9339 390.568 97.3934 395.618 96.9339C375.419 84.0662 353.384 74.4155 329.512 68.4412C328.594 69.8199 326.757 72.1177 326.298 73.4964C320.33 85.9045 315.281 78.092 308.395 85.9045C302.427 92.7978 296.459 99.6912 290.491 107.044C281.768 102.449 279.014 94.1765 276.718 85.4449C273.964 75.3346 281.768 68.4412 281.309 61.5479C277.178 61.5479 272.128 61.5479 270.291 61.5479C277.178 71.6581 277.637 68.9008 259.733 83.1471C247.797 65.6839 236.32 86.364 230.352 73.9559C223.466 78.5515 217.039 82.6875 210.612 87.7427C207.858 89.5809 207.858 99.6912 210.153 101.989C211.071 103.368 213.826 104.287 215.203 103.827C221.63 101.529 227.598 98.3125 230.352 90.9596C236.32 95.0956 240.911 91.8787 245.042 87.7427C251.01 81.7684 252.847 88.2023 258.356 92.3383C264.324 96.9339 261.569 98.7721 256.978 107.504C256.978 107.963 256.978 108.423 256.978 109.342C258.815 108.882 260.651 108.423 263.405 107.963C261.11 116.235 259.274 133.699 246.42 125.427C240.911 121.75 238.615 121.75 235.402 127.265C233.566 130.482 230.352 130.941 227.139 130.941C200.053 132.32 205.562 135.077 194.085 138.754C185.363 141.511 195.463 132.779 161.032 152.54C159.655 153.46 158.278 155.298 157.819 156.676C155.523 168.625 155.064 178.735 152.769 179.195C143.128 180.114 150.933 155.757 129.356 155.298C116.961 154.838 107.321 160.813 99.0574 169.544C92.6304 176.438 89.876 197.118 105.944 193.901C107.78 193.441 109.616 192.522 110.993 192.982C114.666 193.901 116.502 198.496 113.748 201.254C110.075 205.39 100.435 209.066 107.321 213.662C110.993 215.96 109.157 217.338 109.157 230.665C109.157 238.018 114.666 242.154 123.847 245.831C137.16 250.426 135.783 229.746 148.637 237.559C154.146 240.776 160.114 243.993 166.541 246.29C172.05 248.588 177.1 251.346 181.231 255.941C187.199 262.375 207.858 263.754 217.957 290.408C219.334 294.544 223.466 297.761 225.302 301.897C227.598 307.412 231.27 309.25 236.779 310.629C250.551 313.846 262.946 323.496 262.946 330.39C262.946 339.121 259.274 346.015 252.388 351.529C246.42 356.585 245.042 368.993 237.697 380.482C225.302 399.323 213.826 392.43 207.858 401.162C202.808 408.515 197.758 415.408 193.167 422.761C188.117 431.493 169.755 439.305 163.328 448.496C158.278 455.849 152.31 463.202 155.064 473.772C156.441 478.368 158.737 489.397 158.737 495.371C150.474 493.073 145.424 487.559 139.915 482.044C131.652 473.312 129.356 462.743 128.438 451.254C127.979 448.037 126.143 444.82 125.684 441.603C125.684 435.169 126.143 428.276 126.602 421.842C127.061 417.246 128.438 412.651 126.143 407.595C125.225 405.298 125.684 401.621 126.143 398.864C129.815 373.129 130.733 371.29 129.815 369.912C123.847 363.937 123.847 357.504 125.684 351.529C117.879 342.798 110.993 334.985 104.107 327.173C100.894 323.496 99.5165 318.901 99.5165 313.846C99.5165 310.169 98.1393 306.952 97.6802 303.276C96.303 288.57 104.107 282.136 111.911 270.647C120.175 258.699 115.125 249.507 112.371 247.669C98.1393 239.857 104.107 229.287 97.2211 224.232C90.335 219.176 92.6304 214.581 93.0895 210.445C79.3173 200.335 70.5949 198.037 74.7266 179.654C74.7266 179.195 75.1856 177.816 75.1856 177.357C75.6447 175.518 75.1856 173.68 74.2675 171.842V171.382C74.2675 171.382 74.2675 170.923 73.8084 170.923C51.3139 206.768 38.4598 249.048 38.4598 295.004C38.4598 418.625 134.865 520.187 256.519 527.54C261.569 528 266.619 528 271.669 528C321.708 528 368.533 511.915 406.636 485.261V484.801C406.636 484.342 407.095 483.882 407.095 482.963V482.504C407.095 482.504 407.095 482.504 407.095 482.044C409.85 474.691 413.063 467.338 416.736 460.445C430.049 437.007 406.177 435.169 428.212 408.515C430.967 404.838 444.28 395.187 436.476 378.643C433.262 371.75 432.803 366.235 433.721 361.18C435.558 351.529 441.985 344.176 439.23 333.147C438.312 328.551 437.394 328.092 433.262 329.93C430.508 331.309 429.131 330.39 426.835 329.011C422.704 326.713 417.195 324.875 412.604 325.794C379.551 331.768 363.024 306.493 357.056 302.357C345.579 294.544 350.17 284.893 357.974 248.588C358.433 247.21 358.892 245.371 358.433 243.993C354.761 233.882 361.188 228.827 367.615 223.312C368.074 222.853 368.533 222.393 368.992 222.393C377.255 220.096 382.305 214.121 387.355 208.147C387.814 207.688 388.273 206.768 389.191 206.768C402.963 201.713 416.736 197.577 430.967 203.092C439.23 206.309 443.821 197.577 464.479 215.04C475.956 225.61 476.874 220.555 492.942 222.853L487.433 207.228ZM134.865 195.739C138.538 188.386 143.587 187.926 149.555 191.603C152.769 193.441 154.605 193.441 168.377 197.577C168.377 198.496 167.918 198.956 167.918 199.875C156.441 201.254 145.883 198.037 134.865 195.739ZM180.772 215.5C172.968 214.581 166.541 214.121 160.114 213.202C164.705 207.228 176.182 205.849 180.772 210.445C181.69 211.364 180.772 214.121 180.772 215.5ZM312.067 94.6361C321.708 90.5 325.38 88.6618 329.512 93.2574C330.43 94.1765 329.512 96.4743 329.053 98.3125C328.135 101.529 325.38 104.287 323.544 106.125C318.953 104.287 314.822 103.368 311.149 101.07C308.395 99.2317 308.854 96.0147 312.067 94.6361ZM376.796 138.294C375.419 136.456 374.501 134.618 373.124 132.32C377.714 128.643 380.469 127.724 379.092 123.588C378.633 122.669 379.092 120.371 379.551 119.912C380.469 119.452 382.764 118.993 383.682 119.912C389.191 125.886 397.914 129.103 400.668 137.375C400.668 137.835 401.127 137.835 401.127 138.294C401.586 141.051 402.963 145.188 402.045 145.647C398.832 147.945 395.159 149.783 391.487 149.783C387.814 149.783 385.978 146.107 385.978 142.43C385.978 140.132 385.06 137.835 384.601 135.077C380.928 136.456 379.092 137.375 376.796 138.294Z"
              fill="#EBF0FD"
            />
            <path
              opacity="0.08"
              d="M418.573 427.816C419.032 422.761 421.327 416.787 428.213 408.515C430.968 404.838 444.281 395.188 436.477 378.643C433.263 371.75 432.804 366.235 433.722 361.18H268.456C262.029 361.18 256.979 366.235 256.979 372.669V442.982C144.507 420.004 59.1191 329.011 51.774 217.798C43.5106 241.695 38.9199 267.43 38.9199 294.085C38.9199 417.706 135.325 518.809 256.979 526.621C257.438 526.621 257.898 526.621 258.357 526.621C259.734 526.621 261.111 526.621 262.029 526.621C265.243 526.621 268.456 527.081 272.129 527.081C322.168 527.081 368.993 510.996 407.096 484.342C441.986 459.526 469.53 425.518 486.516 385.996C465.857 403.46 443.363 417.706 418.573 427.816Z"
              fill="#4E5F78"
            />
            <g filter="url(#filter0_d_82_4816)">
              <path
                d="M193.626 87.2831C193.626 94.636 192.249 101.989 189.953 109.801C185.363 125.426 176.64 141.971 167.918 158.055C158.277 175.518 147.719 192.982 141.292 207.687C140.374 210.445 137.619 211.823 134.865 211.823C132.11 211.823 129.356 209.985 128.438 207.687C112.829 172.761 75.6444 124.507 75.6444 87.2831C75.6444 54.6544 102.271 28 134.865 28C167.459 28 193.626 54.6544 193.626 87.2831Z"
                fill="url(#paint2_linear_82_4816)"
              />
            </g>
            <path
              d="M189.952 109.342C185.362 124.967 176.639 141.511 167.917 157.595L117.419 107.044L139.454 85.9044L154.145 72.5771L189.952 109.342Z"
              fill="url(#paint3_linear_82_4816)"
            />
            <path
              d="M134.863 114.397C148.635 114.397 160.112 103.368 160.112 89.1217C160.112 74.8754 149.094 63.8459 134.863 63.8459C121.091 63.8459 109.614 74.8754 109.614 89.1217C109.614 103.368 120.632 114.397 134.863 114.397Z"
              fill="url(#paint4_linear_82_4816)"
            />
            <g filter="url(#filter1_d_82_4816)">
              <path
                d="M466.773 151.161C466.773 157.595 465.395 164.488 463.559 171.382C459.427 185.628 451.623 200.794 443.36 215.499C434.178 231.584 424.997 247.209 419.029 260.536C418.111 262.834 415.816 264.213 413.061 264.213C410.766 264.213 408.011 262.834 407.093 260.536C393.321 229.286 359.35 185.169 359.35 151.161C359.35 121.29 383.68 97.3928 413.061 97.3928C442.442 97.3928 466.773 121.29 466.773 151.161Z"
                fill="url(#paint5_linear_82_4816)"
              />
            </g>
            <path
              d="M463.101 171.383C458.969 185.629 451.165 200.795 442.901 215.501L396.994 169.545L417.193 150.243L430.506 138.295L463.101 171.383Z"
              fill="url(#paint6_linear_82_4816)"
            />
            <path
              d="M413.063 175.978C425.917 175.978 436.017 165.868 436.017 153C436.017 140.133 425.917 130.022 413.063 130.022C400.209 130.022 390.109 140.133 390.109 153C390.109 165.868 400.209 175.978 413.063 175.978Z"
              fill="url(#paint7_linear_82_4816)"
            />
            <path
              d="M350.804 15.625C354.936 15.625 358.608 12.4081 358.608 7.81249C358.608 3.67646 355.395 0 350.804 0C346.673 0 343 3.21691 343 7.81249C343.459 12.4081 346.673 15.625 350.804 15.625Z"
              fill="url(#paint8_linear_82_4816)"
            />
            <path
              d="M13.8042 474.625C17.9359 474.625 21.6085 471.408 21.6085 466.813C21.6085 462.217 18.395 459 13.8042 459C9.67258 459 6 462.217 6 466.813C6 471.408 9.67258 474.625 13.8042 474.625Z"
              fill="url(#paint9_linear_82_4816)"
            />
            <path
              d="M512.681 151.621C516.813 151.621 520.026 148.404 520.026 144.268C520.026 140.132 516.813 136.915 512.681 136.915C508.549 136.915 505.336 140.132 505.336 144.268C505.795 148.404 509.009 151.621 512.681 151.621Z"
              fill="url(#paint10_linear_82_4816)"
            />
            <path
              d="M71.5117 526.162H529.666"
              stroke="#B1B9CC"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38 526.162H55.4448"
              stroke="#B1B9CC"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M276.025 345.739C288.1 345.739 297.889 335.939 297.889 323.851C297.889 311.762 288.1 301.962 276.025 301.962C263.951 301.962 254.162 311.762 254.162 323.851C254.162 335.939 263.951 345.739 276.025 345.739Z"
              fill="#526DFF"
            />
            <path
              d="M219.695 325.568L214.808 315.182C214.38 314.152 213.951 313.122 213.437 312.177C207.864 301.791 196.889 294.667 184.285 294.667C172.625 294.667 162.422 300.675 156.506 309.86L146.903 322.735L151.448 323.937C151.276 325.224 151.19 326.598 151.19 327.885C151.19 346.168 166.023 361.018 184.285 361.018C202.548 361.018 217.38 346.168 217.38 327.885C217.38 327.284 217.381 326.684 217.295 326.083L219.695 325.568Z"
              fill="#526DFF"
            />
            <path
              d="M332.356 325.567L337.244 315.267C337.672 314.237 338.101 313.207 338.615 312.263C344.188 301.877 355.163 294.752 367.766 294.752C379.427 294.752 389.63 300.761 395.546 309.945L405.148 322.735L400.604 323.936C400.776 325.224 400.862 326.597 400.862 327.885C400.862 346.168 386.029 361.018 367.766 361.018C349.504 361.018 334.671 346.168 334.671 327.885C334.671 327.284 334.671 326.683 334.757 326.082L332.356 325.567Z"
              fill="#526DFF"
            />
            <g filter="url(#filter2_d_82_4816)">
              <path
                d="M456.077 434.408C456.077 447.026 452.133 437.241 452.133 437.241L422.467 392.091L334.414 418.013L316.495 423.249L276.112 383.078L235.729 423.249L129.756 392.091L100.091 437.241C100.091 437.241 96.1466 446.94 96.1466 434.408C96.1466 405.395 116.981 363.851 135.586 332.864C143.903 318.959 159.507 311.491 175.283 310.289C186.601 309.431 199.462 311.233 209.15 317.414C211.208 318.701 215.152 322.65 217.81 322.22C232.299 319.989 247.561 316.727 258.878 314.152C270.453 311.491 282.456 311.491 293.945 314.238C305.091 316.813 320.01 320.074 334.414 322.306C337.072 322.735 341.016 318.873 343.074 317.499C352.762 311.233 365.623 309.431 376.94 310.375C392.716 311.577 408.321 318.959 416.637 332.95C435.242 363.937 456.077 405.395 456.077 434.408Z"
                fill="url(#paint11_linear_82_4816)"
              />
            </g>
            <path
              opacity="0.2"
              d="M395.631 378.271L334.328 418.099L316.408 423.335L276.025 383.164V341.276C291.716 341.276 317.866 352.864 328.24 363.164C342.473 351.405 363.907 339.817 395.631 345.74C427.354 351.576 395.631 378.271 395.631 378.271Z"
              fill="url(#paint12_linear_82_4816)"
            />
            <path
              opacity="0.2"
              d="M156.421 378.271L217.724 418.099L235.643 423.335L276.026 383.164V341.276C260.336 341.276 234.185 352.864 223.811 363.164C209.578 351.405 188.144 339.817 156.421 345.74C124.697 351.576 156.421 378.271 156.421 378.271Z"
              fill="url(#paint13_linear_82_4816)"
            />
            <path
              d="M276.025 393.464C288.1 393.464 297.889 383.664 297.889 371.576C297.889 359.487 288.1 349.688 276.025 349.688C263.951 349.688 254.162 359.487 254.162 371.576C254.162 383.664 263.951 393.464 276.025 393.464Z"
              fill="#526DFF"
            />
            <path
              d="M169.196 513.978C209.635 513.978 242.417 481.158 242.417 440.674C242.417 400.189 209.635 367.37 169.196 367.37C128.758 367.37 95.9757 400.189 95.9757 440.674C95.9757 481.158 128.758 513.978 169.196 513.978Z"
              fill="#A4BBFF"
            />
            <path
              d="M169.197 495.352C199.36 495.352 223.812 470.872 223.812 440.674C223.812 410.477 199.36 385.997 169.197 385.997C139.033 385.997 114.581 410.477 114.581 440.674C114.581 470.872 139.033 495.352 169.197 495.352Z"
              fill="url(#paint14_linear_82_4816)"
            />
            <path
              d="M169.196 474.579C193.63 474.579 213.437 454.749 213.437 430.288C213.437 405.827 193.63 385.997 169.196 385.997C144.763 385.997 124.955 405.827 124.955 430.288C124.955 454.749 144.763 474.579 169.196 474.579Z"
              fill="#526DFF"
            />
            <path
              opacity="0.4"
              d="M140.047 433.721C138.16 433.721 136.617 432.176 136.617 430.287C136.617 412.262 151.278 397.67 169.198 397.67C171.084 397.67 172.627 399.215 172.627 401.103C172.627 402.992 171.084 404.537 169.198 404.537C154.965 404.537 143.476 416.124 143.476 430.287C143.476 432.176 141.933 433.721 140.047 433.721Z"
              fill="white"
            />
            <path
              d="M382.856 513.978C423.295 513.978 456.077 481.158 456.077 440.674C456.077 400.189 423.295 367.37 382.856 367.37C342.418 367.37 309.636 400.189 309.636 440.674C309.636 481.158 342.418 513.978 382.856 513.978Z"
              fill="#A4BBFF"
            />
            <path
              d="M382.856 495.352C413.019 495.352 437.471 470.872 437.471 440.674C437.471 410.477 413.019 385.997 382.856 385.997C352.692 385.997 328.24 410.477 328.24 440.674C328.24 470.872 352.692 495.352 382.856 495.352Z"
              fill="url(#paint15_linear_82_4816)"
            />
            <path
              d="M382.856 474.579C407.29 474.579 427.097 454.749 427.097 430.288C427.097 405.827 407.29 385.997 382.856 385.997C358.423 385.997 338.615 405.827 338.615 430.288C338.615 454.749 358.423 474.579 382.856 474.579Z"
              fill="#526DFF"
            />
            <path
              opacity="0.4"
              d="M384.743 401.103C384.743 399.215 383.199 397.67 381.313 397.67C363.308 397.67 348.733 412.348 348.733 430.287C348.733 432.176 350.276 433.721 352.162 433.721C354.048 433.721 355.592 432.176 355.592 430.287C355.592 416.039 367.166 404.537 381.313 404.537C383.199 404.537 384.743 402.992 384.743 401.103Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_82_4816"
                x="67.6444"
                y="25"
                width="133.982"
                height="199.823"
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
                  values="0 0 0 0 0.968627 0 0 0 0 0.254902 0 0 0 0 0.564706 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_82_4816"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_82_4816"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_82_4816"
                x="351.35"
                y="94.3928"
                width="123.423"
                height="182.82"
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
                  values="0 0 0 0 0.968627 0 0 0 0 0.254902 0 0 0 0 0.564706 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_82_4816"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_82_4816"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_82_4816"
                x="88.1466"
                y="307.088"
                width="375.93"
                height="146.77"
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
                  result="effect1_dropShadow_82_4816"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_82_4816"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_82_4816"
                x1="15.5724"
                y1="111.232"
                x2="33.9543"
                y2="111.232"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_82_4816"
                x1="477.31"
                y1="563.702"
                x2="494.573"
                y2="563.702"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_82_4816"
                x1="75.6949"
                y1="119.664"
                x2="193.753"
                y2="119.664"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_82_4816"
                x1="134.428"
                y1="88.6442"
                x2="174.792"
                y2="128.978"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E81778" />
                <stop offset="1" stop-color="#E01F79" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_82_4816"
                x1="151.697"
                y1="106.107"
                x2="117.441"
                y2="71.8785"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0113208" stop-color="#FFC9E3" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_82_4816"
                x1="359.114"
                y1="180.739"
                x2="466.726"
                y2="180.739"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_82_4816"
                x1="412.651"
                y1="152.464"
                x2="449.444"
                y2="189.23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E81778" />
                <stop offset="1" stop-color="#E01F79" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_82_4816"
                x1="428.393"
                y1="168.382"
                x2="397.169"
                y2="137.181"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0113208" stop-color="#FFC9E3" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_82_4816"
                x1="343.327"
                y1="8.21645"
                x2="358.167"
                y2="8.21645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_82_4816"
                x1="6.18684"
                y1="467.125"
                x2="21.0268"
                y2="467.125"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_82_4816"
                x1="505.842"
                y1="144.39"
                x2="519.78"
                y2="144.39"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_82_4816"
                x1="250.25"
                y1="365.417"
                x2="372.722"
                y2="517.809"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_82_4816"
                x1="382.004"
                y1="368.119"
                x2="282.333"
                y2="388.408"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00289017" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_82_4816"
                x1="154.524"
                y1="368.119"
                x2="269.923"
                y2="350.944"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.00289017" stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_82_4816"
                x1="200.74"
                y1="503.943"
                x2="98.1081"
                y2="447.191"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_82_4816"
                x1="431.024"
                y1="483.6"
                x2="321.964"
                y2="465.643"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-start justify-between flex-col gap-5 flex-1">
          <h2 className="text-2xl lg:text-5xl sm:text-4xl font-bold leading-[60px]">
            Instruct to our AI and generate copy{" "}
          </h2>
          <p className="t text-lg large:text-sm">
            Give our AI a few descriptions and we'll automatically create blog
            articles, product descriptions and more for you within just few
            second.
          </p>
          <div className="flex items-start justify-between flex-col gap-4 ">
            <span className="flex ">
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
              <span className="whitespace- large:text-sm">
                Entering & Leaving From Country
              </span>
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
              <span className="whitespace- large:text-sm">
                Country Citizenship{" "}
              </span>
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
              <span className="whitespace- large:text-sm">
                Settling In Country
              </span>
            </span>
            <FancyButton text="Learn More" accent="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AaiServices3;
