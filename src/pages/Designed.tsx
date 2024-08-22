import React from "react";

const Designed: React.FC = () => {
  return (
    <div className="font-mont mb-40">
      <div className="lg:flex">
        <div>
          <img
            src="/images/undraw_personal_training_0dqn.png"
            alt="working-out"
            className="md:w-4/4  lg:ml-40 lg:pr-40 rounded-l-full"
          />
        </div>
        <div className="md:ml-20 lg:ml-1">
          <h2 className="font-semibold md:mr-80 text-center lg:mr-80 uppercase mt-10 lg:text-xl">
            Are You Looking for a mentor?
          </h2>
          <h1 className="font-bold mt-3 mb-10 text-center text-xl md:mr-80 md:text-3xl lg:mr-80 lg:text-4xl uppercase">
            For you
          </h1>
          <p className="ml-10 md:mr-40">
            Our team of certified and experienced trainers is dedicated to
            helping you achieve your fitness goals. Whether you are looking to
            build muscle, lose weight, or improve overall health, our trainers
            will create a personalized plan to guide you every step of the way.
          </p>
          <button className="ml-20 py-2 px-20 bg-orange-600 whitespace-nowrap md:py-4 md:px-10 lg:ml-40 lg:py-2 lg:px-7 rounded-full text-white mt-10 hover:bg-orange-400">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designed;
