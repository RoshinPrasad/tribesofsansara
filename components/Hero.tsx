import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-gray-300">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 font-serif relative">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url('https://wallpapers.com/images/featured/red-mountain-hl3tltk7i8c7swqg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            TribeSansara Camp Area
          </span>
        </h1>

        <p className="regular-16 mt-6 text-slate-600 xl:max-w-[520px] uppercase lg:font-semibold text-animate">
          Embark on every adventure with us as we guide you to witness the
          timeless beauty of nature. Our app is your passport to exploring the
          world, all in one place.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(200, 200, 255, 0.9), rgba(0, 0, 0, 0.6))",
                  }}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            417k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20 uppercase">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
            <p className="bold-20 text-white uppercase">Kodancherry</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
