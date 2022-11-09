import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/Notfound/Notfound";
import Details from "../Pages/Services/Details/Details";
import Servicesall from "../Pages/Services/Servicesall";
import Signup from "../Pages/Signup/Signup";
import Reviews from "../Pages/Reviews/Reviews";
import PrivateRoute from "./PrivateRoute";


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
                path:'/servicesall',
                element:<Servicesall></Servicesall>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader: ({params}) => fetch(`https://cleaning-service-server.vercel.app/services/${params.id}`),
            },
            {
                path:'/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path:'*',
                element:<Notfound></Notfound>
            }
        ],
        
    }
])

export default router;