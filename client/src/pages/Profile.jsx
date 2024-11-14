import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { FiEdit2, FiLock, FiSettings, FiUnlock } from 'react-icons/fi';
import { decodeToken } from 'react-jwt';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function Profile() {
  const { user, email } = decodeToken(localStorage.getItem('token'));
  const [visible, setVisible] = useState(true);

  return (
    <div className="w-full min-h-screen flex flex-col gap-3">
      <Navbar />

      <div className="flex justify-center items-center h-full">
        <div className="lg:w-[60%] sm:w-[80%] w-full  shadow-[0px_0px_20px_#d8d8d8] p-5 rounded-xl gap-2 text-black flex flex-col">
          <div className="w-full text-3xl font-bold mb-3">My Profile</div>

          <div className="md:grid md:grid-cols-[2fr_1fr] flex flex-col gap-3">
            {/* AboutMe */}
            <div className="flex flex-col w-full border-2 rounded-xl px-4 py-2 gap-2">
              <div className="grid grid-cols-[4fr_1fr] items-center mb-5">
                <h1 className="font-extrabold text-xl ">About Me</h1>
                <button className="justify-self-end cursot-pointer flex items-center px-3 h-0 py-4 rounded-lg text-white bg-blue-500 hover:bg-blue-400 duration-200">
                  <FiEdit2 className="mr-1" />
                  Edit
                </button>
              </div>
              <h1 className="font-bold ">
                Username <span className="ml-5   font-normal">{user}</span>
              </h1>
              <h1 className="font-bold ">
                Email <span className="ml-[54px]  font-normal">{email}</span>
              </h1>
              <h1 className="font-bold ">
                Country <span className="ml-9  font-normal">Algeria</span>
              </h1>
            </div>
            {/* Avatar */}
            <div className="flex flex-col w-full border-2 rounded-xl px-4 py-2 ">
              <div className="grid grid-cols-[4fr_1fr] items-center mb-2">
                <h1 className="font-extrabold text-xl ">Avatar</h1>
                <button className="justify-self-end cursot-pointer flex items-center px-3 h-0 py-4 rounded-lg text-white bg-blue-500 hover:bg-blue-400 duration-200">
                  <FiEdit2 className="mr-1" />
                  Edit
                </button>
              </div>

              <div className="w-full flex justify-center items-center">
                <div className="sm:h-full h-52 sm:w-[70%] w-[50%] rounded-full overflow-hidden">
                  <img
                    src="https://i.ibb.co/7S4Yw0p/computer-icons-professional-avatar-avatar-118b81d324d2f49525090d63cad27c89.png"
                    alt="computer-icons-professional-avatar-avatar-118b81d324d2f49525090d63cad27c89"
                    border="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="flex flex-col w-full border-2 rounded-xl px-4 py-2 gap-2">
            <div className="grid grid-cols-[4fr_1fr] items-center mb-2">
              <h1 className="font-extrabold text-xl ">Account Settings</h1>
              <h1 className="justify-self-end flex items-center justify-center pl-[3px] py-[3px] rounded-lg  hover:bg-gray-900 hover:text-white duration-200">
                <FiSettings className="text-2xl mr-1" />
              </h1>
            </div>

            <div className="w-full bg-[#ebebfb] h-12 rounded-3xl flex items-center mt-2 overflow-hidden">
              <div className="ml-4">
                <FiLock size={18} color="#575757" />
              </div>
              <input
                type={visible ? 'password' : 'text'}
                name="OldPassword"
                placeholder="Current Password"
                required
                disabled
                //   onChange={(e)=>{setPass(e.target.value)}}
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

            <div className="w-full bg-[#ebebfb] h-12 rounded-3xl flex items-center mt-2 overflow-hidden">
              <div className="ml-4">
                <FiUnlock size={18} color="#575757" />
              </div>
              <input
                type={'text'}
                name="NewPassword"
                placeholder="New Password"
                required
                disabled
                //   onChange={(e)=>{setPass(e.target.value)}}
                className="w-full  h-full  border-hidden outline-none bg-transparent text-base ml-3 font-semibold text-gray-500 placeholder:tracking-widest placeholder:text-gray-500"
              />
              <div className="mr-4 cursor-pointer">
                <FaEye color="#575757" size={21} />
              </div>
            </div>

            <div className="w-full flex justify-center items-center my-2">
              <button
                disabled
                className="cursor-not-allowed bg-[#4284F2] rounded-xl py-2 px-6 text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
