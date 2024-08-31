import CounterAu from "../../CounterAu/CounterAu"
import Hard from "../../Hard/Hard"
import HowWeWork from "../../HowWeWork/HowWeWork"
import InstructorAu from "../../InstructorAu/InstructorAu"
import Course from "../Course/Course"
import Faq from "../Faq/Faq"

const Body = () => {
  return (
    <>
        <div className=''>
          <CounterAu/>
          <Hard/>
          <Course></Course>
          <HowWeWork/>
          <InstructorAu/>
          <Faq></Faq>
        </div>
    </>
  )
}

export default Body