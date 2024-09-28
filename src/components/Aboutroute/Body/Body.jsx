import CounterAu from "../../CounterAu/CounterAu"
import Hard from "../../Hard/Hard"
import InstructorAu from "../../InstructorAu/InstructorAu"
import Course from "../Course/Course"
import Faq from "../Faq/Faq"
import Herosection from "../Herosection/Herosection"

const Body = () => {
  return (
    <>
        <div className=''>
          <Herosection></Herosection>
          <Hard/>
          <Course></Course>
          <InstructorAu/>
          <Faq></Faq>
        </div>
    </>
  )
}

export default Body