import React from 'react'
import RootLayout from '../rootLayout'

export default function About() {
  return (
    <RootLayout>
    <div className="flex min-h-screen justify-center">
        <div className="bg-slate-600 rounded-md w-80 sm:w-80 md:w-full lg:w-full p-5 my-24">
          <h1 className='text-lg sm:text-lg md:text-2xl lg:text-3xl text-white font-extrabold mb-3'>About for website</h1>
          <p className='text-wrap text-white indent-12 italic text-sm sm:text-md md:text-xl lg:text-lg xl:text-xl'>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum quo neque ad libero, maiores nulla! Quibusdam quis harum reiciendis natus ullam doloribus doloremque! Aliquam cupiditate voluptatem explicabo doloribus delectus fugiat, quis iste quae, odit ipsum dolorem vel ullam perferendis libero esse. Hic suscipit quibusdam, pariatur alias soluta necessitatibus deserunt nobis facilis quasi reiciendis a velit molestiae optio provident ex consectetur iusto voluptatum aliquam atque dicta debitis laudantium nesciunt? Non ducimus quas, quibusdam aperiam necessitatibus quis neque quae nesciunt officiis ullam, earum nostrum, voluptates ipsam ab corrupti voluptas unde reprehenderit nemo doloremque quam labore obcaecati itaque. Ad eius."
          </p>
        </div>
    </div>
    </RootLayout>
  )
}
