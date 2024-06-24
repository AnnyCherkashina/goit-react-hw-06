
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const searchStr = useSelector((state) => state.filter.filter);
    const handleSearchChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={css.search}>
            <h2>Find contact by name</h2>
            <input
                className={css.input}
                type="text"
                placeholder="Enter contact name..."
                value={searchStr}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchBox;
