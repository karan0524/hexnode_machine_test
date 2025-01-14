import React from 'react'
import SingleAppKiosk from "../../../../public/single-app-kios-image.webp";
import MultiAppKiosk from "../../../../public/multi-app-kiosk-image.webp";
import WebbasedKiosk from "../../../../public/web-based-kiosk-image.webp";
import DigitalSignage from "../../../../public/digital-signage-kiosk-image.webp";
import ASAM from "../../../../public/asam-kiosk-image.webp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

const NavTabs = () => {
  return (
    <>
     <Tabs
            defaultValue="Single App Kiosk"
            className="w-full sm:pt-[60px]"
          >
            <TabsList className="bg-white h-auto border border-[#f7f7f7] rounded-sm p-0 w-full overflow-x-auto justify-start no-scrollbar">
              <TabsTrigger
                value="Single App Kiosk"
                className="text-[#020a19]/50 py-[26px] max-w-[240px] xl:max-w-full h-20 w-full text-[22px] whitespace-nowrap font-semibold leading-[24px] relative z-20"
              >
                Single App Kiosk
              </TabsTrigger>
              <TabsTrigger
                value="Multi-App Kiosk"
                className="text-[#020a19]/50 py-[26px] max-w-[240px] xl:max-w-full h-20 w-full text-[22px] whitespace-nowrap font-semibold leading-[24px] relative z-20"
              >
                Multi-App Kiosk
              </TabsTrigger>
              <TabsTrigger
                value="Web-based Kiosk"
                className="text-[#020a19]/50 py-[26px] max-w-[240px] xl:max-w-full h-20 w-full text-[22px] whitespace-nowrap font-semibold leading-[24px] relative z-20"
              >
                Web-based Kiosk
              </TabsTrigger>
              <TabsTrigger
                value="Digital Signages"
                className="text-[#020a19]/50 py-[26px] max-w-[240px] xl:max-w-full h-20 w-full text-[22px] whitespace-nowrap font-semibold leading-[24px] relative z-20"
              >
                Digital Signages
              </TabsTrigger>
              <TabsTrigger
                value="ASAM Kiosk"
                className="text-[#020a19]/50 py-[26px] max-w-[240px] xl:max-w-full h-20 w-full text-[22px] whitespace-nowrap font-semibold leading-[24px] relative z-20"
              >
                ASAM Kiosk
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Single App Kiosk"
              className="p-10 bg-[#f7f7f7] overflow-hidden mt-0"
            >
              <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-5 lg:order-2">
                  <div className="max-w-[308px] sm:max-w-[460px] w-full mx-auto">
                    <Image
                      src={SingleAppKiosk}
                      alt="SingleAppKiosk"
                      className="rounded-[10px] overflow-hidden "
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-7 lg:order-1">
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px]  max-w-[670px] pb-[15px] lg:pb-10 sm:text-[28px] sm:leading-[40px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Use Hexnode’s Advanced Kiosk settings for additional
                      restrictions or expanded device functionalities while in
                      kiosk mode.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Empower your administrators with full control over the
                      kiosk devices.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="Multi-App Kiosk"
              className="p-10 bg-[#f7f7f7] overflow-hidden mt-0"
            >
              <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-5 lg:order-2">
                  <div className="max-w-[308px] sm:max-w-[460px] w-full mx-auto">
                    <Image
                      src={MultiAppKiosk}
                      alt="MultiAppKiosk"
                      className="rounded-[10px] overflow-hidden "
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-7 lg:order-1">
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px]  max-w-[670px] pb-[15px] lg:pb-10 sm:text-[28px] sm:leading-[40px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Use Hexnode’s Advanced Kiosk settings for additional
                      restrictions or expanded device functionalities while in
                      kiosk mode.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Empower your administrators with full control over the
                      kiosk devices.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="Web-based Kiosk"
              className="p-10 bg-[#f7f7f7] overflow-hidden mt-0"
            >
              <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-5 lg:order-2">
                  <div className="max-w-[308px] sm:max-w-[460px] w-full mx-auto">
                    <Image
                      src={WebbasedKiosk}
                      alt="WebbasedKiosk"
                      className="rounded-[10px] overflow-hidden "
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-7 lg:order-1">
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px]  max-w-[670px] pb-[15px] lg:pb-10 sm:text-[28px] sm:leading-[40px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Use Hexnode’s Advanced Kiosk settings for additional
                      restrictions or expanded device functionalities while in
                      kiosk mode.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Empower your administrators with full control over the
                      kiosk devices.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="Digital Signages"
              className="p-10 bg-[#f7f7f7] overflow-hidden mt-0"
            >
              <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-5 lg:order-2">
                  <div className="max-w-[308px] sm:max-w-[460px] w-full mx-auto">
                    <Image
                      src={DigitalSignage}
                      alt="DigitalSignage"
                      className="rounded-[10px] overflow-hidden "
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-7 lg:order-1">
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px]  max-w-[670px] pb-[15px] lg:pb-10 sm:text-[28px] sm:leading-[40px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Use Hexnode’s Advanced Kiosk settings for additional
                      restrictions or expanded device functionalities while in
                      kiosk mode.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Empower your administrators with full control over the
                      kiosk devices.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="ASAM Kiosk"
              className="p-10 bg-[#f7f7f7] overflow-hidden mt-0"
            >
              <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-5 lg:order-2">
                  <div className="max-w-[308px] sm:max-w-[460px] w-full mx-auto">
                    <Image
                      src={ASAM}
                      alt="ASAM"
                      className="rounded-[10px] overflow-hidden "
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-7 lg:order-1">
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px]  max-w-[670px] pb-[15px] lg:pb-10 sm:text-[28px] sm:leading-[40px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Use Hexnode’s Advanced Kiosk settings for additional
                      restrictions or expanded device functionalities while in
                      kiosk mode.
                    </li>
                    <li
                      className="text-base sm:text-lg font-normal sm:leading-[28px] text-[#333333] pl-[25px] sm:pl-[30px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Empower your administrators with full control over the
                      kiosk devices.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
    </>
  )
}

export default NavTabs