import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_ENDPOINT = "http://localhost:4000"

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (newTask, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_ENDPOINT}/tasks`, newTask);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchAllTasks = createAsyncThunk('tasks/fetchAllTasks', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/tasks`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const fetchTaskById = createAsyncThunk(
    'tasks/fetchTaskById',
    async (taskId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_ENDPOINT}/tasks/${taskId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const editTaskById = createAsyncThunk(
    'tasks/editTaskById',
    async ({ taskId, updatedTask }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_ENDPOINT}/${taskId}`, updatedTask);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteTaskById = createAsyncThunk(
    'tasks/deleteTaskById',
    async (taskId, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_ENDPOINT}/tasks/${taskId}`);
            return taskId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateTasksData = (newData) => ({
    type: 'tasks/updateTasksData',
    payload: newData,
});


const initialState = {
    task: [],
    selectedTask: null,
    loading: false,
    error: null,
};


const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateTasksData: (state, action) => {
            state.task = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.task = action.payload;
            })
            .addCase(fetchAllTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchTaskById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTaskById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedTask = action.payload;
            })
            .addCase(fetchTaskById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false;
                const createdTask = action.payload;
                state.task.push(createdTask);
            })
            .addCase(createTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(editTaskById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editTaskById.fulfilled, (state, action) => {
                state.loading = false;
                const updatedTaskData = action.payload;
                const taskIndex = state.task.findIndex((task) => task.id === updatedTaskData.id);
                if (taskIndex !== -1) {
                    state.task[taskIndex] = updatedTaskData;
                }
            })
            .addCase(editTaskById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteTaskById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTaskById.fulfilled, (state, action) => {
                const deletedTaskId = action.payload;
                state.task = state.task.filter((task) => task.id !== deletedTaskId);
            })
            .addCase(deleteTaskById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateTasksData, (state, action) => {
                state.task = action.payload;
            });
    },
});

export default tasksSlice.reducer;
