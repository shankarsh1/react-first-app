import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const checkSize = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size.width}px, {size.height}px</h2>
    </>
  );
};

export default UseEffectCleanup;
