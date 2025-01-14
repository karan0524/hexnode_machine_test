"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import AmazonFire from "../../../../public/amazon-fire.webp";
import Androidtv from "../../../../public/android-tv.svg";
import Android from "../../../../public/android.svg";
import AppleTv from "../../../../public/apple-tv.svg";
import Ios from "../../../../public/ios.svg";
import windows from "../../../../public/windows.svg";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

const Platforms = () => {
  return (
    <>
      <section className="py-[60px] lg:py-[120px] bg-white">
        <div className="mx-auto max-w-[1300px] w-[88%]">
          <h2 className="text-center mb-10 md:mb-[60px]  text-[#020a19] text-[32px]  sm:text-[40px] leading-[40px] sm:leading-[1.3] font-bold ">
            Platforms supported
          </h2>

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
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="p-1 hover:-translate-y-1 cursor-pointer transition-all duration-500">
                  <Image src={Android} alt="Android" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6">
               <div className="p-1 hover:-translate-y-1 cursor-pointer transition-all duration-500">
                  <Image src={windows} alt="windows" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6">
               <div className="p-1 hover:-translate-y-1 cursor-pointer transition-all duration-500">
                  <Image src={Ios} alt="Ios" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6">
               <div className="p-1 hover:-translate-y-1 cursor-pointer transition-all duration-500">
                  <Image src={Androidtv} alt="Androidtv" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6">
               <div className="p-1 hover:-translate-y-1 cursor-pointer transition-all duration-500">
                  <Image src={AppleTv} alt="AppleTv" />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6">
               <div className="p-1 hover:-translate-y-1 cursor-pointer transition-all duration-500">
                  <Image src={AmazonFire} alt="AmazonFire" />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Platforms;
