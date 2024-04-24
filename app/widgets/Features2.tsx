"use client";

import { useInView } from "react-intersection-observer";

const Features2 = () => {
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
      } min-w-[260px] delay-150 duration-[1500ms] flex items-center justify-center gradient p-[1px] h-[420px] tablet:h-[320px] max-h-[auto] rounded-xl flex-1`}
      style={{
        background: "linear-gradient(137deg, #80fcf0 0%, #ac5dfa 100%)",
      }}
    >
      <div className="large:justify  flex items-center justify-between w-full flex-col h-full bg-primary rounded-xl py py-10 px-20 tablet:px-11 tablet:py-7">
        <div className="">
          <svg
            width="122"
            height="126"
            viewBox="0 0 122 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M112.472 58.6808C112.472 70.4882 108.513 81.583 101.914 90.3368C98.2588 95.1208 93.8933 99.2941 88.8172 102.551C80.6954 107.946 70.8476 111 60.3908 111C31.6598 111.102 8.30957 87.6903 8.30957 58.6808C8.30957 29.773 31.5583 6.26001 60.3908 6.26001C70.8476 6.26001 80.5938 9.31364 88.8172 14.7084C93.8933 17.9656 98.2588 22.1389 101.914 26.9229C108.513 35.7785 112.472 46.7716 112.472 58.6808Z"
              fill="#EAEEF9"
            />
            <path
              d="M52.1673 6.66684C53.081 6.66684 53.8932 5.95433 53.8932 4.93645C53.8932 4.02036 53.1825 3.20605 52.1673 3.20605C51.2536 3.20605 50.4414 3.91857 50.4414 4.93645C50.5429 5.95433 51.2536 6.66684 52.1673 6.66684Z"
              fill="url(#paint0_linear_82_4902)"
            />
            <path
              d="M81.4057 9.82275C82.1164 9.82275 82.7255 9.21203 82.7255 8.49951C82.7255 7.787 82.1164 7.17627 81.4057 7.17627C80.6951 7.17627 80.0859 7.787 80.0859 8.49951C80.0859 9.21203 80.6951 9.82275 81.4057 9.82275Z"
              fill="url(#paint1_linear_82_4902)"
            />
            <path
              d="M118.158 52.8789C119.681 51.4539 119.782 49.1128 118.361 47.4842C116.939 45.9573 114.604 45.8555 113.082 47.2806C111.559 48.7056 111.457 51.0467 112.879 52.6753C114.3 54.1004 116.635 54.2022 118.158 52.8789Z"
              fill="#EAEEF9"
            />
            <path
              d="M44.4518 36.2875L43.2335 34.3535"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.5479 36.5928L46.4819 50.0288L54.1976 51.9627L45.5682 38.0178"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.2848 63.1595H32.8787C32.5741 63.1595 32.3711 62.9559 32.3711 62.6505C32.3711 62.3452 32.5741 62.1416 32.8787 62.1416H33.2848C33.5894 62.1416 33.7924 62.3452 33.7924 62.6505C33.7924 62.9559 33.5894 63.1595 33.2848 63.1595Z"
              fill="#2D5887"
            />
            <path
              d="M33.2848 65.3987H32.8787C32.5741 65.3987 32.3711 65.1952 32.3711 64.8898C32.3711 64.5844 32.5741 64.3809 32.8787 64.3809H33.2848C33.5894 64.3809 33.7924 64.5844 33.7924 64.8898C33.7924 65.1952 33.5894 65.3987 33.2848 65.3987Z"
              fill="#2D5887"
            />
            <path
              d="M33.2848 67.638H32.8787C32.5741 67.638 32.3711 67.4344 32.3711 67.1291C32.3711 66.8237 32.5741 66.6201 32.8787 66.6201H33.2848C33.5894 66.6201 33.7924 66.8237 33.7924 67.1291C33.7924 67.4344 33.5894 67.638 33.2848 67.638Z"
              fill="#2D5887"
            />
            <path
              d="M33.2848 69.8773H32.8787C32.5741 69.8773 32.3711 69.6737 32.3711 69.3683C32.3711 69.063 32.5741 68.8594 32.8787 68.8594H33.2848C33.5894 68.8594 33.7924 69.063 33.7924 69.3683C33.7924 69.6737 33.5894 69.8773 33.2848 69.8773Z"
              fill="#2D5887"
            />
            <path
              d="M55.2137 63.0574H47.701C47.3964 63.0574 47.1934 62.8539 47.1934 62.5485C47.1934 62.2431 47.3964 62.0396 47.701 62.0396H55.2137C55.5182 62.0396 55.7213 62.2431 55.7213 62.5485C55.7213 62.8539 55.5182 63.0574 55.2137 63.0574Z"
              fill="white"
            />
            <path
              d="M72.0665 69.7757H47.701C47.3964 69.7757 47.1934 69.5721 47.1934 69.2668C47.1934 68.9614 47.3964 68.7578 47.701 68.7578H72.0665C72.371 68.7578 72.5741 68.9614 72.5741 69.2668C72.5741 69.5721 72.371 69.7757 72.0665 69.7757Z"
              fill="url(#paint2_linear_82_4902)"
            />
            <path
              d="M55.2132 65.1951H44.3503C44.0457 65.1951 43.8427 64.9915 43.8427 64.6862C43.8427 64.3808 44.0457 64.1772 44.3503 64.1772H55.2132C55.5178 64.1772 55.7208 64.3808 55.7208 64.6862C55.7208 64.9915 55.5178 65.1951 55.2132 65.1951Z"
              fill="#2D5887"
            />
            <path
              d="M63.8426 67.5362H44.4517C44.1471 67.5362 43.9441 67.3326 43.9441 67.0272C43.9441 66.7219 44.1471 66.5183 44.4517 66.5183H63.8426C64.1471 66.5183 64.3502 66.7219 64.3502 67.0272C64.2487 67.3326 64.0456 67.5362 63.8426 67.5362Z"
              fill="#2D5887"
            />
            <path
              d="M72.1671 67.5364H65.365C65.0605 67.5364 64.8574 67.3329 64.8574 67.0275C64.8574 66.7221 65.0605 66.5186 65.365 66.5186H72.1671C72.4716 66.5186 72.6747 66.7221 72.6747 67.0275C72.6747 67.3329 72.4716 67.5364 72.1671 67.5364Z"
              fill="white"
            />
            <path
              d="M76.6345 67.5362H73.8934C73.5888 67.5362 73.3857 67.3326 73.3857 67.0272C73.3857 66.7219 73.5888 66.5183 73.8934 66.5183H76.6345C76.939 66.5183 77.1421 66.7219 77.1421 67.0272C77.1421 67.3326 76.939 67.5362 76.6345 67.5362Z"
              fill="url(#paint3_linear_82_4902)"
            />
            <path
              d="M2.01562 98.7852H121"
              stroke="#D6DEE8"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M81.4061 61.938V98.1745H29.934C27.9036 98.1745 26.3807 96.5459 26.3807 94.6119V61.938H81.4061Z"
              fill="white"
            />
            <path
              d="M100.899 61.938V94.6119C100.899 96.6477 99.2742 98.1745 97.3453 98.1745H81.3047V61.938H100.899Z"
              fill="#DAE1ED"
            />
            <path
              opacity="0.3"
              d="M100.899 61.938V94.6119C100.899 96.6477 99.2742 98.1745 97.3453 98.1745H81.3047V61.938H100.899Z"
              fill="url(#paint4_linear_82_4902)"
            />
            <path
              d="M46.4822 62.2432L57.2436 45.3464H112.472L101.406 62.2432H46.4822Z"
              fill="#C5CDDB"
            />
            <path
              opacity="0.2"
              d="M46.4822 62.2432L57.2436 45.3464H112.472L101.406 62.2432H46.4822Z"
              fill="url(#paint5_linear_82_4902)"
            />
            <path
              d="M109.325 39.2391C108.411 40.1552 107.091 40.6641 105.772 40.5624H105.569C104.756 40.5624 103.944 40.8677 103.335 41.4784C102.726 42.0892 102.421 42.9035 102.523 43.7178V43.8196C102.624 45.1428 102.117 46.4661 101.203 47.3821C100.289 48.2982 98.9696 48.8072 97.6498 48.7054H97.5483C96.7361 48.7054 95.9239 49.0107 95.3148 49.5197C94.7056 50.1304 94.4011 50.9447 94.4011 51.759C94.5026 53.0823 93.995 54.4055 93.0813 55.3216C92.1676 56.2377 90.8478 56.7466 89.528 56.6448H89.1219C88.7158 56.6448 88.3097 56.2377 88.3097 55.7288C88.3097 55.3216 88.7158 54.9144 89.2234 54.9144H89.6295C90.4417 55.0162 91.3554 54.7109 91.9645 54.1001C92.5737 53.4894 92.8782 52.6751 92.8782 51.8608C92.7767 50.5376 93.2843 49.2143 94.198 48.2982C95.1117 47.3821 96.4315 46.8732 97.7513 46.975H97.8528C98.665 46.975 99.4772 46.6696 100.086 46.1607C100.695 45.55 101 44.7357 101 43.9214V43.8196C100.899 42.4963 101.406 41.1731 102.32 40.257C103.234 39.3409 104.553 38.832 105.873 38.9338H106.076C106.99 39.0355 107.904 38.5266 108.513 37.8141C108.817 37.4069 109.325 37.4069 109.629 37.7123C110.036 38.0177 110.036 38.5266 109.731 38.832C109.528 39.0355 109.426 39.1373 109.325 39.2391Z"
              fill="#DAE1ED"
            />
            <path
              opacity="0.3"
              d="M100.899 61.938V81.583H86.6853C85.3655 81.583 84.4518 80.6669 84.2488 79.3437L81.4061 61.8362L100.899 61.938Z"
              fill="url(#paint6_linear_82_4902)"
            />
            <path
              d="M100.899 61.938H81.3047L91.2539 77.308C91.9646 78.3258 93.0813 78.9366 94.1981 78.9366H109.427C110.442 78.9366 111.152 77.7151 110.543 76.9008L100.899 61.938Z"
              fill="#DAE1ED"
            />
            <path
              d="M81.3043 62.2435L70.5428 45.3467H15.2129L26.3804 62.2435H81.3043Z"
              fill="#DAE1ED"
            />
            <path
              d="M54.0964 82.7025H32.3705C31.8629 82.7025 31.4568 82.2954 31.4568 81.7865C31.4568 81.2775 31.8629 80.8704 32.3705 80.8704H54.0964C54.604 80.8704 55.0101 81.2775 55.0101 81.7865C54.9086 82.2954 54.604 82.7025 54.0964 82.7025Z"
              fill="#DAE1ED"
            />
            <path
              d="M54.0964 87.1813H32.3705C31.8629 87.1813 31.4568 86.7741 31.4568 86.2652C31.4568 85.7563 31.8629 85.3491 32.3705 85.3491H54.0964C54.604 85.3491 55.0101 85.7563 55.0101 86.2652C54.9086 86.7741 54.604 87.1813 54.0964 87.1813Z"
              fill="#DAE1ED"
            />
            <path
              d="M42.4213 91.5583H32.3705C31.8629 91.5583 31.4568 91.1511 31.4568 90.6422C31.4568 90.1332 31.8629 89.7261 32.3705 89.7261H42.4213C42.9289 89.7261 43.335 90.1332 43.335 90.6422C43.2334 91.1511 42.8273 91.5583 42.4213 91.5583Z"
              fill="#DAE1ED"
            />
            <path
              d="M106.583 6.66724L110.746 7.58333C112.167 7.88869 113.284 9.00836 113.69 10.5352L115.517 18.4746C115.822 19.2889 115.619 20.1032 115.01 20.714L105.06 30.6892"
              fill="white"
            />
            <path
              d="M102.928 32.7249L114.908 20.714C115.517 20.1032 115.72 19.2889 115.416 18.4746L113.588 10.5352C113.284 9.11013 112.167 7.99047 110.644 7.58332L102.725 5.75113C101.913 5.44577 101.101 5.64935 100.492 6.26007L85.1619 21.8336C84.5528 22.4443 84.5528 23.4622 85.1619 24.073L93.0807 32.0124C93.1822 32.1142 93.1822 32.1142 93.2838 32.216C96.0249 34.7607 100.187 34.8625 103.131 32.5213"
              fill="url(#paint7_linear_82_4902)"
            />
            <path
              d="M109.998 14.6495C110.91 13.7353 110.91 12.253 109.998 11.3387C109.086 10.4245 107.608 10.4245 106.696 11.3387C105.784 12.253 105.784 13.7353 106.696 14.6495C107.608 15.5638 109.086 15.5638 109.998 14.6495Z"
              fill="white"
            />
            <path
              d="M116.634 13.1817C116.126 13.6906 115.517 14.1995 114.806 14.6067C114.705 14.6067 114.705 14.7085 114.603 14.7085L114.197 13.0799C114.603 12.7745 115.009 12.4691 115.415 12.062C116.431 11.0441 117.04 9.82266 117.243 8.6012C117.446 7.48153 117.141 6.46366 116.532 5.85293C115.111 4.4279 112.37 4.93684 110.339 6.9726C110.136 7.17617 110.035 7.27796 109.832 7.48153C109.121 8.39763 108.613 9.4155 108.41 10.4334C108.41 10.5352 108.41 10.5352 108.41 10.637C108.309 11.6548 108.613 12.5709 109.121 13.1817C109.324 13.3852 109.527 13.5888 109.832 13.6906C109.933 13.7924 110.035 13.7924 110.136 13.8942L110.238 13.996C110.136 14.3013 109.933 14.5049 109.73 14.7085C109.527 14.912 109.324 15.0138 109.02 15.2174C108.613 15.0138 108.207 14.7085 107.801 14.4031C106.989 13.5888 106.583 12.4691 106.583 11.2477C106.583 10.9423 106.583 10.637 106.685 10.3316C106.888 9.31372 107.294 8.19405 107.903 7.27796C108.207 6.87081 108.512 6.46366 108.918 6.0565C111.558 3.41002 115.314 2.90108 117.344 4.93684C119.781 6.66723 119.273 10.5352 116.634 13.1817Z"
              fill="#526DFF"
            />
            <path
              d="M103.335 32.4195C103.03 32.623 102.827 32.8266 102.523 33.0302C99.9847 34.6588 96.6344 34.6588 94.0964 32.9284C93.7918 32.7248 93.5887 32.5212 93.2842 32.3177H93.3857C94.807 32.3177 96.5329 31.9105 97.6497 31.198C98.2588 30.7908 99.071 30.7908 99.5786 31.2998C100.898 32.1141 102.218 32.4195 103.335 32.4195Z"
              fill="#99B2FF"
            />
            <path
              d="M46.1777 14.8101C45.264 13.4869 44.8579 12.1637 45.061 10.535C45.3655 8.29571 45.264 8.19392 43.132 7.27783C41.7107 6.56532 40.594 5.54744 39.9848 4.12241C39.0711 2.08665 38.8681 1.98486 36.7361 2.18844C35.2132 2.39201 33.7919 1.98486 32.5736 1.06877C30.6447 -0.356258 30.6447 -0.356258 28.6143 1.06877C27.396 1.98486 25.9747 2.39201 24.4518 2.18844C22.2183 1.88308 22.1168 1.98486 21.1016 4.02062C20.3909 5.54744 19.3757 6.56532 17.8528 7.27783C15.8224 8.19392 15.7209 8.29571 16.0254 10.535C16.2285 12.1637 15.8224 13.4869 14.9087 14.8101C13.5889 16.7441 13.5889 16.7441 14.9087 18.6781C15.8224 20.0013 16.2285 21.3246 16.0254 22.9532C15.7209 25.1925 15.8224 25.2943 17.8528 26.2104C19.3757 26.9229 20.3909 27.9408 21.1016 29.4676C22.0153 31.5033 22.1168 31.6051 24.3503 31.2998C25.8731 31.0962 27.2945 31.5033 28.5127 32.4194C30.4417 33.8445 30.5432 33.8445 32.4721 32.4194C32.8782 32.2159 33.1828 31.9105 33.5889 31.8087C33.995 31.6051 34.5026 31.4016 34.9087 31.4016C35.4163 31.2998 36.0254 31.2998 36.6346 31.4016C36.9391 31.4016 37.2437 31.4016 37.5483 31.5033C38.665 31.8087 39.2742 31.198 39.6802 30.2819C39.7818 29.9765 39.8833 29.773 40.0863 29.5694C40.6955 28.0426 41.8122 27.0247 43.2335 26.414C45.264 25.4979 45.3655 25.3961 45.1625 23.1567C45.061 22.546 45.061 21.9353 45.264 21.3246C45.3655 20.8156 45.467 20.4085 45.6701 19.8995C45.8731 19.4924 46.0762 19.187 46.2792 18.7799C47.4975 16.7441 47.4975 16.6423 46.1777 14.8101Z"
              fill="url(#paint8_linear_82_4902)"
            />
            <path
              d="M45.061 22.9532C45.3655 25.0907 45.1625 25.2943 43.132 26.2104C41.7107 26.9229 40.594 27.839 39.9848 29.3658C39.8833 29.6712 39.7818 29.8748 39.5787 30.0783C39.1726 30.9944 38.5635 31.6052 37.4468 31.2998C37.1422 31.2998 36.8376 31.2998 36.533 31.198C35.9239 31.0962 35.3148 31.0962 34.8072 31.198C34.2995 31.2998 33.8935 31.4016 33.4874 31.6052L24.5534 22.546L29.1219 19.0852L23.9442 13.9958L25.061 10.0261H28.1067L32.2691 14.1994L36.533 10.6368L45.4671 19.4924C45.264 19.8995 45.061 20.4085 45.061 20.9174C45.061 21.7317 44.9594 22.3425 45.061 22.9532Z"
              fill="url(#paint9_linear_82_4902)"
            />
            <path
              d="M28.2077 14.7082C29.426 13.4868 29.426 11.451 28.2077 10.2296C27.5986 9.61884 26.7864 9.31348 25.9742 9.31348C25.1621 9.31348 24.3499 9.61884 23.7407 10.2296C22.5225 11.451 22.5225 13.4868 23.7407 14.7082C24.3499 15.319 25.1621 15.6243 25.9742 15.6243C26.8879 15.6243 27.5986 15.319 28.2077 14.7082ZM25.9742 11.2474C26.6849 11.2474 27.1925 11.7564 27.1925 12.4689C27.1925 13.1814 26.6849 13.6904 25.9742 13.6904C25.2636 13.6904 24.756 13.1814 24.756 12.4689C24.756 11.8582 25.3651 11.2474 25.9742 11.2474Z"
              fill="url(#paint10_linear_82_4902)"
            />
            <path
              d="M37.3445 19.1871C36.7353 18.5764 35.9231 18.271 35.111 18.271C34.2988 18.271 33.4866 18.5764 32.8775 19.1871C32.2683 19.7978 31.9637 20.6121 31.9637 21.4264C31.9637 22.2407 32.2683 23.055 32.8775 23.6658C33.4866 24.2765 34.2988 24.5818 35.111 24.5818C35.9231 24.5818 36.7353 24.2765 37.3445 23.6658C37.9536 23.055 38.2582 22.2407 38.2582 21.4264C38.2582 20.6121 37.9536 19.7978 37.3445 19.1871ZM35.111 22.6479C34.4003 22.6479 33.8927 22.1389 33.8927 21.4264C33.8927 20.7139 34.4003 20.205 35.111 20.205C35.8216 20.205 36.3292 20.7139 36.3292 21.4264C36.3292 22.1389 35.8216 22.6479 35.111 22.6479Z"
              fill="url(#paint11_linear_82_4902)"
            />
            <path
              d="M36.7353 10.8405C36.5323 10.6369 36.2277 10.5352 35.9231 10.5352C35.6186 10.5352 35.314 10.6369 35.111 10.8405L24.7556 21.1211C24.5526 21.3247 24.451 21.63 24.451 21.9354C24.451 22.2408 24.5526 22.5461 24.7556 22.7497C24.9587 22.9533 25.2632 23.0551 25.5678 23.0551C25.8724 23.0551 26.1769 22.9533 26.38 22.7497L36.7353 12.5709C37.1414 12.062 37.1414 11.3495 36.7353 10.8405Z"
              fill="url(#paint12_linear_82_4902)"
            />
            <path
              d="M6.17767 22.3423L1 17.1511"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.4772 35.6767L8.81726 24.989"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M78.4619 24.4801L82.6243 18.3728"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M81.3047 38.3231L85.3656 32.3176"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M83.9441 43.9215L88.005 37.916"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M67.9036 40.0536L76.33 27.5337"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M57.041 9.5172L56.9395 2.18848"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M57.3456 28.3478L57.1426 13.2832"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69.832 23.2588L72.9792 8.49951"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M68.4111 30.0783L69.2233 25.905"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.2033 43.0051L6.58398 28.3477"
              stroke="#BBC6D8"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M56.939 39.1375C57.5482 39.1375 58.0558 38.6286 58.0558 38.0179C58.0558 37.4071 57.5482 36.8982 56.939 36.8982C56.3299 36.8982 55.8223 37.4071 55.8223 38.0179C55.7207 38.6286 56.2284 39.1375 56.939 39.1375Z"
              fill="url(#paint13_linear_82_4902)"
            />
            <path
              d="M5.87347 42.0893C6.68565 42.0893 7.29479 41.4786 7.29479 40.6643C7.29479 39.85 6.68565 39.2393 5.87347 39.2393C5.06129 39.2393 4.45215 39.85 4.45215 40.6643C4.45215 41.4786 5.06129 42.0893 5.87347 42.0893Z"
              fill="url(#paint14_linear_82_4902)"
            />
            <path
              d="M77.6493 40.8677C78.36 40.8677 78.8676 40.257 78.8676 39.6463C78.8676 38.9337 78.36 38.4248 77.6493 38.4248C76.9387 38.4248 76.431 39.0355 76.431 39.6463C76.3295 40.257 76.9387 40.8677 77.6493 40.8677Z"
              fill="url(#paint15_linear_82_4902)"
            />
            <path
              d="M113.589 33.8447C114.299 33.8447 114.908 33.234 114.908 32.5215C114.908 31.809 114.299 31.1982 113.589 31.1982C112.878 31.1982 112.269 31.809 112.269 32.5215C112.167 33.234 112.776 33.8447 113.589 33.8447Z"
              fill="url(#paint16_linear_82_4902)"
            />
            <g filter="url(#filter0_d_82_4902)">
              <path
                d="M103.087 97.6563C102.755 99.0826 102.314 100.399 101.761 101.715C101.651 102.045 101.54 102.264 101.319 102.593C99.4418 106.214 96.4598 109.176 92.8151 110.932C92.3733 111.151 91.9317 111.371 91.6004 111.48C88.0661 112.907 84.0898 113.455 80.1138 112.577C69.6214 110.383 62.8843 100.179 65.0932 89.7567C67.3022 79.3339 77.5735 72.6413 88.0659 74.8356C91.821 75.6035 95.1346 77.469 97.8957 80.1021C102.424 84.7101 104.412 91.2929 103.087 97.6563Z"
                fill="url(#paint17_linear_82_4902)"
              />
            </g>
            <path
              d="M101.746 101.705C101.636 102.034 101.525 102.253 101.304 102.582C99.4266 106.203 96.4445 109.165 92.7998 110.921C92.358 111.14 91.9162 111.359 91.5849 111.469L78 97.9744L81.3134 98.0841L84.8477 98.1938L87.3879 96.4384C87.3879 96.4384 89.376 93.0372 89.2655 92.8178C89.1551 92.5984 86.9462 89.1973 86.9462 89.1973L89.376 89.6361L101.746 101.705Z"
              fill="url(#paint18_linear_82_4902)"
            />
            <path
              d="M92.1373 99.8394L89.2657 96.9869C91.4746 93.6954 90.5911 89.3069 87.2777 87.1126C83.9643 84.9184 79.5464 85.7961 77.3375 89.0875C75.1286 92.3789 76.0121 96.7674 79.3255 98.9617C81.7553 100.498 84.8478 100.498 87.1672 98.9617L90.0388 101.814C90.5911 102.363 91.4746 102.363 92.0269 101.814C92.6895 101.266 92.6895 100.388 92.1373 99.8394ZM80.2091 96.1091C78.5524 94.4634 78.5524 91.7206 80.2091 90.0749C81.8658 88.4292 84.6269 88.4292 86.2836 90.0749C87.9403 91.7206 87.9403 94.4634 86.2836 96.1091C84.6269 97.7548 81.8658 97.7548 80.2091 96.1091Z"
              fill="url(#paint19_linear_82_4902)"
            />
            <defs>
              <filter
                id="filter0_d_82_4902"
                x="56.6738"
                y="71.4189"
                width="54.8169"
                height="54.5813"
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
                  result="effect1_dropShadow_82_4902"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_82_4902"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_82_4902"
                x1="50.5003"
                y1="4.99895"
                x2="53.7742"
                y2="4.99895"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_82_4902"
                x1="80.1228"
                y1="8.53697"
                x2="82.6075"
                y2="8.53697"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_82_4902"
                x1="47.3074"
                y1="69.2874"
                x2="72.6035"
                y2="69.2874"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_82_4902"
                x1="73.4108"
                y1="66.9961"
                x2="77.1414"
                y2="66.9961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_82_4902"
                x1="87.4167"
                y1="73.3667"
                x2="105.6"
                y2="106.012"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00289017"
                  stop-color="#606673"
                  stop-opacity="0"
                />
                <stop offset="1" stop-color="#373C47" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_82_4902"
                x1="87.6191"
                y1="43.3805"
                x2="73.9357"
                y2="60.5129"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00289017"
                  stop-color="#606673"
                  stop-opacity="0"
                />
                <stop offset="1" stop-color="#373C47" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_82_4902"
                x1="91.1568"
                y1="81.9883"
                x2="91.1568"
                y2="64.0013"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.00289017"
                  stop-color="#606673"
                  stop-opacity="0"
                />
                <stop offset="1" stop-color="#373C47" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_82_4902"
                x1="84.6976"
                y1="19.9709"
                x2="115.586"
                y2="19.9709"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_82_4902"
                x1="13.8951"
                y1="16.7379"
                x2="47.2054"
                y2="16.7379"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_82_4902"
                x1="24.0347"
                y1="20.9998"
                x2="45.5651"
                y2="20.9998"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E81778" />
                <stop offset="1" stop-color="#E01F79" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_82_4902"
                x1="27.6271"
                y1="13.6516"
                x2="24.2094"
                y2="11.0575"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0113208" stop-color="#FFC9E3" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_82_4902"
                x1="36.7639"
                y1="22.6091"
                x2="33.3461"
                y2="20.0151"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0113208" stop-color="#FFC9E3" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_82_4902"
                x1="34.0513"
                y1="19.1413"
                x2="27.2563"
                y2="13.9422"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0113208" stop-color="#FFC9E3" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_82_4902"
                x1="55.7475"
                y1="38.03"
                x2="57.9765"
                y2="38.03"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_82_4902"
                x1="4.40179"
                y1="40.6484"
                x2="7.23509"
                y2="40.6484"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_82_4902"
                x1="76.3755"
                y1="39.5678"
                x2="78.7985"
                y2="39.5678"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_82_4902"
                x1="112.19"
                y1="32.4334"
                x2="114.843"
                y2="32.4334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF66A9" />
                <stop offset="1" stop-color="#F53689" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_82_4902"
                x1="64.6589"
                y1="93.7273"
                x2="103.511"
                y2="93.7273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#83A6FF" />
                <stop offset="1" stop-color="#5A78FF" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_82_4902"
                x1="86.9823"
                y1="97.0037"
                x2="93.6978"
                y2="103.764"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4F6AFF" />
                <stop offset="1" stop-color="#657EFF" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_82_4902"
                x1="90.3641"
                y1="100.156"
                x2="80.8684"
                y2="90.5973"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0113208" stop-color="#C2D1FF" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex-">
          <p className="text-2xl font-semibold mb-2 text-center tablet:text-xl">
            Search Engine Optimization
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

export default Features2;