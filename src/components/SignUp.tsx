import React from "react";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignUp() {
 const validationSchema = Yup.object({
   name: Yup.string().required("Name is required"),
   email: Yup.string()
     .email("Invalid email address")
     .required("Email is required"),
   password: Yup.string()
     .min(6, "Password must be at least 6 characters long")
     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
     .matches(
       /[!@#$%^&*(),.?":{}|<>]/,
       "Password must contain at least one special character"
     )
     .required("Password is required"),
   confirmPassword: Yup.string()
     .oneOf([Yup.ref("password")], "Passwords must match")
     .required("Confirm password is required"),
 });


  const handleSubmit = () => {
    console.log("Form data");
    // Add your form submission logic here
  };

  return (
    <div className="font-mont lg:flex mt-32">
      <div>
        <figure>
          <img
            src="/images/undraw_Developer_activity_re_39tg.png"
            alt="signup logo"
            className="w-2/4 md:ml-52 lg:mt-20 mb-10 ml-24 mt-40 rounded-t-full"
          />
        </figure>
      </div>
      <div>
        <a className=" text-2xl font-bold ml-12 md:ml-52 md:text-3xl lg:ml-12 ">
          <button>
            <img src="/images/logoipsum-248.svg" alt="logo" />
          </button>
          Create an Account
        </a>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormikForm>
              <legend className="pb-3 font-semibold text-2xl text-center lg:mr-20">
                Sign Up
              </legend>
              <div className="ml-16 md:ml-52 lg:ml-10 lg:mr-20">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-72 md:w-96 h-12 mt-7 block pl-2 border-2 border-black"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-72 md:w-96 h-12 mt-7 pl-2 border-2 border-black"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block w-72 md:w-96 mt-7 h-12 pl-2 border-2 border-black"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="block w-72 md:w-96 mt-7 h-12 pl-2 border-2 border-black"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="whitespace-nowrap ml-16 md:ml-52 lg:ml-10 mt-7 px-28 md:px-40 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
              >
                Sign Up
              </button>
            </FormikForm>
          )}
        </Formik>
        <p className="ml-20 md:ml-72 lg:ml-16 pt-7">
          Already have an account? <span className="text-blue-800 font-semibold cursor-pointer ml-5 lg:pl-20"><a href="/login">LogIn</a></span>
        </p>
      </div>
    </div>
  );
}
