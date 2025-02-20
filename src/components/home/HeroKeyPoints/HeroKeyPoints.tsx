'use client'
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import idc from "../../../../public/idc.webp";
import Gartner from "../../../../public/gartner.png";
import forrester from "../../../../public/forrester.png";
import Link from "next/link";

const HeroKeyPoints = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });

  const cardVariants = (delay: number) => ({
    initial: { 
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        delay: delay * 0.5,
        ease: "easeIn"
      }
    }
  });

  const MotionLink = motion(Link);

  return (
    <>
      <section ref={sectionRef} className="bg-[#1A1C2B] md:py-[30px]">
        <div className="w-[88%] max-w-[1300px] mx-auto">
          <div className="flex flex-col max-md:items-center md:flex-row justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px] text-white text-center md:text-left">
            <MotionLink
              href={"/"}
              className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px]"
              variants={cardVariants(0)}
              initial="initial"
              animate={isInView ? "animate" : "exit"}
            >
              <div className="min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full mx-auto md:mx-[unset] mb-[15px] flex justify-center md:justify-start">
                <Image src={idc} alt="idc" className="w-auto h-full object-contain" />
              </div>
              <p>
                Hexnode is listed as a leader and a major player in IDC
                MarketScape UEM Vendors Assessment Reports 2024.
              </p>
            </MotionLink>

            <MotionLink
              href={"/"}
              className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] relative
              before:content-[''] before:absolute before:w-[107px] md:before:w-[1px] before:h-[1px] md:before:h-[107px] before:bg-[rgb(255,255,255,20%)] before:left-1/2 md:before:left-[-10px] lg:before:left-[-25px] xl:before:left-[-45px] before:top-0 md:before:top-1/2 before:-translate-x-1/2 md:before:-translate-y-1/2 md:before:translate-x-[unset]
              after:content-[''] after:absolute after:w-[107px] md:after:w-[1px] after:h-[1px] md:after:h-[107px] after:bg-[rgb(255,255,255,20%)] after:left-1/2 md:after:left-[unset] md:after:right-[-10px] lg:after:right-[-25px] xl:after:right-[-45px] after:bottom-0 md:after:bottom-[unset] md:after:top-1/2 after:-translate-x-1/2 md:after:-translate-y-1/2 md:after:translate-x-[unset]"
              variants={cardVariants(0.2)}
              initial="initial"
              animate={isInView ? "animate" : "exit"}
            >
              <div className="min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full mx-auto md:mx-[unset] mb-[15px] flex justify-center md:justify-start">
                <Image src={Gartner} alt="Gartner" className="w-auto h-full object-contain" />
              </div>
              <p>
                Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.
              </p>
            </MotionLink>

            <MotionLink
              href={"/"}
              className="group max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px]"
              variants={cardVariants(0.4)}
              initial="initial"
              animate={isInView ? "animate" : "exit"}
            >
              <div className="min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full mx-auto md:mx-[unset] mb-[15px] flex justify-center md:justify-start">
                <Image src={forrester} alt="forrester" className="w-auto h-full object-contain" />
              </div>
              <p>
                Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
              </p>
            </MotionLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroKeyPoints;