"use client"
import FancyButton from "@/app/widgets/FancyButton";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemHeading,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Questions = () => {
   const { ref, inView, entry } = useInView({
     threshold: 0,
     triggerOnce: true,
     delay: 100,
   });
    const [accordion,setAccordion]=useState(0);

  return (
    <div className="w-full flex items-center justify-center text-white ">
      <div className="flex max-width items-center tablet:items-center justify-between gap-20 tablet:flex-col tablet:gap-8  ">
        <div
          ref={ref}
          className={`${
            inView
              ? "translate-x-0 backdrop:blur-md opacity-100"
              : "-translate-x-[100%] opacity-0"
          } flex items-start flex-col justify-start flex-1 gap-5 tablet:justify-center tablet:items-center duration-[1500ms] `}
        >
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold medium:text-3xl tablet:text-center">
            Any{" "}
            <span
              className="bg-clip-text text-transparent background_clip"
              style={{
                background:
                  "linear-gradient(137deg, #80fcf0 0%, #efce85 52.6%, #ac5dfa 100%)",
                backgroundClip: "text",
              }}
            >
              Questions?
            </span>{" "}
            We have Answers!
          </p>
          <p className="medium:text-sm tablet:text-center">
            Don’t find your answer here? just send us a message for any query.
          </p>
          <FancyButton text="Contact Us" accent="dark" />

          <div className="flex flex-col items-center justify-between flex-1"></div>
        </div>
        <div className={` flex flex-col items-center  justify-center flex-1`}>
          {/* <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p className="text-lg font-semibold medium:text-base">
                    What is Ai Content Writing tool
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel>
                <p className="medium:text-sm" >
                  They not only understand what I say but read between the lines
                  and also give me ideas of my own. AI technology is perfect for
                  best business solutions.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion> */}
          <div
            className={`fle items-center justify-center gap-4 py-4 border-b border-b-[rgba(255,255,255,0.12)] w-full`}
          >
            <div
              className="flex items-center cursor-pointer justify-between gap-4 py-4 w-full"
              onClick={() => setAccordion(accordion === 1 ? 0 : 1)}
            >
              <p className="text-lg font-semibold medium:text-base">
                What is Ai Content Writing tool
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="min-w-[20px] bi bi-chevron-down font-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
            <div
              className={` ${
                accordion === 1 ? "h-20" : "h-0"
              } overflow-y-hidden duration-700 max-h-24`}
            >
              <p className="medium:text-sm">
                They not only understand what I say but read between the lines
                and also give me ideas of my own. AI technology is perfect for
                best business solutions.
              </p>
            </div>
          </div>
          <div
            className={`fle items-center justify-center gap-4 py-4 border-b border-b-[rgba(255,255,255,0.12)] w-full`}
          >
            <div
              className="flex items-center cursor-pointer justify-between gap-4 py-4 w-full"
              onClick={() => setAccordion(accordion === 2 ? 0 : 2)}
            >
              <p className="text-lg font-semibold medium:text-base">
                How do you different criteria in your process?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="min-w-[20px] bi bi-chevron-down font-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
            <div
              className={` ${
                accordion === 2 ? "h-20" : "h-0"
              } overflow-y-hidden duration-700 max-h-24`}
            >
              <p className="medium:text-sm">
                They not only understand what I say but read between the lines
                and also give me ideas of my own. AI technology is perfect for
                best business solutions.
              </p>
            </div>
          </div>
          <div
            className={`fle items-center justify-center gap-4 py-4 border-b border-b-[rgba(255,255,255,0.12)] w-full`}
          >
            <div
              className="flex items-center cursor-pointer justify-between gap-4 py-4 w-full"
              onClick={() => setAccordion(accordion === 3 ? 0 : 3)}
            >
              <p className="text-lg font-semibold medium:text-base">
                How can i invest my money here?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="min-w-[20px] bi bi-chevron-down font-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
            <div
              className={` ${
                accordion === 3 ? "h-20" : "h-0"
              } overflow-y-hidden duration-700 max-h-24`}
            >
              <p className="medium:text-sm">
                They not only understand what I say but read between the lines
                and also give me ideas of my own. AI technology is perfect for
                best business solutions.
              </p>
            </div>
          </div>
          <div
            className={`fle items-center justify-center gap-4 py-4 border-b border-b-[rgba(255,255,255,0.12)] w-full`}
          >
            <div
              className="flex items-center cursor-pointer justify-between gap-4 py-4 w-full"
              onClick={() => setAccordion(accordion === 4 ? 0 : 4)}
            >
              <p className="text-lg font-semibold medium:text-base">
                How can I trade my crypto into different currency?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="min-w-[20px] bi bi-chevron-down font-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
            <div
              className={` ${
                accordion === 4 ? "h-20" : "h-0"
              } overflow-y-hidden duration-700 max-h-24`}
            >
              <p className="medium:text-sm">
                They not only understand what I say but read between the lines
                and also give me ideas of my own. AI technology is perfect for
                best business solutions.
              </p>
            </div>
          </div>
          <div
            className={`fle items-center justify-center gap-4 py-4 border-b border-b-[rgba(255,255,255,0.12)] w-full`}
          >
            <div
              className="flex items-center cursor-pointer justify-between gap-4 py-4 w-full"
              onClick={() => setAccordion(accordion === 5 ? 0 : 5)}
            >
              <p className="text-lg font-semibold medium:text-base">
                How can I accept credit cards online?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="min-w-[20px] bi bi-chevron-down font-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
            <div
              className={` ${
                accordion === 5 ? "h-20" : "h-0"
              } overflow-y-hidden duration-700 max-h-24`}
            >
              <p className="medium:text-sm">
                They not only understand what I say but read between the lines
                and also give me ideas of my own. AI technology is perfect for
                best business solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
