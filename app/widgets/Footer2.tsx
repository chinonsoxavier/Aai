"use client";
import { useInView } from "react-intersection-observer";
const Footer2 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={` ${
        inView
          ? "translate-y-0 backdrop:blur-md opacity-100"
          : "translate-y-[40%] opacity-0"
      } flex-1 leading-[45px] medium:leading-[35px] max-w-[180px] bg-[gren] delay-150 duration-[1500ms]`}
    >
      <p className="text-xl font-semibold tablet:text-lg mb-2">Links</p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Home
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Services
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        About US
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Pricing
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-[15px]">
        Feature
      </p>
    </div>
  );
};

export default Footer2;
