import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      Navigate('sign');
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className=" sm:pl-24 pl-4 pr-28 w-full sm:p-5 p-2 items-center justify-center flex  flex-[1] bg-[radial-gradient(white,white,#c3d5fb)]">
        <div className="grid grid-cols-[3fr_2fr] w-full h-full flex-[1]">
          <div>
            <div className=" h-full flex justify-center items-start text-black flex-col">
              <h1 className="w-96 text-[38px] leading-10 font-extrabold mb-4">
                Révisez en Quiz Médical
              </h1>
              <p className="font-semibold w-[90vw]  sm:w-[500px] tracking-tighter">
                Bienvenue sur notre site de quiz dédié aux étudiants en
                médecine. Notre plateforme a été conçue pour vous offrir une
                expérience d'apprentissage interactive et efficace. Que vous
                soyez en première année ou en résidanat, nos quiz couvrent une
                vaste gamme de sujets médicaux, de l'anatomie à la pharmacologie
                en passant par la pathologie. Chaque question est minutieusement
                élaborée pour renforcer votre compréhension des concepts
                essentiels, et nos explications détaillées vous permettent
                d'approfondir vos connaissances. Vous pouvez suivre votre
                progression, comparer vos résultats avec vos pairs et accéder à
                notre bibliothèque de ressources pour compléter votre
                apprentissage. Relevez le défi et préparez-vous de manière
                optimale pour vos examens médicaux grâce à nos quiz interactifs.
                Bienvenue dans le monde de l'apprentissage médical simplifié.
              </p>

              <button
                onClick={() => {
                  Navigate('quizzes');
                }}
                className="signbutton1 w-32 font-extrabold border border-[#234C92] rounded-xl flex justify-center items-center gap-2 mt-4"
              >
                Start
              </button>
            </div>
          </div>
          <div className="justify-self-start">
            <img
              className="justify-self-start lg:block hidden"
              src="https://i.ibb.co/vPWGmCW/Online-test-rafiki.png"
              alt="Online-test-rafiki"
              border="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
