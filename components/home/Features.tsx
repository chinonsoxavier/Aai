"use client";
import FancyButton from "@/app/widgets/FancyButton";
import Features1 from "@/app/widgets/Features1";
import Features2 from "@/app/widgets/Features2";
import Features3 from "@/app/widgets/Features3";
import Features4 from "@/app/widgets/Features4";
import Features5 from "@/app/widgets/Features5";
import Features6 from "@/app/widgets/Features6";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Features = () => {
  return (
    <div className="flex items-center justify-center text-white">
      <div className="max-width flex items-center justify-center flex-col">
        <p className="text-2xl lg:text-5xl sm:text-4xl font-bold max-w-xl text-center">
          AI Generate content in seconds
        </p>

        <p className="max-w-[] text-center my-5 tablet:text-sm">
          QumAI has a variety of features that make it the best place to start
          trading
        </p>

        <div className="flex items-center justify-center gap-5 flex-wrap w-full">
          <Features1 />
          <Features2 />
          <Features3 />
          <Features4 />
          <Features5 />
          <Features6 />
        </div>
        <div className="flex items-center justify-center mt-10">
          <FancyButton text="Get Started" accent="light" />
        </div>
      </div>
    </div>
  );
};

export default Features;
