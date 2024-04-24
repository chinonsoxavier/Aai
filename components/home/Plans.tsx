import FancyButton from '@/app/widgets/FancyButton';
import Plans1 from '@/app/widgets/Plans1';
import Plans2 from '@/app/widgets/Plans2';
import Plans3 from '@/app/widgets/Plans3';
import React from 'react'

const Plans = () => {
  return (
    <div className="bg-primay w-full flex items-center justify-center text-white">
      <div className="flex items-center justify-center flex-col max-width">
        <div className="flex items-start justify-between bg-blak ga10 gap-4 w-full flex-wrap tablet:flex-col">
          <div className="text-left flex-1">
            <p className="text-2xl lg:text-5xl sm:text-4xl font-bold tablet:text-center">
              The Right Plan for Transparent Pricing
            </p>
          </div>
          <div className="t flex-1 tablet:text-sm tablet:text-center">
            We have several powerful plans to showcase your business and get
            discovered as a creative entrepreneurs. Everything your need.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-5">
          
          <Plans1/>
          <Plans2/>
          <Plans3/>
        </div>
      </div>
    </div>
  );
}

export default Plans