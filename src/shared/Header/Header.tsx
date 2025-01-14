"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "../svgs/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`fixed py-5 lg:py-4 top-0 left-0 right-0 z-50  w-full before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0  ${
        isScrolled ? '  before:opacity-100 before:visible before:bg-white' : 'before:opacity-0 before:hidden  before:bg-gradient-to-r before:from-[#010a19] before:to-[#090f1d]'
      } transition-all duration-300`}>
        <div className="w-[88%] max-w-[1300px] mx-auto relative z-10">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
            <Link href={"/"} className="col-span-3 sm:col-span-5 md:col-span-2 self-center">
              <Logo isScrolled={isScrolled}/>
            </Link>
            <div className="col-span-1 self-center md:hidden">
              <Button
                className={`p-0 w-6 flex flex-col items-start bg-transparent gap-1 rounded-none shadow-none ml-auto z-50 h-5 relative hover:bg-transparent
                    before:content-[''] before:absolute before:w-full before:h-1 before:left-0 before:right-0 before:rounded-sm
                    after:content-[''] after:absolute after:w-full after:h-1 after:left-0 after:right-0 after:rounded-sm
                    ${
                      isMenuOpen
                        ? "before:mb-[-2px] before:rotate-45 before:bottom-1/2 after:mt-[-2px] after:-rotate-45 after:top-1/2 before:bg-black after:bg-black"
                        : "before:bottom-0 after:top-0 before:bg-white after:bg-white"
                    }

                    ${isScrolled ? 'before:bg-black after:bg-black' : "before:bg-white after:bg-white"}
                    `}
                onClick={toggleMenu}
              >
                <span
                  className={`w-full h-1 block rounded-sm ${
                    isMenuOpen ? "opacity-0 hidden" : "opacity-100 visible"
                  }
                   ${isScrolled ? 'bg-black' : "bg-white"}
                  `}
                ></span>
              </Button>
            </div>

            {isMenuOpen && (
              <div 
                className="backdrop-blur-sm fixed top-0 bottom-0 right-0 left-0 z-40"
                onClick={toggleMenu}
              />
            )}

            <nav
              className={`fixed md:relative bg-white md:bg-transparent top-0 md:top-[unset] bottom-0 md:bottom-[unset] max-w-sm md:max-w-full w-full z-40 transition-transform duration-300 ease-in-out md:col-span-4 lg:col-span-10 md:self-center ${
                isMenuOpen
                  ? "translate-x-0 right-0"
                  : "translate-x-full md:translate-x-[unset] -right-full md:right-[unset]"
              }`}
            >
              <ul className="h-full pt-[65px] px-10 pb-10 md:p-0 md:flex md:justify-end md:gap-4 md:items-center">
                <li>
                  <Link href={"/"} className="bg-[--primary] text-white w-full block text-center py-3 md:py-[10px] px-[26px] text-[15px] leading-[24px] rounded-[3px] uppercase font-medium 
                  transition duration-[0.2s] ease-linear relative z-[1] hover:bg-[#bb022a] hover:text-[#fff] active:bg-[#bb022a] active:text-[#fff]  focus:bg-[#bb022a] focus:text-[#fff] target:bg-[#bb022a] target:text-[#fff] 
                  ">14 Day Free Trial</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {isScrolled && <div className="h-[72px] lg:h-[64px]" />} {/* Spacer div to prevent content jump */}
    </>
  );
};

export default Header;