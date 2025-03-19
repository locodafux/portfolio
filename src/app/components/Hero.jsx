'use client'
import Banner from "./Image"
import {useState, useEffect } from "react"


const Hero = () => {


  const Left = () => {
    return (
      <div className = "w-1/2 flex flex-col  items-center mt-24 p-32  ml-32">
        <div className = " flex flex-col gap-y-8">
          <div className = "text-5xl flex flex-col gap-y-4">
            <div>
              <span>Hello I'am </span>
              <span className = "font-bold">Leonardo Timkang.</span>
            </div>
            <div>
              <span className = "font-bold">Fullstack </span>
              <span className = "">Developer</span>
            </div>
            <div>
              <span>Based In </span>
              <span className = "font-bold">Philippines</span>
            </div>

          </div>
          <p className = "w-100 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus fermentum, nunc ac feugiat luctus, sapien neque elementum augue, sed cursus lorem odio at orci. Proin quis urna vel lorem interdum convallis. Donec malesuada justo id sapien tempus, eget tincidunt nunc varius.</p>

        </div>
      </div>
    )
  }

  const Right = () => {
    return (
      <div className = "w-1/2 ml-[-400px]   p-24">
        <Banner id="Banner" alt="Image" />
      </div>
    )
  }

  return (
    <div className = "flex flex-1 min-h-screen w-screen ">
      <Left />
      <Right />
    </div>
  )
}

export default Hero

