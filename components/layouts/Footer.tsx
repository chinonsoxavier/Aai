"use client";
import Footer1 from "@/app/widgets/Footer1";
import Footer2 from "@/app/widgets/Footer2";
import Footer3 from "@/app/widgets/Footer3";
import Footer4 from "@/app/widgets/Footer4";
import React from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="w-full flex items-center justify-center text-white bg--500 ">
      <div className="max-width flex items-center justify-center flex-col w-full">
        <div
          ref={ref}
          className={`${
            inView
              ? "translate-x-0 backdrop:blur-md opacity-100"
              : "translate-x-[100%] opacity-0"
          } bg-[rgba(255,255,255,0.19)] duration-[1500ms] py-8 px-7  flex items-center medium:flex-col medium:py-4 tablet:py-5 tablet:gap-2 justify-between w-full rounded-lg`}
        >
          <div className="flex items-center justify-start gap-4 flex-1">
            <div className="w-14 h-14">
              <svg
                className="w-full h-full"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.2081 23.5433C50.0014 17.653 47.6161 12.145 43.4278 7.95666C39.0377 3.56578 33.2032 1.14844 26.9999 1.14844C14.4711 1.14844 4.23389 11.1207 3.79261 23.5433C1.88067 24.3929 0.54248 26.3065 0.54248 28.5307V34.658C0.54248 37.6668 2.9902 40.1153 5.99986 40.1153C7.94723 40.1153 9.53095 38.5316 9.53095 36.5843V26.6035C9.53095 24.7751 8.12864 23.2842 6.34579 23.107C7.00392 12.2843 16.0135 3.67969 26.9999 3.67969C32.5282 3.67969 37.7265 5.83463 41.639 9.74709C45.2317 13.3398 47.3343 18.0226 47.6507 23.1079C45.8696 23.2868 44.4698 24.7768 44.4698 26.6035V36.5834C44.4698 38.427 45.894 39.9272 47.698 40.0833V42.6053C47.698 45.4453 45.3869 47.7555 42.5469 47.7555H38.7323C38.545 47.2206 38.2514 46.7261 37.8396 46.3161C37.1182 45.5913 36.1563 45.1922 35.132 45.1922H31.2001C30.6357 45.1922 30.094 45.312 29.5979 45.5432C28.2445 46.165 27.3704 47.5302 27.3704 49.0211C27.3704 50.0454 27.7694 51.0073 28.4925 51.727C29.2156 52.4518 30.1775 52.8509 31.2001 52.8509H35.132C36.7621 52.8509 38.199 51.7971 38.7348 50.2868H42.5469C46.7833 50.2868 50.2292 46.8409 50.2292 42.6053V39.6327C52.1293 38.778 53.4574 36.8711 53.4574 34.6563V28.529C53.4574 26.3065 52.1192 24.3929 50.2081 23.5433ZM6.99885 26.6035V36.5834C6.99885 37.1344 6.55082 37.5833 5.99901 37.5833C4.38576 37.5833 3.07289 36.2704 3.07289 34.6571V28.5298C3.07289 26.9157 4.38576 25.6037 5.99901 25.6037C6.55082 25.6037 6.99885 26.0526 6.99885 26.6035ZM36.4019 49.2928C36.2761 49.8885 35.7412 50.3213 35.1312 50.3213H31.1993C30.8534 50.3213 30.5285 50.1863 30.2804 49.9383C30.0358 49.6944 29.9008 49.3688 29.9008 49.0228C29.9008 48.5174 30.1969 48.0559 30.661 47.8424C30.8264 47.7648 31.0078 47.7251 31.1993 47.7251H35.1312C35.4771 47.7251 35.8019 47.8593 36.0492 48.1073C36.2939 48.3512 36.4289 48.6769 36.4289 49.0228C36.4297 49.1156 36.4196 49.2084 36.4019 49.2928ZM50.9262 34.6571C50.9262 36.2704 49.6133 37.5833 48 37.5833C47.4491 37.5833 47.0002 37.1352 47.0002 36.5834V26.6035C47.0002 26.0526 47.4482 25.6037 48 25.6037C49.6133 25.6037 50.9262 26.9166 50.9262 28.5298V34.6571Z"
                  fill="url(#paint0_linear_82_4178)"
                />
                <path
                  d="M35.1953 35.0933C38.1527 35.0933 40.5582 32.687 40.5582 29.7305V18.8031C40.5582 17.3737 39.9996 16.0271 38.9855 15.0129C37.9713 13.9987 36.6255 13.4402 35.1953 13.4402H18.8046C15.8473 13.4402 13.4418 15.8457 13.4418 18.8031V29.7305C13.4418 32.6878 15.8473 35.0933 18.8046 35.0933H18.9051V37.925C18.9051 39.005 19.5488 39.9635 20.5445 40.3676C20.8659 40.4967 21.2001 40.5608 21.5308 40.5608C22.2201 40.5608 22.8918 40.2875 23.3837 39.7787L28.0943 35.0933H35.1953ZM26.6811 32.93L21.5831 38.0001C21.5603 38.0237 21.5435 38.0414 21.4954 38.0203C21.4371 37.9967 21.4371 37.9587 21.4371 37.925V33.8277C21.4371 33.1291 20.871 32.5621 20.1715 32.5621H18.8055C17.2437 32.5621 15.9739 31.2914 15.9739 29.7305V18.8031C15.9739 17.2413 17.2437 15.9714 18.8055 15.9714H35.1962C35.9505 15.9714 36.6601 16.2667 37.1967 16.8025C37.7333 17.3392 38.0278 18.0496 38.0278 18.8031V29.7305C38.0278 31.2922 36.7571 32.5621 35.1962 32.5621H27.5737C27.2388 32.5621 26.9181 32.6946 26.6811 32.93Z"
                  fill="url(#paint1_linear_82_4178)"
                />
                <path
                  d="M20.8516 22.6016C19.8222 22.6016 18.9844 23.4402 18.9844 24.4688C18.9844 25.4973 19.8231 26.336 20.8516 26.336C21.8818 26.336 22.7205 25.4973 22.7205 24.4688C22.7205 23.4402 21.8827 22.6016 20.8516 22.6016Z"
                  fill="url(#paint2_linear_82_4178)"
                />
                <path
                  d="M26.9991 22.6016C25.9697 22.6016 25.1318 23.4402 25.1318 24.4688C25.1318 25.4973 25.9705 26.336 26.9991 26.336C28.0301 26.336 28.868 25.4973 28.868 24.4688C28.868 23.4402 28.0301 22.6016 26.9991 22.6016Z"
                  fill="url(#paint3_linear_82_4178)"
                />
                <path
                  d="M33.1466 22.6016C32.1173 22.6016 31.2794 23.4402 31.2794 24.4688C31.2794 25.4973 32.1181 26.336 33.1466 26.336C34.1769 26.336 35.0155 25.4973 35.0155 24.4688C35.0155 23.4402 34.1769 22.6016 33.1466 22.6016Z"
                  fill="url(#paint4_linear_82_4178)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_82_4178"
                    x1="1.46849"
                    y1="1.14844"
                    x2="49.0943"
                    y2="55.125"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_82_4178"
                    x1="13.9163"
                    y1="13.4402"
                    x2="38.9645"
                    y2="41.1737"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_82_4178"
                    x1="19.0498"
                    y1="22.6016"
                    x2="22.4986"
                    y2="26.4225"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_82_4178"
                    x1="25.1972"
                    y1="22.6016"
                    x2="28.6461"
                    y2="26.4225"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_82_4178"
                    x1="31.3448"
                    y1="22.6016"
                    x2="34.7937"
                    y2="26.4225"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80FCF0" />
                    <stop offset="1" stop-color="#AC5DFA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-sm tablet:text-xs">
                Have a question? Call us 24/7
              </p>
              <p className="font-semibold text-lg tablet:text-sm">
                +1 (707) 797 0462
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end flex-1 tablet:w-full">
            <div className="rounded-full relative p-1 bg-interface flex items-center justify-center w-full">
              <input
                type="text"
                className="w-full h-full py-3 rounded-full bg-transparent outline-none px-3"
              />
              <button className="py-3 px-10 rounded-full text-primary tablet:text-xs bg-white border-none tablet:px-7 ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between w-full tablet:flex-wrap tablet:gap-5 py-16 border-b border-b-[rgba(255,255,255,0.12)] gap-10 medium:flex-col">
          <Footer1 />
          <Footer2 />
          <Footer3 />
          <Footer4 />
        </div>
        <div className="flex items-center justify-center h-full py-10 tablet:py-5 tablet:text-sm flex-wrap">
          <p className="whitespace-nowrap" >
          Copyright 2024
          </p>
          <i
            className="bg-clip-text whitespace-normal background_clip text-transparent px-[4px]"
            style={{
              background:
                "linear-gradient(137deg, #80fcf0 0%, #efce85 52.6%, #ac5dfa 100%)",
              backgroundClip: "text",
            }}
          >
            @DreamImp.
          </i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
