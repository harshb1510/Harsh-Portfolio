import React from "react";
import { Coutner } from "./Counter";

type Props = {};

function Counts({}: Props) {
  const array: Array<{
    duration: number;
    limit: number;
    title: string;
  }> = [
    {
      duration: 2000,
      limit: 8,
      title: "Projects",
    },
    {
      duration: 2000,
      limit: 1,
      title: "Years",
    },
    {
      duration: 2000,
      limit: 2,
      title: "Dev Stacks",
    },
  ];
  return (
    <div className="flex flex-row justify-center items-center w-full md:gap-x-0 mb-10">
      {array.map((element, index) => {
        return (
          <div
            key={index}
            className="w-1/2 sm:w-1/4 p-3 flex flex-col gap-y-6 justify-items-center"
          >
            <Coutner duration={element.duration} limit={element.limit} />
            <p className="font-bold text-lg md:text-2xl text-center whitespace-nowrap">
              {element.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export { Counts };
