import React from "react";
import SimpleSlider from "../pages/SimpleSlider";

export default function About() {
  return (
    <div className="font-mont">
      <div>
        <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-40 mb-10">
          About FitQuest
        </h3>
        <p className="lg:ml-40 lg:mr-40 text-center m-10 md:m-10">
          At FitQuest, we believe that everyone has the potential to achieve
          their desired health and wellness goals. Our mission is to empower
          individuals to reach their body goals through personalized workout
          plans, expert guidance, and a supportive community.
        </p>
      </div>
      <div className=" lg:flex lg:mt-32 mr-20 ">
        <div>
          <img
            src="/images/undraw_Mindfulness_8gqa.png"
            alt="about-us-logo"
            className="w-2/3 ml-20  md:w-3/4 mt-20 md:mt-20 md:ml-32  rounded-t-full"
          />
        </div>
        <div>
          <ul>
            <li className="mb-10 ml-10 mt-10">
              <span className="font-bold text-xl">Personalized Workouts:</span>{" "}
              We understand that everyone’s fitness journey is unique. That’s
              why we offer tailored workout programs designed to meet your
              specific needs and goals, whether you’re a beginner or a seasoned
              athlete.
            </li>
            <li className="mb-10 ml-10">
              <span className="font-bold text-xl"> Expert Guidance:</span> Our
              team of certified trainers and fitness experts are here to guide
              you every step of the way. They bring years of experience and a
              deep passion for helping you achieve your best self.
            </li>
            <li className="mb-10 ml-10">
              <span className="font-bold text-xl"> Supportive Community:</span>{" "}
              At FitQuest, you’re not alone. Join a community of like-minded
              individuals who are all on their own fitness journeys. Share your
              successes, get motivated, and stay inspired.
            </li>
            <li className="mb-10 ml-10">
              <span className="font-bold text-xl"> Holistic Approach:</span> We
              focus not just on physical fitness but also on overall well-being.
              Our approach includes nutrition advice, mental health support, and
              recovery strategies to ensure a balanced and sustainable fitness
              journey.
            </li>
          </ul>
        </div>
      </div>
      <section>
        <h1 className="text-2xl md:text-3xl lg:text-6xl mt-10 text-center font-bold">
          Meet Our Trainers
        </h1>
      </section>
      <SimpleSlider />
    </div>
  );
}
