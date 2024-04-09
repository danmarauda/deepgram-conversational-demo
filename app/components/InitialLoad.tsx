import { ExclamationIcon } from "./icons/ExclamationIcon";
import { Headphones } from "./Headphones";
import { isBrowser, isIOS } from "react-device-detect";
import Image from "next/image";

export const InitialLoad = ({ fn }: { fn: () => void }) => {
  return (
    <>
      <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10 p-3 mb-1/2">
        <button
          onClick={() => fn()}
          type="button"
          className="relative block w-full glass p-6 sm:p-8 lg:p-12 rounded-xl"
        >
          <h2 className="font-favorit mt-2 block font-bold text-xl text-gray-100">
            Welcome
            <br />
          
          </h2>
          <div className="flex justify-center mt-4">
          
          </div>
          <span className="mt-4 block font-semibold">
            <div className="bg-white text-black rounded px-10 py-3 font-semibold sm:w-fit sm:mx-auto">
              {isBrowser ? "Click" : "Tap"} here to start
            </div>
          </span>
        </button>
      </div>
    </>
  );
};
