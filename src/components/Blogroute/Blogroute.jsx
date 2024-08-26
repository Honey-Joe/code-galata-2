
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Blogsection from "./BlogSection/Blogsection"
import Blogtab from "./Blogtab/Blogtab"

const Blogroute = () => {
  return (
    <>  
        
        <Navbar/>

        <Blogsection/>
        <Blogtab></Blogtab>
        <Footer/>
    </>
  )
}

export default Blogroute