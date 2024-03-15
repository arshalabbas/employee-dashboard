"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const FilterBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSwitch = useDebouncedCallback((checked) => {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.set("sort", checked);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <div className="form-control w-max">
        <label className="label cursor-pointer gap-5">
          <span className="label-text">Sort By Salary</span>
          <input
            type="checkbox"
            className="toggle"
            onChange={(e) => handleSwitch(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
};

export default FilterBar;
