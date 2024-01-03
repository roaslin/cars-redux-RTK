import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

export interface Car {
    id: string;
    name: string;
    cost: number;
}

export interface CarsSliceState {
    searchTerm: string;
    values: Car[];
}

const initialState = { searchTerm: '', values: [] as Car[] };

const carsSlice = createSlice({
    name: 'cars',
    initialState: initialState,
    reducers: {
        changeSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        addCar(state, action: PayloadAction<{ name: string; cost: number }>) {
            state.values.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost,
            });
        },
        removeCar(state, action: PayloadAction<string>) {
            const updatedCars = state.values.filter((car) => {
                return car.id !== action.payload;
            });
            state.values = updatedCars;
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
