import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { CarsSliceState } from '../store/slices/carsSlice';

const CarValue = () => {
    const { searchTerm, values }: CarsSliceState = useSelector((state: AppState) => {
        return state.cars;
    });
    const totalCost = values
        .filter((car) => car.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        .map((car) => car.cost)
        .reduce((acc, value) => acc + value, 0);
    return <div className='car-value'>Total Cost $ {totalCost}</div>;
};

export default CarValue;
