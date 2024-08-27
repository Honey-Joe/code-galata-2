
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import BlogDetails from "./BlogDetails/BlogDetails"
import Blogsection from "./BlogSection/Blogsection"
import Blogtab from "./Blogtab/Blogtab"

const Blogroute = () => {
  return (
    <>  
      <Navbar/>
      <Blogsection/>
      <Blogtab></Blogtab>
      <BlogDetails/>
      <Footer/>
    </>
  )
}

export default Blogroute