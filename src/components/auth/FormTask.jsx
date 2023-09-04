import React, { useRef } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { LuDelete } from 'react-icons/lu';
import { Link } from 'react-router-dom';


const FormTask = ({ initialValues, validationSchema, onSubmit, disabled, classname, id }) => {
    const inputRef = useRef([]);
    console.log(initialValues, 88888)

    return (
        <>
            {(disabled || id) && <div className='flex justify-end'>
                <Link to={disabled ? '/edit/' + id : '/view/' + id} className='px-2 py-1 mr-4 font-semibold shadow-lg font-mono bg-blue-400  rounded-md' type="submit"> {disabled ? "Edit" : "View"}</Link>
            </div>}
            <Formik initialValues={initialValues} enableReinitialize={true} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ values, setFieldValue }) => (
                    <Form className={`w-[100%] gap-[8px] flex flex-col justify-center shadow-md bg-white rounded-md px-8 py-6 ${classname}`}>
                        <fieldset disabled={disabled}>
                            {/* Title */}
                            <div className='flex flex-col gap-2'>
                                <label className='font-serif text-md font-semibold' htmlFor="title">Title:</label>
                                <Field className=" px-2 h-8 border border-blue-600" type="text" id="title" name="title" />
                                <div className='font-normal text-md'>
                                    <ErrorMessage className='text-red-700 text-sm mb-2' name="title" component="div" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className='flex flex-col gap-2'>
                                <label className='font-serif text-md font-semibold' htmlFor="content">Content:</label>
                                <Field className=" px-2 py-2 border border-blue-600 h-36" as="textarea" id="content" name="content" />
                                <div className='font-normal text-md'>
                                    <ErrorMessage className='text-red-700 text-sm mb-2' name="content" component="div" />
                                </div>
                            </div>

                            <div className='md:flex-row flex flex-col  gap-4    gap-x-32'>
                                {/* Priority */}
                                <div className='flex items-center gap-4 my-2'>
                                    <label className='font-serif text-md font-semibold'>Priority:</label>
                                    <div className="flex items-center mr-2">
                                        <Field
                                            type="radio"
                                            id="p1"
                                            name="priority"
                                            value="P1"
                                            className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="p1" className="ml-2 text-sm font-medium cursor-pointer text-gray-900">P1</label>
                                    </div>
                                    <div className="flex items-center mr-2">
                                        <Field
                                            type="radio"
                                            id="p2"
                                            name="priority"
                                            value="P2"
                                            className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="p2" className="ml-2 text-sm font-medium cursor-pointer text-gray-900">P2</label>
                                    </div>
                                    <div className="flex items-center mr-2">
                                        <Field
                                            type="radio"
                                            id="p3"
                                            name="priority"
                                            value="P3"
                                            className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="p3" className="ml-2 text-sm font-medium cursor-pointer text-gray-900">P3</label>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className='flex flex-col gap-2'>
                                    <label className='font-serif text-md font-semibold' htmlFor="priority">Status:</label>
                                    <Field
                                        as="select"
                                        id="status"
                                        name="status"
                                        className="px-2 h-8 border border-blue-600"
                                    >
                                        <option value="">Select Status</option>
                                        <option value="todo">TO DO</option>
                                        <option value="inprogress">IN PROGRESS</option>
                                        <option value="completed">COMPLETED</option>
                                    </Field>
                                    <div className='font-normal text-md'>
                                        <ErrorMessage className='text-red-700 text-sm mb-2' name="priority" component="div" />
                                    </div>
                                </div>

                                {/* Due Date */}
                                <div className='flex flex-col gap-2'>
                                    <label className='font-serif text-md font-semibold' htmlFor="dueDate">Due Date:</label>
                                    <Field
                                        type="date"
                                        id="dueDate"
                                        name="dueDate"
                                        className="px-2 h-8 border border-blue-600"
                                    />
                                    <div className='font-normal text-md'>
                                        <ErrorMessage className='text-red-700 text-sm mb-2' name="dueDate" component="div" />
                                    </div>
                                </div>

                            </div>


                            {/* Labels */}
                            <FieldArray
                                name="labels"
                                render={(arrayHelpers) => (
                                    <div className='flex items-center gap-2 mt-4'>
                                        <label className='font-serif text-md font-semibold flex' htmlFor="labels">Labels:</label>
                                        <div className='flex flex-wrap items-center gap-2'>
                                            {values.labels.map((label, index) => (
                                                <div key={index} className="flex items-center relative">
                                                    <Field
                                                        type="text"
                                                        id={`labels[${index}]`}
                                                        name={`labels[${index}]`}
                                                        className="px-2 py-[2px] text-black text-sm bg-gray-300"
                                                        style={{ width: 'fit-content' }}
                                                        innerRef={(el) => {
                                                            inputRef.current[index] = el;
                                                        }}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') {
                                                                e.target.blur();
                                                            }
                                                        }}

                                                    />

                                                    {!disabled &&
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                arrayHelpers.remove(index);
                                                                // Not working
                                                                if (inputRef.current[index]) {
                                                                    inputRef.current[index].focus();
                                                                }
                                                            }}
                                                            className="ml-2 text-red-600 absolute right-2"
                                                        >
                                                            <LuDelete />
                                                        </button>}
                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex justify-center mb-auto gap-4'>
                                            {values.labels.length > 3 && <div className="px-2 font-semibold py-1 bg-blue-400 rounded-md w-24  shadow-lg font-mono cursor-pointer"
                                                onClick={() => {
                                                    setFieldValue('labels', []);
                                                }}
                                            >Clear All</div>}
                                            {!disabled &&
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        arrayHelpers.push('');
                                                        const newIndex = values.labels.length;
                                                        setTimeout(() => {
                                                            if (inputRef.current[newIndex]) {
                                                                inputRef.current[newIndex].focus();
                                                            }
                                                        }, 0);
                                                    }}
                                                    className="px-2 font-semibold py-1 bg-blue-400 rounded-md  shadow-lg font-mono cursor-pointer"
                                                >

                                                    Add
                                                </button>
                                            }
                                        </div>
                                        {/* ... */}
                                    </div>
                                )}
                            />


                            <div className='md:flex-row flex flex-col  gap-4    gap-x-32 mt-4'>
                                {/* estimateD */}
                                <div className='flex flex-col gap-2'>
                                    <label className='font-serif text-md font-semibold' htmlFor="estimatedTime">Estimated Time:</label>
                                    <Field
                                        as="select"
                                        id="estimatedTime"
                                        name="estimatedTime"
                                        className="px-2 h-8 border border-blue-600"
                                    >
                                        <option value="1 Day">1 Days</option>
                                        <option value="<3 Days">&lt;3 Days</option>
                                        <option value="< 1 Day">&lt;1 Week</option>
                                    </Field>
                                    <div className='font-normal text-md'>
                                        <ErrorMessage className='text-red-700 text-sm mb-2' name="estimatedTime" component="div" />
                                    </div>
                                </div>

                                {/* Start Date */}
                                <div className='flex flex-col gap-2'>
                                    <label className='font-serif text-md font-semibold' htmlFor="startDate">Start Date:</label>
                                    <Field
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        className="px-2 h-8 border border-blue-600"
                                    />
                                    <div className='font-normal text-md'>
                                        <ErrorMessage className='text-red-700 text-sm mb-2' name="startDate" component="div" />
                                    </div>
                                </div>

                                {/* Completion*/}
                                <div className='flex flex-col gap-2'>
                                    <label className='font-serif text-md font-semibold' htmlFor="completionDate">Completion Date:</label>
                                    <Field
                                        type="date"
                                        id="completionDate"
                                        name="completionDate"
                                        className="px-2 h-8 border border-blue-600"
                                    />
                                    <div className='font-normal text-md'>
                                        <ErrorMessage className='text-red-700 text-sm mb-2' name="completionDate" component="div" />
                                    </div>
                                </div>

                                {/* progress */}
                                <div className='flex flex-col gap-2'>
                                    <label className='font-serif text-md font-semibold' htmlFor="progress">Progress:</label>
                                    <Field
                                        type="range"
                                        id="progress"
                                        name="progress"
                                        className="w-full"
                                    />
                                    <span className="text-gray-500 text-sm">
                                        Progress: {values.progress}
                                    </span>
                                    <div className='font-normal text-md'>
                                        <ErrorMessage className='text-red-700 text-sm mb-2' name="progress" component="div" />
                                    </div>
                                </div>
                            </div>
                            {!disabled &&
                                <div className='flex justify-end'>
                                    <button className='px-2 py-1  font-semibold shadow-lg font-mono bg-blue-400  rounded-md' type="submit">Submit</button>
                                </div>
                            }

                        </fieldset>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormTask