import React, { useEffect, useState } from 'react';
import { FiAperture, FiLock } from 'react-icons/fi';
import {
  FaGoogle,
  FaFacebookF,
  FaRegEnvelope,
  FaEyeSlash,
  FaEye,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';
import MyAlert from './MyAlert';

export default function Login({ act }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (localStorage.getItem('token')) {
        window.location.href = '/';
      }
    }, 1000);
    console.log(window.matchMedia('(max-width: 600px)').matches);
    return () => clearInterval(interval);
  }, []);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = React.useState(false);

  async function loginAccount(event) {
    event.preventDefault();
    const req = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: pass }),
    });
    const data = await req.json();
    if (data.status === 'ok') {
      localStorage.setItem('token', data.token);
      if (localStorage.getItem('token')) {
        window.location.href = '/';
      }
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <motion.div
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        key="a"
        transition={{ delay: 0.15, duration: 0.75, type: 'tween' }}
        exit={{ x: -700, transition: { duration: 1 } }}
        className="right1 p-5 flex  items-center justify-center   sm:flex-[1.7] sm:h-[95vh] "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center items-center text-center flex-col text-white left-3 top-3 text-xs font-semibold absolute cursor-pointer"
        >
          <img
            src="https://i.ibb.co/Vj3N9Gt/Screenshot-2023-09-26-181029-3.png"
            className="h-7 w-8"
            alt=""
          />
          <p className="mt-1 tracking-wide">Med-Check</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute w-[40%] h-full pointer-events-none opacity-5"
        >
          <span className="absolute w-[20vw] h-[20vw] top-5 left-5  bg-white rounded-full"></span>
          <span className="absolute w-[12vw] h-[12vw]  right-5 bottom-40  bg-white  rounded-full"></span>
          <span className="absolute w-[15vw] h-[15vw]  left-28 bottom-5 bg-white  rounded-full"></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, transition: 1 }}
          className="flex justify-center gap-3 items-center flex-col"
        >
          <h1 className="font-extrabold text-center tracking-wider sm:text-5xl text-4xl m-5 cursor-default">
            New Here ?
          </h1>
          <p className="text-center text-xs font-[700] tracking-widest cursor-default">
            To join with us please <br /> signup with your personal info
          </p>
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
            onClick={act.setNotActive}
            className="signbutton w-52 h-11 rounded-3xl  text-white bg-transparent mt-5 font-bold text-sm border-solid border-white border tracking-widest"
          >
            SIGN UP
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 700 }}
        key="b"
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.75, type: 'tween' }}
        exit={{ x: 700, transition: { duration: 1 } }}
        className="left  p-8 sm:flex-[2.3] sm:h-[95vh] flex-1   bg-[radial-gradient(white,white,#c3d5fb)] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col justify-center items-center text-center  w-full gap-1"
        >
          <h1 className="font-extrabold text-5xl tracking-wider my-3 text-gray-500 cursor-default">
            Sign In
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
            onSubmit={loginAccount}
            className="sm:w-[55%] w-[100%] m-[0px_auto] flex flex-col justify-center items-center"
          >
            <MyAlert open={open} color={'error'} setOpen={setOpen}>
              {' '}
              Account Not Found{' '}
            </MyAlert>

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
                className="w-full h-full border-hidden outline-none  !bg-transparent text-base mx-3 font-semibold !text-gray-500 placeholder:tracking-widest placeholder:text-gray-500"
              />
            </div>
            <div className="w-full bg-[#ebebfb] h-12 rounded-3xl flex items-center mt-2 overflow-hidden">
              <div className="ml-4">
                <FiLock size={18} color="#575757" />
              </div>
              <input
                type={visible ? 'password' : 'text'}
                name="password"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPass(e.target.value);
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
                  <FaEyeSlash color="#575757" size={22} />
                ) : (
                  <FaEye color="#575757" size={21} />
                )}
              </div>
            </div>

            <h1 className=" text-gray-500 my-2 font-semibold tracking-wider w-auto cursor-pointer">
              Forgot your password ?
            </h1>
            <button
              type="submit"
              className="signs w-52 h-11 rounded-3xl   outline-none text-white border-hidden mt-5 font-extrabold text-sm tracking-widest hover:scale-110 duration-200"
            >
              SIGN IN
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Alers */}
    </>
  );
}
