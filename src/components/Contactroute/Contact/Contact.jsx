import ContactForm from "../ContactForm/ContactForm"
import ContactCard from "../ContactCard/ContactCard"
import Map from "../Map/Map"

const Contact = () => {
  return (
    <>
    {/* bg-[#f1e4fd] */}
        <div className=" max-w-[100%] mx-auto bg-white py-[40px]">
            <div className=" w-[90%] mx-auto">
                <div className=" text-center flex justify-center flex-col items-center">   
                    <h2 className="  text-center font-[poppins] font-medium text-[#1176F0] bg-[#E4E9FD] py-2 px-5  rounded-full w-fit">CONTACT US</h2>
                    <h1 className=" text-[24px] md:text-[32px]  font-bold font-[poppins] pt-5 leading-tight">Histudy Course Contact <br />
                    can join with us.</h1>
                </div>  
                <ContactCard/>
                <ContactForm/>
            </div> 
            <div>
                <Map/>
            </div>
        </div>
    </>
  )
}

export default Contact