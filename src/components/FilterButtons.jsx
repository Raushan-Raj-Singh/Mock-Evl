// FilterButtons.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTodos, filterTodos, markAllCompleted } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompletedTodos());
  };


  return (
    <div className="flex space-x-4 items-center">
            <button
        className={`text-sm px-2 py-1 rounded border ${
          currentFilter === 'ALL' ? 'border-purple-500' : 'border-gray-300'
        } focus:outline-none`}
        onClick={() => handleFilter('ALL')}
      >
        All
      </button>
      
      <button
        className={`text-sm px-2 py-1 rounded border ${
          currentFilter === 'INCOMPLETE' ? 'border-purple-500' : 'border-gray-300'
        } focus:outline-none`}
        onClick={() => handleFilter('INCOMPLETE')}
      >
        Active
      </button>
      <button
        className={`text-sm px-2 py-1 rounded border ${
          currentFilter === 'COMPLETED' ? 'border-purple-500' : 'border-gray-300'
        } focus:outline-none`}
        onClick={() => handleFilter('COMPLETED')}
      >
        Completed
      </button>

            <button
        className="text-sm px-2 py-1 bg-red-500 text-white rounded ml-2"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FilterButtons;
