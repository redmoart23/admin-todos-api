"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  tabOptions = [1, 2, 3, 4],
  currentTab = 1,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(currentTab);

  const onTapSelected = (tab: number) => {
    setSelectedTab(tab);
    setCookie("selectedTab", tab.toString());
  };

  return (
    <div
      className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2
        ${"grid-cols-5"}
      `}
    >
      {tabOptions.map((option) => (
        <div key={option}>
          <input
            checked={selectedTab === option}
            onChange={() => onTapSelected(option)}
            type="radio"
            id={option.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTapSelected(option)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
