"use client";
import React from 'react'
import FancyButton from './FancyButton';
import { useInView } from 'react-intersection-observer';

const Plans3 = () => {
       const { ref, inView, entry } = useInView({
         threshold: 0,
       });
  return (
    <div ref={ref}
      style={{
        background: "linear-gradient(137deg, #80fcf0 0%, #ac5dfa 100%)",
      }}
      className={`${
        inView
          ? "translate-y-0 backdrop:blur-md opacity-100"
          : "translate-y-[40%] opacity-0"
      } p-[1px] duration-[1500ms] rounded-lg w-full`}
    >
      <div className="flex p-8 gap-4 tablet:flex-col tablet:items-start tablet:p-3 items-center justify-between rounded-lg bg-primary hover:bg-[#111629] duration-500">
        <div className="flex flex-col items-start justify-start flex-1">
          <p className="font-bold text-xl">Enterprise</p>
          <p className="large:text-sm">
            Assign & track your team’s progress visually.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start flex-1">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                  fill="#DADADA"
                ></path>
                <g opacity="0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                    fill="#DADADA"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-base large:text-sm">All Limited Links</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                  fill="#DADADA"
                ></path>
                <g opacity="0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                    fill="#DADADA"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-base large:text-sm">Own Analytics Platform</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                  fill="#DADADA"
                ></path>
                <g opacity="0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                    fill="#DADADA"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-base large:text-sm">Chat Support</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
                  fill="#DADADA"
                ></path>
                <g opacity="0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
                    fill="#DADADA"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-base large:text-sm">Unlimited Users</p>
          </div>
        </div>
        <div className="flex-1 max-[160px]">
          <p className="font-bold text-5xl large:text-3xl">$39.99</p>
        </div>
        <div className="flex-1 max-w-[160px]">
          <FancyButton text="Get Started" accent="dark" />
        </div>
      </div>
    </div>
  );
}

export default Plans3