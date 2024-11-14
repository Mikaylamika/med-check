import React, { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import * as Actions from '../redux/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowLeft, FiArrowRight, FiCheck, FiX } from 'react-icons/fi';
import { resetQuest, resetResult } from '../redux/reducers';
import Navbar from '../Components/Navbar';

export default function Quiz() {
  const dispatch = useDispatch();

  /** Start Exam */
  const QuestId = localStorage.getItem('QuestId');
  useEffect(() => {
    dispatch(Actions.fetchQuestion(QuestId));
  }, [QuestId]);

  /** VARS */

  const {
    questions: {
      queue,
      trace,
      answers,
      quiz: { section, title },
    },
    results: { result },
  } = useSelector((state) => state);
  const Question = queue[trace];
  const Answer = answers[trace];
  const { user } = decodeToken(localStorage.getItem('token'));
  const [TrueAnswers, setTrueAnswers] = useState(0);

  useEffect(() => {
    const ParCent = result
      .map((elem, i) => answers[i] === elem)
      .filter((i) => i).length;
    setTrueAnswers(Math.round((ParCent * 100) / queue.length));
    console.log(user);
  });

  /** NEXT **/
  function onNext(event) {
    event.preventDefault();
    dispatch(Actions.moveNext());
    // if(trace === (queue.length -1)){
    //   Navigate('/results')
    // }
  }
  /** PREV **/
  function onPrev() {
    dispatch(Actions.movePrev());
  }

  /** Push Answers */
  const Selector = useSelector((state) => state);
  useEffect(() => {
    console.log(Selector);
  }, [result]);

  function PushResult(i) {
    dispatch(Actions.pushAnswer({ trace: trace, answer: i }));
  }

  /** Restart Quiz */
  function Restart() {
    dispatch(resetResult());
    dispatch(resetQuest());
  }

  const width = `${Math.round(((trace + 1) * 100) / queue.length)}%`;

  return (
    <div className="w-full min-h-screen flex flex-col gap-2">
      <Navbar />
      <div className="w-full h-full flex justify-center items-center">
        {queue.length === 0 ? (
          <div className="isloding">
            <div></div>
          </div>
        ) : (
          <div className="w-[700px] min-h-[200px]  shadow-[0px_0px_20px_#d8d8d8] text-black rounded-xl flex flex-col justify-between p-5">
            {/* Title Of Quiz */}
            <div className="w-full grid grid-cols-[11fr_2fr]">
              <h1 className="font-bold text-[28px] self-center overflow-auto noScroll flex-nowrap max-h-12">
                {title}
              </h1>
              <div className="justify-self-end flex items-center justify-center gap-1">
                <button
                  onClick={onPrev}
                  className={`text-3xl text-gray-700 px-2 py-2 rounded-full hover:bg-gray-200 text-center duration-300 ${
                    trace ? '' : 'hidden'
                  }`}
                >
                  {' '}
                  <FiArrowLeft />{' '}
                </button>
                <button
                  onClick={onNext}
                  className={`text-3xl text-gray-700 px-2 py-2 rounded-full hover:bg-gray-200 duration-300 ${
                    trace >= queue.length ? 'hidden' : ''
                  }`}
                >
                  {trace + 1 === queue.length ? <FiCheck /> : <FiArrowRight />}{' '}
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-full mx-1 my-2  h-2 overflow-hidden rounded-xl  bg-[#EEEFF2]">
              <div
                style={{ width: width }}
                className={`bg-blue-500 duration-[.8s] rounded-xl h-2`}
              >
                {''}
              </div>
            </div>

            {/* Number Of Questions */}
            <div className="">
              <h1 className="text-2xl font-semibold my-2">
                {trace >= queue.length
                  ? `Your Result: ${TrueAnswers}%`
                  : `Question ${trace + 1}/${queue.length}`}
              </h1>
            </div>

            {/* Question */}
            <div className="my-2">
              <h2 className="text-gray-700">{Question?.question}</h2>
            </div>

            {/* Options */}
            <div className="max-w-full m-1 flex flex-row justify-between ">
              <ul className="w-full gap-2 sm:max-h-[290px] overflow-auto noScroll">
                {typeof result[trace] === 'number'
                  ? Question?.options.map((elem, i) => (
                      <li
                        key={`${i}-${trace}`}
                        className={`grid grid-cols-[1fr_10fr_1fr] list-none px-5 p-3 my-3 items-center text-white  rounded-xl ${
                          i === Answer ? 'bg-[#178D2C]' : 'bg-[#C20A19]'
                        }`}
                      >
                        <h1 className="font-extrabold text-xl">{i + 1}</h1>
                        <h2 className="font-normal text-xl">{elem}</h2>
                        <h3 className="font-extrabold justify-self-end text-3xl  ">
                          {i === Answer ? <FiCheck /> : <FiX />}
                        </h3>
                      </li>
                    ))
                  : Question?.options.map((elem, i) => (
                      <li
                        key={`${i}-${trace}`}
                        className="grid grid-cols-[1fr_10fr_1fr] list-none px-5 p-3 my-3 items-center bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 duration-300"
                      >
                        <h1 className="font-extrabold text-xl">{i + 1}</h1>
                        <h2
                          onClick={() => {
                            PushResult(i);
                          }}
                          className="font-normal text-xl"
                        >
                          {elem}
                        </h2>
                        <h3 className="font-extrabold justify-self-end text-3xl opacity-50 ">
                          <FiArrowRight />
                        </h3>
                      </li>
                    ))}
              </ul>
            </div>

            {/*  Result Page   */}

            {trace === queue.length ? (
              <>
                <div className="flex justify-center items-center">
                  <div className="w-full sm:grid sm:grid-cols-[2fr_1fr]  px-2 flex flex-col  ">
                    {/* Result Information */}
                    <div className=" shadow-[0px_0px_20px_#d8d8d8] rounded-xl font-bold  sm:mr-4 py-5 px-10 sm:my-0 my-3 grid grid-cols-[3fr_2fr]">
                      <div className="flex flex-col justify-around items-start ">
                        <h1>Username : </h1>
                        <h1>Total Questions : </h1>
                        <h1>Quiz Result : </h1>
                        <h1>Quiz Module : </h1>
                      </div>

                      <div className="flex flex-col justify-around items-end">
                        <h1>{user}</h1>
                        <h1>{queue.length}</h1>
                        <h1
                          className={`${
                            TrueAnswers >= 50
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {TrueAnswers >= 50 ? 'Passed' : 'Failed'}
                        </h1>
                        <h1>{section}</h1>
                      </div>
                    </div>

                    {/* Progress Circle Bar */}
                    <div className="shadow-[0px_0px_20px_#d8d8d8] rounded-xl flex flex-col justify-center items-center p-3">
                      <div
                        style={{
                          background: `conic-gradient(from 0deg, ${
                            TrueAnswers >= 50 ? '#4886EE 0%,#4886EE' : 'red 0%,red'
                          } ${TrueAnswers}%,#EEEFF2 0%,#EEEFF2 100%)`,
                        }}
                        className={`flex justify-center flex-row border items-center w-40 h-40  duration-500 rounded-full`}
                      >
                        <div className="h-[90%] w-[90%]  rounded-full  bg-white flex justify-center items-center text-4xl font-bold">
                          {TrueAnswers}%
                        </div>
                      </div>
                      <h1 className="mt-4 font-semibold">
                        True Answers :{' '}
                        {Math.round((queue.length * TrueAnswers) / 100)} /{' '}
                        {queue.length}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* TryAgain */}
                <div className="w-full  h-[3px] bg-gray-300 rounded-xl  my-2"></div>
                <button
                  onClick={Restart}
                  className="w-full py-2 bg-[#4284F2] rounded-2xl text-white text-xl hover:bg-[#5691f9] duration-500"
                >
                  Try Again
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
