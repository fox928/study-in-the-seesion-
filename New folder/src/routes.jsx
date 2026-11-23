import { createBrowserRouter } from "react-router";
import App from "./App";
import Nav from "./components/Nav/Navbar";
import  Contant from "./pages/Contant/Contant"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

const  routers = createBrowserRouter(
    [
       
        {
           path:"/Home",
           element: <Home />
            
        },
        {
            path:"/Contant",
            element:<Contant />
        },
        {
            path :"/About",
            element: <About />
        }
    ]
)