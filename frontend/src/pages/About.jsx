import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to our platform, your reliable partner in accessing trusted service professionals efficiently and effortlessly. We understand the everyday challenges people face in booking appointments and finding dependable support.</p>
          <p>We are dedicated to improving how individuals interact with essential services. By blending intuitive design with functional precision, we aim to reduce the stress of booking appointments and make trusted support easily accessible. From choosing a time slot to receiving confirmation, every step is designed with your ease in mind.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We envision a world where booking an appointment is as simple as a few clicks—no calls, no queues, just seamless interaction. We strive to empower users to take control of their schedules while enabling professionals to manage their time efficiently.</p>
        </div>
      </div>

      <div className='text-xl my-4 text-gray-500'>
        <p>WHY <span className='text-gray-700 font-semibold '>CHOOSE US</span></p>
      </div>

      <div className='flex felx-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>SIMPLICITY:</b>
          <p>Easy-to-use interface that makes booking appointments effortless.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>RELIABILITY:</b>
          <p>Count on consistent service from trusted medical professionals nearby.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>FLEXIBILITY:</b>
          <p>Book, reschedule, or cancel anytime with complete user control.</p>
        </div>
      </div>
    </div>
  )
}

export default About