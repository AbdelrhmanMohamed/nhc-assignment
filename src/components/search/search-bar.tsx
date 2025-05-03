"use client";
import React, { useMemo } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "@/lib/utils";
import { useQueryString } from "@/hooks/useQueryString";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useQueryString();

  const debouncedHandleSearch = useMemo(() => {
    return debounce((value: string) => {
      const queryString = createQueryString("query", value);
      router.push(`${pathname}?${queryString}`);
    }, 200);
  }, [createQueryString, router, pathname]);

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
