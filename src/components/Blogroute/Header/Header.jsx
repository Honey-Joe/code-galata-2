import { bloghead1440, bloghead745, blogheadmob } from "../../../assets/image"

const Header = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto mt-[100px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
          <img src={bloghead745} alt="" className="hidden md:block xl:hidden" />
          <img src={bloghead1440} alt="" className="hidden xl:block" />
          <img src={blogheadmob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
    </>
  )
}

export default Header
