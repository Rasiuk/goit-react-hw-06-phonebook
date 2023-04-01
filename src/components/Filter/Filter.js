import { useDispatch } from 'react-redux';
import { filterQuery } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleGetValue = evt => {
    dispatch(filterQuery(evt.currentTarget.value));
  };
  return (
    <label>
      <h3>Find contacts my name</h3>
      <input onChange={handleGetValue} name="filter" type="text"></input>
    </label>
  );
};
