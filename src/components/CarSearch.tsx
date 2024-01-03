import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppState, changeSearchTerm } from '../store';
import { useSelector } from 'react-redux';

const CarSearch = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: AppState) => {
        return state.cars.searchTerm;
    });

    const handleChangeSearchName = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input
                    className="input"
                    onChange={handleChangeSearchName}
                    value={searchTerm}
                ></input>
            </div>
        </div>
    );
};

export default CarSearch;
