// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(input)); // Using eval for simplicity, but be cautious with it
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <div className='calculator'>
       <div className="display">
    <div className="input">{input}</div>
    <div className="result">{result}</div>
    </div>
    
    <button onClick={() => handleClick('%')}>%</button>
    <button onClick={() => handleClick('')}>CE</button>
    <button onClick={handleClear}>C</button>
    <button onClick={handleBackspace}>&larr;</button>
    <br></br>
    <button onClick={() => handleClick('7')}>7</button>
    <button onClick={() => handleClick('8')}>8</button>
    <button onClick={() => handleClick('9')}>9</button>
    <button onClick={() => handleClick('+')}>+</button>
    <br></br>
    <button onClick={() => handleClick('4')}>4</button>
    <button onClick={() => handleClick('5')}>5</button>
    <button onClick={() => handleClick('6')}>6</button>
    <button onClick={() => handleClick('-')}>-</button>
    <br></br>
    <button onClick={() => handleClick('1')}>1</button>
    <button onClick={() => handleClick('2')}>2</button>
    <button onClick={() => handleClick('3')}>3</button>
    <button onClick={() => handleClick('/')}>÷</button>
    <br></br>
    <button onClick={() => handleClick('.')}>.</button>
    <button onClick={() => handleClick('0')}>0</button>
    <button onClick={() => handleClick('/')}>÷</button>
    <button onClick={() => handleClick('*')}>*</button>
    <button onClick={handleEqual} className="btn">=</button>
  </div>
  );
}

export default App;
