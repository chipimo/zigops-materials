import { useState, useEffect } from "react";

// next.js components
import Link from "next/link";
import { useRouter } from "next/router";

// @zigops-material/react components
import { Navbar as MTNavbar } from "@zigops-material/react";

interface NavbarProps {
  container?: string;
  className?: string;
  shadow?: boolean;
  sidenavMenu?: any;
  mobileNavClassName?: string;
  [key: string]: any;
}

export default function Navbar({
  container,
  className,
  shadow,
  sidenavMenu,
  mobileNavClassName = "text-[#1A237E]",
  ...rest
}: NavbarProps) {
  const { query } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");

    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpen(false);
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <div className={`absolute z-[999] flex w-full flex-wrap items-center lg:fixed ${container}`}>
      <MTNavbar
        {...rest}
        className={`py-4 pr-2 lg:py-2.5 border- ${shadow ? "shadow-2xl shadow-blue-gray-500/10" : ""}`}
        shadow={shadow}
      >
        <div
          className={`flex w-full items-center !justify-between pl-8 text-[#1A237E] ${className}`}
        >
          <Link
            href="/"
            className="flex py-2.375 text-size-sm mr-4 whitespace-nowrap font-bold text-inherit lg:ml-0 text-blue-gray-200"
          >
          <div className="w-7 mr-2">
            <img alt="logo" src="/img/apple-touch-icon.png" />
          </div>
            ZigOps Material
          </Link>
        </div>

        {sidenavMenu}
      </MTNavbar>
    </div>
  );
}
