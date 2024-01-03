import { configureStore } from '@reduxjs/toolkit';
import { formReducer, changeCost, changeName, FormSliceState } from './slices/formSlice';
import {
    carsReducer,
    addCar,
    removeCar,
    changeSearchTerm,
    CarsSliceState,
} from './slices/carsSlice';

export type AppState = {
    form: FormSliceState;
    cars: CarsSliceState;
};

const store = configureStore({
    reducer: { form: formReducer, cars: carsReducer },
});

export { addCar, removeCar, changeSearchTerm, changeCost, changeName };
export { store };
