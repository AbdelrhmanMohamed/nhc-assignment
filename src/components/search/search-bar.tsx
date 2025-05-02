"use client";
import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/lib/helpers/searh-params";

export default function SearchBar() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    const queryString = createQueryString(searchParams, "query", value);
    router.push(`${pathname}?${queryString}`);
  };

  //set search value from query string
  useEffect(() => {
    if (searchParams.has("query")) {
      setSearchValue(searchParams.get("query") as string);
    } else {
      setSearchValue("");
    }
  }, [searchParams]);

  return (
    <>
      <Label
        htmlFor="search"
        className="text-lg font-semibold text-primary mb-2"
      >
        Search products by keyword
      </Label>
      <Input
        id="search"
        endIcon={<Search className="text-gray-500 size-4" />}
        placeholder="Search keyword"
        className="py-6"
        onChange={handleSearch}
        value={searchValue}
        // onFocus={() => setSearchValue("")}
        type="text"
      />
    </>
  );
}
