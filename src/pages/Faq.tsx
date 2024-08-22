import React from 'react'

export default function Faq() {
  return (
      <div className='font-mont'>
          <div>
              <h1 className='text-center text-xl md:text-4xl lg:text-6xl font-bold mt-20 mb-20'>Frequently Asked Questions</h1>
          </div>
      <div className="collapse collapse-plus  ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do i get started on FitQuest Platform?
        </div>
        <div className="collapse-content">
          <p>
            Getting started on FitQuest is simple! First, sign up for an account
            by providing your basic details. Once registered, you can explore
            our available workout programs, choose the one that aligns with your
            goals, and start your fitness journey immediately.
          </p>
        </div>
        <hr className="border-orange-300 border-t-2" />
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What type of workout are available on the platform?
        </div>
        <div className="collapse-content">
          <p>
            FitQuest offers a wide variety of workouts to suit all fitness
            levels and preferences. These include strength training, cardio,
            HIIT, yoga, pilates, and more.
          </p>
        </div>
        <hr className="border-orange-300 border-t-2" />
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How does the subscription circle work?
        </div>
        <div className="collapse-content">
          <p>
            Our subscription cycle is flexible to fit your needs. You can choose
            from monthly, quarterly, or yearly subscriptions. Your subscription
            will automatically renew at the end of each cycle unless you choose
            to cancel.
          </p>
        </div>
        <hr className="border-orange-300 border-t-2" />
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Is there a personalised nutrition guide available?
        </div>
        <div className="collapse-content">
          <p>
            Yes, FitQuest provides a personalized nutrition guide tailored to
            your fitness goals and dietary preferences. Once you sign up, you'll
            have the option to input your dietary needs, and our system will
            generate a customized meal plan to complement your workout routine.
          </p>
        </div>
        <hr className="border-orange-300 border-t-2" />
      </div>
    </div>
  );
}
