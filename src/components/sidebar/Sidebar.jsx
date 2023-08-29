import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (

        <div className={` shadow-md bg-gray-200 p-4 transform transition-transform duration-700   
            relative ${isSidebarOpen ? 'w-[200px]' : 'w-max pr-8'} `}>
            <div onClick={toggleSidebar} className={`absolute -right-3 cursor-pointer transform transition-transform duration-700 ${isSidebarOpen ? 'rotate-360' : ' rotate-180'}`}>
                {/* {isSidebarOpen && */}
                <BsFillArrowLeftCircleFill color='blue' size={32} />
            </div>

            <div className="flex flex-col h-full">
                <Link to={'/'} className="text-xl font-semibold mb-4 ">Taskrr</Link>
                <button className="text-blue-500 text-left" onClick={toggleSidebar}>
                    Close
                </button>
            </div>
        </div>

    )
}

export default Sidebar