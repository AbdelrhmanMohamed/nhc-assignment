import React from "react";
import { Separator } from "../ui/separator";
import Logo from "../logo";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-32 px-28 pt-12 pb-5 bg-footer text-white">
      <Separator className="mb-2 text-gray-50 opacity-20" />
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-8">
          <Logo variant="white" className="w-[30px] h-[32px]" />
          <Image
            src="/assets/vision2030-white.svg"
            width={48}
            height={32}
            alt="vision 2030"
          />
        </div>
        <div className="text-sm text-white">
          All rights reserved © 2022 - Developed and operated by National
          Housing
        </div>
      </div>
    </div>
  );
}
