// import React from 'react'

// export default function Hero() {
//   return (
//       <div>
//           <div>
//               <img src='bg-images/fitques-tbackground-image.webp' alt=''/>
//               {/* <img src='/images/hero image.jpeg' alt='hero-logo' className='w-1/4' /> */}
//           </div>
//     </div>
//   )
// }



import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/fitques-tbackground-image.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust the height as needed
      }}
    >
      <div className="flex font-mont text-8xl pt-32 font-bold uppercase ml-20">
        <h1 className="pr-20">No Pain</h1>
        <img src="/images/hero image.jpeg" alt="hero-logo" className="w-1/4" />
        <h1 className="pl-20">No Gain</h1>
      </div>
      {/* Your content here */}
    </div>
  );
}
