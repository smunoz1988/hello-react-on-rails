import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetings/greetingsSlice";

const store = configureStore({
    reducer: {
        greeting: greetingReducer,
    },
});

export default store;
