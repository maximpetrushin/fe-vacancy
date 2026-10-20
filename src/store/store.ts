import {configureStore} from "@reduxjs/toolkit";
import {vacancySlice} from "./vacancySlice.ts";

export const store = configureStore({
    reducer: {
        vacancy: vacancySlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;