import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import classNames from "classnames";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ToastContextProvider } from "./context/Toast";
import { NowPlayingContextProvider } from "./context/NowPlaying";
import { PlayQueueContextProvider } from "./context/PlayQueue";
import Script from "next/script";
import { MicrophoneContextProvider } from "./context/Microphone";
import { MessageMetadataContextProvider } from "./context/MessageMetadata";
import { DeepgramContextProvider } from "./context/Deepgram";

const inter = Inter({ subsets: ["latin"] });
const favorit = localFont({
  src: "./fonts/ABCFavorit-Bold.woff2",
  variable: "--font-favorit",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aura-tts-demo.deepgram.com"),
  title: "Deepgram AI Agent",
  description: `Deepgram's AI Agent Demo shows just how fast Speech-to-Text and Text-to-Speech can be.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-dvh">
      <body
        className={`h-full dark ${classNames(
          favorit.variable,
          inter.className
        )}`}
      >
        <ToastContextProvider>
          <MicrophoneContextProvider>
            <PlayQueueContextProvider>
              <NowPlayingContextProvider>
                <MessageMetadataContextProvider>
                  <DeepgramContextProvider>{children}</DeepgramContextProvider>
                </MessageMetadataContextProvider>
              </NowPlayingContextProvider>
            </PlayQueueContextProvider>
          </MicrophoneContextProvider>
        </ToastContextProvider>
        <GoogleTagManager gtmId="" />
      </body>
    </html>
  );
}
