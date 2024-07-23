"use client";
import { Prompt } from "next/font/google";
import Image from "next/image";
import mob1image from "../public/girl.svg";
import Lottie from "react-lottie";
import reactfile from "../public/reactfile.json";
import blockfile from "../public/block.json";
import checkmark from "../public/checkmark.json";
import diffmob from "../public/diffmob.json";
import mob from "../public/mob.json";
import mobwithdiv from "../public/mobwithdiv.json";
import loc from "../public/location.png";
import react from "../public/react.svg";
import flutter from "../public/flutter.svg";

const prompt = Prompt({
  weight: "400",
  subsets: ["latin"],
});

const defaultOptionsmob1 = {
  loop: true,
  autoplay: true,
  animationData: reactfile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const mobfile = {
  loop: true,
  autoplay: true,
  animationData: mob,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const diffmobfile = {
  loop: true,
  autoplay: true,
  animationData: diffmob,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const checkmarkfile = {
  loop: true,
  autoplay: true,
  animationData: checkmark,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const mobwithdivfile = {
  loop: true,
  autoplay: true,
  animationData: mobwithdiv,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultCenter = {
  loop: true,
  autoplay: true,
  animationData: blockfile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  return (
    <>
      <div>
        <div className=" flex flex-col  items-center bg-gradient-to-b from-gray-900 to-indigo-900 h-[150vh] w-full text-white mt-20">
          <h1 className="text-7xl px-36 mt-20 font-bold flex flex-col justify-center items-center">
            Create Lightweight
            <span>Mobile App Animations</span>
          </h1>

          <p className="mt-8 text-lg font-medium font-sans text-slate-200 sm:px-96 text-center">
            Create impressive animations for mobile apps on a friendly and
            intuitive interface. Export cross-platform files for both Android
            and iOS.
          </p>

          <p className="mt-4 text-xl font-semibold text-cyan-300">
            {" "}
            Simple, Quick, Efficient{" "}
          </p>

          <button
            className={`px-20 py-7 mt-8 text-xl font-mono rounded-lg animate-bounce hover:bg-blue-500 bg-blue-700 ${prompt.className}`}
          >
            Animate Now
          </button>

          <Image
            className="ml-[28%] mt-2"
            alt="Free"
            src={
              "https://cdn.svgator.com/assets/landing-pages/static/common/52474455-0-its-free-LP-01.svg"
            }
            height={200}
            width={200}
          ></Image>

          <div
            id="section-mob"
            className="flex justify-center items-center gap-5 h-fit mt-28 pb-10 mb-10"
          >
            <div className="w-64 h-[500px] bg-slate-400 rounded-xl pb-14">
              <p className="text-center">_______________</p>

              <div
                id="inner-div"
                className="border-y-8 border-x-4 border-x-slate-400 rounded-3xl bg-neutral-200 h-full"
              >
                <Image
                  className="mt-16"
                  alt="Free"
                  src={mob1image}
                  height={500}
                  width={500}
                ></Image>
                <div id="design" className="flex justify-center mt-10">
                  <div className="rounded-lg py-3 w-2/3 bg-slate-400"></div>
                </div>
              </div>

              <p className="text-center">_______________</p>
            </div>

            <div className="w-64 h-[550px] bg-blue-800 rounded-xl pb-14">
              <p className="text-center">_______________</p>

              <div
                id="inner-div"
                className="border-y-8 border-x-4 border-x-slate-400 rounded-3xl bg-blue-200 h-full"
              >
                <div id="design" className="flex justify-end mr-5 mt-10">
                  <div className="rounded-lg  w-1/4 h-12 bg-blue-300 flex justify-center items-center">
                    <div className="rounded-lg w-[87%] h-[89%] border-2"></div>
                  </div>
                </div>

                <Lottie options={defaultOptionsmob1} height={300} width={200} />

                <div id="design" className="flex justify-center ">
                  <div className="rounded-lg py-3 w-2/3 bg-blue-800"></div>
                </div>
              </div>

              <p className="text-center">_______________</p>
            </div>

            <div className="w-72 h-[600px] bg-black rounded-xl pb-14">
              <p className="text-center">_______________</p>

              <div
                id="inner-div"
                className="border-y-8 border-x-4 border-x-slate-400 rounded-3xl bg-blue-100 h-full"
              >
                <Lottie options={diffmobfile} height={400} width={280} />
                <Lottie options={checkmarkfile} height={80} width={80} />

                <div id="design" className="flex justify-center">
                  <div className="rounded-lg py-3 w-2/3 bg-slate-700"></div>
                </div>
              </div>

              <p className="text-center">_______________</p>
            </div>

            <div className="w-64 h-[550px] bg-blue-900 rounded-xl pb-14">
              <p className="text-center">_______________</p>

              <div
                id="inner-div"
                className="border-y-8 border-x-4 border-x-slate-400 rounded-3xl bg-blue-200 h-full"
              >
                <div className="flex justify-center ml-4 items-center">
                  <div id="design" className="flex justify-end mr-5 mt-10">
                    <div className="rounded-lg  w-[50px] h-12 bg-blue-400 flex justify-center items-center">
                      <div className="rounded-lg w-[40px] h-[89%] border-2"></div>
                    </div>
                  </div>
                  <div id="design" className="flex justify-end mr-5 mt-10">
                    <div className="rounded-lg  w-[50px] h-12 bg-blue-400 flex justify-center items-center">
                      <div className="rounded-lg w-[40px] h-[89%] border-2"></div>
                    </div>
                  </div>
                  <div id="design" className="flex justify-end mr-5 mt-10">
                    <div className="rounded-lg  w-[50px] h-12 bg-blue-400 flex justify-center items-center">
                      <div className="rounded-lg w-[40px] h-[89%] border-2"></div>
                    </div>
                  </div>
                </div>
                <Lottie options={mobfile} height={250} width={180} />
                <div id="design" className="flex justify-center mt-10">
                  <div className="rounded-lg py-3 w-2/3 bg-blue-800"></div>
                </div>
              </div>

              <p className="text-center">_______________</p>
            </div>

            <div className="w-64 h-[500px] bg-slate-400 rounded-xl pb-14">
              <p className="text-center">_______________</p>

              <div
                id="inner-div"
                className="border-y-8 border-x-4 border-x-slate-400 rounded-3xl bg-neutral-200 h-full"
              >
                <div id="design" className="flex justify-center mt-10">
                  <div className="rounded-lg py-3 w-2/3 bg-slate-400"></div>
                </div>

                <Lottie options={mobwithdivfile} height={170} width={250} />
                <Lottie options={defaultCenter} height={100} width={100} />
                <div id="design" className="flex justify-center mt-10">
                  <div className="rounded-lg py-3 w-2/3 bg-slate-400"></div>
                </div>
              </div>

              <p className="text-center">_______________</p>
            </div>
          </div>
        </div>
        <div
          className=" bg-white h-fit w-full flex flex-col items-center pb-28"
          id="section2"
        >
          <div className="flex mt-72 px-10 py-5 rounded-lg bg-blue-950">
            <Lottie options={checkmarkfile} height={100} width={100} />

            <p className="flex flex-col px-10 justify-center text-3xl font-bold">
              Design & animate in one place
              <span className="text-xl font-normal">
                No coding, no third party apps needed
              </span>
            </p>
          </div>

          <div className="w-full h-[80vh] flex mt-20 " id="content-div">
            <div id="left" className="relative w-1/2 h-full">
              <Image
                className="ml-24"
                alt="Location"
                src={loc}
                width={800}
                height={500}
              ></Image>

              <Image
                className="absolute top-96 -right-24"
                alt="Location"
                src={react}
                width={130}
                height={130}
              ></Image>

              <Image
                className="absolute top-96 right-6"
                alt="Location"
                src={flutter}
                width={130}
                height={130}
              ></Image>
            </div>

            <div
              id="right"
              className=" w-1/2 h-full flex flex-col pl-48 pt-14 "
            >
              <h1 className="text-5xl text-gray-800 font-bold">Export for iOS & Android</h1>

              <p className="font-semibold text-gray-700 pr-20 mt-10">
                Animate for React Native or Flutter
                <br></br>
                <span className="text-gray-500 font-light">
                  SVGator has got you covered with the two most popular
                  frameworks: React Native and Flutter. Design functional and
                  delightful app animations with familiar graphic editing tools
                  and advanced animators.
                </span>
              </p>

              <p className="font-semibold text-gray-700 pr-20 mt-10">
              Single player node module
                <br></br>
                <span className="text-gray-500 font-light">
                Get better performance by using SVGator’s own external player. You are free to choose between embedded or single player modules, depending on your needs when exporting your app animations.
                </span>
              </p>
            </div>
          </div>
        </div>


        {/* Section 3 */}
        <div
          className=" bg-gradient-to-b from-gray-900 to-indigo-900 h-[150vh] w-full text-white mt-20"
          id="section3"

        >

          </div>
      </div>
    </>
  );
}
