'use client'
import {Banner}from "./Image"
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  const Left = () => {
    return (
      <div className={`${isMobile ? "w-screen px-18 justify-center" : "w-1/2 p-24 mt-24"} flex flex-col items-center`}>
        <div className="flex flex-col gap-y-8">
          <div className={`${ isMobile ? "text-3xl items-center" : "text-5xl"} flex flex-col gap-y-4`}>
            <div>
              <span>Hello I am </span>
              <span className="font-bold">Leonardo Timkang.</span>
            </div>
            <div>
              <span className="font-bold">Fullstack </span>
              <span>Developer</span>
            </div>
            <div>
              <span>Based In </span>
              <span className="font-bold">Philippines</span>
            </div>
          </div>
          <p className="w-full text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            Vivamus fermentum, nunc ac feugiat luctus, sapien neque elementum augue, 
            sed cursus lorem odio at orci. Proin quis urna vel lorem interdum convallis.
            Donec malesuada justo id sapien tempus, eget tincidunt nunc varius.
          </p>
        </div>
      </div>
    );
  };

  const Right = () => {
    return (
      <div className={`${isMobile ? "w-screen h-[400px] " : "w-1/2 ml-[-250px]"} flex justify-center items-center`}>
        <Banner id="Banner" alt="Image" className="w-full h-full object-cover" />
      </div>
    );
  };

  return (
    <div className={`flex min-h-screen w-screen `}>
      <Left />
      {!isMobile && <Right />}
    </div>
  );
};

export default Hero;
