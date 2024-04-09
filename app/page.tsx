"use client";

import Conversation from "./components/Conversation";
import Image from "next/image";

export const runtime = "edge";
import * as FullStory from "@fullstory/browser";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    FullStory.init({ orgId: "5HWAN" });
  }, []);

  return (
    <>
      <div className="h-full overflow-hidden">
        {/* height 4rem */}
        <div className="bg-gradient-to-b from-black/50 to-black/10 backdrop-blur-[2px] h-[4rem] flex items-center">
          <header className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between">
            <div>
            </div>
            <div className="flex items-center gap-6 text-sm">
             

              <span className="gradient-shadow bg-gradient-to-r to-[#13EF93]/50 from-[#149AFB]/80 rounded">
                <a
                  href=""
                  target="_blank"
                  className="hidden text-xs md:inline-block bg-black text-white rounded m-px px-8 py-2 font-semibold"
                >
                  Login
                </a>
              </span>
            </div>
          </header>
        </div>

        {/* height 100% minus 8rem */}
        <main className="mx-auto max-w-7xl  px-4 md:px-6 lg:px-8 h-[calc(100%-8rem)]">
          <Conversation />
        </main>

      </div>
    </>
  );
}
