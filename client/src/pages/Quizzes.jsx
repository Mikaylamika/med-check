import Navbar from '../Components/Navbar';
import YearsTab from '../Components/YearsTab';

export default function Quizzes() {
  // const { premium } = decodeToken(localStorage.getItem('token'))
  // function Accept(paid){
  //   if(premium && paid) return true
  //   else if(premium && !paid) return true
  //   else if(!premium && paid) return false
  //   else if(!premium && !paid) return true
  // }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center items-center w-full h-full bg-[radial-gradient(white,white,#c3d5fb)]">
        <div className="sm:w-11/12 lg:w-8/12  w-full max-h-[436px] z-10  shadow-[0px_5px_20px_#d8d8d8]  rounded-xl flex flex-col ">
          {/* Header  */}
          <div className="w-full min-h-[100px] text-black flex justify-center flex-col items-center border-b ">
            <h1 className="text-4xl font-extrabold tracking-wider">MedCheck</h1>
            <h1 className="mt-2 font-light">
              Select Your Academic Year And Quiz
            </h1>
          </div>

          {/* Years  */}

          <YearsTab />
        </div>
      </div>
    </div>
  );
}
