import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-20 bg-gray-200 px-6 py-2">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">NHC Product App</h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>
        </nav>
      </div>
    </div>
  );
}
