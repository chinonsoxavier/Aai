"use client";
import { useInView } from "react-intersection-observer";
const Footer3 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 100,
  });

  return (
    <div ref={ref}
      className={`${
        inView
          ? "translate-y-0 backdrop:blur-md opacity-100"
          : "translate-y-[40%] opacity-0"
      } flex-1 leading-[45px] medium:leading-[35px] delay-300 duration-[1500ms] max-w-[220px] `}
    >
      <p className="text-xl font-semibold mb-2">Artworks</p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        3D Artworks
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Photography
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        PriFlat Illustrationcing
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Intro Videos
      </p>
    </div>
  );
};

export default Footer3;
