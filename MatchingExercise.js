import React, { useState } from 'react';
import './MatchingExercise.css';

const MatchingExercise = () => {
  // Define initial state for mathematical operations and their results
  const [operations, setOperations] = useState([
    { id: 1, operation: '2 + 2', result: '4', dropped: false },
    { id: 2, operation: '5 - 3', result: '2', dropped: false },
    { id: 3, operation: '3 x 4', result: '12', dropped: false },
    { id: 4, operation: '10 ÷ 2', result: '5', dropped: false },
  ]);

  // Define event handlers for drag-and-drop
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const handleDrop = (e, targetResult) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const draggedOperation = operations.find(op => op.id === parseInt(id));
    const updatedOperations = operations.map(op =>
      op.id === parseInt(id) ? { ...op, dropped: true } : op
    );
    setOperations(updatedOperations);
    if (draggedOperation.result !== targetResult) {
      e.target.classList.add('incorrect');
      setTimeout(() => {
        e.target.classList.remove('incorrect');
      }, 1000);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="matching-exercise">
      <h2>Match the Operations</h2>
      <div className="operations">
        {operations.map(op => (
          <div 
            key={op.id} 
            className={`operation ${op.dropped ? 'dropped' : ''}`} 
            draggable={!op.dropped} 
            onDragStart={(e) => handleDragStart(e, op.id)}
          >
            {op.operation}
          </div>
        ))}
      </div>
      <div 
        className="matching-area" 
        onDrop={(e) => handleDrop(e, '4')} 
        onDragOver={handleDragOver}
      >
        {operations.find(op => op.result === '4' && op.dropped)?.operation || '4'}
      </div>
      <div 
        className="matching-area" 
        onDrop={(e) => handleDrop(e, '2')} 
        onDragOver={handleDragOver}
      >
        {operations.find(op => op.result === '2' && op.dropped)?.operation || '2'}
      </div>
      <div 
        className="matching-area" 
        onDrop={(e) => handleDrop(e, '12')} 
        onDragOver={handleDragOver}
      >
        {operations.find(op => op.result === '12' && op.dropped)?.operation || '12'}
      </div>
      <div 
        className="matching-area" 
        onDrop={(e) => handleDrop(e, '5')} 
        onDragOver={handleDragOver}
      >
        {operations.find(op => op.result === '5' && op.dropped)?.operation || '5'}
      </div>
    </div>
  );
}

export default MatchingExercise;
