import { useDispatch } from 'react-redux';
import { AppState, addCar, changeCost, changeName } from '../store';
import { useSelector } from 'react-redux';
import { ChangeEvent, FormEvent } from 'react';

const CarForm = () => {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state: AppState) => {
        console.log(state);
        return state.form;
    });

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        // event.preventDefault();
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCost(parseInt(event.target.value) || 0));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name && cost) {
            dispatch(addCar({ name, cost }));
        }
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">name</label>
                        <input
                            className="input is-expanded"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            type="number"
                            value={cost || ''}
                            onChange={handleCostChange}
                        />
                    </div>
                    <div className="field">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default CarForm;
