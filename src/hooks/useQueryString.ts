// hooks/useQueryString.ts
"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

export function useQueryString() {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  return createQueryString;
}
