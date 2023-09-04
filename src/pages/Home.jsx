import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { BiSortAlt2 } from 'react-icons/bi'
import TaskCard from '../constants/TaskCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskById, fetchAllTasks, updateTasksData } from '../redux/task/taskSlice';
import SingleTaskLoader from '../components/loader/SingleTaskLoader';
import io from 'socket.io-client'

const Home = () => {

    const END_POINT = "http://localhost:4000"

    const dispatch = useDispatch()

    const tasksData = useSelector((state) => state.tasks.task);
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);

    // const [tasks, setTasks] = useState([]);
    const [socket, setSocket] = useState(null);

    // console.log(tasks)

    useEffect(() => {
        dispatch(fetchAllTasks());
    }, [dispatch]);

    const columns = ['to do', 'in progress', 'completed'];

    const onDelete = (id) => {
        console.log('onDelete', id)
        dispatch(deleteTaskById(id))
    }
    const onEdit = (id) => {
        console.log('onEdit', id)
    }

    useEffect(() => {
        const newSocket = io(END_POINT);
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        // Send a request for tasks to the server
        if (socket) {
            socket.emit('getTasks');
        }
    }, [socket]);



    useEffect(() => {
        if (socket) {
            socket.on('taskCreated', (newTask) => {

                // setTasks((prevTasks) => [...prevTasks, newTask]);
                console.log(newTask, 62)

                dispatch(updateTasksData([...tasksData, newTask]));
            });

            return () => {

                socket.off('taskCreated');
            };
        }
    }, [socket, tasksData, dispatch]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

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
            <div className="grid md:grid-cols-3 gap-5">
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
                            {!tasksData && <SingleTaskLoader />}
                            {tasksData && tasksData
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