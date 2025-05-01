import React from "react";
import { LINKS } from "@/constants/links";
import LinkItem from "./link-item";
import Logo from "../logo";

export default function Header() {
  return (
    <div className="h-20 bg-gray-100 px-7 py-2">
      <div className="flex items-center gap-20 h-full">
        <Logo />
        <nav className="space-x-14">
          {LINKS.map((link) => (
            <LinkItem key={link.id} id={link.id} name={link.name} />
          ))}
        </nav>
      </div>
    </div>
  );
}
