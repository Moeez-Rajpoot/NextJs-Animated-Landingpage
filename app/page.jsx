"use client";
import { useState, useEffect } from "react";
import { Prompt } from "next/font/google";
import Image from "next/image";
import mob1image from "../public/girl.svg";
import Lottie from "react-lottie";
import blockfile from "../public/block.json";
import checkmark from "../public/checkmark.json";
import diffmob from "../public/diffmob.json";
import space from "../public/space.json";
import mobwithdiv from "../public/mobwithdiv.json";
import Footer from "@/components/footer";
import create from "@/public/create.json";
import Section4 from "@/components/Section4";
import Section3 from "@/components/Section3";
import Section2 from "@/components/Section2";
import {
  Fade,
  Zoom,
  JackInTheBox,
  AttentionSeeker,
} from "react-awesome-reveal";

const prompt = Prompt({
  weight: "400",
  subsets: ["latin"],
});

const mobfile = {
  loop: true,
  autoplay: true,
  animationData: space,
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

const createfile = {
  loop: true,
  autoplay: false,
  animationData: create,
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
  const [dimensions, setDimensions] = useState({ width: 280, height: 400 });
  const [Section1Dimension, setSection1Dimension] = useState({ width: 250, height: 300 });
  const [checkmarkDimensions, setCheckmarkDimensions] = useState({
    width: 80,
    height: 80,
  });
  const [mobWithDivDimensions, setMobWithDivDimensions] = useState({
    width: 250,
    height: 170,
  });
  const [defaultCenterDimensions, setDefaultCenterDimensions] = useState({
    width: 100,
    height: 100,
  });
  const [Lottie2, setLottie2] = useState(true);
  const [Lottie1, setLottie1] = useState(true);
  const [Lottie3, setLottie3] = useState(true);
  const [Lottie4, setLottie4] = useState(true);
  const [Lottie5, setLottie5] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSection1Dimension({ width: 260, height: 300 });
        setDimensions({ width: 280, height: 400 });
        setCheckmarkDimensions({ width: 80, height: 80 });
        setMobWithDivDimensions({ width: 250, height: 170 });
        setDefaultCenterDimensions({ width: 100, height: 100 });
      } else {
        setDimensions({ width: 100, height: 150 });
        setSection1Dimension({ width: 90, height: 150 });
        setCheckmarkDimensions({ width: 20, height: 20 });
        setMobWithDivDimensions({ width: 90, height: 60 });
        setDefaultCenterDimensions({ width: 40, height: 40 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial dimensions

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="section1" >
        <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-indigo-900 h-[150vh] w-full text-white mt-20">
          <AttentionSeeker fraction={0} effect="rubberBand">
            <h1 className="text-5xl text-center mt-10 sm:text-7xl sm:px-36 sm:mt-20 font-bold flex flex-col justify-center items-center">
              Create Lightweight
              <span>Mobile App Animations</span>
            </h1>
          </AttentionSeeker>

          <Fade duration={3000}>
            <p className="mt-8 text-lg font-medium font-sans text-slate-200 lg:px-96 text-center">
              Create impressive animations for mobile apps on a friendly and
              intuitive interface. Export cross-platform files for both Android
              and iOS.
            </p>
          </Fade>

          <p className="mt-4 text-xl font-semibold text-cyan-300">
            {" "}
            Simple, Quick, Efficient{" "}
          </p>

          <button
            className={`px-20 py-7 mt-8 text-xl font-mono rounded-lg animate-bounce hover:bg-blue-500 bg-blue-700 ${prompt.className}`}
          >
            Animate Now
          </button>
          
          <JackInTheBox fraction={0}>
            <Image
              className="ml-[28%] mt-2"
              alt="Free"
              src={
                "https://cdn.svgator.com/assets/landing-pages/static/common/52474455-0-its-free-LP-01.svg"
              }
              height={200}
              width={200}
            ></Image>
          </JackInTheBox>

          <div
            id="section-mob"
            className="flex justify-center items-center gap-1 lg:gap-5 h-fit mt-20 md:mt-28 pb-10 mb-10"
          >
            <Zoom duration={1000} fraction={0}>
              <div className="w-24 h-[200px] lg:w-64 lg:h-[500px] bg-slate-400 rounded-xl pb-14">
                <p className="hidden lg:block text-center">_______________</p>
                <p className="block lg:hidden text-center">_________</p>

                <div
                  id="inner-div"
                  className="border-y-8 lg:border-y-8 border-x-4 border-x-transparent-400 rounded-3xl bg-neutral-200 h-full"
                >
                  <div
                  className="xl:mt-5"
                    onMouseEnter={(e) => {
                      setLottie1(false);
                    }}
                    onMouseLeave={(e) => {
                      setLottie1(true);
                    }}
                  >
                    <Lottie
                      options={mobfile}
                      height={Section1Dimension.height}
                      width={Section1Dimension.width}
                      isStopped={Lottie1}
                    />
                  </div>
                  <div
                    id="design"
                    className="flex justify-center mt-0 xl:mt-1"
                  >
                    <div className="rounded-lg py-1 lg:py-3 w-2/3 bg-slate-400"></div>
                  </div>
                </div>

                <p className="hidden lg:block text-center">_______________</p>
                <p className="block h-fit lg:hidden text-center">_________</p>
              </div>
            </Zoom>

            <Zoom duration={1000} fraction={0}>
              <div className="hidden xl:block w-64 h-[550px] bg-blue-800 rounded-xl pb-14">
                <p className="text-center">_______________</p>

                <div
                  id="inner-div"
                  className="border-y-8 border-x-4 border-x-transparent-300 rounded-3xl bg-blue-200 h-full"
                >
                  <div id="design" className="flex justify-end mr-5 mt-10">
                    <div className="rounded-lg  w-1/4 h-12 bg-blue-300 flex justify-center items-center">
                      <div className="rounded-lg w-[87%] h-[89%] border-2"></div>
                    </div>
                  </div>

                  <div
                    onMouseEnter={(e) => {
                      setLottie2(false);
                    }}
                    onMouseLeave={(e) => {
                      setLottie2(true);
                    }}
                    className="mt-20"
                  >
                    <Lottie
                      options={defaultCenter}
                      height={200}
                      width={200}
                      isStopped={Lottie2}
                    />
                  </div>

                  <div id="design" className="flex justify-center ">
                    <div className="rounded-lg py-3 w-2/3 bg-blue-800"></div>
                  </div>
                </div>

                <p className="text-center">_______________</p>
              </div>
            </Zoom>

            <Zoom duration={1000} fraction={0}>
              <div className="w-28 h-[250px] lg:w-72 lg:h-[600px] bg-black rounded-xl pb-14">
                <p className="hidden lg:block text-center">_______________</p>
                <p className="block lg:hidden text-center">___________</p>

                <div
                  id="inner-div"
                  onMouseEnter={(e) => {
                    setLottie3(false);
                  }}
                  onMouseLeave={(e) => {
                    setLottie3(true);
                  }}
                  className="border-y-8 border-x-4 border-x-transparent-400 rounded-3xl bg-blue-100 h-full"
                >
                  <Lottie
                    options={diffmobfile}
                    height={dimensions.height}
                    width={dimensions.width}
                    isStopped={Lottie3}
                  />
                  <Lottie
                    options={checkmarkfile}
                    height={checkmarkDimensions.height}
                    width={checkmarkDimensions.width}
                  />

                  <div id="design" className="flex justify-center">
                    <div className="rounded-lg py-1 lg:py-3 w-2/3 bg-slate-700"></div>
                  </div>
                </div>

                <p className="hidden lg:block text-center">_______________</p>
                <p className="block lg:hidden text-center">___________</p>
              </div>
            </Zoom>

            <Zoom duration={1000} fraction={0}>
              <div className="hidden xl:block w-64 h-[550px] bg-blue-900 rounded-xl pb-14">
                <p className="text-center">_______________</p>

                <div
                  id="inner-div"
                  className="border-y-8 border-x-4 border-x-transparent-400 rounded-3xl bg-blue-200 h-full"
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
                  <div
                    onMouseEnter={(e) => {
                      setLottie4(false);
                    }}
                    onMouseLeave={(e) => {
                      setLottie4(true);
                    }}
                  >
                    <Lottie
                      options={createfile}
                      height={250}
                      width={180}
                      isStopped={Lottie4}
                    />
                  </div>
                  <div id="design" className="flex justify-center mt-10">
                    <div className="rounded-lg py-3 w-2/3 bg-blue-800"></div>
                  </div>
                </div>

                <p className="text-center">_______________</p>
              </div>
            </Zoom>

            <Zoom duration={1000} fraction={0}>
              <div className="w-24 h-[200px] lg:w-64 lg:h-[500px] bg-slate-400 rounded-xl pb-14">
                <p className="hidden lg:block text-center">_______________</p>
                <p className="block lg:hidden text-center">_________</p>

                <div
                  id="inner-div"
                  className="border-y-8 border-x-4 border-x-transparent-400 rounded-3xl bg-neutral-200 h-full"
                >
                  <div
                    id="design"
                    className="flex justify-center mb-2 lg:mb-0 mt-1 lg:mt-10"
                  >
                    <div className="rounded-lg py-1 lg:py-3 w-2/3 bg-slate-400"></div>
                  </div>

                  <div
                    onMouseEnter={(e) => {
                      setLottie5(false);
                    }}
                    onMouseLeave={(e) => {
                      setLottie5(true);
                    }}
                  >
                    <Lottie
                      isStopped={Lottie5}
                      options={mobwithdivfile}
                      height={mobWithDivDimensions.height}
                      width={mobWithDivDimensions.width}
                    />
                    <Lottie
                      isStopped={Lottie5}
                      options={defaultCenter}
                      height={defaultCenterDimensions.height}
                      width={defaultCenterDimensions.width}
                    />
                  </div>
                  <div
                    id="design"
                    className="flex justify-center mt-1 lg:mt-10"
                  >
                    <div className="rounded-lg py-1 lg:py-3 w-2/3 bg-slate-400"></div>
                  </div>
                </div>

                <p className="hidden lg:block text-center">_______________</p>
                <p className="block lg:hidden text-center">_________</p>
              </div>
            </Zoom>
          </div>
        </div>

        {/* Section 2 */}
        <Section2 />

        {/* Section 3 */}
        <Section3 />

        {/* Section 4 */}
        <Section4 />

        <Footer />
      </div>
    </>
  );
}
