import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import DateLabel from "./DateLabel";
import UserMenu from "./UserMenuDropdown";
import CategoryMenu from "./CategoryMenu";
import PriceMarquee from "./PriceMarquee";
import logo from "../../public/image/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 gap-2">
        <Link href="/" className="flex items-center gap-3 shrink-0">
         
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt="বাজার দর"
              width={50}
              height={50}
              priority
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-gray-900 text-lg">বাজার দর</div>

          
            <Suspense
              fallback={
                <div className="w-32 h-3 bg-gray-100 rounded animate-pulse" />
              }
            >
              <DateLabel />
            </Suspense>
          </div>
        </Link>

        <Suspense fallback={<NavAuthSkeleton />}>
          <UserMenu />
        </Suspense>
      </div>

      <Suspense fallback={<NavCategoriesSkeleton />}>
        <CategoryMenu />
      </Suspense>

      <Suspense fallback={<PriceMarqueeSkeleton />}>
        <PriceMarquee />
      </Suspense>
    </header>
  );
}



function NavAuthSkeleton() {
  return (
    <div className="flex gap-2 shrink-0">
      <div className="w-20 h-8 bg-gray-100 rounded-lg animate-pulse" />
      <div className="w-20 h-8 bg-gray-100 rounded-lg animate-pulse" />
    </div>
  );
}

function NavCategoriesSkeleton() {
  return (
    <div className="border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex gap-2 py-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="w-16 h-5 bg-gray-100 rounded animate-pulse" />
        ))}
      </div>
    </div>
  );
}

function PriceMarqueeSkeleton() {
  return (
    <div className="border-t border-gray-100 bg-green-100">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="w-full h-5 bg-gray-100 rounded animate-pulse" />
      </div>
    </div>
  );
}