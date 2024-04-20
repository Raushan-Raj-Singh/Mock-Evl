import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      
      <div className='url' style={{ height: '50vh', width: '100%' }}>
      <div className='theme-switcher' onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon style={{color:"black"}} className="moon-icon"/> : <FaSun className="moon-icon"/>}
      </div>
      </div>
      <Todo />
    </div>
  );
}

export default App;
