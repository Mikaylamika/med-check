import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import {
  FiAlignJustify,
  FiEdit2,
  FiHome,
  FiLogOut,
  FiUser,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="h-16 w-full bg-[#2F7AC1] shadow-xl text-white grid sm:grid-cols-[2fr_8fr_2fr] grid-cols-[2fr_3fr]">
        {/* Logo */}
        <div className="sm:flex items-center self-center justify-center justify-self-center">
          <div
            onClick={() => {
              Navigate('/');
            }}
            className="flex justify-center items-center"
          >
            <img
              className="h-14 hover:scale-110 duration-500 hover:bg-[#2966a0] p-1 px-3 rounded-xl cursor-pointer"
              src="https://i.ibb.co/TbTRMqK/Screenshot-2023-09-26-181029-2.png"
              alt="Screenshot-2023-09-26-181029-2"
              border="0"
            />
          </div>
        </div>

        {/* Bars */}
        <div className="sm:flex items-center px-5 hidden">
          <ul className="flex justify-between">
            <li
              onClick={() => {
                Navigate('/');
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 hover:bg-[rgba(0,0,0,0.2)] cursor-pointer rounded-xl duration-300 "
            >
              {' '}
              <FiHome /> <h1 className="text-lg font-semibold">Home</h1>
            </li>

            {/* Quizzes DropDown */}
            <li className=" ">
              <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="text-lg font-semibold flex items-center justify-center gap-1 px-4 py-2 hover:bg-[rgba(0,0,0,0.2)] cursor-pointer rounded-xl duration-300"
              >
                <FiEdit2 />
                Quizzes
              </button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    Navigate('/quizzes');
                  }}
                  className='w-36'
                >
                  Quizzes
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    Navigate('/quiz');
                  }}
                >
                  Last Quiz
                </MenuItem>
              </Menu>

              {/* <h1
                  onClick={() => {
                    Navigate('/quizzes');
                  }}
                  className="p-2 w-full hover:bg-[rgba(0,0,0,.2)] rounded-xl"
                >
                  Quizzes
                </h1>
                <button
                  onClick={() => {
                    Navigate('/quiz');
                  }}
                  className="p-2 w-full hover:bg-[rgba(0,0,0,.2)] rounded-xl flex justify-start"
                >
                  Last Quiz
                </button> */}
            </li>

            <li
              onClick={() => {
                Navigate('/profile');
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 hover:bg-[rgba(0,0,0,0.2)] cursor-pointer rounded-xl duration-300 "
            >
              {' '}
              <FiUser /> <h1 className="text-lg font-semibold">Profile</h1>
            </li>
          </ul>
        </div>

        <div className="dropdown-button1 cursor-pointer hover:bg-[rgba(0,0,0,0.2)] sm:hidden self-center mx-3 p-1 m-1 rounded-lg justify-self-end  ">
          <h1 className="text-4xl ">
            <FiAlignJustify />
          </h1>
          <div className="dropdown-content1 hidden z-20  absolute w-44 top-[48px] right-0 rounded-xl shadow-md p-2  flex-col font-semibold text-black bg-white">
            <h1
              onClick={() => {
                Navigate('/');
              }}
              className="p-2 w-full hover:bg-[rgba(0,0,0,.2)] rounded-xl flex items-center   gap-1"
            >
              <FiHome /> Home
            </h1>
            <h1
              onClick={() => {
                Navigate('/profile');
              }}
              className="p-2 w-full hover:bg-[rgba(0,0,0,.2)] rounded-xl flex items-center   gap-1"
            >
              {' '}
              <FiUser /> Profile
            </h1>
            <h1
              onClick={() => {
                localStorage.removeItem('token');
                Navigate('/sign');
              }}
              className="p-2 w-full hover:bg-[rgba(0,0,0,.2)] rounded-xl flex items-center   gap-1"
            >
              <FiLogOut className="text-red-500" /> Logout
            </h1>
          </div>
        </div>

        {/* Logout */}
        <div className="sm:flex justify-center hidden  items-center">
          <button
            onClick={() => {
              localStorage.removeItem('token');
              Navigate('/sign');
            }}
            className="signbutton w-32 font-extrabold border border-white rounded-xl flex justify-center items-center gap-2 "
          >
            Logout <FiLogOut />
          </button>
        </div>
      </div>
    </>
  );
}
