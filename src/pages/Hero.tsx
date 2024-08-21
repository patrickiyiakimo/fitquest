import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="font-mont pt-10 md:pt-1">
      <div className="md:flex md:ml-20 flex-row-reverse">
        <div className="">
          <img
            src="/images/undraw_indoor_bike_pwa4.png"
            alt="hero-logo"
            className="w-4/4 md:w-3/4 mt-20 md:mt-20 md:ml-16 ml-8"
          />
        </div>
        <div className="ml-9 md:ml-1 md:w-1/2 mt-28">
          <h1 className="text-center  md:ml-1 text-2xl md:text-6xl md:mr-10 font-bold">
            Reach Your Body Goal at FitQuest
          </h1>
          <p className="text-center mt-7  md:ml-10 md:w-96 text-xl">
            We believe that the potential to achieve desired health and wellness
            goals lies within everyone.
          </p>
          <button className="ml-20 py-2 px-20 bg-orange-600 md:ml-44 md:py-2 md:px-7 rounded-full text-white mt-10 hover:bg-orange-400">
            Join Now
          </button>
          <div>
            <div className="stats shadow mt-20 md:mt-10 hidden md:flex md:mr-1">
              <div className="stat place-items-center">
                <div className="stat-title">Expert Trainers</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">
                  From January 1st to February 1st
                </div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Members Joined</div>
                <div className="stat-value text-secondary">4,200</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop - Image on the right */}
        {/* <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src="/images/undraw_indoor_bike_pwa4.png"
            alt="hero-logo"
            className=" md:w-4/4 mt-10 md:mt-5"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
