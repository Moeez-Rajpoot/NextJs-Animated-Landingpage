import Lottie from "react-lottie";
import Location from "../public/location.json";
import { AttentionSeeker, Fade, JackInTheBox } from "react-awesome-reveal";


const defaultlocation = {
    loop: true,
    autoplay: true,
    animationData: Location,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
export default function Section3() {
  return (
    <>
     <div
          className=" bg-slate-200 h-fit pb-10 w-full text-white "
          id="section3"
        >
          <div className=" flex flex-col  items-center w-full h-fit text-white">
            <JackInTheBox duration={1000}>
            <h1 className="text-3xl text-center xl:text-5xl font-extrabold text-slate-700 mt-32 ">
              Test how our app animations work!
            </h1>
            </JackInTheBox>

            <Fade duration={1000}>
            <p className="text-md text-center px-3 xl:px-0  xl:text-xl text-slate-600 mt-3">
              Download this demo file and test it in your framework.
            </p>
            </Fade>

            <div
              id="locimage"
              className="h-fit mt-10 xl:mt-20 "
            >
              <Lottie
                options={defaultlocation}
                height={300}
                width={300}
              />
            </div>

            <div id="sec3btns" className="flex gap-3 xl:gap-6 mt-10 ">
              <AttentionSeeker effect="pulse" duration={2000}>
              <button className="px-3 xl:px-8 py-3 ml-2 xl:ml-0 bg-blue-900 hover:bg-blue-800 rounded-lg shadow-md text-sm xl:text-lg font-semibold">
                Download Demo.js
              </button>
              </AttentionSeeker>

              <AttentionSeeker effect="pulse" duration={2000}>
              <button className="px-3 xl:px-8 py-3 mr-2 xl:mr-0 bg-blue-300 hover:bg-blue-400 rounded-lg shadow-md text-sm xl:text-lg font-semibold">
                Download Demo.dart
              </button>
              </AttentionSeeker>
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mt-7">
              Requirements
            </h3>
            <p className="text-md text-center px-2 xl:px-0 font-light text-slate-700 mt-2">
              Get the player and the Web View module for Flutter or React native
            </p>

            <p className="text-slate-800 p-2">
              <span className="text-blue-600 underline text-md font-semibold p-2">
                Flutter
              </span>{" "}
              Or{" "}
              <span className="text-blue-600 underline text-md font-semibold p-2">
                {" "}
                React{" "}
              </span>
            </p>
          </div>
        </div>
      
    </>
  )
}
