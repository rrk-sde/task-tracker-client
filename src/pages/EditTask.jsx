import React, { useRef, useState, useEffect } from 'react';

import * as Yup from 'yup';
import Layout from '../layout/Layout';

import getFormattedDate from '../utils/getFormattedDate';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, fetchTaskById } from '../redux/task/taskSlice';
import io from 'socket.io-client';
import FormTask from '../components/auth/FormTask';
import { useParams } from 'react-router-dom';

const ENDPOINT = 'http://localhost:4000';



const EditTask = ({ disabled, classname }) => {
    const dispatch = useDispatch()
    const { id } = useParams();

    console.log(id)

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

    const [task, setTask] = useState(initialValues)


    const tasksData = useSelector((state) => state.tasks.selectedTask);
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);

    console.log(tasksData)
    useEffect(() => {
        dispatch(fetchTaskById(id))
    }, [id, dispatch])


    useEffect(() => {
        console.log("here")
        if (tasksData !== null && tasksData !== undefined) {
            setTask(tasksData);
        }
    }, [tasksData]);

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
        // dispatch(createTask(values))

        // Emit a 'createTask' event to notify the server
        socket.emit('createTask', values);

        // Clear the input field
        resetForm();

    };

    return (
        <Layout>
            <FormTask classname={classname} disabled={disabled} initialValues={task} validationSchema={validationSchema} onSubmit={onSubmit} id={id} />
        </Layout>
    );
};

export default EditTask;
