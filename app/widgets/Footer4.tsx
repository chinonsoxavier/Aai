"use client";
import { useInView } from "react-intersection-observer";
const Footer4 = () => {
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
      } flex-1 leading-[45px] medium:leading-[35px] delay-[450ms] duration-[1500ms] max-w-[220px]`}
    >
      <p className="text-xl font-semibold ">Community</p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Global Partners
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Forum
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Virtual World
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Community
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Brand assets
      </p>
    </div>
  );
};

export default Footer4;
