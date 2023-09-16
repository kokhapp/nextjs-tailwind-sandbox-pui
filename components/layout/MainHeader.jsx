"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import UserAreaSelectBox from "./UserAreaSelectBox";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div
      className="bg-fuchsia-800 flex justify-between items-center px-4 h-12"
      mb-4
    >
      <div className="text-neutral-300 font-bold">
        PEA
        <h1 className="font-thin">Provincial Electricity Authority</h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div onClick={toggle} className="lg:hidden">
          <FaBars className="cursor-pointer" />
        </div>
        <div>
          <UserAreaSelectBox />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
