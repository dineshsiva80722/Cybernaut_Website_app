'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

const Course = () => {
    return (
        <>
            <section className='mt-20'>
                <div className=' flex justify-between w-full min-h-[40rem] bg-gradient-to-br from-sky-700 via-sky-500 to-sky-800'>
                    <div className='w-1/2  items-center place-content-center p-32'>
                        <h1 className='lg:text-5xl text-2xl font-bold'>Tech trio - core coding</h1>
                        <p className='mt-5 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, magni nulla iusto ipsam perspiciatis fugiat, delectus sequi sit eveniet reprehenderit, eos quis! Laudantium deleniti ducimus voluptatum quidem qui illum eveniet.</p>
                        <div className='flex justify-start py-5 text-white gap-5'>
                            <span>Entrolled 1000</span>
                            <span>beginner</span>
                        </div>
                        <Button className='mt-5 w-40 h-12' variant={'outline'}>Enroll Now</Button>

                    </div>
                    <div className='w-1/2  relative  place-content-center p-10  '>
                        <div
                            className="w-[30rem] rounded-lg shadow float-end right-20 h-[23rem] p-6 bg-white relative overflow-hidden">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <h2 className="text-2xl font-bold text-zinc-500">learn this Course for Just <span className='bg-blue-500 p-1 rounded-md text-white'>Rs/- 3000</span></h2>
                                {/* <p className="text-slate-500">Enter details below.</p> */}
                            </div>
                            <form className="w-full mt-4 space-y-3">
                                <div>
                                    <input
                                        className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                        placeholder="Username"
                                        id="username"
                                        name="username"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <input
                                        className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            className="mr-2 w-4 h-4"
                                            id="remember"
                                            name="remember"
                                            type="checkbox"
                                        />
                                        <span className="text-slate-500">Remember me </span>
                                    </div>
                                    <a className="text-blue-500 font-medium hover:underline" href="#"
                                    >Forgot Password</a>
                                </div>
                                <button
                                    className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                                    id="login"
                                    name="login"
                                    type="submit"
                                >
                                    login
                                </button>
                                <p className="flex justify-center space-x-1">
                                    <span className="text-slate-700"> Have an account? </span>
                                    <a className="text-blue-500 hover:underline" href="#">Sign Up</a>
                                </p>
                            </form>
                        </div>

                    </div>
                </div>

            </section>
            <section className='w-full relative bg-[#f5f5f5] min-h-screen '>
                <div className='w-11/12 min-h-[40rem] bg-white mx-auto absolute overflow-hidden -top-12 left-0 right-0 rounded-lg '>
                    <div className='flex  w-full h-12 bg-gray-200'>
                        <div className='text-2xl font-bold w-80 bg-blue-300 text-center items-center justify-center flex m-1 rounded'>
                            <h1>All Courses</h1>
                        </div>
                        <ul className='flex w-full justify-start space-x-12 p-3'>
                            <button className='w-40 text-center'>Courses</button>
                            <button className='w-40 text-center'>Benefits</button>
                            <button className='w-40 text-center'>Certification</button>
                            <button className='w-40 text-center'>Requirements</button>
                            <button className='w-40 text-center'>Testimonials</button>
                            <button className='w-40 text-center'>FAQs</button>
                        </ul>
                    </div>

                    <div className='w-full flex justify-around  h-[30rem]'>

                        <div className='w-1/2  place-content-center p-14'>
                            <h1 className='text-3xl'>Course Description</h1>
                            <p className='text-lg py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quaerat rem enim temporibus dolorem a hic esse debitis? Officiis veritatis illum molestiae minima eos dolorem a officia quod provident expedita.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint? Saepe, doloribus! Repellendus, asperiores veniam. Explicabo reprehenderit autem eligendi non sit voluptatum voluptates exercitationem? Cum nesciunt illo eveniet quae voluptates.
                            </p>
                        </div>

                        <div className='w-1/2 place-content-center'>
                            <div className='text-4xl w-8/12 h-96 rounded-lg bg-gray-300 mx-auto'></div>
                        </div>

                    </div>

                    <div className="w-ful min-h-[20rem] ">
                        
                    </div>

                </div>

            </section>

        </>
    )
}

export default Course;