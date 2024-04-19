import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textPasado: "",
    textPresente: "",
    textFuturo: ""
}

export const sobreMiSlice = createSlice({
    name: "sobreMi",
    initialState,
    reducers:{
        guardarTextos: (state, action) => {
            state.textPasado = action.payload[0];
            state.textPresente = action.payload[1];
            state.textFuturo = action.payload[2];
        }
    }
})

export const {guardarTextos} = sobreMiSlice.actions;
export default sobreMiSlice.reducer;