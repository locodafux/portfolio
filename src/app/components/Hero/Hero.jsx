'use client'
import { Banner }from "../Image"
import { useState, useEffect } from "react";
import Left from "./Left"
import Right from "./Right"

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

  return (
    <div className={`flex min-h-screen w-screen `}>
      <Left isMobile={isMobile} />
      {!isMobile && <Right isMobile={ isMobile } Banner={ Banner } />}
    </div>
  );
};

export default Hero;
