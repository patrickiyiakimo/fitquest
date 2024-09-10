import React from "react";

export default function Membership() {
  return (
    <div className="font-mont">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-6xl text-center font-bold mt-40 mb-32">
          Register Here
        </h1>
      </div>
      <div className="flex ml-40">
        <div>
          <h2 className="font-bold text-4xl mb-10">Contact Information</h2>
          <p className="mb-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse
            laborum assumenda fugit mollitia delectus minus perspiciatis dicta
            minima atque veniam, vitae cupiditate nemo tempora reiciendis magnam
            ducimus nisi rem.
          </p>
          <div>
            <div className="grid grid-cols-2 gap-10">
              <span>
                <p className="font-semibold text-xl pb-2">Our Address</p>
                <p>6391 Elgin St.Celina</p>
                <p>Delaware 10299</p>
              </span>

              <span>
                <p className="font-semibold text-xl pb-2">Phone Number</p>
                <p>+(163)-5565-0697</p>
                <p>+(578)-587-89168</p>
              </span>
              <span>
                <p className="font-semibold text-xl pb-2">Email Address</p>
                <p>info@gmail.com</p>
                <p>demo@gmail.com</p>
              </span>
              <span>
                <p className="font-semibold text-xl pb-2">Working Time</p>
                <p>Work Time: Sun-Fri</p>
                <p>10AM - 6PM</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 w-96 shadow-2xl ml-10 mr-40">
            <h2 className="font-bold text-3xl pl-10 mb-10 mt-14 whitespace-nowrap">
              Book An Appointment
            </h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className=" border-2 py-3 ml-7 mb-5 px-4 w-80 rounded-md "
              />
              <input
                type="text"
                placeholder="Your Email"
                className=" border-2 py-3 ml-7 mb-5 px-4 w-80 rounded-md "
              />
              <input
                type="text"
                placeholder="Select Subject"
                className=" border-2 py-3 ml-7 mb-5 px-4 w-80 rounded-md "
              />
              <textarea
                placeholder="Send us a message"
                className=" border-2 py-3 ml-7 mb-5 px-4 w-80 rounded-md "
              ></textarea>
              <button className=" bg-orange-600 hover:bg-orange-500 text-white  w-80 py-3 m-4 ml-7 rounded-md">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
