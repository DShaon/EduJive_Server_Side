import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Colleges from "../Pages/Colleges/Colleges";
import Details from "../Pages/Details/Details";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/details/:collegeName",
        element: <Details></Details>,
      },
      {
        path:"/admission",
        element:<Admission></Admission>
      },
      {
        path:"/admissionForm/:collegeName",
        element:<AdmissionForm></AdmissionForm>
      },
      {
        path:"/mycollege",
        element:<MyCollege></MyCollege>
      },
      
    ],
  },
]);
