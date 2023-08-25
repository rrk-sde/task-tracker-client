import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import Sidebar from '../components/sidebar/Sidebar';
const Layout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className={`flex min-h-screen`}>
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Main Content */}
            <div className={` m-6 w-[100%] ${isSidebarOpen ? 'w-[100%]' : ' w-full'} transition-transform duration-300 ease-in-out transform`}>
                <header className="bg-gray-300 p-2 mb-4 shadow-md">This Is Created For An Internship</header>
                <div className="bg-white">{children}</div>
                <footer className="bg-gray-300 p-2 mt-4  shadow-md">Footer</footer>
            </div>
        </div>
    );
}

export default Layout;
