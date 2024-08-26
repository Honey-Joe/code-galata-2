
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Blogsection from "./BlogSection/Blogsection"
import Blogtab from "./Blogtab/Blogtab"
import TrendingArticles from "./TrendingArticles/TrendingArticles"

const Blogroute = () => {
  return (
    <>  
        
        <Navbar/>

        <Header></Header>
        <Blogsection/>
        <Blogtab></Blogtab>
        <Footer/>
    </>
  )
}

export default Blogroute