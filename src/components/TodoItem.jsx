import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, markCompleted, markIncomplete, setEditTodo, updateTodo } from '../redux/actions';
import { FaTrash, FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import { useState } from 'react';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const editTodo = useSelector((state) => state.editTodo);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    dispatch(setEditTodo(todo));
  };

  const handleSaveEdit = () => {
    dispatch(updateTodo(index, editedText));
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
        {!todo.completed && (
          <button onClick={() => dispatch(markCompleted(index))}>
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button onClick={() => dispatch(markIncomplete(index))}>
            <FaTimes />
          </button>
        )}
        </span>
        {editTodo === todo ? (
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            onBlur={handleSaveEdit}
            autoFocus
          />
        ) : (
          <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className='space-x-3 ml-8'>
        <button onClick={handleEdit}><FaEdit/></button>
        <button onClick={() => dispatch(removeTodo(index))}>
          <FaTrash />
        </button>
        
      </div>
    </li>
  );
};

export default TodoItem;
