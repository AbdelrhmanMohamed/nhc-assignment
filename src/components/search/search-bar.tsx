"use client";
import React, { useMemo } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryString } from "@/lib/helpers/searh-params";
import { debounce } from "@/lib/utils";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const debouncedHandleSearch = useMemo(() => {
    return debounce((value: string) => {
      const queryString = createQueryString(searchParams, "query", value);
      router.push(`${pathname}?${queryString}`);
    }, 200);
  }, [searchParams, pathname, router]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleSearch(event.target.value);
  };

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
        onChange={handleChange}
        defaultValue={searchParams.get("query") ?? ""}
        type="text"
      />
    </>
  );
}
