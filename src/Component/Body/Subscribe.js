import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-gray-50 flex flex-col justify-center py-10'>
        <div className='border-2 max-w-md w-full mx-auto mt-4 bg-gray-50 p-8 border-orange rounded-lg'>
            <h1 className='text-center text-2xl font-bold font-serif'>Subscribe Newsletter</h1>
            <h3 className='text-center font-normal font-sans px-10 py-5'>Subscribe to our email newsletter today to receive updates on the latest article, content and special offers!</h3>
            <form action='' className='space-y-6'>
                <div class="flex justify-center px-10">
                    <input type="search" className='form-control relative flex-auto min-w-0 w-4/5 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded-full focus:outline-none' placeholder="Search" aria-label="Search"/>
                </div>
                <div class="flex justify-center">
                    <button className='text-black relative flex justify=center rounded-full bg-orange relative h-fit w-fit py-2.5 px-5'>Get Newsletter</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe