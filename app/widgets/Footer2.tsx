"use client";
import { useInView } from "react-intersection-observer";
const Footer2 = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref}
      className={` ${
        inView
          ? "translate-y-0 backdrop:blur-md opacity-100"
          : "translate-y-[40%] opacity-0"
      } flex-1 leading-[45px] max-w-[180px] bg-[gren] delay-150 duration-[1500ms]`}
    >
      <p className="text-xl font-semibold tablet:text-lg ">Links</p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        Home
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        Services
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        About US
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        Pricing
      </p>
      <p className="hover:text-[#edcb88] cursor-pointer hover:translate-x-3 duration-500 tablet:text-sm">
        Feature
      </p>
    </div>
  );
};

export default Footer2;
