"use client";
import { useInView } from "react-intersection-observer";
const Footer3 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref}
      className={`${
        inView
          ? "translate-y-0 backdrop:blur-md opacity-100"
          : "translate-y-[40%] opacity-0"
      } flex-1 leading-[45px] delay-300 duration-[1500ms] max-w-[220px] `}
    >
      <p className="text-xl font-semibold mb-2">Artworks</p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        3D Artworks
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        Photography
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        PriFlat Illustrationcing
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        Intro Videos
      </p>
    </div>
  );
};

export default Footer3;
