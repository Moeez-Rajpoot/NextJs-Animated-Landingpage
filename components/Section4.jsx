import React from 'react'
import Lottie from "react-lottie";
import create from "@/public/create.json";
import  animate from "@/public/animate.json";
import exp from "@/public/export.json";

const createfile = {
    loop: true,
    autoplay: false,
    animationData: create,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  const animatefile = {
    loop: true,
    autoplay: false,
    animationData: animate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  const exportfile = {
    loop: true,
    autoplay: false,
    animationData: exp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


export default function Section4() {
  return (
    <>
    <div className=" bg-slate-950 h-fit w-full flex flex-col items-center pb-28">
          <h1 className="text-6xl text-slate-50 font-bold mt-36 text-center ">
            How to create animations
            <br />
            <span>for mobile apps</span>
          </h1>

          <div id="sec4comp" className="flex h-fit w-full px-56 mt-10 ">
            <div
              id="component1"
              className="flex flex-col justify-center items-center w-1/3"
            >
              <Lottie options={createfile} height={200} width={200} />
              <h2 className="text-lg font-semibold">Create</h2>
              <p className="px-10 text-center mt-5 space">
                Import your SVG file or create it from scratch with SVGators
                precise graphic tools, which ensure fast editing options and
                flexible shape creation.
              </p>
            </div>

            <div
              id="component1"
              className="flex flex-col justify-center items-center w-1/3"
            >
              <Lottie options={animatefile} height={200} width={200} />
              <h2 className="text-lg font-semibold">Animate</h2>
              <p className="px-10 text-center mt-5 ">
                Use the most advanced animator toolset and set up keyframes on a
                timeline by dragging the play head. Set custom easing functions
                or choose among presets.
              </p>
            </div>

            <div
              id="component1"
              className="flex flex-col justify-center items-center w-1/3"
            >
              <Lottie options={exportfile} height={200} width={200} />
              <h2 className="text-lg font-semibold">Export</h2>
              <p className="px-10 text-center mt-5 ">
                Preview and export your mobile app animation: set iterations,
                speed, interactivity, and more, then choose between React Native
                or Flutter export types.
              </p>
            </div>
          </div>

          <button className="px-16 py-5 mt-16 rounded-xl bg-blue-800 hover:bg-blue-500 text-white font-semibold text-lg">
            Create Svg Now
          </button>
        </div>
      
    </>
  )
}
