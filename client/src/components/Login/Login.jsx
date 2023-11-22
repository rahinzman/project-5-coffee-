import { ErrorMessage, Field, Form, Formik } from "formik";
import GoogleBtn from "../GoogleBtn";
import BackBtn from "../BackBtn";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src="eclips2.svg"
        className="absolute hidden md:hidden lg:-mt-[114rem] lg:block"
      />
      <img
        src="eclips4.svg"
        className="absolute hidden md:hidden lg:mt-[24rem] lg:block"
      />
      <div className="relative mt-40 h-[35rem] rounded-3xl bg-white p-10 px-[3rem] text-center md:w-[40rem] md:px-[5rem] lg:px-[10rem]">
        <div className="md:-ml-[5rem] -ml-[2rem] text-start">
          <BackBtn />
        </div>

        <h1 className="py-10 text-6xl font-bold">Login</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
        >
          <Form className="flex flex-grow flex-col gap-5">
            <div className="flex flex-col">
              <Field
                type="text"
                className="border-orange h-[40px] rounded-xl border-2 border-solid p-4"
                name="name"
                placeholder="Enter Your Name"
              />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col">
              <Field
                type="text"
                className="border-orange h-[40px] rounded-xl border-2 border-solid p-4"
                name="email"
                placeholder="Enter Your Email"
              />
              <div className="text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <GoogleBtn text={"Login With Google"} />
            <div className=" flex justify-center">
              <button className="bg-dark-yellow w-[120px] rounded-3xl border-2 border-solid bg-black px-4 py-2 text-xl font-medium text-white duration-200 ease-out hover:bg-white hover:text-black hover:ease-in">
                Login
              </button>
            </div>
            <p className="cursor-pointer font-bold hover:underline">
              Forgot Password
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
