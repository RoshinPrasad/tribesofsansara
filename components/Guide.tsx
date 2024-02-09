import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col bg-slate-300 pt-5">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-black lg:font-bold">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[420px]">
            <span
              className="bg-clip-text text-transparent font-serif"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url('https://wallpapers.com/images/featured/red-mountain-hl3tltk7i8c7swqg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Guide You to Easy Path
            </span>
          </h2>
          <p className="regular-16 text-gray-700 xl:max-w-[520px] uppercase font-sans text-animates">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Sansara Waterfalls</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Sector 3</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
