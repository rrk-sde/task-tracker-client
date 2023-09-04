import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task/taskSlice";

const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
});

export default store;
