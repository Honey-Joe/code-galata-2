import { Star } from 'lucide-react'
import { quote2, reviwe } from '../../assets/image'

const ReviewSectionCard = () => {
  return (
    <>
     <div className='2xl:container '>
            <div className='w-[100%] grid grid-cols-1 px-1 md:px-6 gap-3 '>
              <div >
                <div className='px-10 py-10 shadow-xl flex flex-col gap-5 rounded-3xl my-4'>
                <div className='flex justify-center'>
                    <img src={quote2} alt="" />
                </div>
                <div>
                  <p className='text-center font-[poppins] '>Lorem ipsum dolor sit amet consectetur. A sapien donec lacus nunc integer vitae vitae. Gravida nulla in tincidunt lectus consectetur sed ante.</p>
                </div>
                <hr />
                <div className='flex justify-center gap-3'>
                  <Star size={16} color='#1176F0' fill='#1176F0'></Star>
                  <Star size={16} color='#1176F0' fill='#1176F0'></Star>
                  <Star size={16} color='#1176F0' fill='#1176F0'></Star>
                  <Star size={16} color='#1176F0' fill='#1176F0'></Star>
                  <Star size={16} color='#1176F0' fill='#1176F0'></Star>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                  <p className=' font-bold font-[poppins]'>SUGANTH PV</p>
                  <p className=' font-[poppins] text-[14px]'>SRI SAIRAM ENGINEERING COLLEGE</p>
                </div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                  <div className='h-[3px] w-[143px]' id='review2'></div>
                  <div><img src={reviwe} alt="" /></div>
                  <div className='h-[3px] w-[143px]' id='review'></div>
                </div>
              </div>
            </div>
        </div>  
    </>
  )
}

export default ReviewSectionCard
