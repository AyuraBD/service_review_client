import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Notfound from "../Pages/Notfound/Notfound";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'*',
                element:<Notfound></Notfound>
            }
        ],
        
    }
])

export default router;