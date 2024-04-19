import { configureStore } from "@reduxjs/toolkit";
import sobreMiReducer from "../features/sobreMiSlice";

export const store = configureStore({
    reducer: {
        sobreMi: sobreMiReducer 
    }
});