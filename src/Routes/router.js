import { createBrowserRouter } from "react-router-dom";
import AddTodo from "../components/AddTodo/AddTodo";
import Description from "../components/Home/Description";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<PrivateRoute><Home></Home></PrivateRoute>
        },
        {
            path:'/add-todo',
            element:<AddTodo></AddTodo>
        },

        {
            path: '/details/:id',
            element: <PrivateRoute><Description></Description></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`)

        },

        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        }
    ]
}
])

export default router;