"use client";
import Image from "next/image";
import React, { useRef } from "react";
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
import { motion, useInView } from "framer-motion";

interface FormData {
  email: string;
  username: string;
}

const HeroBanner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data?.email, data?.username);
  };

  const fadeUpVariant = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariant = {
    initial: { 
      opacity: 0,
      scale: 0.95,
      y: 30
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const formVariant = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariant = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#020a19] text-white p-[90px_0_30px] xl:p-[120px_0_0px]"
    >
      <div className="w-[88%] max-w-[1300px] mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
          <div className="col-span-4 md:col-span-6 lg:col-span-6 order-2 lg:order-1 md:self-center">
            <motion.div
              variants={fadeUpVariant}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              <h1 className="text-center lg:text-left text-[34px] lg:text-[42px] leading-[44px] lg:leading-[53px] font-bold mb-5 lg:mb-10 sm:max-w-[550px] lg:max-w-[498px] w-full sm:ml-auto lg:ml-[unset] sm:mr-auto">
                Turn your devices into kiosks in a few minutes with Hexnode UEM
              </h1>
            </motion.div>

            <motion.div
              variants={formVariant}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
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
                        <FormControl>
                          <motion.div
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Input
                              placeholder="Your Work Email"
                              className="bg-white h-[52px] w-full rounded-[3px] px-[10px] text-[17px] leading-[21px] shadow-none placeholder:text-[#c6c6c6] text-black"
                              {...field}
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <motion.div
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      type="submit"
                      className="w-full sm:w-[210px] sm:flex-none bg-[--primary] text-white block text-center py-3 md:py-[10px] px-[26px] text-[15px] leading-[24px] rounded-[3px] uppercase font-medium h-[52px]
                      transition duration-[0.2s] ease-linear relative z-[1] hover:bg-[#bb022a] hover:text-[#fff] active:bg-[#bb022a] active:text-[#fff] focus:bg-[#bb022a] focus:text-[#fff] target:bg-[#bb022a] target:text-[#fff]"
                    >
                      Get Started Now!
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </div>

          <motion.div 
            variants={imageVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="col-span-4 md:col-span-6 lg:col-span-6 order-1 lg:order-2"
          >
            <div className="w-full max-w-full md:max-w-[597px] mx-auto">
              <Image
                src={Banner}
                alt="hexnode-kiosk"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;