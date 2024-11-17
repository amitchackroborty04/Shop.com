import React from 'react'
import ReviewItem from './ReviewItem'
import Flex from './Flex'

const All_Reveiws = () => {
  return (
    <div className='mt-[80px] mb-[80px]'>
        <Flex className=" justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap gap-y-3">
            <div className='flex gap-3 items-center'>
                <h3 className='font-Satoshi text-[24px] font-bold leading-[32px] text-[#000000]'>All Reviews</h3>
                <h5 className='font-Satoshi text-base font-normal text-[#00000099]'>(451)</h5>
            </div>
            <div>
                <button>
                    <button className='font-Satoshi text-base font-semibold py-3 px-[30px] border rounded-[62px] bg-[#00000009] hover:bg-black hover:text-white duration-300'>Write a Review</button>
                </button>
            </div>
        </Flex>
        <Flex className="mt-[32px] justify-between flex-wrap gap-y-4 ">
            <div className='w-full lg:w-[48%]'>
            <ReviewItem/>
            </div>
            <div className='w-full lg:w-[48%]'>
            <ReviewItem/>
            </div>
        </Flex>

       
        
    </div>
  )
}

export default All_Reveiws