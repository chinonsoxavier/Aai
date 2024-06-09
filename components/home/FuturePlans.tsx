"use client";
import FancyButton from "@/app/widgets/FancyButton";
import { Cta, lineSvg } from "@/constants/exports";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const FuturePlans = () => {
 
     const { ref, inView, entry } = useInView({
       threshold: 0,
       triggerOnce: true,
       delay: 100,
     });

  return (
    <div className="w-full flex items-center justify-center text-white">
      <div className="flex max-width items-center gap-10 justify-center large:flex-col ">
        <div className="flex-1 flex items-start justify-start flex-col gap-7">
          <p className="text-2xl lg:text-5xl sm:text-4xl font-bold bg-bottom large:text-center">
            Be part of the future of{" "}
            <span
            //   className="flex  flex-col items-centr justify-center"
            >
              Ai Writing
            </span>
            tools
          </p>
          <p className="large:text-sm large:text-center">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <div className="flex items-center justify-start gap-7 large:justify-center w-full">
            <FancyButton text="Get Started" accent="dark" />

            <FancyButton text="Learn More" accent="light" />
          </div>
        </div>
        <div
          ref={ref}
          className={`${
            inView
              ? "translate-x-0 backdrop:blur-md opacity-100"
              : "translate-x-[100%] opacity-0"
          } flex-1 flex items-center h-full duration-[1500ms] justify-center large:min-w-[auto] mi-w-[440px] large:max-w-[550px] basis-[400px] `}
        >
          <Image
            src={Cta}
            alt="cta screen"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FuturePlans;
