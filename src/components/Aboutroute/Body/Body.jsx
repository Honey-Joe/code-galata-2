import CounterAu from "../../CounterAu/CounterAu"
import Hard from "../../Hard/Hard"
import InstructorAu from "../../InstructorAu/InstructorAu"
import Course from "../Course/Course"
import Faq from "../Faq/Faq"

const Body = () => {
  return (
    <>
        <div className=''>
          <Hard/>
          <Course></Course>
          <InstructorAu/>
          <Faq></Faq>
        </div>
    </>
  )
}

export default Body