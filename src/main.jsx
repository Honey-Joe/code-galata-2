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
import Blogroute from "./components/Blogroute/Blogroute";
import BlogDetails from "./components/Blogroute/BlogDetails/BlogDetails";
// import HeaderCard from "./components/Blogroute/HeaderCard/HeaderCard";

const Applayout  = ()=>{
  return(
    <>
    <Navbar></Navbar>
    <Header/>
    {/* <HeaderCard></HeaderCard> */}
    {/* <Header></Header> */}
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
    element:<Blogroute></Blogroute>
  },
  {
    path:"/blogdetails",
    element:<BlogDetails></BlogDetails>
  }

  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
