"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UserOne from "../../../../public/dalibor-kruljac.webp";
import UserTwo from "../../../../public/justin-modrak.webp";
import UserThree from "../../../../public/chris-robinson.webp";
import Image from "next/image";

import Gorillas from "../../../../public/gorillas.svg";
import Hilton from "../../../../public/hilton.svg";
import MarriottIntl from "../../../../public/marriott-intl.svg";
import Merck from "../../../../public/merck.svg";
import Costco from "../../../../public/costco.svg";
import Saic from "../../../../public/saic.svg";
import Wolt from "../../../../public/wolt.svg";
import Autoplay from "embla-carousel-autoplay";

const MotionCarouselItem = motion(CarouselItem);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const fadeInUpVariant = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const logoVariant = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="py-[30px] lg:py-[120px] bg-[#F7F7F7]"
      >
        <div className="w-[88%] mx-auto max-w-[1300px]">
          <motion.h2
            variants={fadeInUpVariant}
            initial="initial"
            animate={isInView ? "animate" : "exit"}
            className="text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]"
          >
            Why should you choose Hexnode?
          </motion.h2>

          <motion.div
            variants={fadeInUpVariant}
            initial="initial"
            animate={isInView ? "animate" : "exit"}
            transition={{ delay: 0.2 }}
            className="max-w-[280px] sm:max-w-[400px] md:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-[80px] relative mx-auto lg:pb-0"
          >
            <Carousel className="w-full">
              <CarouselContent className="-ml-1">
                <MotionCarouselItem
                  variants={fadeInUpVariant}
                  initial="initial"
                  animate={isInView ? "animate" : "exit"}
                  transition={{ delay: 0.3 }}
                  className="pl-1 basis-full self-stretch"
                >
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 bg-white rounded-[18px] overflow-hidden h-full">
                    <div className="col-span-4 md:col-span-2 lg:col-span-4">
                      <Image
                        src={UserOne}
                        alt="dalibor-kruljac"
                        className="h-full object-cover w-full"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-4 lg:col-span-8 self-center md:py-[47px]">
                      <h4 className="text-base sm:text-xl md:text-2xl text-[#020a19] font-bold text-center md:text-left relative mx-auto px-5 md:pl-[60px] md:pr-[55px] pt-5 pb-[25px] md:pt-5 md:pb-3">{`"Hexnode is of great value. Works great with Android and iOS!"`}</h4>
                      <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:pt-[26px] md:pb-[25px]">
                        <p className="relative text-center md:text-left text-sm leading-[11px] sm:text-xl sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold before:content-[''] before:absolute before:bg-[#F7F7F7] before:w-full before:-top-5 before:left-0 before:right-0 before:h-[1px]">
                          Justin Modrak
                        </p>
                        <small className="text-center md:text-left w-full text-xs leading-[16px] sm:text-sm sm:leading-[18px] text-[#020a19] font-normal opacity-70 block">
                          Technology Coordinator
                        </small>
                        <small className="text-center md:text-left w-full text-xs leading-[16px] sm:text-sm sm:leading-[18px] text-[#020a19] font-normal opacity-70 block">
                          East Troy Community School District
                        </small>
                      </div>
                    </div>
                  </div>
                </MotionCarouselItem>

                <MotionCarouselItem
                  variants={fadeInUpVariant}
                  initial="initial"
                  animate={isInView ? "animate" : "exit"}
                  transition={{ delay: 0.3 }}
                  className="pl-1 basis-full self-stretch"
                >
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 bg-white rounded-[18px] overflow-hidden h-full">
                    <div className="col-span-4 md:col-span-2 lg:col-span-4">
                      <Image
                        src={UserTwo}
                        alt="justin-modrak"
                        className="h-full object-cover w-full"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-4 lg:col-span-8 self-center md:py-[47px]">
                      <h4 className="text-base sm:text-xl md:text-2xl text-[#020a19] font-bold text-center md:text-left  relative mx-auto px-5 md:pl-[60px] md:pr-[55px] pt-5 pb-[25px] md:pt-5 md:pb-3">{`"Most complete MDM solution I found, and I tested many of them, including major names"`}</h4>
                      <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:pt-[26px]  md:pb-[25px]">
                        <p
                          className="relative text-center md:text-left text-sm leading-[11px] sm:text-xl sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold 
                      before:content-[''] before:absolute before:bg-[#F7F7F7] before:w-full before:-top-5 before:left-0 before:right-0 before:h-[1px]"
                        >
                          Dalibor Kruljac
                        </p>
                        <small className="text-center md:text-left w-full text-xs leading-[16px] sm:text-sm sm:leading-[18px] text-[#020a19] font-normal opacity-70 block">
                          KAMELEYA LTD
                        </small>
                      </div>
                    </div>
                  </div>
                </MotionCarouselItem>

                <MotionCarouselItem
                  variants={fadeInUpVariant}
                  initial="initial"
                  animate={isInView ? "animate" : "exit"}
                  transition={{ delay: 0.3 }}
                  className="pl-1 basis-full self-stretch"
                >
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 bg-white rounded-[18px] overflow-hidden h-full">
                    <div className="col-span-4 md:col-span-2 lg:col-span-4">
                      <Image
                        src={UserThree}
                        alt="chris-robinson"
                        className="h-full object-cover w-full"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-4 lg:col-span-8 self-center md:py-[47px]">
                      <h4 className="text-base sm:text-xl md:text-2xl text-[#020a19] font-bold text-center md:text-left  relative mx-auto px-5 md:pl-[60px] md:pr-[55px] pt-5 pb-[25px] md:pt-5 md:pb-3">{`"It seemed to be in-line with everything we were looking at."`}</h4>
                      <div className="px-[20px] py-[20px] md:pl-[60px] md:pr-[55px] md:pt-[26px]  md:pb-[25px]">
                        <p
                          className="relative text-center md:text-left text-sm leading-[11px] sm:text-xl sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold 
                      before:content-[''] before:absolute before:bg-[#F7F7F7] before:w-full before:-top-5 before:left-0 before:right-0 before:h-[1px]"
                        >
                          Chris Robinson
                        </p>
                        <small className="text-center md:text-left w-full text-xs leading-[16px] sm:text-sm sm:leading-[18px] text-[#020a19] font-normal opacity-70 block">
                          Executive Account Manager, NCS
                        </small>
                      </div>
                    </div>
                  </div>
                </MotionCarouselItem>
              </CarouselContent>
              <div className="">
                <CarouselPrevious className="bottom-[-80px] absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] lg:bottom-[50%] cursor-not-allowed group translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] lg:left-[-60px]" />
                <CarouselNext className="cursor-pointer bottom-[-80px] absolute leading-[0px] left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF] lg:bottom-[50%] group translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] lg:left-[unset] lg:right-[-60px]" />
              </div>
            </Carousel>
          </motion.div>

          <motion.div
            variants={logoVariant}
            initial="initial"
            animate={isInView ? "animate" : "exit"}
            transition={{ delay: 0.4 }}
            className="mt-10 md:mt-20"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-auto pl-2"
                >
                  <div className="p-1">
                    <Image src={Gorillas} alt="Gorillas" />
                  </div>
                </CarouselItem>

                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-auto pl-2"
                >
                  <div className="p-1">
                    <Image src={Hilton} alt="Hilton" />
                  </div>
                </CarouselItem>

                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-auto pl-2"
                >
                  <div className="p-1">
                    <Image src={MarriottIntl} alt="MarriottIntl" />
                  </div>
                </CarouselItem>

                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-auto pl-2"
                >
                  <div className="p-1">
                    <Image src={Merck} alt="Merck" />
                  </div>
                </CarouselItem>

                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-auto pl-2"
                >
                  <div className="p-1">
                    <Image src={Costco} alt="Costco" />
                  </div>
                </CarouselItem>

                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-auto pl-2"
                >
                  <div className="p-1">
                    <Image src={Saic} alt="Saic" />
                  </div>
                </CarouselItem>

                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-auto pl-2"
                >
                  <div className="p-1">
                    <Image src={Wolt} alt="Wolt" />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
