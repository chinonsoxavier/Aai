import { avatar1 } from "@/constants/exports";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col text-white ">
      <div className="flex items-center justify-center">
        <p className="font-bold tablet:text-center text-3xl lg:text-5xl sm:text-4xl ">
          Meet our Happy Clients
        </p>
      </div>
      <div className=" items-end justify-end tablet:px-5 ">
        <div className="fex inline-flex items-start justify-start">
          <div className="flex items-start justify-start flex-wrap gap-4 mt-10 px-4">
            <div
              className="rounded-t-lg pb-[4px] flex-1"
              style={{
                background: "linear-gradient(137deg, #80fcf0 0%, #ac5dfa 100%)",
              }}
            >
              <div className=" rounded-t-lg bg-[#111629] w-full pb-2">
                <div className="w-full px-8 pt-5 py-2 flex items-center justify-between">
                  <div className="flex items-center justify-center rounded-full w-9 h-9 bg-[#1e223f]">
                    <svg
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.13566 10.6719C8.42933 9.30632 8.07617 7.82304 8.07617 6.22204C8.07617 4.5975 8.50585 3.25548 9.36521 2.196C10.2246 1.13652 11.5607 0.606773 13.3736 0.606773V2.83169C12.7379 2.83169 12.2729 2.97296 11.9786 3.25548C11.6843 3.53801 11.5372 4.07953 11.5372 4.88003V5.23319H14.1152V10.6719H9.13566ZM1.82511 10.6719C1.11878 9.30632 0.76562 7.82304 0.76562 6.22204C0.76562 4.5975 1.1953 3.25548 2.05466 2.196C2.91402 1.13652 4.25015 0.606773 6.06304 0.606773V2.83169C5.42735 2.83169 4.96236 2.97296 4.66805 3.25548C4.37376 3.53801 4.2266 4.07953 4.2266 4.88003V5.23319H6.80468L6.80468 10.6719H1.82511Z"
                        fill="#747681"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-end gap-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-2 pb-4 px-8 flex items-center justify-center border-b border-b-[rgba(255,255,255,0.12)]">
                  <p className="tablet:text-sm mobile:text-xs">
                    They not only understand what I say but read between the
                    lines and also give me ideas of my own.
                  </p>
                </div>
                <div className="flex items-center justify-start px-8 gap-1 my-4">
                  <div className="border-3 border-white rounded-full w-14 h-14 flex items-center justify-center">
                    <Image
                      src={avatar1}
                      alt=""
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1 items-start">
                    <p className="font-semibold text-base tablet:text-sm tablet:whitespace-nowrap">
                      Annette Black
                    </p>
                    <p className="font-normal text-sm tablet:text-xs whitespace-nowrap">
                      Nursing Assistant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="min-w- rounded-t-lg pb-[4px] flex-1 h-full"
              style={{
                background: "linear-gradient(137deg, #80fcf0 0%, #ac5dfa 100%)",
              }}
            >
              <div className=" rounded-t-lg bg-[#111629] w-full pb-2">
                <div className="w-full px-8 pt-5 py-2 flex items-center justify-between">
                  <div className="flex items-center justify-center rounded-full w-9 h-9 bg-[#1e223f]">
                    <svg
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.13566 10.6719C8.42933 9.30632 8.07617 7.82304 8.07617 6.22204C8.07617 4.5975 8.50585 3.25548 9.36521 2.196C10.2246 1.13652 11.5607 0.606773 13.3736 0.606773V2.83169C12.7379 2.83169 12.2729 2.97296 11.9786 3.25548C11.6843 3.53801 11.5372 4.07953 11.5372 4.88003V5.23319H14.1152V10.6719H9.13566ZM1.82511 10.6719C1.11878 9.30632 0.76562 7.82304 0.76562 6.22204C0.76562 4.5975 1.1953 3.25548 2.05466 2.196C2.91402 1.13652 4.25015 0.606773 6.06304 0.606773V2.83169C5.42735 2.83169 4.96236 2.97296 4.66805 3.25548C4.37376 3.53801 4.2266 4.07953 4.2266 4.88003V5.23319H6.80468L6.80468 10.6719H1.82511Z"
                        fill="#747681"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-end gap-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-2 pb-4 px-8 flex items-center justify-center border-b border-b-[rgba(255,255,255,0.12)]">
                  <p className="tablet:text-sm mobile:text-xs">
                    They not only understand what I say but read between the
                    lines and also give me ideas of my own.
                  </p>
                </div>
                <div className="flex items-center justify-start px-8 gap-1 my-4">
                  <div className="border-3 border-white rounded-full w-14 h-14 flex items-center justify-center">
                    <Image
                      src={avatar1}
                      alt=""
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1 items-start">
                    <p className="font-semibold text-base tablet:text-sm tablet:whitespace-nowrap">
                      Annette Black
                    </p>
                    <p className="font-normal text-sm tablet:text-xs whitespace-nowrap">
                      Nursing Assistant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-t-lg pb-[4px] flex-1 h-full"
              style={{
                background: "linear-gradient(137deg, #80fcf0 0%, #ac5dfa 100%)",
              }}
            >
              <div className=" rounded-t-lg bg-[#111629] w-full pb-2">
                <div className="w-full px-8 pt-5 py-2 flex items-center justify-between">
                  <div className="flex items-center justify-center rounded-full w-9 h-9 bg-[#1e223f]">
                    <svg
                      width="15"
                      height="11"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.13566 10.6719C8.42933 9.30632 8.07617 7.82304 8.07617 6.22204C8.07617 4.5975 8.50585 3.25548 9.36521 2.196C10.2246 1.13652 11.5607 0.606773 13.3736 0.606773V2.83169C12.7379 2.83169 12.2729 2.97296 11.9786 3.25548C11.6843 3.53801 11.5372 4.07953 11.5372 4.88003V5.23319H14.1152V10.6719H9.13566ZM1.82511 10.6719C1.11878 9.30632 0.76562 7.82304 0.76562 6.22204C0.76562 4.5975 1.1953 3.25548 2.05466 2.196C2.91402 1.13652 4.25015 0.606773 6.06304 0.606773V2.83169C5.42735 2.83169 4.96236 2.97296 4.66805 3.25548C4.37376 3.53801 4.2266 4.07953 4.2266 4.88003V5.23319H6.80468L6.80468 10.6719H1.82511Z"
                        fill="#747681"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center justify-end gap-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#f59e0b"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-2 pb-4 px-8 flex items-center justify-center border-b border-b-[rgba(255,255,255,0.12)]">
                  <p className="tablet:text-sm mobile:text-xs">
                    They not only understand what I say but read between the
                    lines and also give me ideas of my own.
                  </p>
                </div>
                <div className="flex items-center justify-start px-8 gap-1 my-4">
                  <div className="border-3 border-white rounded-full w-14 h-14 flex items-center justify-center">
                    <Image
                      src={avatar1}
                      alt=""
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1 items-start">
                    <p className="font-semibold text-base tablet:text-sm tablet:whitespace-nowrap">
                      Annette Black
                    </p>
                    <p className="font-normal text-sm tablet:text-xs whitespace-nowrap">
                      Nursing Assistant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
