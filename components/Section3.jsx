import Lottie from "react-lottie";
import Location from "../public/location.json";


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
            <h1 className="text-5xl font-extrabold text-slate-700 mt-32 ">
              Test how our app animations work!
            </h1>

            <p className="text-xl text-slate-600 mt-3">
              Download this demo file and test it in your framework.
            </p>

            <div
              id="locimage"
              className="h-fit mt-20 "
            >
              <Lottie
                options={defaultlocation}
                height={300}
                width={300}
              />
            </div>

            <div id="sec3btns" className="flex gap-6 mt-10 ">
              <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 rounded-lg shadow-md text-lg font-semibold">
                Download Demo.js
              </button>

              <button className="px-8 py-3 bg-blue-300 hover:bg-blue-400 rounded-lg shadow-md text-lg font-semibold">
                Download Demo.dart
              </button>
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mt-7">
              Requirements
            </h3>
            <p className="text-md font-light text-slate-700 mt-2">
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
