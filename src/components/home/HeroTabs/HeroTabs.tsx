import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const HeroTabs = () => {
  return (
    <>
      <section className="bg-white py-[60px] lg:py-[120px]">
        <div className="mx-auto max-w-[1300px] w-[88%]">
          <h2 className="text-center text-[#020a19] text-[28px] sm:text-4xl leading-[1.25] antialiased font-bold ">
            Specific kiosk modes for unique use cases
          </h2>
          <Tabs defaultValue="Single App Kiosk" className="w-full">
            <TabsList>
              <TabsTrigger value="Single App Kiosk">Single App Kiosk</TabsTrigger>
              <TabsTrigger value="Multi-App Kiosk">Multi-App Kiosk</TabsTrigger>
              <TabsTrigger value="Web-based Kiosk">Web-based Kiosk</TabsTrigger>
              <TabsTrigger value="Digital Signages">Digital Signages</TabsTrigger>
              <TabsTrigger value="ASAM Kiosk">ASAM Kiosk</TabsTrigger>
            </TabsList>
            <TabsContent value="Single App Kiosk">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="Multi-App Kiosk">
              Change your password here.
            </TabsContent>
            <TabsContent value="Web-based Kiosk">
              Change your password here.
            </TabsContent>
            <TabsContent value="Digital Signages">
              Change your password here.
            </TabsContent>
            <TabsContent value="Digital Signages">
            ASAM Kiosk
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default HeroTabs;
