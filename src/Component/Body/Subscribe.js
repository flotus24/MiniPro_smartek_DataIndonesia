import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-gray-100 flex flex-col justify-center mx-10 py-10'>
        <div className='border-2 max-w-md w-full mx-auto mt-4 bg-white p-3 border-orange rounded-lg'>
            <h2 className='mt-2 text-center text-2xl font-bold font-serif'>Subscribe Newsletter</h2>
            <h3 className='text-center font-normal font-sans px-10 py-5'>Subscribe to our email newsletter today to receive updates on the latest article, content and special offers!</h3>
            <form action='' className='mb-5 space-y-6'>
                <div class="flex justify-center px-10">
                    <input type="search" className='text-center form-control relative flex-auto min-w-0 w-4/5 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded-full focus:outline-none' placeholder="Your email address" aria-label="Search"/>
                </div>
                <div class="flex justify-center">
                    <button className='text-white relative flex justify=center rounded-full bg-orange1 relative h-fit w-fit py-2.5 px-5'>Get Newsletter</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe