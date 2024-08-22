import React, { useState } from "react";

export default function PersonalTraining() {
  const [pricing, setPricing] = useState([
    {
      id: 1,
      title: "one day pass",
      price: "$15/per Day",
      body: "Whether you are visiting for the first time or just taking your personal fitness one day at a time, we'd like to invite you to experience all the FitQuest has to offer. You are always welcome!!",
    },
    {
      id: 2,
      title: "Monthly pass",
      price: "$90/per Day",
      body: "Whether you are visiting for the first time or just taking your personal fitness one day at a time, we'd like to invite you to experience all the FitQuest has to offer. You are always welcome!!",
    },
    {
      id: 3,
      title: "Yearly pass",
      price: "$75/per Day",
      body: "Whether you are visiting for the first time or just taking your personal fitness one day at a time, we'd like to invite you to experience all the FitQuest has to offer. You are always welcome!!",
    },
  ]);

  return (
    <div className="bg-orange-400 m-5 lg:m-20 font-mont text-white lg:p-14 rounded-lg">
      <div className="">
        <div className="uppercase">
          <h2 className="text-2xl font-semibold pl-10 pt-10">Pricing Plan</h2>
          <h1 className="text-2xl lg:text-7xl font-bold pl-10 pt-5">
            Join Today
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 shadow-2xl lg:gap-10 p-5 gap-6 lg:p-10 mt-10 mb-10 border-4 rounded-lg">
          {pricing.map((pricing) => (
            <div
              key={pricing.id}
              className="text-center p-5 border-4 hover:bg-white hover:text-orange-500 rounded-lg hover:border-orange-500"
            >
              <p className="font-bold text-3xl">{pricing.title}</p>
              <h1 className="font-bold text-2xl ">{pricing.price}</h1>
              <p className="text-sm pt-5">{pricing.body}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="py-2 px-7 ml-10 md:ml-10 rounded-full bg-white text-black hover:bg-orange-200 hover:text-gray-800 font-bold mb-10">
        Order Now
      </button>
    </div>
  );
}
