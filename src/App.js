import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar  from "./components/Navbar";
import PageNotFound  from "./components/PageNotFound";
import MainPage  from "./components/MainPage";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
// import  Login  from "./components/Login";
// import Registration from "./components/Registration";
import CourseList from "./components/CourseList"
import NavbarCourse from "./components/NavbarCourse"
// import NotAllowed from "./components/NotAllowed";
import CoursePage from "./components/CoursePage";
import NavbarCoursePage from "./components/NavbarCoursePage";
import ResetPassword from "./components/ResetPassword";

function App() {
//   const Course = () => {
//    return sessionStorage.length > 0 ? 
//     <><NavbarCourse /> <CourseList /></>: <NotAllowed />
//  };

//  const CoursPage = () => {
//    return sessionStorage.length > 0 ? 
//     <><NavbarCoursePage/><CoursePage /></>: <NotAllowed />
//  };
  return (
  <>
    <Router>
        <Routes>
          <Route path="/" exact element={<><Navbar /> <MainPage /> <About /> <Contacts /></>}/>
          {/* <Route path="/login" exact element={<Login />}/>
          <Route path="/registration" exact element={<Registration />}/> */}
          <Route path="/resetpassword" exact element={<ResetPassword />}/>
          <Route path="/course" exact element={<><NavbarCourse /> <CourseList /></>}/>
          <Route path="/course/:id" exact element={<><NavbarCoursePage /><CoursePage /></>}/>
          <Route path="*" exact element={<PageNotFound />}/>
        </Routes>
    </Router>
  </>
  );
}

export default App;
