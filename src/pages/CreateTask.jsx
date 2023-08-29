import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '../layout/Layout';

const initialValues = {
    title: '',
    content: '',
    thumbnail: '',
    priority: '',
    status: '',
    dueDate: '',
    labels: [],
    attachments: [],
    dependencies: [],
    estimatedTime: '',
    startDate: '',
    completionDate: '',
    progress: 0,
};

const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    content: Yup.string().required('Required'),
    priority: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    dueDate: Yup.date().required('Required'),
    estimatedTime: Yup.string().required('Required'),
    startDate: Yup.date().required('Required'),
});

const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
};

const CreateTask = () => {
    return (
        <Layout>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className='w-[100%] flex flex-col justify-center shadow-md bg-white rounded-md px-8 py-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="title">Title</label>
                        <Field className=" px-2 h-8 border border-gray-500" type="text" id="title" name="title" />
                        <div className='font-normal text-md'>
                            <ErrorMessage name="title" component="div" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="content">Content</label>
                        <Field className=" px-2 border border-gray-500 h-36" as="textarea" id="content" name="content" />
                        <div className='font-normal text-md'>
                            <ErrorMessage name="content" component="div" />
                        </div>
                    </div>


                    <div className="flex items-center gap-4 my-2">
                        <label className='font-bold'>Priority </label>
                        <div className="flex items-center mr-4">
                            <input id="p1" type="radio" value="" name="inline-radio-group" className="w-4 h-4  cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                            <label htmlFor="p1" className="ml-2 text-sm font-medium   cursor-pointer text-gray-900 ">P1</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="p2" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                            <label htmlFor="p2" className="ml-2 text-sm font-medium   cursor-pointer text-gray-900 ">P2</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="p3" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100   cursor-pointer border-gray-300 focus:ring-blue-500 " />
                            <label htmlFor="p3" className="ml-2   cursor-pointer text-sm font-medium text-gray-900 ">P3</label>
                        </div>
                        {/* <div className="flex items-center mr-4">
                            <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline checked</label>
                        </div> */}

                    </div>


                    {/* Add more fields here based on your model */}

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </Layout>
    );
};

export default CreateTask;
