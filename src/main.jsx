import ReactDOM from "react-dom/client"
import Body from "./components/Body/Body";
import "./index.css"
import Footer from "./components/Footer/Footer";
import Courseroute from "./components/Courseroute/Courseroute";
import Aboutroute from "./components/Aboutroute/Aboutroute";
import Contactroute from "./components/Contactroute/Contactroute";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Blogsection from "./components/BlogSection/Blogsection";
import BlogHome from "./components/Blogroute/BlogHome/BlogHome";
import HeaderCard from "./components/Blogroute/HeaderCard/HeaderCard";
import Blogroute from "./components/Blogroute/Blogroute";
=======
import Blogroute from "./components/Blogroute/Blogroute";
// import HeaderCard from "./components/Blogroute/HeaderCard/HeaderCard";
>>>>>>> 7c1da745b3de0b66d4794d5c6dba96fe43104866

const Applayout  = ()=>{
  return(
    <>
    <Navbar></Navbar>
    <Header/>
    {/* <HeaderCard></HeaderCard> */}
    {/* <Header></Header> */}
    <BlogHome/>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/contact",
    element:<Contactroute></Contactroute>
  },
  {
    path:"/",
    element:<Applayout></Applayout>
  },
  {
    path:"/about",
    element:<Aboutroute></Aboutroute>
  },
  {
    path:"/course",
    element:<Courseroute></Courseroute>
  },
  {
    path:"/Blog",
<<<<<<< HEAD
    element:<Blogroute></Blogroute>
  },
=======
    element:<Blogroute/>
  }
>>>>>>> 7c1da745b3de0b66d4794d5c6dba96fe43104866
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
