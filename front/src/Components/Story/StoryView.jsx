import React, { useEffect, useState } from 'react';

const StoryView = ({ oneStory, setOpen }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5; // Change the increment value as needed
        if (newProgress >= 100) {
          clearInterval(interval);
          setOpen(false);
        }
        return newProgress;
      });
    }, 150); // Adjust the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='story-view'>
        <div style={{ width: '50%', height: '5px', backgroundColor: '#eee' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'green' }}></div>
      </div>
      <img src={"http://localhost:1337" + oneStory.attributes.img.data.attributes.url} alt="imageggg" />
      
      <h1 id="close-button" onClick={() => setOpen(false)}>X</h1>
    </div>
  );
};

export default StoryView;
