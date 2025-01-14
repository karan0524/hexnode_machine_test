"use client";
import Image from "next/image";
import React from "react";
import Banner from "../../../../public/hexnode-kiosk.webp";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

// form type declaration

interface FormData {
  email: string;
  username: string;
}

const HeroBanner = () => {

  // Define form schema
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log(data?.email, data?.username);
  };

  return (
    <section className="bg-[#020a19] text-white p-[90px_0_30px] xl:p-[120px_0_0px]">
      <div className="w-[88%] max-w-[1300px] mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
          <div className="col-span-4 md:col-span-6 lg:col-span-6 order-2 lg:order-1 md:self-center">
            <h1 className="text-center lg:text-left text-[34px] lg:text-[42px] leading-[44px] lg:leading-[53px] font-bold mb-5 lg:mb-10 sm:max-w-[550px] lg:max-w-[498px] w-full sm:ml-auto lg:ml-[unset] sm:mr-auto ">
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 sm:space-y-0 sm:space-x-[10px] sm:flex max-w-[325px] w-full sm:flex-1 sm:max-w-[550px] lg:max-w-[498px] sm:justify-center sm:items-center sm:mx-auto lg:ml-[unset] max-md:mx-auto"
              >
                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem className="space-y-0 flex-1">
                      <FormControl >
                        <Input
                          placeholder="Your Work Email"
                          className="bg-white h-[52px] w-full rounded-[3px] px-[10px] text-[17px] leading-[21px] shadow-none placeholder:text-[#c6c6c6] text-black"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full sm:w-[210px] sm:flex-none bg-[--primary] text-white block text-center py-3 md:py-[10px] px-[26px]  text-[15px] leading-[24px] rounded-[3px] uppercase font-medium h-[52px]">
                  Get Started Now!
                </Button>
              </form>
            </Form>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-6 order-1 lg:order-2">
            <div className="w-full max-w-full md:max-w-[597px] mx-auto">
            <Image src={Banner} alt="hexnode-kiosk" className="w-full h-full" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
