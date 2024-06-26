"use client";
import FancyButton from "@/app/widgets/FancyButton";
import React from "react";
import { useInView } from "react-intersection-observer";

const AaiServices2 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 100,
  });

  return (
    <div className="w-full h-full flex items-center justify-center text-white">
      <div className="flex max-width items-center justify-between gap-10 flex-row-reverse large:flex-col large:items-center large:justify-center">
        <div
          ref={ref}
          className={`${
            inView
              ? "translate-x-0 backdrop:blur-md opacity-100"
              : "translate-x-[100%] opacity-0"
          } flex-1 large:min-w-[auto] mi-w-[440px] duration-[1500ms] large:max-w-[550px] basis-[100px]`}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 722 555"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M401.168 477.682C530.87 477.682 636.015 372.443 636.015 242.625C636.015 112.806 530.87 7.56738 401.168 7.56738C271.465 7.56738 166.321 112.806 166.321 242.625C166.321 372.443 271.465 477.682 401.168 477.682Z"
              fill="#EFF3FF"
              fill-opacity="0.05"
            />
            <path
              d="M589.706 36.5899C599.623 36.5899 607.662 28.5434 607.662 18.6177C607.662 8.69193 599.623 0.645508 589.706 0.645508C579.789 0.645508 571.75 8.69193 571.75 18.6177C571.75 28.5434 579.789 36.5899 589.706 36.5899Z"
              fill="#EAEEF9"
            />
            <path
              d="M187.111 81.048C193.635 81.048 198.924 75.7543 198.924 69.2242C198.924 62.6941 193.635 57.4004 187.111 57.4004C180.587 57.4004 175.298 62.6941 175.298 69.2242C175.298 75.7543 180.587 81.048 187.111 81.048Z"
              fill="#EAEEF9"
            />
            <path
              d="M133.715 111.316C138.152 111.316 141.748 107.716 141.748 103.276C141.748 98.8355 138.152 95.2358 133.715 95.2358C129.279 95.2358 125.682 98.8355 125.682 103.276C125.682 107.716 129.279 111.316 133.715 111.316Z"
              fill="url(#paint0_linear_82_4733)"
            />
            <path
              d="M515.047 15.1345C519.222 15.1345 522.607 11.7465 522.607 7.56723C522.607 3.38797 519.222 0 515.047 0C510.871 0 507.486 3.38797 507.486 7.56723C507.486 11.7465 510.871 15.1345 515.047 15.1345Z"
              fill="url(#paint1_linear_82_4733)"
            />
            <path
              d="M381.321 477.381C381.321 499.61 371.87 519.474 356.75 533.663C352.497 537.446 348.244 540.757 343.046 543.595C331.705 550.216 318.475 554 304.299 554C290.123 554 276.892 550.216 265.551 543.595C263.661 542.649 262.244 541.703 260.354 540.284C240.507 526.568 227.276 503.394 227.276 477.381C227.276 434.816 261.771 400.763 303.826 400.763C346.826 400.29 381.321 434.816 381.321 477.381Z"
              fill="#DCE2F0"
            />
            <path
              d="M288.707 494.407C289.652 495.353 290.597 496.772 292.015 497.718C292.96 498.663 293.905 499.136 294.85 500.082C295.322 500.555 296.268 501.028 296.74 501.501C296.74 501.501 297.213 501.501 297.213 501.974L297.685 502.447V509.068C297.685 509.068 297.685 509.068 297.213 508.596C296.74 508.123 295.795 507.65 295.322 507.177C294.377 506.704 293.432 505.758 292.487 505.285C292.015 505.285 292.015 504.812 291.542 504.812C288.235 502.92 285.399 501.028 285.399 498.664C285.872 497.718 286.817 496.299 288.707 494.407ZM355.806 531.297C352.971 525.149 347.773 519 341.158 515.69C337.85 514.271 334.07 512.852 330.29 512.852C329.345 512.852 327.927 512.852 326.982 512.852C326.509 512.852 326.037 512.852 325.564 512.852C320.367 512.379 319.894 511.433 319.894 511.433V500.555C323.202 497.718 326.509 494.407 329.345 491.096C331.707 487.786 333.597 484.002 334.542 479.272C338.795 478.327 341.63 474.543 341.158 469.813C341.158 467.922 339.74 466.03 339.74 464.138C339.74 463.192 339.74 462.246 339.74 461.3C339.74 460.827 339.74 459.881 339.74 459.408C339.74 458.936 339.74 457.99 339.74 457.517C339.268 454.206 338.323 450.895 336.433 447.112C330.762 436.707 320.367 430.085 308.081 430.085C305.718 430.085 303.355 430.558 300.993 431.031C296.74 431.977 292.487 433.869 289.18 436.707C288.707 437.18 287.762 437.653 287.289 438.599L286.817 439.072C283.037 442.855 279.729 447.112 278.311 452.314C276.421 457.517 276.421 462.719 276.894 467.922C276.894 467.922 276.894 467.922 276.894 468.395V468.868C276.894 469.813 277.366 469.813 276.894 470.286C276.894 470.759 276.421 470.759 276.421 471.232C275.476 472.651 275.004 474.543 275.949 477.381C277.839 482.11 280.674 481.637 283.982 484.002C283.982 484.002 283.509 484.002 283.509 484.475L280.202 485.421C265.081 490.15 259.883 502.92 266.498 510.96C268.861 513.798 272.641 516.163 278.311 517.582C276.894 517.582 275.476 518.528 274.531 519.473C267.916 524.676 263.663 532.716 262.718 540.283C262.718 540.756 262.718 541.229 262.718 541.702C264.608 542.648 266.026 544.067 267.916 545.013H343.048C347.773 542.175 352.499 538.864 356.751 535.081C356.279 532.716 356.279 531.77 355.806 531.297Z"
              fill="white"
            />
            <path
              d="M356.751 533.663C352.498 537.447 348.245 540.757 343.047 543.595C331.707 550.216 318.476 554 304.3 554C290.124 554 276.893 550.216 265.553 543.595C263.662 542.649 262.245 541.703 260.355 540.284C260.355 539.811 260.355 539.338 260.355 538.866C261.3 531.298 265.553 523.258 272.168 518.056C273.113 517.11 274.531 516.637 275.948 516.164C270.278 515.218 266.498 512.853 264.135 509.542H282.091C287.289 516.637 295.322 520.893 304.772 520.893C312.805 520.893 319.893 517.583 325.091 512.38C325.564 512.38 326.036 512.38 326.509 512.38C327.454 512.38 328.399 512.38 329.817 512.38C333.597 512.38 337.377 513.326 340.685 515.218C347.3 518.529 352.025 524.204 355.333 530.825C356.278 531.771 356.278 532.717 356.751 533.663Z"
              fill="url(#paint2_linear_82_4733)"
            />
            <path
              d="M320.366 500.556V510.488L290.597 511.434L292.014 504.813C292.487 504.813 292.487 505.286 292.96 505.286C293.905 505.759 294.85 506.705 295.795 507.177C296.267 507.65 296.74 508.123 297.685 508.596C297.685 508.596 298.157 508.596 298.157 509.069V502.448L297.685 501.975C302.883 504.813 309.971 506.705 320.366 500.556Z"
              fill="url(#paint3_linear_82_4733)"
            />
            <path
              d="M339.74 459.409C334.07 461.301 327.455 462.247 321.312 461.774C311.389 460.828 301.938 457.045 294.378 450.423C292.015 457.518 285.872 462.72 278.784 466.031C277.839 466.504 276.894 466.977 275.949 466.977C275.949 466.977 275.949 466.977 275.949 466.504C275.477 461.301 275.477 456.099 277.367 450.896C278.784 445.694 282.092 441.437 285.872 437.654L286.345 437.181C286.817 436.708 287.762 436.235 288.235 435.289C291.543 432.451 295.795 430.559 300.048 429.613C302.411 429.14 304.773 428.667 307.136 428.667C319.422 428.667 330.29 435.289 335.488 445.694C337.378 449.477 338.323 453.261 338.795 456.099C339.74 457.991 339.74 458.936 339.74 459.409Z"
              fill="#1C3754"
            />
            <path
              d="M301.938 529.406C299.103 532.717 294.378 532.717 290.125 532.717C294.378 528.46 292.015 514.744 276.894 516.163C256.103 512.38 257.993 490.624 278.785 484.003L282.092 483.057L282.565 483.53C283.982 487.786 286.345 491.57 288.708 494.408C280.202 501.502 292.015 503.394 297.686 509.069C302.411 511.907 306.664 523.731 301.938 529.406Z"
              fill="#1C3754"
            />
            <path
              d="M381.321 477.381C381.321 499.61 371.87 519.474 356.75 533.663C352.497 537.446 348.244 540.757 343.046 543.595C331.705 550.216 318.475 554 304.299 554C290.123 554 276.892 550.216 265.551 543.595C263.661 542.649 262.244 541.703 260.354 540.284C240.507 526.568 227.276 503.394 227.276 477.381C227.276 434.816 261.771 400.763 303.826 400.763C346.826 400.29 381.321 434.816 381.321 477.381Z"
              stroke="white"
              stroke-width="1.6434"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M593.958 289.147C593.958 310.43 585.453 329.348 572.222 343.537C571.277 344.955 569.859 345.901 568.442 346.847C554.266 360.09 535.365 368.13 514.574 368.13C498.035 368.13 482.442 362.928 469.683 353.942C465.903 351.577 462.595 348.266 459.288 345.428C444.639 331.24 435.661 311.376 435.661 289.147C435.661 245.635 471.101 210.164 514.574 210.164C558.519 210.164 593.958 245.635 593.958 289.147Z"
              fill="#E9F0F8"
            />
            <path
              d="M593.958 289.146C593.958 312.321 584.035 332.658 568.442 347.319C554.266 360.562 535.365 368.602 514.573 368.602C498.035 368.602 482.441 363.4 469.683 354.414C448.892 340.225 435.661 316.577 435.661 289.619C435.661 246.108 471.101 210.636 514.573 210.636C558.046 210.636 593.958 245.635 593.958 289.146Z"
              fill="#DCE2F0"
            />
            <path
              d="M572.222 343.537C571.277 344.956 569.859 345.902 568.441 346.848C554.265 360.09 535.364 368.131 514.573 368.131C498.035 368.131 482.441 362.928 469.683 353.942C465.903 351.577 462.595 348.267 459.287 345.429C461.177 343.064 464.012 341.645 470.155 339.28L472.518 338.335C477.243 336.443 483.859 334.078 492.364 330.294C493.782 329.821 494.727 328.876 495.672 327.93C496.144 327.457 496.617 326.984 496.617 326.038C497.089 325.092 497.562 323.673 497.562 322.727V306.647C497.089 306.174 497.089 306.174 496.617 305.701C495.199 303.809 494.254 301.444 494.254 298.607L493.309 298.134C489.056 299.08 489.529 294.823 488.584 286.31C488.111 282.999 488.584 282.053 490.474 281.58L491.892 279.689C489.056 273.067 487.639 266.919 487.639 262.189C487.639 254.149 490.947 248.947 495.672 246.582C492.837 240.906 492.837 239.015 492.837 239.015C492.837 239.015 509.375 241.852 515.046 240.906C522.134 239.488 533.474 241.379 537.727 250.838C544.815 253.676 547.178 257.933 548.123 262.662C549.068 270.229 544.815 278.27 543.87 281.58V282.053C544.815 282.526 545.287 283.472 544.815 286.783C543.87 294.823 543.87 299.553 540.09 298.607L536.309 305.228C536.309 306.174 536.309 306.174 535.837 306.647C535.837 308.066 535.837 310.43 535.837 323.2C535.837 324.619 536.309 326.511 537.254 327.457C537.727 327.93 537.727 328.403 538.2 328.403C539.145 329.349 540.09 330.294 541.035 330.294C550.485 334.078 557.101 336.916 562.299 338.808C567.024 340.699 570.331 342.118 572.222 343.537Z"
              fill="white"
            />
            <path
              d="M572.222 343.537C571.277 344.955 569.859 345.901 568.442 346.847C554.266 360.09 535.365 368.13 514.573 368.13C498.035 368.13 482.441 362.928 469.683 353.942C465.903 351.577 462.595 348.266 459.287 345.428C461.177 343.064 464.013 341.645 470.156 339.28L472.518 338.334C477.243 336.442 483.859 334.078 492.364 330.294C493.782 329.821 494.727 328.875 495.672 327.929C500.397 334.551 507.958 338.807 516.936 338.807C525.441 338.807 533.002 334.551 537.727 328.402C538.672 329.348 539.617 330.294 540.562 330.294C550.013 334.078 556.628 336.915 561.826 338.807C567.024 340.699 570.332 342.118 572.222 343.537Z"
              fill="url(#paint4_linear_82_4733)"
            />
            <path
              d="M543.397 281.107C543.87 279.216 542.924 276.378 541.979 274.959C541.979 274.486 541.507 274.486 541.507 274.013C538.199 267.392 531.111 265.027 524.496 264.554C507.012 263.608 505.595 266.919 500.397 262.189C502.287 264.554 502.287 268.811 499.452 273.54C497.562 276.851 494.254 278.743 490.946 279.689C482.913 261.716 487.166 250.365 494.726 246.582C491.891 240.906 491.891 239.015 491.891 239.015C491.891 239.015 508.43 241.852 514.1 240.906C521.188 239.488 532.529 241.379 536.782 250.838C543.87 253.676 546.232 257.933 547.177 262.662C548.595 269.757 544.342 277.797 543.397 281.107Z"
              fill="#1C3754"
            />
            <path
              d="M498.035 322.727V306.647C497.562 306.174 497.562 306.174 497.09 305.701V304.755C498.035 306.174 498.98 307.593 500.397 308.538L513.156 317.525C515.991 319.889 520.244 319.889 523.079 317.525L534.892 307.12C535.365 306.647 535.837 306.647 536.31 306.174C536.31 307.593 536.31 309.957 536.31 322.727C536.31 323.673 536.31 324.146 536.782 325.092H498.035C497.562 324.146 498.035 323.673 498.035 322.727Z"
              fill="url(#paint5_linear_82_4733)"
            />
            <path
              d="M593.958 289.146C593.958 312.321 584.035 332.658 568.442 347.319C554.266 360.562 535.365 368.602 514.573 368.602C498.035 368.602 482.441 363.4 469.683 354.414C448.892 340.225 435.661 316.578 435.661 289.619C435.661 246.108 471.101 210.636 514.573 210.636C558.046 210.636 593.958 245.635 593.958 289.146Z"
              stroke="white"
              stroke-width="1.6604"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M64.2539 344.009C64.2539 359.144 76.5397 371.44 91.6606 371.44H334.541C336.903 371.44 339.266 372.386 340.684 373.805L374.706 407.858C375.651 409.277 377.541 409.75 379.431 408.804C380.849 408.331 382.266 406.439 382.266 405.02V247.527C382.266 232.392 369.98 220.096 354.859 220.096H91.6606C76.5397 220.096 64.2539 232.392 64.2539 247.527V344.009Z"
              fill="#D6DEEF"
            />
            <path
              opacity="0.7"
              d="M322.727 281.579H113.869C111.979 281.579 110.089 279.687 110.089 277.795V265.498C110.089 263.607 111.979 261.715 113.869 261.715H322.727C324.617 261.715 326.507 263.607 326.507 265.498V277.795C326.507 280.16 325.09 281.579 322.727 281.579Z"
              fill="url(#paint6_linear_82_4733)"
            />
            <path
              opacity="0.7"
              d="M242.397 333.131H113.869C111.979 333.131 110.089 331.239 110.089 329.347V317.051C110.089 315.159 111.979 313.267 113.869 313.267H242.397C244.287 313.267 246.177 315.159 246.177 317.051V329.347C246.177 331.712 244.76 333.131 242.397 333.131Z"
              fill="url(#paint7_linear_82_4733)"
            />
            <g filter="url(#filter0_d_82_4733)">
              <path
                d="M365.874 164.322H39.0468C29.6417 164.322 22 156.549 22 146.982V54.8993C22 45.3323 29.6417 37.5591 39.0468 37.5591H366.462C375.867 37.5591 383.508 45.3323 383.508 54.8993V146.982C383.508 156.549 375.867 164.322 365.874 164.322Z"
                fill="white"
              />
            </g>
            <path
              d="M76.0344 71.7341L83.0846 85.8756C83.6722 86.4648 84.2597 87.054 84.8472 87.054L100.71 90.0001C102.473 90.5893 103.648 92.9462 101.885 94.1247L90.7225 105.32C90.1349 105.909 90.1349 106.498 90.1349 107.677L93.0725 123.586C93.66 125.354 91.31 127.121 89.5474 125.943L75.4469 118.283C74.8593 117.694 73.6843 117.694 73.0968 118.283L58.9963 125.943C57.2337 127.121 54.8836 125.354 55.4711 123.586L58.4087 107.677C58.4087 107.088 58.4087 105.909 57.8212 105.32L46.6583 94.1247C44.8957 92.9462 46.0708 90.0001 47.8333 90.0001L63.6964 87.6432C64.2839 87.6432 65.459 87.054 65.459 86.4648L72.5093 72.3234C72.5093 69.9665 74.8593 69.9665 76.0344 71.7341Z"
              fill="url(#paint8_linear_82_4733)"
            />
            <path
              opacity="0.3"
              d="M73.6863 82.9293H73.0986C71.9231 82.3401 71.9231 81.1616 71.9231 80.5724V79.9832C72.5108 78.8047 73.6863 78.8047 74.8618 78.8047C76.0372 79.3939 76.0372 80.5724 76.0372 81.7508C74.8618 82.34 74.274 82.9293 73.6863 82.9293Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M63.1109 105.91C62.5234 105.91 61.3484 105.32 61.3484 104.731C60.7608 103.553 60.7608 102.963 59.5858 102.374L53.1231 95.8927C52.5355 95.3035 52.5355 94.7142 52.5355 94.125C52.5355 93.5358 53.123 92.9466 54.2981 92.9466L63.1109 91.7681C65.461 91.1789 67.2236 90.0004 67.8111 88.2327L68.9861 86.4651C69.5737 85.2866 70.7487 85.2866 71.9237 85.2866C73.0988 85.8758 73.0988 87.0543 73.0988 88.2327L71.3362 89.4112C69.5737 92.3573 66.6361 94.7143 63.6985 95.3035L58.9983 95.8927L62.5234 99.428C63.6984 100.606 64.286 101.785 64.8735 103.553C65.461 104.731 64.8735 105.91 63.6985 105.91H63.1109Z"
              fill="white"
            />
            <path
              d="M139.485 71.7341L146.535 85.8756C147.123 86.4648 147.71 87.054 148.298 87.054L164.161 89.4109C165.924 90.0001 167.099 92.357 165.336 93.5355L153.586 105.32C152.998 105.909 152.998 106.498 152.998 107.677L155.936 123.586C156.523 125.354 154.173 127.121 152.411 125.943L138.31 118.283C137.723 117.694 136.548 117.694 135.96 118.283L121.86 125.943C120.097 127.121 117.747 125.354 118.334 123.586L121.272 107.677C121.272 107.088 121.272 105.909 120.684 105.32L109.522 94.1247C107.759 92.9462 108.934 90.0001 110.697 90.0001L126.56 87.6432C127.147 87.6432 128.322 87.054 128.322 86.4648L135.373 72.3234C135.96 69.9665 138.31 69.9665 139.485 71.7341Z"
              fill="url(#paint9_linear_82_4733)"
            />
            <path
              opacity="0.3"
              d="M136.55 82.9293H135.962C134.786 82.3401 134.786 81.1616 134.786 80.5724V79.9832C135.374 78.8047 136.55 78.8047 137.725 78.8047C138.901 79.3939 138.9 80.5724 138.9 81.7508C138.313 82.34 137.725 82.9293 136.55 82.9293Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M126.563 105.91C125.975 105.91 124.8 105.321 124.8 104.732C124.213 103.553 124.213 102.964 123.038 102.375L116.575 95.8932C115.988 95.304 115.988 94.7147 115.988 94.1255C115.988 93.5363 116.575 92.9471 117.75 92.9471L126.563 91.7686C128.913 91.1794 130.676 90.0009 131.263 88.2332L132.438 86.4656C133.026 85.2871 134.201 85.2871 135.376 85.2871C136.551 85.8763 136.551 87.0548 136.551 88.2332L135.376 90.0009C133.613 92.9471 130.676 95.304 127.738 95.8932H122.45L125.975 99.4285C127.15 100.607 127.738 101.785 128.326 103.553C128.913 104.732 128.326 105.91 127.15 105.91C126.563 105.91 126.563 105.91 126.563 105.91Z"
              fill="white"
            />
            <path
              d="M202.351 71.7341L209.401 85.8756C209.988 86.4648 210.576 87.054 211.164 87.054L227.027 89.4109C228.789 90.0001 229.964 92.357 228.202 93.5355L217.039 104.731C216.451 105.32 216.451 105.909 216.451 107.088L219.389 122.997C219.976 124.764 217.626 126.532 215.864 125.354L201.763 117.694C201.176 117.104 200.001 117.104 199.413 117.694L185.313 125.354C183.55 126.532 181.2 124.764 181.787 122.997L184.725 107.088C184.725 106.498 184.725 105.32 184.137 104.731L172.975 93.5355C170.624 92.9462 171.212 90.0001 173.562 90.0001L189.425 87.6432C190.013 87.6432 191.188 87.054 191.188 86.4648L198.238 72.3234C198.826 69.9665 201.763 69.9665 202.351 71.7341Z"
              fill="url(#paint10_linear_82_4733)"
            />
            <path
              opacity="0.3"
              d="M200.001 82.9293H199.414C198.238 82.3401 198.238 81.1616 198.238 80.5724V79.9832C198.826 78.8047 200.001 78.8047 201.177 78.8047C202.352 79.3939 202.352 80.5724 202.352 81.7508C201.765 82.34 201.177 82.9293 200.001 82.9293Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M189.428 105.91C188.841 105.91 187.666 105.321 187.666 104.732C187.078 103.553 187.078 102.964 185.903 102.375L180.028 95.8932C179.44 95.304 179.44 94.7147 179.44 94.1255C179.44 93.5363 180.028 92.9471 181.203 92.9471L190.016 91.7686C192.366 91.1794 194.128 90.0009 194.716 88.2332L195.891 86.4656C196.479 85.2871 197.654 85.2871 198.829 85.2871C200.004 85.8763 200.004 87.0548 200.004 88.2332L198.829 90.0009C197.066 92.9471 194.128 95.304 191.191 95.8932H185.316L188.841 99.4285C190.016 100.607 190.603 101.785 191.191 103.553C191.778 104.732 191.191 105.91 190.016 105.91C190.016 105.91 190.016 105.91 189.428 105.91Z"
              fill="white"
            />
            <path
              d="M265.803 71.7341L272.853 85.8756C273.441 86.4648 274.028 87.054 274.616 87.054L290.479 89.4109C292.242 90.0001 293.417 92.357 291.654 93.5355L280.491 104.731C279.904 105.32 279.904 105.909 279.904 107.088L282.841 122.997C283.429 124.764 281.079 126.532 279.316 125.354L265.216 117.694C264.628 117.104 263.453 117.104 262.865 117.694L248.765 125.354C247.002 126.532 244.652 124.764 245.24 122.997L247.59 107.677C247.59 107.088 247.59 105.909 247.002 105.32L235.839 94.1247C234.077 92.9462 235.252 90.0001 237.014 90.0001L252.878 87.6432C253.465 87.6432 254.64 87.054 254.64 86.4648L261.69 72.3234C262.278 69.9665 265.216 69.9665 265.803 71.7341Z"
              fill="url(#paint11_linear_82_4733)"
            />
            <path
              opacity="0.3"
              d="M263.453 82.9293H262.866C261.69 82.3401 261.69 81.1616 261.69 80.5724V79.9832C262.278 78.8047 263.454 78.8047 264.629 78.8047C265.804 79.3939 265.804 80.5724 265.804 81.7508C265.217 82.34 264.041 82.9293 263.453 82.9293Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M252.88 105.91C252.293 105.91 251.118 105.32 251.118 104.731C250.53 103.553 250.53 102.963 249.355 102.374L243.48 95.8927C242.892 95.3035 242.892 94.7142 242.892 94.125C242.892 93.5358 243.48 92.9466 244.655 92.9466L253.468 91.7681C255.818 91.1789 257.58 90.0004 258.168 88.2327L259.343 86.4651C259.93 85.2866 261.106 85.2866 262.281 85.2866C263.456 85.8758 263.456 87.0543 263.456 88.2327L262.281 90.0004C260.518 92.9466 257.58 95.3035 254.643 95.8927H248.768L252.293 99.428C253.468 100.606 254.055 101.785 254.643 103.553C255.23 104.731 254.643 105.91 253.468 105.91C253.468 105.91 253.468 105.91 252.88 105.91Z"
              fill="white"
            />
            <path
              d="M329.255 71.7344L336.305 85.8759C336.893 86.4651 337.48 87.0543 338.068 87.0543L353.931 89.4112C355.693 90.0004 356.868 92.3573 355.106 93.5358L343.943 104.731C343.355 105.32 343.355 105.91 343.355 107.088L346.293 122.997C346.881 124.765 344.53 126.532 342.768 125.354L328.667 117.694C328.08 117.105 326.905 117.105 326.317 117.694L312.217 125.354C310.454 126.532 308.104 124.765 308.692 122.997L311.629 107.088C311.629 106.499 311.629 105.32 311.042 104.731L299.879 93.5358C298.116 92.3573 299.291 89.4112 301.054 89.4112L316.917 87.0543C317.504 87.0543 318.679 86.4651 318.679 85.8759L325.73 71.7344C325.73 69.9668 328.08 69.9668 329.255 71.7344Z"
              fill="url(#paint12_linear_82_4733)"
            />
            <path
              opacity="0.3"
              d="M326.906 82.9293H326.318C325.143 82.3401 325.143 81.1616 325.143 80.5724V79.9832C325.73 78.8047 326.906 78.8047 328.081 78.8047C329.257 79.3939 329.257 80.5724 329.257 81.7508C328.669 82.34 327.494 82.9293 326.906 82.9293Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M316.331 105.91C315.744 105.91 314.569 105.32 314.569 104.731C313.981 103.553 313.981 102.963 312.806 102.374L306.343 95.8927C305.756 95.3035 305.756 94.7142 305.756 94.125C305.756 93.5358 306.343 92.9466 307.518 92.9466L316.331 91.7681C318.681 91.1789 320.444 90.0004 321.031 88.2327L322.206 86.4651C322.794 85.2866 323.969 85.2866 325.144 85.2866C326.319 85.8758 326.319 87.0543 326.319 88.2327L325.144 90.0004C323.381 92.9466 320.444 95.3035 317.506 95.8927H312.219L315.744 99.428C316.919 100.606 317.506 101.785 318.094 103.553C318.681 104.731 318.094 105.91 316.919 105.91H316.331Z"
              fill="white"
            />
            <path
              d="M721.541 158.139C721.541 171.855 710.673 182.732 696.97 182.732H478.661C476.771 182.732 474.409 183.678 472.991 185.097L442.277 215.839C441.331 216.785 439.441 217.258 438.024 216.785C436.606 216.312 435.661 214.893 435.661 213.474V71.5886C435.661 57.873 446.529 46.9951 460.233 46.9951H696.497C710.201 46.9951 721.069 57.873 721.069 71.5886V158.139H721.541Z"
              fill="#D6DEEF"
            />
            <path
              opacity="0.7"
              d="M672.87 102.331H485.275C483.385 102.331 481.968 100.912 481.968 99.0199V87.6691C481.968 85.7773 483.385 84.3584 485.275 84.3584H672.87C674.76 84.3584 676.177 85.7773 676.177 87.6691V99.0199C676.177 100.912 674.76 102.331 672.87 102.331Z"
              fill="url(#paint13_linear_82_4733)"
            />
            <path
              opacity="0.7"
              d="M601.045 148.68H485.275C483.385 148.68 481.968 147.261 481.968 145.37V134.019C481.968 132.127 483.385 130.708 485.275 130.708H601.045C602.935 130.708 604.353 132.127 604.353 134.019V145.37C604.353 146.788 602.463 148.68 601.045 148.68Z"
              fill="url(#paint14_linear_82_4733)"
            />
            <defs>
              <filter
                id="filter0_d_82_4733"
                x="0"
                y="17.5591"
                width="405.508"
                height="170.763"
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
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="11" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.21 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_82_4733"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_82_4733"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_82_4733"
                x1="125.701"
                y1="103.282"
                x2="141.316"
                y2="103.282"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_82_4733"
                x1="507.681"
                y1="7.34069"
                x2="522.349"
                y2="7.34069"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_82_4733"
                x1="260.853"
                y1="531.99"
                x2="356.666"
                y2="531.99"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_82_4733"
                x1="305.424"
                y1="511.095"
                x2="305.424"
                y2="505.397"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.9913" stop-color="#D6DEEA" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_82_4733"
                x1="459.583"
                y1="347.995"
                x2="572.251"
                y2="347.995"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_82_4733"
                x1="516.859"
                y1="324.458"
                x2="516.859"
                y2="313.806"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.9913" stop-color="#D6DEEA" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_82_4733"
                x1="332.27"
                y1="271.807"
                x2="111.859"
                y2="271.807"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00651336"
                  stop-color="#9CA6BD"
                  stop-opacity="0"
                />
                <stop offset="1" stop-color="#929EBD" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_82_4733"
                x1="257.523"
                y1="323.245"
                x2="108.011"
                y2="323.245"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00651336"
                  stop-color="#9CA6BD"
                  stop-opacity="0"
                />
                <stop offset="1" stop-color="#929EBD" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_82_4733"
                x1="59.0459"
                y1="75.5343"
                x2="89.7225"
                y2="122.996"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_82_4733"
                x1="122.046"
                y1="75.5343"
                x2="152.592"
                y2="123.282"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_82_4733"
                x1="184.883"
                y1="75.4809"
                x2="214.964"
                y2="123.032"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_82_4733"
                x1="248.364"
                y1="75.4809"
                x2="278.452"
                y2="123.015"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_82_4733"
                x1="312.266"
                y1="75.4215"
                x2="342.537"
                y2="122.698"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_82_4733"
                x1="681.369"
                y1="93.2929"
                x2="483.337"
                y2="93.2929"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00651336"
                  stop-color="#9CA6BD"
                  stop-opacity="0"
                />
                <stop offset="1" stop-color="#929EBD" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_82_4733"
                x1="614.211"
                y1="139.509"
                x2="479.88"
                y2="139.509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00651336"
                  stop-color="#9CA6BD"
                  stop-opacity="0"
                />
                <stop offset="1" stop-color="#929EBD" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-start justify-between flex-col gap-5 flex-1">
          <h2 className="font-bold leading-[60px] text-3xl lg:text-5xl sm:text-4xl text-center mobile:leading-8">
            Write Blog Posts,Stories,& Even Books
          </h2>
          <p className="t text-lg large:text-sm">
           Just let me know the topics or genre you have in mind,and i`ll assist you in creating engaging content.Feel free to provide any specific instructions or ideas you`d like me to incorporate.
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
The Ai-generated text is always fresh and relevant.              </span>
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
The Ai-generated text is guaranteed to be unique and original.              </span>
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
The Ai-generated text is SEO-friendly and authoritative.          </span>
            </span>
            <FancyButton text="Learn More" accent="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AaiServices2;
