import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

export type FormSliceState = {
    name: string;
    cost: number;
};

const initialState: FormSliceState = { name: '', cost: 0 };

const formSlice = createSlice({
    name: 'form',
    initialState: initialState,
    reducers: {
        changeName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        changeCost(state, action: PayloadAction<number>) {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.cost = 0;
            state.name = '';
        });
    },
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;
