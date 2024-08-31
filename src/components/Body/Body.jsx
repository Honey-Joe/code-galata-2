import ReviewSection from '../ReviewSection/ReviewSection'
import Topcourse from '../Topcourse/Topcourse'
import NewsLetter from '../NewsLetter/NewsLetter'
import HowWeWork from '../HowWeWork/HowWeWork'
import Homebody from '../Homecard/Homebody'
import Achievment from '../Achievment/Achievment'
import Blogsection from '../BlogSection/Blogsection'

const Body = () => {
  return (
    <>
      {/* <Course></Course> */}
      <div className='max-w-[100%]'>
      <div>
      <Achievment></Achievment>
      <Homebody></Homebody>
      <Topcourse></Topcourse>
      <HowWeWork/>
      <ReviewSection></ReviewSection>
      <Blogsection></Blogsection>
      <NewsLetter/>
      </div>
      </div>
      
      
    </>
  )
}

export default Body
