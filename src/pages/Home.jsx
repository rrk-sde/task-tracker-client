import React from 'react'
import Layout from '../layout/Layout'
import { BiSortAlt2 } from 'react-icons/bi'
import TaskCard from '../constants/TaskCard';
import { Link } from 'react-router-dom';
const Home = () => {

    const tasksData = [
        {
            id: 1,
            title: 'Task 1',
            content: 'This Task Belongs to Someone loresdasdasd DSD',
            createdBy: 'guest',
            priority: 'P1',
            status: 'todo',
            dueDate: '2023-09-01',
            assignedTo: 'John Doe',
            labels: ['Feature', 'Bug'],
            attachments: [
                { name: 'document.pdf', url: 'https://example.com/document.pdf' },
            ],
            comments: [
                { author: 'User1', text: 'This task requires immediate attention.' },
            ],
            estimatedTime: '2 hours',
            startDate: '2023-08-25',
            completionDate: '2023-08-27',
            dependencies: ['Task 3', 'Task 7'],
            progress: 50,
        },
        {
            id: 2,
            title: 'Task 2',
            content: 'Another Task Description',
            createdBy: 'admin',
            priority: 'P2',
            status: 'inprogress',
            dueDate: '2023-09-15',
            assignedTo: 'Jane Smith',
            labels: ['Enhancement'],
            attachments: [
                { name: 'image.png', url: 'https://example.com/image.png' },
            ],
            comments: [
                { author: 'User2', text: 'We need to clarify the requirements.' },
            ],
            estimatedTime: '4 hours',
            startDate: '2023-08-28',
            completionDate: '',
            dependencies: ['Task 1'],
            progress: 30,
        },
        {

            title: 'Task 3',
            content: 'Yet Another Task Description',
            createdBy: 'user',
            priority: 'P3',
            status: 'completed',
            dueDate: '2023-08-31',
            assignedTo: 'Ella Johnson',
            labels: ['Bug'],
            attachments: [],
            comments: [
                { author: 'User3', text: 'The issue has been fixed.' },
            ],
            estimatedTime: '1.5 hours',
            startDate: '2023-08-23',
            completionDate: '2023-08-29',
            dependencies: [],
            progress: 100,
        },
        {
            title: 'Task 1',
            content: 'This Task Belongs to Someone sfdsafsdf asdfasfsaf zsfsafas asfsfsdfsd sdfsdf',
            createdBy: 'guest',
            priority: 'P1',
            status: 'todo',
            dueDate: '2023-09-01',
            assignedTo: 'John Doe',
            labels: ['Feature', 'Bug'],
            attachments: [
                { name: 'document.pdf', url: 'https://example.com/document.pdf' },
            ],
            comments: [
                { author: 'User1', text: 'This task requires immediate attention.' },
            ],
            estimatedTime: '2 hours',
            startDate: '2023-08-25',
            completionDate: '2023-08-27',
            dependencies: ['Task 3', 'Task 7'],
            progress: 50,
        },
        {
            title: 'Task 2',
            content: 'Another Task Description',
            createdBy: 'admin',
            priority: 'P2',
            status: 'inprogress',
            dueDate: '2023-09-15',
            assignedTo: 'Jane Smith',
            labels: ['Enhancement'],
            attachments: [
                { name: 'image.png', url: 'https://example.com/image.png' },
            ],
            comments: [
                { author: 'User2', text: 'We need to clarify the requirements.' },
            ],
            estimatedTime: '4 hours',
            startDate: '2023-08-28',
            completionDate: '',
            dependencies: ['Task 1'],
            progress: 30,
        },
        {
            title: 'Task 3',
            content: 'Yet Another Task Description',
            createdBy: 'user',
            priority: 'P1',
            status: 'completed',
            dueDate: '2023-08-31',
            assignedTo: 'Ella Johnson',
            labels: ['Bug'],
            attachments: [],
            comments: [
                { author: 'User3', text: 'The issue has been fixed.' },
            ],
            estimatedTime: '1.5 hours',
            startDate: '2023-08-23',
            completionDate: '2023-08-29',
            dependencies: [],
            progress: 100,
        },
    ];


    const columns = ['to do', 'in progress', 'completed'];

    const onDelete = (id) => {
        console.log('onDelete', id)
    }
    const onEdit = (id) => {
        console.log('onEdit', id)
    }


    return (
        <Layout>

            <div className='flex gap-2 justify-between'>
                <button className="h-8 font-bold border px-2 py-1 uppercase text-white bg-[#1f9499]  shadow-sm drop-shadow-md">ALL</button>

                <Link to='/create' className="h-8 font-bold border px-2 py-1 uppercase text-white hover:bg-blue-500 bg-blue-600 shadow-sm drop-shadow-md">+ ADD TASK</Link>
                {/* <button className="h-8 font-bold border px-2 py-1 uppercase text-white bg-[#1f9499]  shadow-sm drop-shadow-md">To Do</button>
                <button className="h-8 font-bold border px-2 py-1 uppercase  text-white bg-[#1f9499]  shadow-sm drop-shadow-md">In Progress</button>
                <button className="h-8 font-bold border px-2 py-1 uppercase  text-white bg-[#1f9499] shadow-sm drop-shadow-md">Completed</button> */}
            </div>
            <hr className='my-4' />
            <div className="grid grid-cols-3 gap-5">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="w-max h-[66vh] overflow-y-auto">
                        <div className='flex fixed justify-between w-80'>
                            <div className={`font-bold uppercase  ${columnIndex === 0 ? 'bg-yellow-500' :
                                columnIndex === 1 ? 'bg-blue-500' :
                                    'bg-green-500'
                                } text-white block w-max px-3`}>
                                {column}
                            </div>

                            <div className='text-black cursor-pointer flex items-center gap-1'> <span><BiSortAlt2 /> </span> sort</div>
                        </div>


                        <div className="mt-8 flex flex-col gap-4">
                            {tasksData
                                .filter(task => task.status === column.replace(/ /g, "").toLowerCase())
                                .map((task, taskIndex) => (
                                    <TaskCard
                                        key={taskIndex}
                                        task={task}
                                        onDelete={() => onDelete(task.id)}
                                        onEdit={() => onEdit(task.id)}
                                    />
                                ))}
                        </div>

                    </div>
                ))}
            </div>

        </Layout>
    )
}

export default Home