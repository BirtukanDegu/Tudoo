'use client';

import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
     <div className="flex justify-between w-full h-full">
        <div className="flex gap-4 items-center">
          <Image
            src={
              theme === "dark"
                  ? "/images/Tudoo-white.svg"
                  : "/images/Tudoo.svg"
            }
            width={60}
            height={60}
            className="rounded-lg"
            alt="logo"
          />
          <div>
            <p className="font-semibold dark:text-brand-cream">Good morning! ☀️</p>
            <p className="text-zinc-400 text-sm">Let&apos;s see what you&apos;ve got to do today.</p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    );
  };

export default Header;