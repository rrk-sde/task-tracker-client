import React, { useRef } from 'react';

import * as Yup from 'yup';
import Layout from '../layout/Layout';

import getFormattedDate from '../utils/getFormattedDate';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../redux/task/taskSlice';
import io from 'socket.io-client';
import FormTask from '../components/auth/FormTask';

const ENDPOINT = 'http://localhost:4000';



const CreateTask = () => {
    const dispatch = useDispatch()

    const socket = io(ENDPOINT);
    const initialValues = {
        title: '',
        content: '',
        // thumbnail: '',
        priority: 'P1',
        status: 'todo',
        dueDate: '',
        labels: [],
        // attachments: [],
        // dependencies: [],
        estimatedTime: '1 Day',
        startDate: getFormattedDate(),
        completionDate: '',
        progress: 0,
    };



    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        content: Yup.string().required('Required'),
        priority: Yup.string().required('Required'),
        status: Yup.string().required('Required'),
        // dueDate: Yup.date().required('Required'),
        estimatedTime: Yup.string().required('Required'),
        startDate: Yup.date().required('Required'),
    });

    // validationSchema.validate(initialValues).catch((error) => {
    //     console.log("Validation error:", error);
    // });


    const onSubmit = (values, { resetForm }) => {

        console.log(values);
        dispatch(createTask(values))

        // Emit a 'createTask' event to notify the server
        socket.emit('createTask', values);

        // Clear the input field
        resetForm();

    };
    // console.log(inputRef)

    return (
        <Layout>
            <FormTask initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />
        </Layout>
    );
};

export default CreateTask;
