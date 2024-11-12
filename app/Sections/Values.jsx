import React from 'react'
import { LiaShippingFastSolid} from "react-icons/lia";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";


function values() {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-center gap-2 px-4 lg:px-8 py-8'>
      <div className='flex flex-row flex-nowrap justify-center items-center gap-2 w-full'>
      <div className='flex flex-col shadow-2xl  rounded-xl px-2 py-8 w-1/2 md:w-1/3 lg:w-1/2'>
      <LiaShippingFastSolid className='w-12 h-16'/>
      <h2 className='font-sans font-medium text-lg mt-4'>Free Shipping</h2>
      <p className='mt-2'>Order above $200</p>
      </div>
      <div className='flex flex-col shadow-2xl  rounded-xl px-2 py-8 w-1/2 md:w-1/3 lg:w-1/2'>
      <FaRegMoneyBillAlt className='w-12 h-16'/>
      <h2 className='font-sans font-medium text-lg mt-4'>Money-back</h2>
      <p className='mt-2'>30 days guarantee</p>
      </div>
      </div>

      <div className='flex flex-row flex-nowrap justify-center items-center gap-2 w-full'>
      <div className='flex flex-col shadow-2xl  rounded-xl px-2 py-8 w-1/2 md:w-1/3 lg:w-1/2'>
      <MdLockOutline className='w-12 h-16'/>
      <h2 className='font-sans font-medium text-lg mt-4'>Secure Payments</h2>
      <p className='mt-2'>Secured by Stripe</p>
      </div>
      <div className='flex flex-col shadow-2xl  rounded-xl px-2 py-8 w-1/2 md:w-1/3 lg:w-1/2'>
      <LuPhone className='w-12 h-16'/>
      <h2 className='font-sans font-medium text-lg mt-4'>24/7 Support</h2>
      <p className='mt-2'>Phone support</p>
      </div>
      </div>
    </div>
  )
}

export default values