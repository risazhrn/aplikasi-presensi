import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button2 = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} font-semibold py-2 px-3 flex gap-2 items-center border-solid border-2 border-${color} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {text} {icon} 
    </button>
  );
};

export default Button2;