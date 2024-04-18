import React, { useState } from 'react';
import './AdditionGame.css';

const AdditionGame = () => {
  
  const [numbers, setNumbers] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
    { id: 8, value: 8 },
    { id: 9, value: 9 },
  ]);

  
  const [target, setTarget] = useState(0);


  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const draggedNumber = numbers.find(num => num.id === parseInt(id));
    const updatedNumbers = numbers.filter(num => num.id !== parseInt(id));
    setNumbers(updatedNumbers);
    setTarget(target + draggedNumber.value);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="addition-game">
      <h2 className="game-title">Drag and Drop Addition Game</h2>
      <div className="equation">
        <div className="numbers">
          {numbers.map(num => (
            <div 
              key={num.id} 
              className="number" 
              draggable 
              onDragStart={(e) => handleDragStart(e, num.id)}
            >
              {num.value}
            </div>
          ))}
        </div>
        <div className="operation">+</div>
        <div 
          className="target" 
          onDrop={handleDrop} 
          onDragOver={handleDragOver}
        >
          Target: {target}
        </div>
      </div>
    </div>
  );
}

export default AdditionGame;
