import React from 'react'
import Layout from '../layout/Layout'

const Home = () => {
    return (
        <Layout>

            <div className='flex gap-2 '>
                <button className="h-8 font-bold border px-2 py-1 uppercase text-white bg-[#1f9499]  shadow-sm drop-shadow-md">ALL</button>
                <button className="h-8 font-bold border px-2 py-1 uppercase text-white bg-[#1f9499]  shadow-sm drop-shadow-md">To Do</button>
                <button className="h-8 font-bold border px-2 py-1 uppercase  text-white bg-[#1f9499]  shadow-sm drop-shadow-md">In Progress</button>
                <button className="h-8 font-bold border px-2 py-1 uppercase  text-white bg-[#1f9499] shadow-sm drop-shadow-md">Completed</button>
            </div>
            <hr className='my-4' />
            <div className="grid grid-cols-3 gap-5">

                {/* Grid item 1 */}
                <div className='w-max h-[75vh] overflow-y-scroll'>
                    <h1 className='font-bold uppercase fixed bg-yellow-500 text-white block w-max px-3'>TO DO</h1>

                    <div className='mt-8'>

                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>

                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>

                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                </div>

                {/* Grid item 2 */}

                <div className='w-max h-[75vh] overflow-y-scroll'>
                    <h1 className='font-bold uppercase fixed bg-blue-500 text-white block w-max px-3'>IN PROGRESS</h1>

                    <div className='mt-8'>
                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>

                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>

                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                </div>

                {/* Grid item 3 */}

                <div className='w-max h-[75vh] overflow-y-scroll'>
                    <h1 className='font-bold uppercase fixed bg-green-500 text-white block w-max px-3'>COMPLETED</h1>
                    <div className='mt-8'>
                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>

                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                    <div>

                        <div className='flex gap-4 border border-amber-900 p-4 w-max'>
                            <div>
                                <h1 className='font-semibold'>Task 1</h1>
                                <p>This Task Belong to Someone</p>
                                <p><span className='font-semibold'>Created by :</span> guest</p>
                            </div>
                            <div className='flex items-center '>
                                <p className='border rounded-full h-10 w-10 flex justify-center items-center shadow-md'>P1</p>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-end py-2'>
                            <div className='border' />
                            <button className='border px-2 py-1 rounded-md bg-blue-300'>Edit</button>
                            <button className='border px-2 py-1 rounded-md bg-red-300'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Home