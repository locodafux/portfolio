'use client'
import { Banner } from "./Image";
import { useState, useEffect } from "react";

const About = () => {
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
    <div className={`flex ${isMobile ? "flex-col" : "flex-row min-h-screen"}  w-screen`}>
      {/* Left Section */}

      {/* Right Section  */}
      {!isMobile && (
        <div className="w-1/2 flex justify-center items-center ">
          <div className="w-1/2 h-1/2 object-cover">
          <Banner path="/about-pic.png" alt="Profile Image"  />
          </div>
        </div>
      )}

      <div className={`${isMobile ? "w-screen p-12 text-center" : "w-1/2 p-24"} flex flex-col items-center mt-24`}>
        <div className="flex flex-col gap-y-8">
          <div className={`${isMobile ? "text-3xl" : "text-5xl"} flex flex-col gap-y-4`}>
            <div className="flex gap-x-3">
              <span>About</span>
              <span className="font-bold">Me</span>
            </div>
          </div>
          <p className="w-full text-gray-500 leading-relaxed">
            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
          </p>

          <p className="w-full text-gray-500 leading-relaxed">
            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
          </p>

          <p className="w-full text-gray-500 leading-relaxed">
            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
