import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Image from "next/image";
import loc from "../public/location.png";
import react from "../public/react.svg";
import flutter from "../public/flutter.svg";
import checkmark from "../public/checkmark.json";

const checkmarkfile = {
  loop: true,
  autoplay: true,
  animationData: checkmark,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Section2() {
  const [lottieSize, setLottieSize] = useState({ width: 90, height: 90 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLottieSize({ width: 40, height: 40 });
      } else {
        setLottieSize({ width: 90, height: 90 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="bg-white h-fit w-fit flex flex-col items-center pb-28"
        id="section2"
      >
        <div className="flex mt-40 lg:mt-72 px-1 lg:px-10 py-5 rounded-lg bg-blue-950">
          <Lottie options={checkmarkfile} height={lottieSize.height} width={lottieSize.width} />

          <p className="flex flex-col px-1 text-wrap lg:px-10 justify-center text-sm lg:text-3xl font-bold">
            Design & animate in one place
            <span className="text-sm xl:text-xl font-normal">
              No coding, no third party apps needed
            </span>
          </p>
        </div>

        <div className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row mt-10 lg:mt-20" id="content-div">
          <div id="left" className="relative w-full lg:w-1/2 h-full">
            <Image
              className="ml-0 lg:ml-24"
              alt="Location"
              src={loc}
              width={800}
              height={500}
            />

            <Image
              className="absolute hidden xl:block xl:top-96 xl:-right-24"
              alt="React"
              src={react}
              width={130}
              height={130}
            />

            <Image
              className="absolute hidden xl:block xl:top-96 xl:right-6"
              alt="Flutter"
              src={flutter}
              width={130}
              height={130}
            />
          </div>

          <div
            id="right"
            className="w-full lg:w-1/2 h-full flex flex-col pl-5 lg:pl-48 pt-14"
          >
            <h1 className="text-3xl lg:text-5xl text-gray-800 font-bold">
              Export for iOS & Android
            </h1>

            <p className="font-semibold text-gray-700 pr-5 lg:pr-20 mt-5 lg:mt-10">
              Animate for React Native or Flutter
              <br />
              <span className="text-gray-500 font-light">
                SVGator has got you covered with the two most popular
                frameworks: React Native and Flutter. Design functional and
                delightful app animations with familiar graphic editing tools
                and advanced animators.
              </span>
            </p>

            <p className="font-semibold text-gray-700 pr-5 lg:pr-20 mt-5 lg:mt-10">
              Single player node module
              <br />
              <span className="text-gray-500 font-light">
                Get better performance by using SVGator’s own external player.
                You are free to choose between embedded or single player
                modules, depending on your needs when exporting your app
                animations.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}