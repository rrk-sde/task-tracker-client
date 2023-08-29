import React, { useState } from 'react';
// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import Sidebar from '../components/sidebar/Sidebar';
const Layout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className={`flex min-h-screen`}>
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Main Content */}
            <div className={`m-6 ${isSidebarOpen ? 'w-[100%]' : ''} duration-700 ease-in-out transform transition-all`}>
                <header className="bg-gray-300 p-2 mb-4 shadow-md flex justify-end text-blue-500 font-semibold font-serif">Taskrr </header>
                <div className="bg-white">{children}</div>
                <footer className="bg-gray-300 p-2 mt-4 text-center shadow-md font-bold">Developed By Rajeev Ranjan Kumar</footer>
            </div>

            <div className='m-6'>Notification</div>
        </div>
    );
}

export default Layout;
