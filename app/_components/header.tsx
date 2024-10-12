"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 1.8 }}
      >
      <Image
        alt="@logo"
        src="/logo.png"
        width={400}
        height={410}
        className="mt-12"
      />
      </motion.div>
      <div className="mt-9 uppercase text-center">
        <span className="font-semibold text-white">HFTpro</span> strategy is the
        most
        <br className="block lg:hidden" />{" "}
        <span className="font-semibold text-white">powerful</span> strategy in{" "}
        <br className="block lg:hidden" />
        <span className="font-semibold text-white">crypto trading</span>
      </div>
      <div className="mt-12 flex gap-7 flex-col lg:flex-row">
        <button className="bg-transparent font-semibold rounded-md border-2 py-2 px-6">
          VIP SUBSCRIPTION
        </button>
        <button className="bg-white font-semibold rounded-md border-2 py-2 px-6 text-black">
          CONTACT US
        </button>
      </div>
      {/* Text */}
      <div className="mt-[7rem] border-white/80 border-2 px-8 py-24 lg:px-28 lg:py-5 w-[300px] lg:w-[70%] text-center text-xl font-light">
        <div className="text-white/80">
          To use this indicator, you don&apos;t need to be a strong technicalist. You
          just have to activate the indicator on your chart so that the entry
          and exit
        </div>
        <span className="text-[#ffb900]"> candlesticks appear</span>.
      </div>
      {/* About */}
      <div className="w-full lg:w-[1226px] h-[403.20px] mt-[20rem]  lg:mt-[9rem] flex justify-center items-center gap-[4rem] flex-col lg:flex-row">
        <Image
          className="left-0 top-[-17px]"
          width={454}
          height={403.2}
          alt="@about"
          src="/about-image.png"
        />
        <div className="lg:ms-0 ms-3">
          <div className="left-[511px] top-[23px] text-white text-[21px] font-bold font-serif uppercase">
            Our indicator has unique conditions in the{" "}
            <br className="hidden lg:block" />
            script that create the following:
          </div>
          <div className="left-[515px] top-[113px] text-[#c3c3c3] text-lg font-normal font-serif uppercase">
            <br />
          </div>
          <div className="left-[517px] top-[104px] text-[#e6e6e6] text-lg font-normal font-serif uppercase">
            {" "}
            1. Buy and Sell signals,candle by candle.
            <br /> 2. Fast scalp in short timeframe.
            <br /> 3. Buy, Sell, Buy Zone & Warning Zone Labels.
            <br /> 4. Unique performance in Bullish market.
            <br /> 5. user controlled inputs allow the user to customize the
            settings.
            <br /> 6. Unique functionality that allows you to create trade
            alerts based <br /> on conditions.
            <br />
          </div>
        </div>
      </div>
      {/* copy write */}
      <div className="text-center text-white/60 text-sm font-light font-serif uppercase lg:mt-12 mt-[18rem] mb-10">
        © 2024 Copyright by b.t.c group{" "}
      </div>
    </div>
  );
}
