"use client";
import { Link_Item } from "@/types/link";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import Link from "next/link";

function LinkItem({ id, name }: Link_Item) {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName.startsWith(path)
      ? "text-primary font-semibold"
      : "text-black";
  };
  return (
    <Link
      href={`/${id}`}
      className={`text-base hover:underline ${isActive(`/${id}`)}`}
    >
      {name}
    </Link>
  );
}

export default memo(LinkItem);
LinkItem.displayName = "LinkItem";
