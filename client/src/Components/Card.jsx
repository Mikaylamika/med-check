import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetQuest, resetResult } from '../redux/reducers';

export default function Card({ info }) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function Restart() {
    dispatch(resetResult());
    dispatch(resetQuest());
  }
  console.log(info);

  return (
    <div
      key={info.id}
      className="card flex flex-col items-center justify-evenly sm:w-52 w-36 max-h-[200px]  p-1"
    >
      <h2 className="text-xl tracking-tighter font-bold m-2 text-center ">
        cardio-respiratoire
      </h2>
      <hr />
      <div className="mt-2 w-full tracking-tight noScroll max-h-20 overflow-auto flex justify-center flex-wrap">
        {' '}
        <p className="text-center">{info.title}</p>
      </div>
      <button
        onClick={() => {
          Navigate('/quiz');
          localStorage.setItem('QuestId', info.id);
          Restart();
        }}
        className="signbutton1 border-2 rounded-md border-[#4D88EA] font-bold mt-2 hover:border-white"
      >
        Start Quiz
      </button>
    </div>
  );
}
