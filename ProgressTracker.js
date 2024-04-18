import React, { useState, useEffect } from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const [progress, setProgress] = useState(0); // State for progress
  const [points, setPoints] = useState(0); // State for points

  useEffect(() => {
    // Calculate points based on progress
    const newPoints = Math.floor(progress / 10) * 5;
    setPoints(newPoints); 
  }, [progress]);

  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-label">{progress}%</div>
      <div className="reward">You earned {points} points!</div>
      <button onClick={() => setProgress(prev => Math.min(prev + 10, 100))}>
        Increase Progress
      </button>
    </div>
  );
}

export default ProgressTracker;
