// import { IoLocationOutline } from "react-icons/io5";
// import { IoMdCall } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import { FaRegClock } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";


// export default function Membership() {
//   return (
//     <div className="font-mont">
//       <div>
//         <h1 className="text-xl md:text-2xl lg:text-6xl text-center mt-32 font-bold md:mt-40 mb-14 md:mb-32">
//           Register Here
//         </h1>
//       </div>
//       <div className="lg:flex md:ml-40">
//         <div className="ml-5">
//           <h2 className="font-bold text-xl lg:text-4xl mb-3   lg:mb-10">
//             Contact Information
//           </h2>
//           <p className="mb-20">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse
//             laborum assumenda fugit mollitia delectus minus perspiciatis dicta
//             minima atque veniam, vitae cupiditate nemo tempora reiciendis magnam
//             ducimus nisi rem.
//           </p>
//           <div>
//             <div className="grid grid-cols-2 sm:ml-32 md:ml-0 mb-10 gap-10">
//               <span>
//                 <IoLocationOutline className="w-20 h-20" />
//                 <p className="font-semibold text-xl pb-2">Our Address</p>
//                 <p>6391 Elgin St.Celina</p>
//                 <p>Delaware 10299</p>
//               </span>

//               <span>
//                 <IoMdCall className="w-20 h-20" />
//                 <p className="font-semibold text-xl pb-2">Phone Number</p>
//                 <p>+(163)-5565-0697</p>
//                 <p>+(578)-587-89168</p>
//               </span>
//               <span>
//                 <MdEmail className="w-20 h-20" />
//                 <p className="font-semibold text-xl pb-2">Email Address</p>
//                 <p>info@gmail.com</p>
//                 <p>demo@gmail.com</p>
//               </span>
//               <span>
//                 <FaRegClock className="w-20 h-20" />
//                 <p className="font-semibold text-xl pb-2">Working Time</p>
//                 <p>Work Time: Sun-Fri</p>
//                 <p>10AM - 6PM</p>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div>
//           {/* <div className="card  ml-5 mr-5 bg-base-100 md:mr-40 lg:w-96 shadow-2xl lg:ml-10 lg:mr-40"> */}
//           <div className="lg:mr-10">
//             <h2 className="font-bold ml-20 text-xl lg:text-3xl lg:pl-10 mb-10 mt-14 whitespace-nowrap">
//               Book An Appointment
//             </h2>
//           </div>
//           <form>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className=" border-2 py-3 w-72 ml-10 sm:w-96 sm:ml-32 md:ml-14 md:w-96  lg:ml-32 mb-8 px-4 lg:w-80 rounded-md "
//             />
//             <input
//               type="text"
//               placeholder="Your Email"
//               className=" border-2 py-3 w-72 ml-10 md:ml-14 sm:w-96 sm:ml-32 md:w-96  lg:ml-32 mb-8 px-4 lg:w-80 rounded-md "
//             />
//             <input
//               type="text"
//               placeholder="Select Subject"
//               className=" border-2 py-3 w-72 ml-10 md:ml-14 md:w-96 sm:w-96 sm:ml-32 lg:ml-32 mb-8 px-4 lg:w-80 rounded-md "
//             />
//             <textarea
//               placeholder="Send us a message"
//               className=" border-2 py-3 w-72 ml-10 md:ml-14 md:w-96 sm:w-96 sm:ml-32 lg:ml-32 mb-8 px-4 lg:w-80 rounded-md "
//             ></textarea>
//             <button className="w-72 ml-10 md:ml-14 sm:w-96 sm:ml-32 md:w-96 bg-orange-600 hover:bg-orange-500 text-white mb-20 lg:w-80 py-3 m-4 lg:ml-32 rounded-md">
//               Book Appointment
//             </button>
//           </form>
//           {/* </div> */}
//         </div>
//       </div>
//       <div className="lg:ml-40">
//         <p className="font-semibold ml-5 py-10 text-xl">
//           Follow us on our social media handles:
//           <div className="flex gap-10 lg:gap-14 mt-10">
//             <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800 ">
//               <FaFacebookF />
//             </p>
//             <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800">
//               <FaTwitter />
//             </p>
//             <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800">
//               <FaInstagram />
//             </p>
//             <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800">
//               <FaLinkedin />
//             </p>
//           </div>
//         </p>
//       </div>
//     </div>
//   );
// }





import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  Formik,
  Field,
  Form as FormikForm,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Membership() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Form submission handler
  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true);
    // Simulate form submission with a 2-second delay
    setTimeout(() => {
      console.log("Form submitted with values:", values);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="font-mont">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-6xl text-center mt-32 font-bold md:mt-40 mb-14 md:mb-32">
          Register Here
        </h1>
      </div>
      <div className="lg:flex md:ml-40">
        <div className="ml-5">
          <h2 className="font-bold text-xl lg:text-4xl mb-3 lg:mb-10">
            Contact Information
          </h2>
          <p className="mb-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse
            laborum assumenda fugit mollitia delectus minus perspiciatis dicta
            minima atque veniam, vitae cupiditate nemo tempora reiciendis magnam
            ducimus nisi rem.
          </p>
          <div className="grid grid-cols-2 sm:ml-32 md:ml-0 mb-10 gap-10">
            <span>
              <IoLocationOutline className="w-20 h-20" />
              <p className="font-semibold text-xl pb-2">Our Address</p>
              <p>6391 Elgin St.Celina</p>
              <p>Delaware 10299</p>
            </span>
            <span>
              <IoMdCall className="w-20 h-20" />
              <p className="font-semibold text-xl pb-2">Phone Number</p>
              <p>+(163)-5565-0697</p>
              <p>+(578)-587-89168</p>
            </span>
            <span>
              <MdEmail className="w-20 h-20" />
              <p className="font-semibold text-xl pb-2">Email Address</p>
              <p>info@gmail.com</p>
              <p>demo@gmail.com</p>
            </span>
            <span>
              <FaRegClock className="w-20 h-20" />
              <p className="font-semibold text-xl pb-2">Working Time</p>
              <p>Work Time: Sun-Fri</p>
              <p>10AM - 6PM</p>
            </span>
          </div>
        </div>

        <div className="lg:mr-10">
          <h2 className="font-bold ml-20 text-xl lg:text-3xl lg:pl-10 mb-10 mt-14 whitespace-nowrap">
            Book An Appointment
          </h2>

          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <FormikForm>
                <div className="ml-10 sm:ml-32 md:ml-14 lg:ml-32">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border-2 py-3 w-72 sm:w-96 md:w-96 lg:w-80 mb-5 px-4 rounded-md"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 mb-8 ml-5"
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border-2 py-3 w-72 sm:w-96 md:w-96 lg:w-80 mb-5 px-4 rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mb-8 ml-5"
                  />
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Select Subject"
                    className="border-2 py-3 w-72 sm:w-96 md:w-96 lg:w-80 mb-5 px-4 rounded-md"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 mb-8 ml-5"
                  />
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Send us a message"
                    className="border-2 py-3 w-72 sm:w-96 md:w-96 lg:w-80 mb-5 px-4 rounded-md"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 mb-8 ml-5"
                  />
                </div>

                <div className="ml-10 sm:ml-32 md:ml-14 lg:ml-32">
                  <button
                    type="submit"
                    className="w-72 sm:w-96 md:w-96 lg:w-80 bg-orange-600 hover:bg-orange-500 text-white py-3 m-4 rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                  </button>
                </div>
              </FormikForm>
            )}
          </Formik>
        </div>
      </div>

      <div className="lg:ml-40">
        <p className="font-semibold ml-5 py-10 text-xl">
          Follow us on our social media handles:
          <div className="flex gap-10 lg:gap-14 mt-10">
            <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800">
              <FaFacebookF />
            </p>
            <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800">
              <FaTwitter />
            </p>
            <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800">
              <FaInstagram />
            </p>
            <p className="px-5 py-5 rounded-md bg-gray-400 hover:bg-gray-300 cursor-pointer text-orange-800">
              <FaLinkedin />
            </p>
          </div>
        </p>
      </div>
    </div>
  );
}
