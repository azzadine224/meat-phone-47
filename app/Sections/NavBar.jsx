import Link from "next/link";
import React from "react";
import Logo from "../../public/nacer-logo.png"
import Image from "next/image";
export default function NavBar() {
  return (
    <header className="border-b font-[sans-serif] tracking-wide relative z-50">
      <section className="py-2 bg-[#1d294f] text-white text-center px-10">
        <p className="text-sm">Summer sale: Save up to 40%</p>
      </section>
      <div className="flex justify-center items-center w-full px-10 py-4 relative">
        <div className="w-full h-29 flex justify-center items-center">
          <Link className="m-auto" href='../' >
            <Image
              src={Logo}
              alt="logo"
              className="h-full w-32"
              width={100}
              height={100}
            />
          </Link >
        </div>
      </div>
    </header>
  );
}
