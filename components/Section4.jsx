import React from "react";
import Lottie from "react-lottie";
import create from "@/public/create.json";
import animate from "@/public/animate.json";
import exp from "@/public/export.json";
import { Bounce, Fade } from "react-awesome-reveal";
import { useState } from "react";

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
  const [createstate, setCreate] = useState(true);
  const [animatestate, setAnimate] = useState(true);
  const [exportstate, setExport] = useState(true);
  return (
    <>
      <div className=" bg-slate-950 h-fit w-full flex flex-col items-center pb-28">
        <Fade fraction={0} duration={3000}>
          <h1 className="text-4xl lg:text-6xl text-slate-50 font-bold mt-36 text-center ">
            How to create animations
            <br />
            <span>for mobile apps</span>
          </h1>
        </Fade>
        <div
          id="sec4comp"
          className="flex flex-col justify-center items-center xl:flex-row h-fit w-full xl:px-56 mt-10 "
        >
          <div
            onMouseEnter={(e) => setCreate(false)}
            onMouseLeave={(e) => setCreate(true)}
            id="component1"
            className="flex flex-col justify-center items-center xl:w-1/3 transition-transform duration-300 hover:scale-105 "
          >
            <Lottie
              options={createfile}
              height={200}
              width={200}
              isStopped={createstate}
            />
            <h2 className="text-lg font-semibold mt-3 xl:mt-0 ">Create</h2>
            <p className="px-2 sm:px-20  xl:px-10 text-center mt-5 space">
              Import your SVG file or create it from scratch with SVGators
              precise graphic tools, which ensure fast editing options and
              flexible shape creation.
            </p>
          </div>

          <div
            onMouseEnter={(e) => setAnimate(false)}
            onMouseLeave={(e) => setAnimate(true)}
            id="component2"
            className="flex flex-col justify-center items-center xl:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            <Lottie
              options={animatefile}
              height={200}
              width={200}
              isStopped={animatestate}
            />
            <h2 className="text-lg font-semibold mt-3 xl:mt-0  ">Animate</h2>
            <p className="px-2 sm:px-20 xl:px-10 text-center mt-5 ">
              Use the most advanced animator toolset and set up keyframes on a
              timeline by dragging the play head. Set custom easing functions or
              choose among presets.
            </p>
          </div>

          <div
            onMouseEnter={(e) => setExport(false)}
            onMouseLeave={(e) => setExport(true)}
            id="component3"
            className="flex flex-col justify-center items-center xl:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            <Lottie
              options={exportfile}
              height={200}
              width={200}
              isStopped={exportstate}
            />
            <h2 className="text-lg font-semibold mt-3 xl:mt-0">Export</h2>
            <p className="px-2 sm:px-20 xl:px-10 text-center mt-5 ">
              Preview and export your mobile app animation: set iterations,
              speed, interactivity, and more, then choose between React Native
              or Flutter export types.
            </p>
          </div>
        </div>

        <Bounce fraction={0} duration={3000}>
          <button className="px-12 py-3 xl:px-16 xl:py-5 mt-16 rounded-xl bg-blue-800 hover:bg-blue-500 text-white font-semibold text-lg">
            Create Svg Now
          </button>
        </Bounce>
      </div>
    </>
  );
}
