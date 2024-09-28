import { CardApi } from "../../../API/CardApi"
import InstructorCard from "../InstructorCard/InstructorCard"

const Instructor = () => {
  return (
    <>
        <div className="max-w-[100%] mx-auto py-[40px]">
            <div className=" w-[90%] lg:w-[90%] mx-auto">
                <div className="">
                    <h1 className=" text-[22px] font-bold lg:text-[30px] md:text-[24px] font-[poppins] ">Meet our <span className="text-[#1176F0] underline"> Instructors</span></h1>
                    <p className=" text-[#4a5355] text-[12px] font-[poppins] lg:text-[16px] md:text-[14px] pt-3">We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.</p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-1 md:gap-6">
                  {
                    CardApi.map((e,index)=>{
                      return(
                        <>
                          <div key={index}> 
                            <InstructorCard team1={e.team1}
                            name={e.name}
                            domain={e.domain}
                            course_no={e.course_no}
                            course={e.course}
                            student_no={e.student_no}
                            student={e.student}
                            />
                          </div>
                        </>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    </>
  )
}

export default Instructor