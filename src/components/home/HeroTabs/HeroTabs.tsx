'use client'
import React, { useEffect, useState } from "react";
import AccordionTabs from "./AccordionTabs";
import NavTabs from "./NavTabs";
import { visibilityCheck } from "@/app/_constants/visibilityCheck";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroTabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    amount: 0.3,
    margin: "0px 0px -100px 0px" 
  });

  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = visibilityCheck();
      setIsMobile(mobileCheck);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  const fadeUpVariant = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const tabsVariant = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: "easeIn"
      }
    }
  };
 
  return (
    <section 
      ref={sectionRef}
      className="bg-white py-[60px] lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1300px] w-[88%]">
        <motion.div
          variants={fadeUpVariant}
          initial="initial"
          animate={isInView ? "animate" : "exit"}
        >
          <h2 className="text-center text-[#020a19] text-[28px] sm:text-4xl leading-[1.25] antialiased font-bold">
            Specific kiosk modes for unique use cases
          </h2>
        </motion.div>
        
        <motion.div
          variants={tabsVariant}
          initial="initial"
          animate={isInView ? "animate" : "exit"}
        >
          {isMobile ? <AccordionTabs /> : <NavTabs />}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTabs;