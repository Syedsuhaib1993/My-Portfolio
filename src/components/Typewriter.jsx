import React, { useEffect, useState } from 'react';

const Typewriter = ({  speed = 20 }) => {
  const [displayed, setDisplayed] = useState('');
const text="~ An effective  developer with a strong eye for design with technical expertise to deliver seamless user experiences across the web."
  useEffect(() => {
    if (!text) return;

    setDisplayed(''); // Reset for new input
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className='h-20'>
      {displayed}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Typewriter;