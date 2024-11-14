import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaRegEnvelope,
  FaRegUser,
} from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import MyAlert from "./MyAlert";

export default function SignUp({ act }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (localStorage.getItem("token")) {
        window.location.href = "/";
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function CreateAccount(event) {
    event.preventDefault();
    const req = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: name,
        email: email,
        password: password,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      window.location.href = "/sign";
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <motion.div
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="left  p-8 sm:flex-[2.3] sm:h-[95vh] h-[70vh] bg-[radial-gradient(white,white,#c3d5fb)] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, transition: 1 }}
          className="flex w-full justify-center gap-1 items-center flex-col"
        >
          <h1 className="font-extrabold text-5xl tracking-wider my-3 text-gray-500 cursor-default">
            Sign Up
          </h1>

          <div className="icons flex justify-center mt-3">
            <div className="facbook h-12 w-12 flex justify-center items-center rounded-full mx-2  text-white bg-[#1F80E7]  hover:scale-[1.2] duration-500 ease-in-out  cursor-pointer">
              <FaFacebookF size={30} className="mt-[2px] " />
            </div>

            <div className="google h-12 w-12 flex justify-center items-center rounded-full mx-2 text-white bg-[#D44D43] hover:scale-[1.2] duration-500 ease-in-out cursor-pointer">
              <FaGoogle size={28} />
            </div>
          </div>

          <p className="font-semibold text-sm tracking-widest mt-4 text-gray-500 cursor-default">
            Or use your email address
          </p>

          <form
            onSubmit={CreateAccount}
            className="w-[100%] sm:w-[55%] m-[0px_auto] flex flex-col justify-center items-center"
          >
            <MyAlert open={open} color={"error"} setOpen={setOpen}>
              {" "}
              Email Already Exist{" "}
            </MyAlert>

            <div className="input w-full bg-[#ebebfb] h-12 rounded-3xl flex items-center mt-2 overflow-hidden">
              <div className="ml-4">
                <FaRegUser size={18} color="#575757" />
              </div>
              <input
                type="text"
                placeholder="Username"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-full border-hidden outline-none  !bg-transparent text-base ml-3 font-semibold !text-gray-500 placeholder:tracking-widest placeholder:text-gray-500"
              />
            </div>

            <div className="input w-full bg-[#ebebfb] h-12 rounded-3xl flex items-center mt-2 overflow-hidden">
              <div className="ml-4">
                <FaRegEnvelope size={18} color="#575757" />
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full border-hidden outline-none  !bg-transparent text-base ml-3 font-semibold !text-gray-500 placeholder:tracking-widest placeholder:text-gray-500"
              />
            </div>

            <div className="w-full bg-[#ebebfb] h-12 rounded-3xl flex items-center mt-2 overflow-hidden">
              <div className="ml-4">
                <FiLock size={18} color="#575757" />
              </div>
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full  h-full  border-hidden outline-none bg-transparent text-base ml-3 font-semibold text-gray-500 placeholder:tracking-widest placeholder:text-gray-500"
              />
              <div
                className="mr-4 cursor-pointer"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? (
                  <FaEye color="#575757" size={22} />
                ) : (
                  <FaEyeSlash color="#575757" size={21} />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="signs w-52 h-11 rounded-3xl   outline-none text-white border-hidden mt-5 font-extrabold text-sm tracking-widest hover:scale-110 duration-200"
            >
              SIGN UP
            </button>
          </form>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: 700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="right1 sm:p-5 flex  items-center justify-center h-[30vh]   sm:flex-[1.7]  sm:h-[95vh]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05, transition: { delay: 2.1, duration: 1 } }}
          className="sm:absolute hidden w-[40%] h-full pointer-events-none "
        >
          <span className="absolute w-[20vw] h-[20vw] top-5 left-5  bg-white rounded-full"></span>
          <span className="absolute w-[12vw] h-[12vw]  right-5 bottom-40  bg-white  rounded-full"></span>
          <span className="absolute w-[15vw] h-[15vw]  left-28 bottom-5 bg-white  rounded-full"></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, transition: 1 }}
          className="flex justify-center sm:gap-3 items-center flex-col"
        >
          <h1 className="font-extrabold text-center tracking-wider sm:text-5xl text-4xl m-5 cursor-default">
            Already a User ?
          </h1>
          <p className="text-center text-xs font-[700] tracking-widest cursor-default">
            Welcome back again <br /> login with your personal info
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.7 },
            }}
            onClick={() => {
              window.location.href = "/sign";
            }}
            className="signbutton w-52 h-11 rounded-3xl  text-white bg-transparent mt-5 font-bold text-sm border-solid border-white border tracking-widest"
          >
            LOGIN
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}
