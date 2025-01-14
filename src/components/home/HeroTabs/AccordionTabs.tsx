import React from 'react'
import SingleAppKiosk from "../../../../public/single-app-kios-image.webp";
import MultiAppKiosk from "../../../../public/multi-app-kiosk-image.webp";
import WebbasedKiosk from "../../../../public/web-based-kiosk-image.webp";
import DigitalSignage from "../../../../public/digital-signage-kiosk-image.webp";
import ASAM from "../../../../public/asam-kiosk-image.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const AccordionTabs = () => {
  return (
    <>
              <Accordion type="single" collapsible className="pt-10">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="w-full text-left text-lg leading-[26px] font-bold  text-[#020a19]/50  cursor-pointer p-4 border-[1px] border-solid rounded-[4px] bg-white border-black/10">Single App Kiosk</AccordionTrigger>
              <AccordionContent className="p-[15px] bg-[#f7f7f7]">
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
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px] pb-[15px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="w-full text-left text-lg leading-[26px] font-bold  text-[#020a19]/50  cursor-pointer p-4 border-[1px] border-solid rounded-[4px] bg-white border-black/10 ">Multi-App Kiosk</AccordionTrigger>
              <AccordionContent className="p-[15px] bg-[#f7f7f7]">
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
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px] pb-[15px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="w-full text-left text-lg leading-[26px] font-bold  text-[#020a19]/50  cursor-pointer p-4 border-[1px] border-solid rounded-[4px] bg-white border-black/10 ">Web-based Kiosk</AccordionTrigger>
              <AccordionContent className="p-[15px] bg-[#f7f7f7]">
              <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-4">
                <div className="col-span-6 lg:col-span-5 lg:order-2">
                  <div className="max-w-[308px] sm:max-w-[460px] w-full mx-auto">
                    <Image
                      src={WebbasedKiosk}
                      alt="MultiAppKiosk"
                      className="rounded-[10px] overflow-hidden "
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-7 lg:order-1">
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px] pb-[15px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-none">
              <AccordionTrigger className="w-full text-left text-lg leading-[26px] font-bold  text-[#020a19]/50  cursor-pointer p-4 border-[1px] border-solid rounded-[4px] bg-white border-black/10 ">Digital Signage</AccordionTrigger>
              <AccordionContent className="p-[15px] bg-[#f7f7f7]">
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
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px] pb-[15px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-none">
              <AccordionTrigger className="w-full text-left text-lg leading-[26px] font-bold  text-[#020a19]/50  cursor-pointer p-4 border-[1px] border-solid rounded-[4px] bg-white border-black/10 ">ASAM Kiosk</AccordionTrigger>
              <AccordionContent className="p-[15px] bg-[#f7f7f7]">
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
                  <h3 className="text-[#020A19] font-bold text-xl leading-[26px] pb-[15px]">
                    Powerful Single-App Kiosk solutions for enhanced control
                  </h3>
                  <ul>
                    <li
                      className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Provision the devices to run one specialized application,
                      with limited functionalities.
                    </li>

                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
                      before:content-[''] before:absolute before:block before:w-[8px] before:h-[15px] 
                      before:border before:border-solid before:border-green-500 before:border-t-0 before:border-l-0 
                      before:rotate-45 before:left-1 before:top-1 
                      mb-[10px] lg:mb-[25px] last:mb-0"
                    >
                      Customize the device settings to cater to a specific
                      use-case each time.
                    </li>
                    <li
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
                       className="text-base leading-[24px] font-normal text-[#333333] pl-[25px] relative
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
    </>
  )
}

export default AccordionTabs