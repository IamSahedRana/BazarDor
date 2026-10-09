"use client";

import { useState } from "react";
import MarketItemCard from "@/components/MarketItemCard";
import SortFilter from "@/components/SortFilter";
import { toBn } from "@/lib/utils";
import type { Product, SortOption } from "@/types";

export default function CategoryProducts({
  products,
}: {
  products: Product[];
}) {
  const [sort, setSort] = useState<SortOption>("default");

  const sorted =
    sort === "asc"
      ? [...products].sort((a, b) => a.price - b.price)
      : sort === "desc"
        ? [...products].sort((a, b) => b.price - a.price)
        : products;

  return (
    <>
      <div className="flex justify-between items-center mb-4 gap-3 flex-wrap">
        <p className="text-sm text-gray-500">
          মোট <b className="text-gray-900">{toBn(products.length)}</b>টি পণ্য দেখানো হচ্ছে
        </p>
       <SortFilter value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sorted.map((p) => (
          <MarketItemCard key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}