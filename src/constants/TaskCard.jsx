import React from 'react';

const TaskCard = ({ task, onDelete, onEdit }) => {
    return (
        <div className="flex gap-8 border border-amber-900 p-4 h-36 min-w-[300px] justify-between">
            <div className='flex flex-col h-full gap-2'>
                <h1 className="font-semibold">{task.title}</h1>
                <p className='w-[220px] h-20 overflow-hidden'>{task.content}</p>
                <p className='flex items-end'>
                    <span className="font-semibold">Created by :</span> {task.createdBy}
                </p>
            </div>
            <div className="flex items-center flex-col gap-2">
                <p className="border rounded-full h-10 w-10 flex justify-center items-center shadow-md">
                    {task.priority}
                </p>
                <button
                    className='border text-sm px-2 py-1 rounded-md transition delay-75 hover:bg-blue-400 bg-blue-300 hover:text-white'
                    onClick={() => onEdit(task)}
                >
                    Edit
                </button>
                <button
                    className='border text-sm  px-2 py-1 rounded-md transition delay-75 hover:bg-red-400 hover:text-white bg-red-300'
                    onClick={() => onDelete(task)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
