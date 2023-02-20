import { createBrowserRouter } from "react-router-dom";
import AddTodo from "../components/AddTodo/AddTodo";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/add-todo',
            element:<AddTodo></AddTodo>
        }
    ]
}
])

export default router;