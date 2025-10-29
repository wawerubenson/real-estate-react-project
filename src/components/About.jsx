import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years Of Excellence</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>1000+</p>
                            <p>Complete Projects</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>300+</p>
                            <p>Happy Customers</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Ongoing Projects</p>
                        </div>

                    </div>

                    <p className='my-10 max-w-lg'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                    </p>

                    <button className='bg-blue-600 text-white px-8 py-2 rounded '>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
