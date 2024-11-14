import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Quiz from "./pages/Quiz";
import Profile from "./pages/Profile";
import Quizzes from "./pages/Quizzes";
import Year from "./pages/Year";
import MyAlert from "./Components/MyAlert";

function App() {
  return (
    <BrowserRouter>
      <Routes basename="MedCheck-Front">
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/years" element={<Year />} />
        <Route path="/alert" element={<MyAlert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
