"use client";
import React from "react";
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
import Link from "next/link";
import arrowRight from "../../../public/arrow-right.svg";
import Image from "next/image";

interface FormData {
  email: string;
  username: string;
}

function Footer() {
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
    <>
      <footer>
        <div className="bg-[#020a19] py-[50px]">
          <div className="w-[88%] max-w-[1300px] mx-auto ">
            <div className="text-[30px] text-white font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
              Sign up and try Hexnode free for 14 days!
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 sm:space-y-0 sm:space-x-[10px] sm:flex max-w-[325px] w-full sm:flex-1 sm:max-w-[527px] sm:justify-center sm:items-center mx-auto "
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
                        <Input
                          placeholder="Your Work Email"
                          className="bg-white h-[52px] w-full rounded-[3px] px-[10px] text-lg  shadow-none placeholder:text-[#c6c6c6] text-black"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full sm:w-[210px] sm:flex-none bg-[--primary] text-white block text-center py-3 md:py-[10px] px-[26px]  text-[15px] leading-[24px] rounded-[3px] uppercase font-medium h-[52px]
                   transition duration-[0.2s] ease-linear relative z-[1] hover:bg-[#bb022a] hover:text-[#fff] active:bg-[#bb022a] active:text-[#fff]  focus:bg-[#bb022a] focus:text-[#fff] target:bg-[#bb022a] target:text-[#fff] "
                >
                  Get Started
                </Button>
              </form>
            </Form>

            <div className="text-[17px] leading-[24px] text-center text-[#556575] font-medium m-[0px] pt-[10px]">
              No credit cards required.
              <Link
                href={"/"}
                className="text-[--primary] text-[17px] leading-[24px] font-medium whitespace-nowrap inline-flex gap-[5px] items-center transition-all duration-[0.3s] ease-in-out pr-[20px]"
              >
                Request a demo <Image src={arrowRight} alt="arrow" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#f2f2f2] p-[30px_0] sm:p-[20px_0]">
          <div className="w-[88%] max-w-[1300px] mx-auto ">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5 text-[#556575]">
              <ul className="col-span-4 md:col-span-6 flex justify-center items-center lg:justify-start">
                <li
                  className=" inline-block text-xs font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19] relative
                        after:content-['-'] after:inline-flex after:text-sm after:p-[0_5px] after:opacity-8 last:after:hidden 
                        "
                >
                  <Link href={"/"}>Terms of Use</Link>
                </li>
                <li
                  className="inline-block text-xs font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]  relative
                        after:content-['-'] after:inline-flex after:text-sm after:p-[0_5px] after:opacity-8 last:after:hidden 
                        "
                >
                  <Link href={"/"}>Privacy</Link>
                </li>
                <li
                  className="inline-block text-xs font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]  relative
                        after:content-['-'] after:inline-flex after:text-sm after:p-[0_5px] after:opacity-8 last:after:hidden 
                        "
                >
                  <Link href={"/"}>Cookies</Link>
                </li>
              </ul>
              <div className="col-span-4 md:col-span-6">
                <p className="text-xs  text-text-default font-medium text-center lg:text-end">
                Copyright © {new Date().getFullYear()} Mitsogo Inc. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
