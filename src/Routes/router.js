import { createBrowserRouter } from "react-router-dom";
import AddTodo from "../components/AddTodo/AddTodo";
import Description from "../components/Home/Description";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import Trash from "../components/Trash/Trash";

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
            element:<PrivateRoute><AddTodo></AddTodo></PrivateRoute>
        },
        {
            path:'/trash',
            element:<PrivateRoute><Trash></Trash></PrivateRoute>
        },

        {
            path: '/details/:id',
            element: <PrivateRoute><Description></Description></PrivateRoute>,
            loader:({params})=> fetch(`https://todo-app-server-side-phi.vercel.app/details/${params.id}`)

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