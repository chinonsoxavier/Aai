import { FancyButtonInterface } from '@/interface';
import React from 'react'

const FancyButton = ({text,className,borderNone,accent}:FancyButtonInterface) => {
  return (
    <div
      className={`flex items-center  justify-center rounded-full ${!borderNone && "p-[1px]"} mybutton relative overflow-hidden`}
      style={{
        background: "linear-gradient(137deg, #80fcf0 0%, #ac5dfa 100%)",
      }}
    >
      <button
        className={`${className} ${accent==='light' ? "bg-white text-primary": "bg-primary"} flex items-center justify-center z-10 medium:text-[15px] duration-700 mobile:px-6 rounded-full px-8 py-3 bg-rimary text-base`}
      >
        <p className="z-10 whitespace-nowrap">{text}</p>
      </button>
    </div>
  );
}

export default FancyButton