import { useSelector } from 'react-redux';
import { Car, removeCar } from '../store/slices/carsSlice';
import { useDispatch } from 'react-redux';
import { AppState } from '../store';

const CarList = () => {
    const dispatch = useDispatch();
    const { searchTerm, values, formName } = useSelector((state: AppState) => {
        return {searchTerm:state.cars.searchTerm, values: state.cars.values, formName: state.form.name};
    });
    const handleDelete = (id: string) => {
        dispatch(removeCar(id));
    };
    const renderedCars = values
        .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((car: Car) => {
            return (
                <div key={car.id} className={car.name.includes(formName) ? 'panel bold' : 'panel'}>
                    <p>
                        {car.name} - ${car.cost}
                    </p>
                    <button className="button is-danger" onClick={() => handleDelete(car.id)}>
                        Delete
                    </button>
                </div>
            );
        });

    return (
        <div className="car-list">
            {renderedCars} <hr />
        </div>
    );
};

export default CarList;
